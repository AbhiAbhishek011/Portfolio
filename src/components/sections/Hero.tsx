import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolioData";
import { useToast } from "@/hooks/use-toast";

export function Hero() {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Downloading CV",
      description: "Your download will begin shortly. (Demo functionality)",
    });
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-indigo-500/15 dark:bg-indigo-500/20 blur-[100px] animate-float-1 mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-violet-500/15 dark:bg-violet-500/20 blur-[100px] animate-float-2 mix-blend-screen" />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px] dark:bg-background/60" />
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Available for work badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/30 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-foreground">Available for work</span>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6"
          >
            Crafting digital <br className="hidden sm:block" />
            experiences with <span className="gradient-text">precision.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
          >
            I'm <span className="text-foreground font-medium">{portfolioData.personal.name}</span>. {portfolioData.personal.tagline}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
            <Button 
              size="lg" 
              className="rounded-full px-8 h-14 text-base font-medium w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground glow transition-all"
              onClick={() => scrollTo('projects')}
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 h-14 text-base font-medium w-full sm:w-auto bg-background/50 backdrop-blur-sm border-border hover:bg-muted/50"
              onClick={handleDownload}
            >
              Download CV
              <Download className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6 text-muted-foreground">
            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-2">
              <Github className="w-6 h-6" />
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-2">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-2">
              <Twitter className="w-6 h-6" />
            </a>
          </motion.div>

        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => scrollTo('about')}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
