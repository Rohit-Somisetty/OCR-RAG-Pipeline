# OCR-RAG-Pipeline

A modern document processing and querying system that combines Optical Character Recognition (OCR) with Retrieval Augmented Generation (RAG) for intelligent document analysis.

## Project Structure

```
├── backend/           # FastAPI backend service
│   ├── app.py        # Main FastAPI application
│   ├── rag_pipeline_scanned.py  # RAG pipeline implementation
│   └── requirements.txt  # Python dependencies
│
├── frontend/          # Next.js frontend application
│   ├── app/          # Next.js pages and components
│   ├── public/       # Static assets
│   └── src/          # Source code
```

## Setup

### Backend (FastAPI)

See [backend/README.md](backend/README.md) for setup instructions.

### Frontend (Next.js)

See [frontend/README.md](frontend/README.md) for setup instructions.

## Deployment

- Backend is deployed on Render.com
- Frontend is deployed on Vercel

## Features

- PDF document upload and processing
- OCR for scanned documents
- Natural language querying of documents
- Modern, responsive UI
- Real-time document processing status Web Application

This project is a web interface for the RAG (Retrieval-Augmented Generation) Pipeline, which allows users to upload PDF documents and ask questions about their content using advanced natural language processing.

## Features

- PDF document upload and processing
- OCR support for scanned documents
- Interactive Q&A interface
- Source attribution for answers
- Real-time processing status updates

## Project Structure

```
├── app.py              # FastAPI backend
├── rag_pipeline_scanned.py  # Core RAG pipeline implementation
├── frontend/          # Next.js frontend application
└── requirements.txt   # Python dependencies
```

## Setup Instructions

### Backend Setup

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

2. Start the FastAPI backend:
```bash
uvicorn app:app --reload
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install Node.js dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Upload a PDF document using the file upload interface
3. Wait for the document to be processed
4. Start asking questions about your document

## Technologies Used

### Backend
- FastAPI
- LlamaIndex
- PyMuPDF
- Tesseract OCR
- OpenCV

### Frontend
- Next.js
- TypeScript
- Tailwind CSS

## Deployment

The application can be deployed to Vercel (frontend) and any Python hosting service that supports FastAPI (backend). Make sure to update the API endpoint in the frontend components to match your deployed backend URL.
