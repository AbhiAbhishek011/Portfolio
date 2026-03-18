import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Download, Code2, Github as GithubIcon, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  const codeString = `const developer = {
  name: "Alex Johnson",
  role: "Front-End Developer",
  location: "Remote",
  skills: ["React", "TypeScript", "Tailwind"],
  experience: "2+ years",
  passion: "Building beautiful UIs",
  coffeeCups: Infinity
};`;

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col gap-6"
        >
          <div className="space-y-2">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Discover</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About Me
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            {portfolioData.personal.aboutText}
          </p>

          <div className="pt-4">
            <Button className="rounded-full px-6 h-12 border border-primary/50 bg-background hover:bg-primary/10 text-foreground transition-all" variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Visual Code Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 w-full"
        >
          <div className="relative rounded-2xl bg-card border border-border shadow-2xl overflow-hidden group">
            {/* Mac OS window controls */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">developer.ts</span>
            </div>
            
            {/* Code Content */}
            <div className="p-6 overflow-x-auto text-sm md:text-base font-mono leading-relaxed bg-[#0d1117] text-[#c9d1d9]">
              <pre>
                <code>
                  <span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">developer</span> <span className="text-[#ff7b72]">=</span> {'{'}
                  <br />
                  {'  '}name: <span className="text-[#a5d6ff]">"{portfolioData.personal.name}"</span>,
                  <br />
                  {'  '}role: <span className="text-[#a5d6ff]">"{portfolioData.personal.role}"</span>,
                  <br />
                  {'  '}location: <span className="text-[#a5d6ff]">"Remote"</span>,
                  <br />
                  {'  '}skills: [<span className="text-[#a5d6ff]">"React"</span>, <span className="text-[#a5d6ff]">"TypeScript"</span>, <span className="text-[#a5d6ff]">"Tailwind"</span>],
                  <br />
                  {'  '}experience: <span className="text-[#a5d6ff]">"2+ years"</span>,
                  <br />
                  {'  '}coffeeCups: <span className="text-[#79c0ff]">Infinity</span>
                  <br />
                  {'}'};
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Row */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20"
      >
        <div className="flex items-center gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
          <div className="p-3 bg-primary/10 rounded-xl text-primary">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-3xl font-bold text-foreground">10+</h4>
            <p className="text-sm text-muted-foreground">Projects Built</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
          <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500">
            <GithubIcon className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-3xl font-bold text-foreground">500+</h4>
            <p className="text-sm text-muted-foreground">GitHub Commits</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
          <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500">
            <Coffee className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-3xl font-bold text-foreground">∞</h4 >
            <p className="text-sm text-muted-foreground">Cups of Coffee</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
