
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OverviewSection } from "@/components/OverviewSection";
import { DemoSection } from "@/components/DemoSection";
import { CodeSection } from "@/components/CodeSection";
import { TechnicalSection } from "@/components/TechnicalSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Welcome! 👋",
      description: "This is a demo of an Intelligent Document Processing system. Try uploading a document!",
      duration: 5000,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <OverviewSection />
        <DemoSection />
        <CodeSection />
        <TechnicalSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
