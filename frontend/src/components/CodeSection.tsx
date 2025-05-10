
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const codeSnippets = {
  chunking: `def multi_granularity_chunking(document_text, chunk_sizes=[1000, 500, 200]):
    """
    Creates chunks of document text at different granularity levels.
    
    Args:
        document_text (str): The text to be chunked
        chunk_sizes (list): Different chunk sizes to apply
        
    Returns:
        dict: A dictionary with keys as chunk sizes and values as lists of chunks
    """
    chunks = {}
    for size in chunk_sizes:
        # Split text into chunks of approximate size
        chunks[size] = []
        
        # Respect paragraph boundaries if possible
        paragraphs = document_text.split('\\n\\n')
        current_chunk = ""
        
        for para in paragraphs:
            if len(current_chunk) + len(para) <= size:
                current_chunk += para + "\\n\\n"
            else:
                # If current paragraph is too large, split by sentences
                if len(current_chunk) > 0:
                    chunks[size].append(current_chunk.strip())
                    current_chunk = ""
                
                if len(para) > size:
                    sentences = para.split('. ')
                    for sentence in sentences:
                        if len(current_chunk) + len(sentence) <= size:
                            current_chunk += sentence + ". "
                        else:
                            if len(current_chunk) > 0:
                                chunks[size].append(current_chunk.strip())
                                current_chunk = sentence + ". "
                            else:
                                # If single sentence is larger than chunk size, force split
                                chunks[size].append(sentence[:size].strip())
                else:
                    current_chunk = para + "\\n\\n"
        
        if len(current_chunk) > 0:
            chunks[size].append(current_chunk.strip())
                
    return chunks`,
  
  process_pdf: `def process_and_index_pdf(file_path, embedding_model, vector_db):
    """
    Process a PDF file and index its contents in a vector database.
    
    Args:
        file_path (str): Path to the PDF file
        embedding_model: Model for creating embeddings
        vector_db: Vector database for storage
        
    Returns:
        str: Document ID for the processed document
    """
    # Extract text from PDF using OCR if needed
    text = extract_text_from_pdf(file_path)
    
    # Create multi-level chunks
    chunks = multi_granularity_chunking(text)
    
    # Create document ID
    doc_id = f"doc_{uuid.uuid4().hex[:8]}"
    
    # Process chunks and create embeddings
    for chunk_size, chunk_list in chunks.items():
        for i, chunk in enumerate(chunk_list):
            # Create chunk ID
            chunk_id = f"{doc_id}_size{chunk_size}_{i}"
            
            # Create embedding
            embedding = embedding_model.embed(chunk)
            
            # Store in vector database
            metadata = {
                "doc_id": doc_id,
                "chunk_size": chunk_size,
                "chunk_index": i,
                "text": chunk
            }
            vector_db.add_item(chunk_id, embedding, metadata)
    
    return doc_id`,
  
  rag_pipeline: `def build_rag_pipeline(document_path, query, llm_model="gpt-3.5-turbo"):
    """
    Build a RAG pipeline for document question answering.
    
    Args:
        document_path (str): Path to the document
        query (str): User query
        llm_model (str): Language model to use
        
    Returns:
        str: The generated answer
    """
    # Initialize components
    embedding_model = get_embedding_model()
    vector_db = VectorDatabase()
    llm = get_llm(model_name=llm_model)
    
    # Process document if not already in database
    doc_id = get_doc_id(document_path)
    if not doc_id:
        doc_id = process_and_index_pdf(document_path, embedding_model, vector_db)
    
    # Embed query
    query_embedding = embedding_model.embed(query)
    
    # Retrieve relevant chunks using semantic search
    # Start with largest chunks for broader context
    relevant_chunks = []
    chunk_sizes = [1000, 500, 200]  # from largest to smallest
    
    for size in chunk_sizes:
        # Search for chunks of this size
        results = vector_db.search(
            query_embedding,
            filter={"doc_id": doc_id, "chunk_size": size},
            limit=3
        )
        
        # Add results to relevant chunks
        for result in results:
            relevant_chunks.append(result["text"])
    
    # Build prompt with retrieved chunks
    prompt = f"""
    Answer the question based ONLY on the following context:
    
    {' '.join(relevant_chunks)}
    
    Question: {query}
    """
    
    # Generate answer
    answer = llm.generate(prompt)
    
    return answer`
};

export function CodeSection() {
  return (
    <section id="code" className="section-padding container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Code Snippets</h2>
        <p className="text-muted-foreground text-lg">
          Explore the core functions that power the document processing pipeline.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="chunking">
          <AccordionTrigger className="text-xl font-medium">
            Multi-Granularity Chunking
          </AccordionTrigger>
          <AccordionContent>
            <Card className="bg-code">
              <CardContent className="p-0">
                <pre className="text-code-foreground p-6 text-sm overflow-x-auto">
                  <code>{codeSnippets.chunking}</code>
                </pre>
              </CardContent>
            </Card>
            <p className="mt-4 text-muted-foreground">
              This function splits document text into chunks of various sizes, respecting paragraph and sentence boundaries when possible. Multiple granularity levels improve retrieval accuracy.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="process">
          <AccordionTrigger className="text-xl font-medium">
            Process and Index PDF
          </AccordionTrigger>
          <AccordionContent>
            <Card className="bg-code">
              <CardContent className="p-0">
                <pre className="text-code-foreground p-6 text-sm overflow-x-auto">
                  <code>{codeSnippets.process_pdf}</code>
                </pre>
              </CardContent>
            </Card>
            <p className="mt-4 text-muted-foreground">
              This function processes a PDF file by extracting text, creating multi-level chunks, generating embeddings for each chunk, and storing them in a vector database.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rag">
          <AccordionTrigger className="text-xl font-medium">
            Build RAG Pipeline
          </AccordionTrigger>
          <AccordionContent>
            <Card className="bg-code">
              <CardContent className="p-0">
                <pre className="text-code-foreground p-6 text-sm overflow-x-auto">
                  <code>{codeSnippets.rag_pipeline}</code>
                </pre>
              </CardContent>
            </Card>
            <p className="mt-4 text-muted-foreground">
              This function builds a complete RAG pipeline that processes a document, retrieves relevant chunks based on a user query, and generates an answer using a language model.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default CodeSection;
