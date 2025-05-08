// import React, { useState } from "react";
// import { Code, Server, Wrench, Layers } from "lucide-react";

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
//   { name: "Node.js", level: 80, category: "backend" },
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

// const SkillsSection = ({ look }) => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredSkills = skills.filter(
//     (skill) => activeCategory === "all" || skill.category === activeCategory
//   );

//   const getCategoryIcon = (category) => {
//     switch (category) {
//       case "frontend":
//         return <Code size={18} className="mr-2" />;
//       case "backend":
//         return <Server size={18} className="mr-2" />;
//       case "tools":
//         return <Wrench size={18} className="mr-2" />;
//       default:
//         return <Layers size={18} className="mr-2" />;
//     }
//   };

//   const getSkillIcon = (skillName) => {
//     const lowerName = skillName.toLowerCase();
//     if (lowerName.includes("javascript")) return "🟨";
//     if (lowerName.includes("typescript")) return "🔷";
//     if (lowerName.includes("python")) return "🐍";
//     if (lowerName.includes("html")) return "🌐";
//     if (lowerName.includes("react")) return "⚛️";
//     if (lowerName.includes("next")) return "▲";
//     if (lowerName.includes("tailwind")) return "🎨";
//     if (lowerName.includes("node")) return "📦";
//     if (lowerName.includes("express")) return "🚂";
//     if (lowerName.includes("fast")) return "⚡";
//     if (lowerName.includes("mongo")) return "🍃";
//     if (lowerName.includes("postgres")) return "🐘";
//     if (lowerName.includes("git")) return "📊";
//     if (lowerName.includes("docker")) return "🐳";
//     if (lowerName.includes("figma")) return "🎭";
//     if (lowerName.includes("vscode") || lowerName.includes("vs code")) return "💻";
//     return "✨";
//   };

//   const themeClasses = {
//     background: look === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900",
//     sectionTitle: look === "dark" ? "text-white" : "text-gray-900",
//     accentText: look === "dark" ? "text-purple-400" : "text-purple-600",
//     accentBg: look === "dark" ? "bg-purple-400" : "bg-purple-600",
//     cardBg: look === "dark" ? "bg-gray-800/80 backdrop-blur-sm border-purple-500/30" : "bg-white/90 backdrop-blur-sm border-purple-300/50",
//     cardGlow: look === "dark" ? "after:bg-purple-500/20 before:bg-blue-500/20" : "after:bg-purple-400/10 before:bg-blue-400/10",
//     cardPulse: look === "dark" ? "shadow-[0_0_15px_rgba(168,85,247,0.5)]" : "shadow-[0_0_15px_rgba(147,51,234,0.3)]",
//     tabActiveBg: look === "dark" ? "bg-purple-500 text-white" : "bg-purple-600 text-white",
//     tabInactiveBg: look === "dark" ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-gray-200 text-gray-700 hover:bg-gray-300",
//     skillLevelBg: look === "dark" ? "bg-gray-700/50" : "bg-gray-200/50",
//     skillLevelText: look === "dark" ? "text-gray-300" : "text-gray-600",
//     skillIcon: look === "dark" ? "text-white" : "text-gray-900",
//   };

//   const skillsToShow = filteredSkills.length > 16 ? filteredSkills.slice(0, 16) : filteredSkills;
//   const placeholdersNeeded = (4 - (skillsToShow.length % 4)) % 4;
//   const placeholders = Array(placeholdersNeeded).fill(null);


//   return (
//     <div id="skills" className={`w-full relative py-16  transition-colors duration-300 overflow-hidden`}>
//       {/* Space background elements - only in dark mode */}
//       {look=="dark" && (
//         <div className="absolute inset-0 z-0 overflow-hidden">
//           {/* Stars */}
//           {[...Array(70)].map((_, i) => (
//             <div 
//               key={i}
//               className="absolute bg-white rounded-full opacity-70"
//               style={{
//                 width: Math.random() * 2 + 1 + 'px',
//                 height: Math.random() * 2 + 1 + 'px',
//                 top: Math.random() * 100 + '%',
//                 left: Math.random() * 100 + '%',
//                 animation: `twinkle ${Math.random() * 5 + 3}s infinite`
//               }}
//             />
//           ))}
          
//           {/* Nebula effects */}
//           <div className="absolute top-1/3 -right-24 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
//           <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
//         </div>
//       )}

//       {/* Section Header */}
//       <div className="relative z-10 text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold">
//           <span className={themeClasses.sectionTitle}>Technical</span>
//           <span className={themeClasses.accentText}> Skills</span>
//         </h2>
//         <div className={`w-24 h-1 mx-auto mt-4 rounded-full ${themeClasses.accentBg}`}></div>
//       </div>

