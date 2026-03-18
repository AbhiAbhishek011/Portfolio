import { Github, Linkedin, Twitter } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-black tracking-tighter text-foreground">
              AJ<span className="gradient-text">.</span>
            </span>
            <p className="text-muted-foreground mt-2 text-sm text-center md:text-left">
              Crafting digital experiences.
            </p>
          </div>
          
          <div className="flex gap-3">
            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
              <Github className="w-4 h-4" />
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-muted-foreground">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
          <p>Built with React & ♥</p>
        </div>
      </div>
    </footer>
  );
}
