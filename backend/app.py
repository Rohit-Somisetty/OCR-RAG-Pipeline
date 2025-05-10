from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import tempfile
from typing import Optional
import json

# Import RAG pipeline components
from rag_pipeline_scanned import (
    pdf_to_images,
    preprocess_image,
    perform_ocr,
    process_and_index_pdf,
    build_rag_pipeline
)

# Get environment variables
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI(title="RAG Pipeline API")

# Configure CORS - allow frontend domain in production
frontend_url = os.getenv('FRONTEND_URL', 'http://localhost:3000')
app.add_middleware(
    CORSMiddleware,
    allow_origins=[frontend_url],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Store indices in memory (in production, use a proper database)
pdf_indices = {}

class QueryRequest(BaseModel):
    query: str
    document_id: str

@app.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):
    if not file.filename.endswith('.pdf'):
        raise HTTPException(status_code=400, detail="File must be a PDF")
    
    try:
        # Create a temporary file to store the uploaded PDF
        with tempfile.NamedTemporaryFile(delete=False, suffix='.pdf') as temp_pdf:
            content = await file.read()
            temp_pdf.write(content)
            temp_pdf.flush()
            
            # Process the PDF and create index
            index = process_and_index_pdf(temp_pdf.name)
            
            # Store the index with a unique ID (using filename as ID for simplicity)
            document_id = file.filename
            pdf_indices[document_id] = index
            
            # Build the RAG pipeline
            rag_engine, _ = build_rag_pipeline(index)
            pdf_indices[f"{document_id}_engine"] = rag_engine
            
            return {"document_id": document_id, "message": "PDF processed successfully"}
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        # Clean up temporary file
        if 'temp_pdf' in locals():
            os.unlink(temp_pdf.name)

@app.post("/query")
async def query_document(request: QueryRequest):
    if request.document_id not in pdf_indices:
        raise HTTPException(status_code=404, detail="Document not found")
    
    try:
        # Get the RAG engine for this document
        rag_engine = pdf_indices[f"{request.document_id}_engine"]
        
        # Run the query
        response = rag_engine.query(request.query)
        
        return {
            "query": request.query,
            "response": response.response,
            "source_nodes": [
                {
                    "text": node.node.text,
                    "score": node.score,
                    "metadata": node.node.metadata
                }
                for node in response.source_nodes
            ]
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