//       {/* Category Filter Tabs */}
//       <div className="relative z-10 max-w-6xl mx-auto mb-12">
//         <div className="flex flex-wrap justify-center gap-3">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`
//                 px-4 py-2 rounded-full capitalize font-medium flex items-center
//                 transition-all duration-300 ${
//                   activeCategory === category
//                     ? themeClasses.tabActiveBg
//                     : themeClasses.tabInactiveBg
//                 }
//               `}
//             >
//               {getCategoryIcon(category)}
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* 4x4 Skills Grid */}
//       <div className="relative z-10 max-w-6xl mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           {skillsToShow.map((skill, index) => (
//             <div
//               key={skill.name}
//               className={`
//                 relative group overflow-hidden
//                 ${themeClasses.cardBg} rounded-xl border p-5
//                 transition-all duration-500 hover:z-10
//                 ${index % 2 !== 0 ? `${themeClasses.cardPulse} animate-pulse-slow` : 'hover:shadow-lg'}
//                 transform hover:scale-105
//                 before:absolute before:inset-0 before:rounded-xl before:z-[-1] before:opacity-0 before:blur-xl before:transition-opacity before:duration-1000 group-hover:before:opacity-100
//                 after:absolute after:inset-0 after:rounded-xl after:z-[-1] after:opacity-0 after:blur-xl after:transition-opacity after:duration-1000 group-hover:after:opacity-100
//                 ${themeClasses.cardGlow}
//               `}
//               style={{
//                 animationDelay: `${index * 0.2}s`,
//                 animation: `fadeInGrid 0.8s ease-out forwards ${index * 0.1}s`,
//                 backgroundPosition: `${Math.random() * 100}% ${Math.random() * 100}%`,
//               }}
//             >
//               {/* Skill Icon */}
//               <div className="flex justify-between items-center">
//                 <span className="text-3xl mb-2" aria-hidden="true">
//                   {getSkillIcon(skill.name)}
//                 </span>
                
//                 {/* Level Indicator */}
//                 <div className="flex items-center gap-1">
//                   <div className="flex gap-0.5">
//                     {[...Array(5)].map((_, i) => (
//                       <div 
//                         key={i} 
//                         className={`w-1.5 h-6 rounded-sm ${
//                           i < Math.round(skill.level / 20) 
//                             ? themeClasses.accentBg 
//                             : themeClasses.skillLevelBg
//                         }`}
//                       ></div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Skill Name */}
//               <h3 className={`font-bold text-lg mt-2 ${themeClasses.sectionTitle}`}>
//                 {skill.name}
//               </h3>
              
//               {/* Skill Level Text */}
//               <p className={`text-sm mt-1 ${themeClasses.skillLevelText}`}>
//                 Proficiency: {skill.level}%
//               </p>

//               {/* Decorative line */}
//               <div className={`h-0.5 w-12 mt-3 mb-3 opacity-50 ${themeClasses.accentBg} rounded-full`}></div>

//               {/* Category Badge */}
//               <div className="mt-2">
//                 <span className={`
//                   text-xs uppercase tracking-wider px-2 py-1 rounded-md
//                   ${themeClasses.tabInactiveBg} inline-flex items-center
//                 `}>
//                   {getCategoryIcon(skill.category)}
//                   <span className="text-xs">{skill.category}</span>
//                 </span>
//               </div>

//               {/* Decorative corner effect */}
//               <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
//                 <div className={`absolute transform rotate-45 translate-x-6 -translate-y-6 w-8 h-1 ${themeClasses.accentBg} opacity-50`}></div>
//               </div>
//             </div>
//           ))}

//           {/* Add empty placeholder cards if needed to complete the grid */}
//           {placeholders.map((_, i) => (
//             <div 
//               key={`placeholder-${i}`} 
//               className={`rounded-xl border border-dashed ${look=="dark" ? 'border-gray-700/30' : 'border-gray-300/50'} h-full`}
//             ></div>
//           ))}
//         </div>
//       </div>

