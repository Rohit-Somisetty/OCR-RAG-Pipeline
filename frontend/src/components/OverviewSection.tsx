
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const features = [
  {
    title: "Optical Character Recognition",
    description:
      "Extract text from scanned documents and images using advanced OCR techniques for high accuracy and language support.",
  },
  {
    title: "Multi-Granularity Chunking",
    description:
      "Process documents into optimal chunks at different granularity levels for more accurate information retrieval.",
  },
  {
    title: "Semantic Search",
    description:
      "Find relevant document sections based on meaning rather than just keywords using vector embeddings.",
  },
  {
    title: "Interactive Query Engine",
    description:
      "Ask natural language questions about your documents and receive precise, contextually relevant answers.",
  },
];

export function OverviewSection() {
  return (
    <section id="overview" className="section-padding container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
        <p className="text-muted-foreground text-lg">
          This project combines Retrieval-Augmented Generation (RAG) with document processing to create a powerful system for extracting and querying information from documents. Upload any PDF document and ask questions in natural language to get precise answers based on the document content.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default OverviewSection;
