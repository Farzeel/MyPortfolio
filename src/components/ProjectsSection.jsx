import { useState, useEffect } from "react";
import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 3,
    title: "Real-time Chat App",
    description:
      "Built with Express.js, React, and Socket.io, this app enables real-time messaging with a beautiful UI styled using Tailwind CSS and DaisyUI",
    image:[ "Edu/chat4.JPG","Edu/chat2.JPG","Edu/chat3.JPG","Edu/chat1.JPG"],
    tags: ["React", "Express.js", "MongoDb", "Socket.IO" , "TailwindCSS" , "DaisyUI"],
    demoUrl: "#",
    githubUrl: "https://github.com/Farzeel/Chat-App",
    keyfeatures:[
      "✅ Express.js backend with MongoDB",
     " ✅ React frontend with Tailwind + DaisyUI",
     " ✅ Real-time messaging via Socket.io",
     " ✅ Secure JWT authentication system",
     " ✅ Persistent user + message data",
     " ✅ Clean, mobile-friendly design"
      ],
      liveUrl:false
  },
  {
    id: 1,
    title: "Blog App (React + TypeScript)",
    description:
      "This app lets users create, edit, and manage blog posts using a sleek Tiptap rich text editor, with seamless navigation powered by React Router. Built with TypeScript for type safety, it includes user authentication.",
    image: ["Edu/blog.JPG","Edu/blog2.JPG","Edu/blog3.JPG","Edu/blog4.JPG","Edu/blog5.JPG","Edu/blog6.JPG"],
    tags: ["TypeScript", "ReactJs", "TailwindCSS", "React-Router-dom"],
    demoUrl: "#",
    githubUrl: "https://github.com/Farzeel/REACT-19-WITH-JS-AND-TS",
    keyfeatures:[
"✅ Built with React + TypeScript",
"✅ Rich text editing using Tiptap",
"✅ Dynamic routing with React Router",
"✅ User authentication (login/signup/logout)",
"✅ Session management via localStorage",
"✅ Clean, responsive, and intuitive UI"
      ],
      liveUrl:false
  },

  {
    id: 2,
    title: "Wordly Clone",
    description: "Built with Express.js, React, and Socket.io, this app enables real-time messaging with a beautiful UI styled using Tailwind CSS and DaisyUI. Features include JWT-based authentication, MongoDB for data storage, and seamless, responsive chat interactions",
    image: ["Edu/Capture.JPG"],
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://farzeel.github.io/Wordly-Game/",
    githubUrl: "https://github.com/Farzeel/Wordly-Game",
    keyfeatures:[
      "✅ Classic Wordle-style gameplay (guess the five-letter word)",
      "✅ One-minute timer for each round to increase difficulty",
      "✅ Responsive and user-friendly interface",
      "✅ Real-time feedback on correct letters and positions",
      "✅ Clean game-over and win states with replay options",
      "✅ Optimized performance and smooth animations",
      ],
      liveUrl:true
  },


];

