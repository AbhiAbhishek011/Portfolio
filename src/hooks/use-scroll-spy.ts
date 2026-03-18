import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      let currentSection = "";
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = id;
          }
        }
      }

      // If scrolled to very bottom, highlight the last section
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        currentSection = sectionIds[sectionIds.length - 1];
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset, activeSection]);

  return activeSection;
}
