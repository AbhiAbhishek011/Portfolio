import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { TimelineItem } from "@/components/ui/timeline-item";

export function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10 border border-primary/20"
        >
          Timeline
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-foreground mb-6"
        >
          My Journey
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Animated vertical line */}
        <motion.div 
          className="absolute left-[20px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ originY: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="relative z-10 flex flex-col gap-12">
          {portfolioData.experience.map((item, index) => (
            <TimelineItem 
              key={index} 
              item={item} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