export  function ProjectsSection({look}) {

  // Theme classes
  const themeClasses = {
    background: look=="dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900",
    sectionTitle: look=="dark" ? "text-white" : "text-gray-900",
    accentText: look=="dark" ? "text-purple-400" : "text-purple-600",
    accentBg: look=="dark" ? "bg-purple-400" : "bg-purple-600",
    cardBg: look=="dark" 
      ? "bg-gray-800/80 backdrop-blur-sm border-purple-500/30" 
      : "bg-white/90 backdrop-blur-sm border-purple-300/50",
    cardGlow: look=="dark"
      ? "after:bg-purple-500/20 before:bg-blue-500/20"
      : "after:bg-purple-400/10 before:bg-blue-400/10",
    cardPulse: look=="dark" 
      ? "shadow-[0_0_15px_rgba(168,85,247,0.5)]" 
      : "shadow-[0_0_15px_rgba(147,51,234,0.3)]",
    tabActiveBg: look=="dark" 
      ? "bg-purple-500 text-white" 
      : "bg-purple-600 text-white",
    tabInactiveBg: look=="dark" 
      ? "bg-gray-800 text-gray-300 hover:bg-gray-700" 
      : "bg-gray-200 text-gray-700 hover:bg-gray-300",
    skillLevelBg: look=="dark" ? "bg-gray-700/50" : "bg-gray-200/50",
    skillLevelText: look=="dark" ? "text-gray-300" : "text-gray-600",
    skillIcon: look=="dark" ? "text-white" : "text-gray-900"
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("right");
  const [imgIndex,setImgIndex] = useState(0)

  // Auto-rotate carousel
  useEffect(() => {
    // if(imgIndex<projects[activeIndex].image.length-1){
    //   setImgIndex(prev=>prev+1)
    // }else{
    //   setImgIndex(0)
    // }
    const timer = setTimeout(() => {
      if(imgIndex<projects[activeIndex].image.length-1){
        setImgIndex(prev=>prev+1)

      }else{
        setImgIndex(0)
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [imgIndex,activeIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setIsAnimating(false);
    }, 400);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
      setIsAnimating(false);
    }, 400);
  };

  const getPositionClass = (index) => {
    if (index === activeIndex) return "translate-x-0 opacity-100 scale-100 z-20";
    if (
      (direction === "right" && (index === activeIndex + 1 || (activeIndex === projects.length - 1 && index === 0))) ||
      (direction === "left" && (index === activeIndex - 1 || (activeIndex === 0 && index === projects.length - 1)))
    ) {
      return direction === "right" 
        ? "translate-x-full opacity-0 scale-90 z-10" 
        : "-translate-x-full opacity-0 scale-90 z-10";
    }
    return "translate-x-full opacity-0 scale-75 z-0";
  };

  // Generate random star positions for the background
  const generateStars = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 0.4 + 0.1,
      animationDelay: `${Math.random() * 5}s`,
    }));
  };

  const smallStars = generateStars(30);
  const mediumStars = generateStars(15);

  return (
    <div id="projects" className="relative w-full py-16 overflow-hidden transition-colors duration-300">
    {/* Decorative stars */}
    {smallStars.map((star) => (
      <div
        key={`small-star-${star.id}`}
        className="absolute rounded-full bg-white dark:bg-white animate-pulse"
        style={{
          top: star.top,
          left: star.left,
          width: `${star.size}rem`,
          height: `${star.size}rem`,
          opacity: Math.random() * 0.7 + 0.3,
          animationDuration: "3s",
          animationDelay: star.animationDelay,
        }}
      />
    ))}
    {mediumStars.map((star) => (
      <div
        key={`medium-star-${star.id}`}
        className="absolute rounded-full bg-purple-300 dark:bg-purple-300 animate-pulse"
        style={{
          top: star.top,
          left: star.left,
          width: `${star.size + 0.2}rem`,
          height: `${star.size + 0.2}rem`,
          opacity: Math.random() * 0.7 + 0.3,
          animationDuration: "5s",
          animationDelay: star.animationDelay,
        }}
      />
    ))}
  
    {/* Title */}
    <h2 className="relative text-center text-4xl font-bold mb-16">
      <span className={themeClasses.sectionTitle}>My</span>
      <span className={themeClasses.accentText}> PROJECTS</span>
      <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full" />
    </h2>
  
    {/* Carousel */}
    <div className="relative max-w-6xl mx-auto px-4">
      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 dark:bg-black/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-purple-600/50 transition-all duration-300 border border-purple-500/30"
        aria-label="Previous project"
      >
        <ChevronLeft size={24} />
      </button>
  
      <button
        onClick={handleNext}
        className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 dark:bg-black/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-purple-600/50 transition-all duration-300 border border-purple-500/30"
        aria-label="Next project"
      >
        <ChevronRight size={24} />
      </button>
  
      {/* Project cards container */}
      <div className="relative h-[800px] md:h-[600px] w-full">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out 
             group overflow-hidden
            ${themeClasses.cardBg} rounded-xl border p-5
            hover:z-10
            ${themeClasses.cardPulse}
            before:absolute before:inset-0 before:rounded-xl before:z-[-1] before:opacity-0 before:blur-xl before:transition-opacity before:duration-1000 group-hover:before:opacity-100
            after:absolute after:inset-0 after:rounded-xl after:z-[-1] after:opacity-0 after:blur-xl after:transition-opacity after:duration-1000 group-hover:after:opacity-100
            ${themeClasses.cardGlow}
            ${getPositionClass(index)}`}
          >
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-950/95 dark:from-gray-900/90 dark:to-gray-950/95 backdrop-blur-md rounded-2xl  shadow-2xl overflow-hidden h-full flex flex-col md:flex-row">
              {/* Project image */}
              <div className="w-full md:w-full h-64 md:h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent z-10" />
               
                  <div
                   
                    className="w-full h-full bg-gray-800 "
                    style={{
                      backgroundImage: `url(${project.image[imgIndex]})`,
                    }}
                  >
                    {projects[activeIndex].image.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === imgIndex ? 'opacity-100' : 'opacity-0'}`}
                      alt=""
                    />
                  ))}
                    </div>
              
                <div className="absolute inset-0 bg-black/30" />
              </div>
  
              {/* Project details */}
              <div className={`w-full md:w-full p-8 ${themeClasses.background} flex flex-col justify-between`}>
                <div className={`overflow-y-auto max-h-[400px] md:max-h-full mb-4  scrollbar-thin `}>
                  <h3 className={`text-2xl md:text-3xl font-bold ${themeClasses.accentText} mb-2  group-hover:text-purple-400 transition-colors`}>
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-xs font-medium rounded-full  border border-purple-700/30 ${themeClasses.tabActiveBg}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className={`${themeClasses.sectionTitle} mb-6 text-lg`}>{project.description}</p>
  
                  {/* Additional detailed description - hide on mobile for space */}
                  <div className="hidden md:block space-y-4">
                    <div className="relative">
                      <div className="h-0.5 bg-gradient-to-r from-red/50 to-transparent absolute top-3 w-full -z-10" />
                      <h4 className={`text-lg font-semibold ${themeClasses.accentText}  inline-block pr-4`}>Key Features</h4>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      {project.keyfeatures.map((feature) => (
                        <li key={feature} className={`flex items-start `}>
                          <span className="text-purple-400 mr-2">•</span>
                          <span className={`${themeClasses.sectionTitle}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
  
                {/* Action buttons fixed at bottom */}
                <div className="flex items-center gap-4 mt-4">
           {   project.liveUrl &&    <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-purple-900/30 group"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/70 border border-gray-700/50 rounded-lg font-medium hover:bg-gray-700/50 transition-all duration-300 group"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  
      {/* Navigation dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {projects.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => {
              setDirection(index > activeIndex ? "right" : "left");
              setActiveIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-purple-500 w-8" : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
  
      {/* Cosmic orbital line decoration */}
      <div
        className="absolute -bottom-24 -left-24 w-64 h-64 border border-purple-500/20 rounded-full animate-spin-slow opacity-30"
        style={{ animationDuration: "30s" }}
      />
      <div
        className="absolute -top-32 -right-32 w-96 h-96 border border-indigo-500/10 rounded-full animate-spin-slow opacity-20"
        style={{ animationDuration: "45s", animationDirection: "reverse" }}
      />
    </div>
  </div>
  
  );
}


/*

    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>

*/