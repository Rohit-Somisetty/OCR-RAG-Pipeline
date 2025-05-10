
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-200",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl">RAG-IDP</span>
          <span className="text-sm text-muted-foreground hidden sm:inline">
            Intelligent Document Processing
          </span>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#overview" className="text-sm font-medium hover:text-primary">
            Overview
          </a>
          <a href="#demo" className="text-sm font-medium hover:text-primary">
            Demo
          </a>
          <a href="#code" className="text-sm font-medium hover:text-primary">
            Code
          </a>
          <a href="#technical" className="text-sm font-medium hover:text-primary">
            Technical
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Header;