//       {/* Orbital elements in dark mode */}
//       {look=="dark" && (
//         <div className="absolute z-0 inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             <div className="w-full max-w-3xl aspect-square border border-purple-500/10 rounded-full animate-orbit"></div>
//             <div className="w-2/3 max-w-xl aspect-square border border-blue-500/10 rounded-full animate-orbit-reverse"></div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes twinkle {
//           0%, 100% { opacity: 0.3; }
//           50% { opacity: 1; }
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes orbit {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//         @keyframes orbit-reverse {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(-360deg); }
//         }
//       @keyframes pulseSlow {
//   0%, 100% {
//     opacity: 1;
//     transform: scale(1);
//   }
//   50% {
//     opacity: 0.5;
//     transform: scale(1.5);
//   }
// }


// .animate-pulse-slow {
//   animation: pulseSlow 4s ease-in-out infinite;
// }
//         .animate-orbit {
//           animation: orbit 60s linear infinite;
//         }
//         .animate-orbit-reverse {
//           animation: orbit-reverse 45s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };


import React, { useState } from "react";
import { Code, Server, Wrench, Layers } from "lucide-react";

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

export const SkillsSection = ({ look }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

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

  const getSkillIcon = (skillName) => {
    const lowerName = skillName.toLowerCase();
    if (lowerName.includes("javascript")) return "🟨";
    if (lowerName.includes("typescript")) return "🔷";
    if (lowerName.includes("python")) return "🐍";
    if (lowerName.includes("html")) return "🌐";
    if (lowerName.includes("react")) return "⚛️";
    if (lowerName.includes("next")) return "▲";
    if (lowerName.includes("tailwind")) return "🎨";
    if (lowerName.includes("node")) return "📦";
    if (lowerName.includes("express")) return "🚂";
    if (lowerName.includes("fast")) return "⚡";
    if (lowerName.includes("mongo")) return "🍃";
    if (lowerName.includes("postgres")) return "🐘";
    if (lowerName.includes("git")) return "📊";
    if (lowerName.includes("docker")) return "🐳";
    if (lowerName.includes("figma")) return "🎭";
    if (lowerName.includes("vscode") || lowerName.includes("vs code")) return "💻";
    return "✨";
  };

  const themeClasses = {
    background: look === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900",
    sectionTitle: look === "dark" ? "text-white" : "text-gray-900",
    accentText: look === "dark" ? "text-purple-400" : "text-purple-600",
    accentBg: look === "dark" ? "bg-purple-400" : "bg-purple-600",
    cardBg: look === "dark" ? "bg-gray-800/80 backdrop-blur-sm border-purple-500/30" : "bg-white/90 backdrop-blur-sm border-purple-300/50",
    cardGlow: look === "dark" ? "after:bg-purple-500/20 before:bg-blue-500/20" : "after:bg-purple-400/10 before:bg-blue-400/10",
    cardPulse: look === "dark" ? "shadow-[0_0_15px_rgba(168,85,247,0.5)]" : "shadow-[0_0_15px_rgba(147,51,234,0.3)]",
    tabActiveBg: look === "dark" ? "bg-purple-500 text-white" : "bg-purple-600 text-white",
    tabInactiveBg: look === "dark" ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-gray-200 text-gray-700 hover:bg-gray-300",
    skillLevelBg: look === "dark" ? "bg-gray-700/50" : "bg-gray-200/50",
    skillLevelText: look === "dark" ? "text-gray-300" : "text-gray-600",
    skillIcon: look === "dark" ? "text-white" : "text-gray-900",
  };

  const skillsToShow = filteredSkills.length > 16 ? filteredSkills.slice(0, 16) : filteredSkills;
  const placeholdersNeeded = (4 - (skillsToShow.length % 4)) % 4;
  const placeholders = Array(placeholdersNeeded).fill(null);

  return (
    <div id="skills" className={`w-full py-16 ${themeClasses.background} transition-colors duration-300 overflow-hidden`}>
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className={themeClasses.sectionTitle}>Technical</span>
          <span className={themeClasses.accentText}> Skills</span>
        </h2>
        <div className={`w-24 h-1 mx-auto mt-4 rounded-full ${themeClasses.accentBg}`}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full capitalize font-medium flex items-center transition-all duration-300 ${
                activeCategory === category ? themeClasses.tabActiveBg : themeClasses.tabInactiveBg
              }`}
            >
              {getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillsToShow.map((skill, index) => (
            <div
              key={skill.name}
              className={`relative group overflow-hidden ${themeClasses.cardBg} rounded-xl border p-5 transition-all duration-500 hover:z-10 ${
                index % 2 !== 0 ? `${themeClasses.cardPulse} animate-pulse-slow` : 'hover:shadow-lg'
              } transform hover:scale-105`}
              style={{
                animationDelay: `${index * 0.2}s`,
                backgroundPosition: `${Math.random() * 100}% ${Math.random() * 100}%`,
              }}
            >
              <div className="flex justify-between items-center">
                <span className="text-3xl mb-2" aria-hidden="true">
                  {getSkillIcon(skill.name)}
                </span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-6 rounded-sm ${
                        i < Math.round(skill.level / 20) ? themeClasses.accentBg : themeClasses.skillLevelBg
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              <h3 className={`font-bold text-lg mt-2 ${themeClasses.sectionTitle}`}>{skill.name}</h3>

              <p className={`text-sm mt-1 ${themeClasses.skillLevelText}`}>Proficiency: {skill.level}%</p>

              <div className={`h-0.5 w-12 mt-3 mb-3 opacity-50 ${themeClasses.accentBg} rounded-full`}></div>

              <div className="mt-2">
                <span className={`text-xs uppercase tracking-wider px-2 py-1 rounded-md ${themeClasses.tabInactiveBg} inline-flex items-center`}>
                  {getCategoryIcon(skill.category)}
                  <span className="text-xs">{skill.category}</span>
                </span>
              </div>
            </div>
          ))}

          {placeholders.map((_, i) => (
            <div key={`placeholder-${i}`} className={`rounded-xl border border-dashed ${look === "dark" ? 'border-gray-700/30' : 'border-gray-300/50'} h-full`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};


