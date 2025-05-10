# OCR-RAG Pipeline Backend

This is the FastAPI backend for the OCR-RAG Pipeline project. It provides API endpoints for document processing and querying using RAG (Retrieval Augmented Generation).

## API Endpoints

- `POST /upload` - Upload and process a PDF document
- `POST /query` - Query a processed document using natural language

## Environment Variables

Required environment variables:
- `FRONTEND_URL` - URL of the frontend application (for CORS)

## Deployment

This application is configured for deployment on Render.com. The `render.yaml` file contains the necessary configuration.

### Requirements

- Python 3.9.0
- See `requirements.txt` for Python package dependencies

### Local Development

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Create a `.env` file with required environment variables

4. Run the development server:
```bash
uvicorn app:app --reload
```

The API will be available at `http://localhost:8000` with Swagger documentation at `/docs`.
