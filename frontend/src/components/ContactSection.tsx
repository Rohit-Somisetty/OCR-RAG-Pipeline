
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, Linkedin, Book } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground text-lg">
          Connect with me to learn more about this project or collaborate on similar initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-all hover:border-primary/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Github className="h-5 w-5" /> 
              GitHub
            </CardTitle>
            <CardDescription>Source Code</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              View the complete source code and contribute to the project
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Repository <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-lg transition-all hover:border-primary/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Linkedin className="h-5 w-5" /> 
              LinkedIn
            </CardTitle>
            <CardDescription>Professional Profile</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Connect with me professionally to discuss opportunities
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Connect <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-lg transition-all hover:border-primary/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-5 w-5" /> 
              Documentation
            </CardTitle>
            <CardDescription>Technical Details</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Read detailed technical documentation about the project
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Read Docs <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-lg transition-all hover:border-primary/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" /> 
              Portfolio
            </CardTitle>
            <CardDescription>Other Projects</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Explore more of my work and other innovative projects
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Visit Portfolio <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Intelligent Document Processing Project. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default ContactSection;
