import { motion } from "framer-motion";
import { Blocks, FileJson, Layers, Monitor, Server, Smartphone, Terminal, Code2 } from "lucide-react";

interface SkillCardProps {
  skill: {
    name: string;
    category: string;
    level: number;
  };
  index: number;
}

const getIconForSkill = (name: string) => {
  const normalized = name.toLowerCase();
  if (normalized.includes("html") || normalized.includes("css")) return <Layers className="w-8 h-8" />;
  if (normalized.includes("javascript") || normalized.includes("typescript")) return <FileJson className="w-8 h-8" />;
  if (normalized.includes("react")) return <Code2 className="w-8 h-8" />;
  if (normalized.includes("tailwind") || normalized.includes("design")) return <Monitor className="w-8 h-8" />;
  if (normalized.includes("git")) return <Terminal className="w-8 h-8" />;
  return <Blocks className="w-8 h-8" />;
};

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-6 rounded-3xl bg-card/40 backdrop-blur-md border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
    >
      {/* Hover background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-[1px] transition-opacity duration-500 -z-10" />

      <div className="relative z-10 flex flex-col h-full gap-4">
        <div className="text-primary p-3 bg-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
          {getIconForSkill(skill.name)}
        </div>
        
        <div>
          <h4 className="text-lg font-bold text-foreground mb-1">{skill.name}</h4>
          <p className="text-sm text-muted-foreground">{skill.category}</p>
        </div>
        
        <div className="mt-auto pt-4">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-muted-foreground font-medium">Proficiency</span>
            <span className="text-foreground font-bold">{skill.level}%</span>
          </div>
          <div className="w-full bg-muted/50 rounded-full h-1.5 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
              className="bg-primary h-full rounded-full relative"
            >
              <div className="absolute inset-0 bg-white/20" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
