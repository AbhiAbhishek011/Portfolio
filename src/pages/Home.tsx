import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useTheme } from "@/hooks/use-theme";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  
  const sectionIds = ["home", "about", "skills", "projects", "experience", "contact"];
  const activeSection = useScrollSpy(sectionIds, 150);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        activeSection={activeSection || "home"} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
