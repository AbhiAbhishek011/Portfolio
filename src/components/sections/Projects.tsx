import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { ProjectCard } from "@/components/ui/project-card";

const filters = ["All", "React", "JavaScript", "TypeScript", "API", "CSS"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = portfolioData.projects.filter(project => {
    if (activeFilter === "All") return true;
    return project.tags.includes(activeFilter);
  });

  return (
    <section id="projects" className="section-padding relative">
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10 border border-primary/20"
        >
          Portfolio
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-foreground mb-8"
        >
          Featured Work
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 bg-muted/30 p-1 rounded-full border border-border/50"
        >
          {filters.map(filter => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="project-filter-active"
                    className="absolute inset-0 bg-background border border-border shadow-sm rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            );
          })}
        </motion.div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[360px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              isFeatured={index === 0 && activeFilter === "All"}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">No projects found for this filter.</p>
        </div>
      )}
    </section>
  );
}
