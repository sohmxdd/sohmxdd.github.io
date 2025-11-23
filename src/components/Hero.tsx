import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, ChevronDown } from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "AI/ML Developer • Filmmaker • Innovator";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Greeting */}
          <p className="text-primary font-mono mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            Hi, my name is
          </p>
          
          {/* Name */}
          <h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Soham Mishra
          </h1>
          
          {/* Subtitle with typing effect */}
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            <span className="code-accent">&lt;</span>
            {typedText}
            <span className="code-accent inline-block animate-pulse">|</span>
            <span className="code-accent">/&gt;</span>
          </h2>
          
          {/* Description */}
          <p 
            className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Hey, I'm Soham — a developer who loves mixing engineering and creativity.
            I build machine learning tools, cinematic interfaces, and aesthetic user experiences.
            Currently working on SPIRAL — my personal AI assistant — and exploring advanced ML concepts.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap gap-4 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            <Button 
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/50"
            >
              View My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary/10"
            >
              Contact Me
            </Button>
          </div>
          
          {/* Social Links */}
          <div 
            className="flex gap-4 mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            <a 
              href="https://www.linkedin.com/in/soham-mishra-58434a281/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/sohmxdd" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="h-8 w-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
