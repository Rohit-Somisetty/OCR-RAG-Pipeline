
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 relative"
    >
      <div className="animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
          Intelligent Document Processing
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          A RAG-powered pipeline for extracting, chunking, and querying information from documents
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="rounded-full text-md px-8"
            onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
          >
            Try the Demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full text-md px-8"
            onClick={() => document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" })}
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}

export default Hero;
