// import { useState } from "react";
// import { cn } from "@/lib/utils";
// import {} from "lucide-react"

// const skills = [
//   // Frontend
//   { name: "JavaScript", level: 90, category: "frontend" },
//   { name: "TypeScript", level: 85, category: "frontend" },
//   { name: "Python", level: 85, category: "backend" },
//   { name: "HTML/CSS", level: 95, category: "frontend" },
//   { name: "React", level: 90, category: "frontend" },
//   { name: "Next.js", level: 80, category: "frontend" },
//   { name: "Tailwind CSS", level: 90, category: "frontend" },

//   // Backend
//   { name: "Node.js", level: 80, category: "backend"  },
//   { name: "Express", level: 75, category: "backend" },
//   { name: "FastAPI", level: 75, category: "backend" },
//   { name: "MongoDB", level: 70, category: "backend" },
//   { name: "PostgreSQL", level: 65, category: "backend" },


//   // Tools
//   { name: "Git/GitHub", level: 90, category: "tools" },
//   { name: "Docker", level: 70, category: "tools" },
//   { name: "Figma", level: 85, category: "tools" },
//   { name: "VS Code", level: 95, category: "tools" },
// ];

// const categories = ["all", "frontend", "backend", "tools"];

// export const SkillsSection = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredSkills = skills.filter(
//     (skill) => activeCategory === "all" || skill.category === activeCategory
//   );
//   return (
//     <section id="skills" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           My <span className="text-primary"> Skills</span>
//         </h2>

//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category, key) => (
//             <button
//               key={key}
//               onClick={() => setActiveCategory(category)}
//               className={cn(
//                 "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
//                 activeCategory === category
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-secondary/70 text-forefround hover:bd-secondary"
//               )}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredSkills.map((skill, key) => (
//             <div
//               key={key}
//               className="bg-card p-6 rounded-lg shadow-xs card-hover"
//             >
//               <div className="text-left mb-4">
//                 <h3 className="font-semibold text-lg"> {skill.name.toUpperCase()}</h3>
//               </div>
//               <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
//                 <div
//                   className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
//                   style={{ width: skill.level + "%" }}
//                 />
//               </div>

//               <div className="text-right mt-1">
//                 <span className="text-sm text-muted-foreground">
//                   {skill.level}%
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// ..................................................

import React, { useState, useEffect } from "react";
import { Code, Server, Wrench, ChevronRight, Layers } from "lucide-react";

const skills = [
  // Frontend
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Python", level: 85, category: "backend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "FastAPI", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = ({look}) => {
  const [activeCategory, setActiveCategory] = useState("all");

  


  // Filter skills based on active category
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  // Get the corresponding icon for each category
  const getCategoryIcon = (category) => {
    switch (category) {
      case "frontend":
        return <Code size={18} className="mr-2" />;
      case "backend":
        return <Server size={18} className="mr-2" />;
      case "tools":
        return <Wrench size={18} className="mr-2" />;
      default:
        return <Layers size={18} className="mr-2" />;
    }
  };

  // Theme classes
  const themeClasses = {
    background: look=="dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900",
    sectionTitle: look=="dark" ? "text-white" : "text-gray-900",
    accentText: look=="dark" ? "text-purple-400" : "text-purple-600",
    accentBg: look=="dark" ? "bg-purple-400" : "bg-purple-600",
    cardBg: look=="dark" 
      ? "bg-gray-800/80 backdrop-blur-sm border-purple-500/30" 
      : "bg-white/90 backdrop-blur-sm border-purple-300/50",
    tabBg: look=="dark" 
      ? "bg-gray-800 hover:bg-gray-700" 
      : "bg-gray-200 hover:bg-gray-300",
    tabActiveBg: look=="dark" 
      ? "bg-purple-500 text-white" 
      : "bg-purple-600 text-white",
    tabInactiveBg: look=="dark" 
      ? "bg-gray-800 text-gray-300 hover:bg-gray-700" 
      : "bg-gray-200 text-gray-700 hover:bg-gray-300",
    skillBarBg: look=="dark" ? "bg-gray-700" : "bg-gray-300",
    skillBarFill: look=="dark" 
      ? "bg-gradient-to-r from-purple-600 to-blue-500" 
      : "bg-gradient-to-r from-purple-500 to-blue-400",
    cardText: look=="dark" ? "text-white" : "text-gray-900",
    cardSubtext: look=="dark" ? "text-gray-300" : "text-gray-700",
    border: look=="dark" ? "border-gray-700" : "border-gray-200",
    shadow: look=="dark" ? "shadow-purple-900/20" : "shadow-purple-300/30"
  };

  return (
    <div id="skills" className={`w-full relative py-16  transition-colors duration-300`}>
     
      {look=="dark" && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Stars */}
          {[...Array(50)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white rounded-full opacity-70"
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `twinkle ${Math.random() * 5 + 3}s infinite`
              }}
            />
          ))}
          
          {/* Glowing orbs */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/5 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
      )}

      {/* Section Header */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className={themeClasses.sectionTitle}>Technical</span>
          <span className={themeClasses.accentText}> Skills</span>
        </h2>
        <div className={`w-24 h-1 mx-auto mt-4 rounded-full ${themeClasses.accentBg}`}></div>
      </div>

      {/* Category Filter Tabs */}
      <div className="relative z-10 max-w-5xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-4 py-2 rounded-full capitalize font-medium flex items-center
                transition-all duration-300 ${
                  activeCategory === category
                    ? themeClasses.tabActiveBg
                    : themeClasses.tabInactiveBg
                }
              `}
            >
              {getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`
                ${themeClasses.cardBg} rounded-xl border p-5
                hover:shadow-lg ${themeClasses.shadow} transition-all duration-300
                transform hover:-translate-y-1
              `}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "fadeIn 0.5s ease-out forwards",
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <ChevronRight size={16} className={themeClasses.accentText} />
                  <h3 className={`font-bold text-lg ml-2 ${themeClasses.cardText}`}>
                    {skill.name}
                  </h3>
                </div>
                <span className={`text-sm font-medium ${themeClasses.accentText}`}>
                  {skill.level}%
                </span>
              </div>

              {/* Skill Level Bar */}
              <div className={`h-2 w-full rounded-full overflow-hidden ${themeClasses.skillBarBg}`}>
                <div
                  className={`h-full ${themeClasses.skillBarFill}`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {/* Category Badge */}
              <div className="mt-3 flex items-center">
                <span className={`
                  text-xs uppercase tracking-wider px-3 py-1 rounded-full
                  ${themeClasses.tabInactiveBg} inline-flex items-center
                `}>
                  {getCategoryIcon(skill.category)}
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Add orbit animation in dark mode */}
      {look=="dark" && (
        <div className="absolute z-0 inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 border border-purple-500/10 rounded-full animate-orbit"></div>
            <div className="w-64 h-64 border border-blue-500/10 rounded-full animate-orbit-reverse"></div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbit-reverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        .animate-orbit {
          animation: orbit 60s linear infinite;
        }
        .animate-orbit-reverse {
          animation: orbit-reverse 45s linear infinite;
        }
      `}</style>
    </div>
  );
};
