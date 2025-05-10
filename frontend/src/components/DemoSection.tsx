
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const sampleQueries = [
  "What is the parcel identifier number?",
  "Summarize the main subjects of this document",
  "When was this document signed?",
  "What are the key terms in this agreement?",
];

export function DemoSection() {
  const [file, setFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [processingStage, setProcessingStage] = useState<string>("");
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Check if the file is a PDF
      if (selectedFile.type !== "application/pdf") {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file",
          variant: "destructive",
        });
        return;
      }
      
      setFile(selectedFile);
      simulateOCR(selectedFile);
    }
  };

  const simulateOCR = (file: File) => {
    setLoading(true);
    setProcessingStage("OCR processing...");
    
    // Simulate OCR processing time
    setTimeout(() => {
      setProcessingStage("Chunking content...");
      
      setTimeout(() => {
        setProcessingStage("Creating embeddings...");
        
        setTimeout(() => {
          setProcessingStage("Indexing document...");
          
          setTimeout(() => {
            const simulatedText = `AGREEMENT AND DECLARATION\n\nTHIS AGREEMENT made this 15th day of January, 2025\n\nBETWEEN:\n\nJOHN DOE of 123 Main Street\n(hereinafter referred to as the "Seller")\n\nAND:\n\nJANE SMITH of 456 Oak Avenue\n(hereinafter referred to as the "Purchaser")\n\nWHEREAS the Seller is the owner of that certain parcel of land with Parcel Identifier Number (PIN): 087-521-996, legally described as Lot 7, Block 12, District Plan 2846 (the "Property");\n\nAND WHEREAS the Purchaser wishes to purchase the Property from the Seller;\n\nNOW THEREFORE in consideration of the sum of $450,000.00 (Four Hundred and Fifty Thousand Dollars), the parties hereby agree as follows:\n\n1. The Seller agrees to sell and the Purchaser agrees to purchase the Property for the agreed upon price.\n\n2. The closing date for this transaction shall be March 1, 2025.\n\n3. The Purchaser shall pay a deposit of $45,000.00 upon signing this Agreement.\n\n4. This Agreement is subject to the Purchaser obtaining financing approval by February 15, 2025.\n\nIN WITNESS WHEREOF the parties have executed this Agreement as of the date first written above.\n\n____________________\nJohn Doe (Seller)\n\n____________________\nJane Smith (Purchaser)`;
            
            setExtractedText(simulatedText);
            setLoading(false);
            setProcessingStage("");
            
            toast({
              title: "Document processed!",
              description: "You can now query the document content.",
            });
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  const handleQuerySubmit = () => {
    if (!extractedText) {
      toast({
        title: "No document processed",
        description: "Please upload and process a document first",
        variant: "destructive",
      });
      return;
    }
    
    if (!query.trim()) {
      toast({
        title: "Empty query",
        description: "Please enter a question about the document",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate query processing
    setTimeout(() => {
      // Simple pattern matching for demo purposes
      let generatedResponse = "";
      
      if (query.toLowerCase().includes("parcel identifier") || query.toLowerCase().includes("pin")) {
        generatedResponse = "The Parcel Identifier Number (PIN) mentioned in the document is 087-521-996.";
      } else if (query.toLowerCase().includes("summarize") || query.toLowerCase().includes("main subjects")) {
        generatedResponse = "This document is a property sale agreement between John Doe (Seller) and Jane Smith (Purchaser) for a parcel of land identified by PIN 087-521-996. The agreement outlines the sale price of $450,000, closing date of March 1, 2025, and deposit requirements.";
      } else if (query.toLowerCase().includes("signed") || query.toLowerCase().includes("date")) {
        generatedResponse = "The agreement was made on January 15, 2025, as stated in the opening paragraph.";
      } else if (query.toLowerCase().includes("key terms") || query.toLowerCase().includes("agreement")) {
        generatedResponse = "Key terms of the agreement include:\n1. Sale price: $450,000\n2. Closing date: March 1, 2025\n3. Deposit amount: $45,000\n4. Financing approval condition: by February 15, 2025";
      } else {
        generatedResponse = "I couldn't find specific information related to your query. Please try rephrasing your question or asking about another aspect of the document.";
      }
      
      setResponse(generatedResponse);
      setLoading(false);
    }, 2000);
  };

  const handleSampleQuery = (text: string) => {
    setQuery(text);
  };

  return (
    <section id="demo" className="section-padding container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Interactive Demo</h2>
        <p className="text-muted-foreground text-lg">
          Upload a PDF document, see the extracted text, and ask questions to retrieve information from the document.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Upload Document</CardTitle>
              <CardDescription>
                Upload a PDF document to process (demo supports PDF files)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <label
                  htmlFor="file-upload"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">PDF (MAX. 10MB)</p>
                  </div>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept=".pdf"
                    onChange={handleFileChange}
                    disabled={loading}
                  />
                </label>
              </div>
              {file && (
                <div className="text-sm text-center">
                  <p className="font-medium truncate">{file.name}</p>
                  <p className="text-muted-foreground">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              {processingStage && (
                <p className="text-sm text-primary animate-pulse">
                  {processingStage}
                </p>
              )}
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Ask Questions</CardTitle>
              <CardDescription>
                Query the document content with natural language questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask a question about the document..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    disabled={loading || !extractedText}
                  />
                  <Button onClick={handleQuerySubmit} disabled={loading || !extractedText}>
                    Ask
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sampleQueries.map((q, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => handleSampleQuery(q)}
                      disabled={loading || !extractedText}
                    >
                      {q}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Answer</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[180px] rounded-md border p-4">
                {response ? (
                  <div className="whitespace-pre-wrap">{response}</div>
                ) : (
                  <div className="text-center text-muted-foreground p-8">
                    Answers will appear here after you ask a question
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Document Content</CardTitle>
            <Tabs defaultValue="text" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="text">Extracted Text</TabsTrigger>
                <TabsTrigger value="preview" disabled={!file}>
                  Preview
                </TabsTrigger>
              </TabsList>
              <TabsContent value="text">
                <ScrollArea className="h-[500px] rounded-md">
                  {extractedText ? (
                    <pre className="text-sm p-4 whitespace-pre-wrap">
                      {extractedText}
                    </pre>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-muted-foreground">
                        Upload a document to see extracted text
                      </p>
                    </div>
                  )}
                </ScrollArea>
              </TabsContent>
              <TabsContent value="preview">
                <div className="h-[500px] flex items-center justify-center bg-muted rounded-md">
                  <p className="text-muted-foreground">
                    PDF preview would be shown here
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}

export default DemoSection;
