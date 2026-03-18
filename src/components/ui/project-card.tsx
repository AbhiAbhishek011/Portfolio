import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    demoUrl: string;
    githubUrl: string;
    image: string;
  };
  index: number;
  isFeatured?: boolean;
}

export function ProjectCard({ project, index, isFeatured }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative flex flex-col rounded-3xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-xl ${
        isFeatured ? "md:col-span-2 md:row-span-2" : "col-span-1 row-span-1"
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-muted overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      
      {isFeatured && (
        <div className="absolute top-6 left-6 z-20">
          <Badge className="bg-primary/20 text-primary border-primary/30 backdrop-blur-md px-3 py-1">
            Featured
          </Badge>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-6 sm:p-8 mt-auto justify-end">
        <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <Badge key={tag} variant="outline" className="bg-background/50 backdrop-blur-md border-border text-xs font-medium">
                {tag}
              </Badge>
            ))}
          </div>

          <h3 className={`font-bold text-foreground mb-2 ${isFeatured ? 'text-3xl' : 'text-2xl'}`}>
            {project.title}
          </h3>
          
          <p className="text-muted-foreground text-sm sm:text-base line-clamp-2 mb-6">
            {project.description}
          </p>

          {/* Actions - fade in on hover */}
          <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="sr-only">Live Demo</span>
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border text-foreground hover:scale-110 transition-transform"
            >
              <Github className="w-4 h-4" />
              <span className="sr-only">Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
