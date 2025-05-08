import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import EducationSection from "../components/EductaionSection";
import { CustomScrollProgressTimeline } from "../components/scrollanimation";
import { useEffect, useState } from "react";


export const Home = ({look , setLook}) => {
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const [isDarkMode, setIsDarkMode] = useState(true);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      {/* Theme Toggle */}
      <ThemeToggle setIsDarkMode={setIsDarkMode} onClick={toggleTheme} isDarkMode={isDarkMode}  setLook={setLook}/>
      {/* Background Effects */}
      <StarBackground look={look} />
     
      {/* Navbar */}
      <Navbar  onClick={toggleTheme} isDarkMode={isDarkMode} />
      {/* Main Content */}
      <main>
      {/* <ScrollProgressTimeline/> */}
      <CustomScrollProgressTimeline 
        
        orientation={`${windowWidth>600 ?"vertical":"horizontal"}`} // or "horizontal"
        position="left" 
        height="64" 
        width="96" 
        showPercentage={true}
        theme="cosmic" 
      />
        <HeroSection />
        <AboutSection />
        <EducationSection look={look}/>
        <SkillsSection look={look} />
        <ProjectsSection look={look} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
