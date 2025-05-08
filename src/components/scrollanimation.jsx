import { useEffect, useRef, useState } from "react";

export function CustomScrollProgressTimeline({ 
    sections = [],
    orientation = "vertical", // "vertical" or "horizontal"
    position = "right", // "left", "right", "top", "bottom"
    height = "64", // For vertical orientation
    width = "64", // For horizontal orientation
    showPercentage = true,
    theme = "cosmic" // "cosmic", "minimal", "light"
  }) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const timelineRef = useRef(null);
    const markerRefs = useRef([]);
    
    // Default sections if none provided
    const defaultSections = [
        { name: "Home", href: "#hero", position:0 },
        { name: "About", href: "#about", position:18 },
        { name: "Education", href: "#education" , position:40},
        { name: "Skills", href: "#skills", position:65 },
        { name: "Projects", href: "#projects", position:85 },
        { name: "Contact", href: "#contact" , position:100},
    ];
    
    const timelineSections = sections.length > 0 ? sections : defaultSections;
    
    useEffect(() => {
      // Initialize refs array for markers
      markerRefs.current = markerRefs.current.slice(0, timelineSections.length);
      
      // Element to track scrolling (default to window)
      const scrollElement = document.querySelector("[data-scroll-container]") || window;
      const isWindowScroll = scrollElement === window;
      
      const handleScroll = () => {
        let scrollTop, scrollHeight;
        
        if (isWindowScroll) {
          scrollTop = window.scrollY;
          scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        } else {
          scrollTop = scrollElement.scrollTop;
          scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
        }
        
        const progress = (scrollTop / scrollHeight) * 100;
        setScrollProgress(Math.min(Math.max(progress, 0), 100));
      };
  
      // Add scroll event listener
      if (isWindowScroll) {
        window.addEventListener("scroll", handleScroll);
      } else {
        scrollElement.addEventListener("scroll", handleScroll);
      }
      
      // Call once to initialize position
      handleScroll();
      
      return () => {
        if (isWindowScroll) {
          window.removeEventListener("scroll", handleScroll);
        } else {
          scrollElement.removeEventListener("scroll", handleScroll);
        }
      };
    }, [sections]);
  
    // Calculate which section is active based on scroll progress
    const getActiveSection = (progress) => {
      for (let i = timelineSections.length - 1; i >= 0; i--) {
        if (progress >= timelineSections[i].position) {
          return i;
        }
      }
      return 0;
    };
  
    const activeSection = getActiveSection(scrollProgress);
  
    // Smooth scroll to section when clicking a marker
    const scrollToSection = (position) => {
      const scrollElement = document.querySelector("[data-scroll-container]") || window;
      const isWindowScroll = scrollElement === window;
      
      let scrollHeight;
      
      if (isWindowScroll) {
        scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const targetScrollTop = (position / 100) * scrollHeight;
        
        window.scrollTo({
          top: targetScrollTop,
          behavior: "smooth"
        });
      } else {
        scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
        const targetScrollTop = (position / 100) * scrollHeight;
        
        scrollElement.scrollTo({
          top: targetScrollTop,
          behavior: "smooth"
        });
      }
    };
  
    // Position classes based on orientation and position
    const getPositionClasses = () => {
      if (orientation === "vertical") {
        return position === "left" 
          ? "fixed left-8 top-1/2 transform -translate-y-1/2 z-50" 
          : "fixed right-8 top-1/2 transform -translate-y-1/2 z-50";
      } else {
        return position === "top" 
          ? "fixed top-8 left-1/2 transform -translate-x-1/2 z-50" 
          : "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50";
      }
    };
  
    // Theme styles
    const getThemeStyles = () => {
      switch (theme) {
        case "minimal":
          return {
            line: "bg-gray-300/30",
            progress: "bg-gray-500",
            activeDot: "bg-gray-700 border-gray-500",
            inactiveDot: "bg-gray-300 border-gray-400",
            activeText: "text-gray-700",
            inactiveText: "text-gray-400",
            percentageBg: "bg-gray-200",
            percentageText: "text-gray-700"
          };
        case "light":
          return {
            line: "bg-blue-100",
            progress: "bg-blue-500",
            activeDot: "bg-blue-600 border-blue-300",
            inactiveDot: "bg-gray-100 border-gray-300",
            activeText: "text-blue-700",
            inactiveText: "text-gray-500",
            percentageBg: "bg-white border border-blue-200",
            percentageText: "text-blue-700"
          };
        case "cosmic":
        default:
          return {
            line: "bg-gradient-to-b from-purple-900/30 via-purple-500/30 to-purple-900/30",
            progress: "bg-gradient-to-t from-purple-300 to-purple-600",
            activeDot: "bg-purple-500 border-purple-300",
            inactiveDot: "bg-gray-800 border-gray-700",
            activeText: "text-purple-300",
            inactiveText: "text-gray-400",
            percentageBg: "bg-gray-900/80 border border-purple-500/30",
            percentageText: "text-purple-300"
          };
      }
    };
    
    const styles = getThemeStyles();
  
    if (orientation === "vertical") {
      return (
        <div className={`${getPositionClasses()} hidden md:block`}>
          {/* Main timeline container */}
          <div className={`relative flex flex-col items-center py-4 h-${height}`}>
            {/* Vertical line */}
            <div 
              ref={timelineRef}
              className={`absolute h-full w-0.5 ${styles.line} rounded-full`}
            >
              {/* Progress overlay */}
              <div 
                className={`absolute w-0.5 ${styles.progress} rounded-full transition-all duration-100`}
                style={{ height: `${scrollProgress}%` }}
              />
            </div>
  
            {/* Section markers */}
            {timelineSections.map((section, index) => (
              <div 
                key={section.id}
                ref={el => markerRefs.current[index] = el}
                onClick={() => scrollToSection(section.position)}
                className={`absolute flex items-center cursor-pointer group ${
                  position === "left" ? "flex-row-reverse left-0" : "right-0"
                }`}
                style={{ 
                  top: `${section.position}%`,
                  transform: "translateY(-50%)"
                }}
              >
                {/* Marker dot */}
                <div 
                  className={`flex items-center justify-center w-4 h-4 rounded-full border transition-all duration-300 group-hover:scale-125 ${
                    index <= activeSection 
                      ? styles.activeDot
                      : styles.inactiveDot
                  }`}
                >
                  {index <= activeSection && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  )}
                </div>
                
                {/* Label */}
                <div 
                  className={`${position === "left" ? "ml-3" : "mr-3"} opacity-0 group-hover:opacity-100 transition-all duration-300 transform ${
                    position === "left" 
                      ? "-translate-x-2 group-hover:translate-x-0" 
                      : "translate-x-2 group-hover:translate-x-0"
                  } text-sm font-medium px-2 py-1 rounded ${
                    index <= activeSection
                      ? styles.activeText
                      : styles.inactiveText
                  }`}
                >
                  {section.label}
                </div>
              </div>
            ))}
  
            {/* Scroll percentage */}
            {showPercentage && (
              <div 
                className={`absolute ${position === "left" ? "-left-10" : "-right-12"} w-6 text-center text-xs font-mono`}
                style={{ top: `${scrollProgress}%`, transform: "translateY(-50%)" }}
              >
                <div className={` ${styles.percentageText} px-2 py-1 rounded-md backdrop-blur-sm`}>
                  {Math.round(scrollProgress)}%
                </div>
              </div>
            )}
          </div>
        </div>
      );
    } else {
      // Horizontal orientation
      return (
        <div className={`${getPositionClasses()}  md:block`}>
          {/* Main timeline container */}
          <div className={`relative flex items-center px-4 w-${width}`}>
            {/* Horizontal line */}
            <div 
              ref={timelineRef}
              className={`absolute w-full h-0.5 ${styles.line} rounded-full`}
            >
              {/* Progress overlay */}
              <div 
                className={`absolute h-0.5 ${styles.progress} rounded-full transition-all duration-100`}
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
  
            {/* Section markers */}
            {timelineSections.map((section, index) => (
              <div 
                key={section.id}
                ref={el => markerRefs.current[index] = el}
                onClick={() => scrollToSection(section.position)}
                className={`absolute flex cursor-pointer group ${
                  position === "top" ? "flex-col-reverse top-0" : "flex-col bottom-0"
                }`}
                style={{ 
                  left: `${section.position}%`,
                  transform: "translateX(-50%)"
                }}
              >
                {/* Marker dot */}
                <div 
                  className={`flex items-center justify-center w-4 h-4 rounded-full border transition-all duration-300 group-hover:scale-125 ${
                    index <= activeSection 
                      ? styles.activeDot
                      : styles.inactiveDot
                  }`}
                >
                  {index <= activeSection && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  )}
                </div>
                
                {/* Label */}
                <div 
                  className={`${position === "top" ? "mb-3" : "mt-3"} opacity-0 group-hover:opacity-100 transition-all duration-300 transform ${
                    position === "top" 
                      ? "-translate-y-2 group-hover:translate-y-0" 
                      : "translate-y-2 group-hover:translate-y-0"
                  } text-sm font-medium px-2 py-1 rounded text-center whitespace-nowrap ${
                    index <= activeSection
                      ? styles.activeText
                      : styles.inactiveText
                  }`}
                >
                  {section.label}
                </div>
              </div>
            ))}
  
            {/* Scroll percentage */}
            {showPercentage && (
              <div 
                className={`absolute ${position === "top" ? "-top-12" : "-bottom-8"} text-center text-xs font-mono`}
                style={{ left: `${scrollProgress}%`, transform: "translateX(-50%)" }}
              >
                <div className={`${styles.percentageBg} ${styles.percentageText} px-2 py-1 rounded-md backdrop-blur-sm`}>
                  {Math.round(scrollProgress)}%
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
  }