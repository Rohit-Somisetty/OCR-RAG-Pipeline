
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TechnicalSection() {
  return (
    <section id="technical" className="section-padding container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Technical Details</h2>
        <p className="text-muted-foreground text-lg">
          Learn about the technical components that power this intelligent document processing system.
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">System Overview</TabsTrigger>
          <TabsTrigger value="ocr">OCR</TabsTrigger>
          <TabsTrigger value="chunking">Chunking</TabsTrigger>
          <TabsTrigger value="rag">RAG</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>System Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Pipeline Flow</h3>
                <div className="relative rounded-md bg-muted p-6 overflow-x-auto">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col items-center text-center w-full md:w-1/5">
                      <div className="bg-primary/20 text-primary rounded-full p-4 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                          <polyline points="14 2 14 8 20 8"/>
                        </svg>
                      </div>
                      <h4 className="font-medium">Document Ingestion</h4>
                      <p className="text-xs text-muted-foreground mt-1">PDF upload and OCR text extraction</p>
                    </div>
                    
                    <div className="hidden md:block text-muted-foreground">→</div>
                    <div className="block md:hidden text-muted-foreground">↓</div>
                    
                    <div className="flex flex-col items-center text-center w-full md:w-1/5">
                      <div className="bg-primary/20 text-primary rounded-full p-4 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                          <line x1="3" x2="21" y1="9" y2="9"/>
                          <line x1="3" x2="21" y1="15" y2="15"/>
                          <line x1="9" x2="9" y1="3" y2="21"/>
                          <line x1="15" x2="15" y1="3" y2="21"/>
                        </svg>
                      </div>
                      <h4 className="font-medium">Content Chunking</h4>
                      <p className="text-xs text-muted-foreground mt-1">Multi-granularity text splitting</p>
                    </div>
                    
                    <div className="hidden md:block text-muted-foreground">→</div>
                    <div className="block md:hidden text-muted-foreground">↓</div>
                    
                    <div className="flex flex-col items-center text-center w-full md:w-1/5">
                      <div className="bg-primary/20 text-primary rounded-full p-4 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                        </svg>
                      </div>
                      <h4 className="font-medium">Embedding & Indexing</h4>
                      <p className="text-xs text-muted-foreground mt-1">Vector creation and database storage</p>
                    </div>
                    
                    <div className="hidden md:block text-muted-foreground">→</div>
                    <div className="block md:hidden text-muted-foreground">↓</div>
                    
                    <div className="flex flex-col items-center text-center w-full md:w-1/5">
                      <div className="bg-primary/20 text-primary rounded-full p-4 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="12" x2="12" y1="8" y2="16"/>
                          <line x1="8" x2="16" y1="12" y2="12"/>
                        </svg>
                      </div>
                      <h4 className="font-medium">Semantic Search</h4>
                      <p className="text-xs text-muted-foreground mt-1">Query processing and retrieval</p>
                    </div>
                    
                    <div className="hidden md:block text-muted-foreground">→</div>
                    <div className="block md:hidden text-muted-foreground">↓</div>
                    
                    <div className="flex flex-col items-center text-center w-full md:w-1/5">
                      <div className="bg-primary/20 text-primary rounded-full p-4 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                        </svg>
                      </div>
                      <h4 className="font-medium">Response Generation</h4>
                      <p className="text-xs text-muted-foreground mt-1">Answer creation with LLM assistance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Core Technologies</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-medium">OCR:</span> <span className="text-muted-foreground">Tesseract OCR, Google Vision API, or Adobe PDF Extract API</span></li>
                  <li><span className="font-medium">Embedding Models:</span> <span className="text-muted-foreground">Sentence Transformers, OpenAI Embeddings, or Cohere Embeddings</span></li>
                  <li><span className="font-medium">Vector Database:</span> <span className="text-muted-foreground">FAISS, Pinecone, or Weaviate</span></li>
                  <li><span className="font-medium">LLM:</span> <span className="text-muted-foreground">OpenAI GPT models, Anthropic Claude, or Llama 2</span></li>
                  <li><span className="font-medium">Framework:</span> <span className="text-muted-foreground">LangChain or LlamaIndex for RAG orchestration</span></li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="ocr" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Optical Character Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">OCR Process Flow</h3>
                  <ol className="list-decimal pl-6 space-y-4">
                    <li>
                      <p className="font-medium">Document Preparation</p>
                      <p className="text-muted-foreground">The PDF is preprocessed - pages are extracted and converted to images</p>
                    </li>
                    <li>
                      <p className="font-medium">Image Enhancement</p>
                      <p className="text-muted-foreground">Image cleaning techniques applied - deskewing, contrast adjustment, noise removal</p>
                    </li>
                    <li>
                      <p className="font-medium">Text Recognition</p>
                      <p className="text-muted-foreground">OCR engine analyzes images to identify characters, words, and paragraphs</p>
                    </li>
                    <li>
                      <p className="font-medium">Post-Processing</p>
                      <p className="text-muted-foreground">Error correction, layout analysis, and text formatting restoration</p>
                    </li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">OCR Challenges</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <p className="font-medium">Complex Layouts</p>
                        <p className="text-sm text-muted-foreground">Tables, multi-column formats, and headers/footers require specialized handling</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <p className="font-medium">Image Quality</p>
                        <p className="text-sm text-muted-foreground">Poor scans, handwritten text, and special fonts reduce OCR accuracy</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <p className="font-medium">Non-text Elements</p>
                        <p className="text-sm text-muted-foreground">Charts, images, and watermarks can be incorrectly processed as text</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <p className="font-medium">Language Support</p>
                        <p className="text-sm text-muted-foreground">Different languages or special characters require specific OCR models</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="chunking" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Chunking Strategies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Multi-Granularity Chunking</h3>
                  <p className="text-muted-foreground mb-4">
                    Our approach uses multiple chunk sizes to capture both broad context and specific details:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-gradient-to-b from-primary/5 to-primary/10 border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-medium">Large Chunks (1000 tokens)</h4>
                        <p className="text-sm text-muted-foreground mt-2">Capture broad context and relationships between concepts across paragraphs</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-b from-primary/10 to-primary/20 border-primary/30">
                      <CardContent className="p-4">
                        <h4 className="font-medium">Medium Chunks (500 tokens)</h4>
                        <p className="text-sm text-muted-foreground mt-2">Balance between context and specificity, often capturing complete sections</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-b from-primary/20 to-primary/30 border-primary/40">
                      <CardContent className="p-4">
                        <h4 className="font-medium">Small Chunks (200 tokens)</h4>
                        <p className="text-sm text-muted-foreground mt-2">Highly focused segments for precise information retrieval and detail extraction</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Chunking Techniques</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <span className="font-medium">Semantic Boundaries</span>
                      <p className="text-muted-foreground">Respect paragraph and section divisions to maintain context</p>
                    </li>
                    <li>
                      <span className="font-medium">Sentence-Level Splitting</span>
                      <p className="text-muted-foreground">When necessary, split at sentence boundaries to preserve meaning</p>
                    </li>
                    <li>
                      <span className="font-medium">Overlap Strategy</span>
                      <p className="text-muted-foreground">Include 10-20% overlap between chunks to avoid losing context at boundaries</p>
                    </li>
                    <li>
                      <span className="font-medium">Structural Awareness</span>
                      <p className="text-muted-foreground">Special handling for elements like tables, lists, and headers</p>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="rag" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Retrieval Augmented Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">RAG Workflow</h3>
                  <div className="bg-muted p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">1. Retrieval Phase</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                          <li>User query is encoded into a vector embedding</li>
                          <li>Vector database searched for similar document chunks</li>
                          <li>Multi-stage retrieval across different chunk sizes</li>
                          <li>Top relevant chunks selected based on similarity scores</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">2. Generation Phase</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                          <li>Retrieved chunks combined into LLM context window</li>
                          <li>Carefully crafted prompt guides LLM response</li>
                          <li>LLM generates answer based on provided context</li>
                          <li>Citations and confidence scores included when possible</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">RAG Advantages</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <p className="font-medium">Factual Grounding</p>
                        <p className="text-sm text-muted-foreground">Responses backed by document content</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <p className="font-medium">Reduced Hallucinations</p>
                        <p className="text-sm text-muted-foreground">LLM constrained by retrieved content</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <p className="font-medium">Domain Adaptability</p>
                        <p className="text-sm text-muted-foreground">Works with specialized documents</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <p className="font-medium">Knowledge Recency</p>
                        <p className="text-sm text-muted-foreground">Updates without model retraining</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">System Optimizations</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="font-medium">Hybrid Search</span>
                      <span className="text-muted-foreground"> - Combines semantic and keyword search for better results</span>
                    </li>
                    <li>
                      <span className="font-medium">Reranking</span>
                      <span className="text-muted-foreground"> - Secondary scoring of retrieved chunks to improve relevance</span>
                    </li>
                    <li>
                      <span className="font-medium">Adaptive Retrieval</span>
                      <span className="text-muted-foreground"> - Adjusts chunk sizes based on query complexity</span>
                    </li>
                    <li>
                      <span className="font-medium">Multi-step Reasoning</span>
                      <span className="text-muted-foreground"> - LLM performs planning before generating final answer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default TechnicalSection;
