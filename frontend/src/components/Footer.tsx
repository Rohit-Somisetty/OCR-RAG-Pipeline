
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row items-center justify-between py-4 md:h-16">
        <p className="text-sm text-muted-foreground">
          Built with React, Tailwind CSS, and shadcn/ui
        </p>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
