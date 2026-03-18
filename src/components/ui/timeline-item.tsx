import { motion } from "framer-motion";

interface TimelineItemProps {
  item: {
    year: string;
    title: string;
    description: string;
  };
  index: number;
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative pl-12 md:pl-0 w-full flex items-center md:justify-center">
      
      {/* Mobile Dot */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="md:hidden absolute left-[15px] top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-20"
      />

      <div className={`w-full md:w-[45%] flex flex-col ${isEven ? 'md:mr-auto md:items-end md:text-right' : 'md:ml-auto md:items-start md:text-left'}`}>
        
        <motion.div 
          initial={{ opacity: 0, x: isEven ? -30 : 30, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="w-full bg-card/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 relative group"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
            {item.year}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{item.title}</h3>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{item.description}</p>
        </motion.div>
        
      </div>
      
      {/* Desktop Dot */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="hidden md:block absolute left-1/2 top-1/2 -mt-2 -ml-2 w-4 h-4 rounded-full bg-primary ring-[6px] ring-background z-20 shadow-[0_0_15px_rgba(124,96,248,0.5)]" 
      />
    </div>
  );
}
