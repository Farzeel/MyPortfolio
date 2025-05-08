import React from 'react';
import { Calendar, Briefcase, MapPin } from 'lucide-react';

const education = [
  {
    id: 1,
    UniName: "Federal Urdu University of Arts, Sciences & Technology",
    degree: "Bachelor's in Computer Science (BSCS)",
    logo: "./Edu/fuuast.png",
    country: "Pakistan",
    startYear: 2017,
    endYear: 2021
  },
  {
    id: 2,
    UniName: "Technische Universität Ilmenau",
    degree: "Media Engineering (M.Sc.)",
    logo: "/Edu/TUI.jpeg",
    country: "Germany",
    startYear: 2024,
    endYear: 2026
  },

];


const EducationSection = ({look}) => {

    const themeClasses = {
        background: look=="dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900",
        sectionTitle: look=="dark" ? "text-white" : "text-gray-900",
        accentText: look=="dark" ? "text-purple-400" : "text-purple-600",
        accentBg: look=="dark" ? "bg-purple-400" : "bg-purple-600",
        cardBg: look=="dark" 
          ? "bg-gray-900/60 backdrop-blur-sm border-purple-500/30" 
          : "bg-white/80 backdrop-blur-sm border-purple-300/50",
        cardText: look=="dark" ? "text-white" : "text-gray-900",
        cardSubtext: look=="dark" ? "text-gray-300" : "text-gray-700",
        cardDetails: look=="dark" ? "text-gray-400" : "text-gray-500",
        logoBg: look=="dark" ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-200",
        hoverText: look=="dark" ? "group-hover:text-purple-300" : "group-hover:text-purple-600",
        starColor: look=="dark" ? "bg-white" : "bg-gray-800",
        shootingStar: look=="dark" 
          ? "from-transparent via-purple-400 to-transparent" 
          : "from-transparent via-purple-600 to-transparent",
        timelineNode: look=="dark" 
          ? "bg-purple-400 shadow-purple-500/50" 
          : "bg-purple-600 shadow-purple-400/30",
        timelineLine: look=="dark" 
          ? "from-purple-400 to-blue-500" 
          : "from-purple-600 to-blue-600",
        decorativeBg: look=="dark" 
          ? "from-purple-500/20 to-blue-500/20" 
          : "from-purple-400/20 to-blue-400/20"
      };
    


  return (
    <div id='education' className={`w-full relative py-16  transition-colors duration-300` }>
      {/* Stars background - small decorative dots */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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
      </div>

  {/* Section Header */}
  <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className={themeClasses.sectionTitle}>Education</span>
          <span className={themeClasses.accentText}> Journey</span>
        </h2>
        <div className={`w-24 h-1 mx-auto mt-4 rounded-full ${themeClasses.accentBg}`}></div>
      </div>

      {/* Education Cards */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {education.map((edu, index) => (
          <div 
            key={edu.id}
            className={`flex flex-col md:flex-row mb-12 ${
              index % 2 === 0 ? '' : 'md:flex-row-reverse'
            }`}
          >
            {/* Connecting line */}
            {index < education.length - 1 && (
              <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b ${themeClasses.timelineLine} opacity-50`}></div>
            )}

            {/* Timeline node */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full shadow-lg ${themeClasses.timelineNode}`}></div>

            {/* Education Card */}
            <div className={`w-full md:w-5/6 ${themeClasses.cardBg} rounded-xl border p-6 shadow-lg hover:shadow-xl transition-all duration-300 group ${
              index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
            }`}>
              <div className="flex items-start gap-4">
                {/* Logo */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-lg ${themeClasses.logoBg} flex items-center justify-center overflow-hidden border`}>
                  <img 
                    src={edu.logo} 
                    alt={edu.UniName} 
                    className="w-full h-full object-contain p-1"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/150?text=Uni"; 
                      e.target.onerror = null;
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`text-xl font-bold ${themeClasses.cardText} ${themeClasses.hoverText} transition-colors`}>
                    {edu.degree}
                  </h3>
                  <h4 className={`text-lg ${themeClasses.cardSubtext}`}>{edu.UniName}</h4>
                  
                  <div className={`flex flex-wrap gap-4 mt-3 text-sm ${themeClasses.cardDetails}`}>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} className={themeClasses.accentText} />
                      <span>{edu.startYear} - {edu.endYear}</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <MapPin size={16} className={themeClasses.accentText} />
                      <span>{edu.country}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r ${themeClasses.decorativeBg} blur-xl group-hover:opacity-100 opacity-0 transition-opacity`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Shooting star animation - only show in dark mode */}
      {look=="dark" && (
        <>
          <div className={`absolute top-1/4 left-0 w-20 h-px bg-gradient-to-r ${themeClasses.shootingStar} opacity-0 animate-shooting-star`}></div>
          <div className={`absolute bottom-1/3 right-0 w-16 h-px bg-gradient-to-r ${themeClasses.shootingStar} opacity-0 animate-shooting-star-delayed`}></div>
        </>)}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes shooting-star {
          0% { transform: translateX(-100px) translateY(50px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(calc(100vw + 100px)) translateY(-100px); opacity: 0; }
        }
        .animate-shooting-star {
          animation: shooting-star 8s linear infinite;
          animation-delay: 2s;
        }
        .animate-shooting-star-delayed {
          animation: shooting-star 12s linear infinite;
          animation-delay: 5s;
        }
      `}</style>
    </div>
  );
};

export default EducationSection;