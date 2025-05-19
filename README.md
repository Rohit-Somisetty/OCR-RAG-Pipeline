## 📚 About the OCR-RAG-Pipeline

The **OCR-RAG-Pipeline** is a highly efficient, scalable, and customizable pipeline designed to process both structured and unstructured PDF documents. It integrates advanced Optical Character Recognition (OCR) for scanned files and leverages a Retrieval-Augmented Generation (RAG) approach for precise, context-aware document understanding. This project is built to handle complex financial documents, including mortgage forms, bank statements, and appraisal reports, making it ideal for financial institutions, legal professionals, and document-intensive industries.

### Key Features
- **Multi-Granularity Chunking:** Dynamically extracts fine, coarse, and logical sections from structured and scanned PDFs.
- **Hybrid Retrieval Mechanism:** Combines dense vector search, BM25, and page-level indexing for accurate and context-aware responses.
- **Optimized OCR Preprocessing:** Includes image enhancement, noise reduction, and adaptive thresholding for improved text extraction.
- **Flexible Document Processing:** Handles scanned and well-structured PDFs with intelligent content categorization.
- **High Scalability:** Efficiently processes hundreds of documents with modular design for easy integration into larger systems.
- **Customizable Query Expansion:** Supports tailored question-answering with prompt engineering for precise information retrieval.

### Tech Stack
- **Python** for core logic
- **LlamaIndex** for RAG-based retrieval
- **Tesseract** for OCR
- **Hugging Face** for language models
- **OpenCV** for image preprocessing
- **PyMuPDF (fitz)** for PDF parsing

### Getting Started
1. Clone this repository:
    ```bash
    git clone https://github.com/YourUsername/OCR-RAG-Pipeline.git
    cd OCR-RAG-Pipeline
    ```

2. Install the required packages:
    ```bash
    pip install -r requirements.txt
    ```

3. Run the notebook to start processing your documents.

---

Feel free to add sample outputs, screenshots, or a link to a live demo to make the README even more engaging.
