
import { Code2, Brain, Globe, Terminal, Github, Calendar, MousePointer, Gamepad2, Download, Mic, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Timetable-Pro",
      description: `Developed an automated system for conflict-free academic timetable generation. Utilized a rule-based and randomized heuristic algorithm to schedule classes, faculty, and resources efficiently. Generated customized Excel timetables for sections and individual teachers, including workload analysis.`,
      icon: <Calendar className="w-7 h-7 text-green-500" />, 
      tags: ["Python", "openpyxl", "csv"],
      date: "May 2025",
      link: "https://github.com/amansharma97385/time_table_pro",
      color: "bg-green-500",
      techLogos: [
        { name: "Python", logo: "🐍", color: "text-yellow-500" },
        { name: "Excel", logo: "📊", color: "text-green-600" },
        { name: "CSV", logo: "📄", color: "text-blue-600" }
      ]
    },
    {
      title: "Remote Mouse Control",
      description: `Built a web app that allows users to control a computer's mouse via a mobile device. Used Flask for backend, with PyAutoGUI to simulate real-time mouse movements. Implemented QR code-based connectivity for easy access.`,
      icon: <MousePointer className="w-7 h-7 text-blue-500" />, 
      tags: ["Python", "Flask", "PyAutoGUI"],
      date: "Dec 2024",
      link: "https://github.com/amansharma97385/Remote-Mouse-Control-via-QR-Code",
      color: "bg-blue-500",
      techLogos: [
        { name: "Python", logo: "🐍", color: "text-yellow-500" },
        { name: "Flask", logo: "🔥", color: "text-orange-500" },
        { name: "QR Code", logo: "📱", color: "text-blue-500" }
      ]
    },
    {
      title: "Snake Game",
      description: `Created a classic Snake Game with smooth controls and real-time score tracking. Designed a responsive UI for seamless gameplay on different screen sizes.`,
      icon: <Gamepad2 className="w-7 h-7 text-purple-500" />, 
      tags: ["JavaScript", "HTML", "CSS"],
      date: "Aug 2024",
      link: "https://github.com/amansharma97385/snake-game-mobile",
      color: "bg-purple-500",
      techLogos: [
        { name: "JavaScript", logo: "⚡", color: "text-yellow-400" },
        { name: "HTML", logo: "🌐", color: "text-orange-500" },
        { name: "CSS", logo: "🎨", color: "text-blue-500" }
      ]
    },
    {
      title: "Video Download Extension",
      description: `A browser extension for downloading videos from YouTube, Instagram Reels, Twitter, Facebook, and TikTok.`,
      icon: <Download className="w-7 h-7 text-cyan-500" />, 
      tags: ["JavaScript", "Extension"],
      date: "Aug 2024",
      link: "https://github.com/amansharma97385/Video-down-extension",
      color: "bg-cyan-500",
      techLogos: [
        { name: "JavaScript", logo: "⚡", color: "text-yellow-400" },
        { name: "Chrome", logo: "🌐", color: "text-blue-500" },
        { name: "Extension", logo: "🔧", color: "text-gray-600" }
      ]
    },
    {
      title: "Speech Recognition Web App",
      description: `Developed a real-time speech-to-text web application using Google's Speech Recognition API. Implemented keyword filtering to detect and block specific words dynamically. Added error handling to manage unrecognized speech and network failures efficiently.`,
      icon: <Mic className="w-7 h-7 text-green-500" />, 
      tags: ["Python", "Flask", "HTML", "CSS"],
      date: "Aug 2024",
      link: "https://github.com/amansharma97385/speech-to-text",
      color: "bg-green-500",
      techLogos: [
        { name: "Python", logo: "🐍", color: "text-yellow-500" },
        { name: "Flask", logo: "🔥", color: "text-orange-500" },
        { name: "Google API", logo: "🔍", color: "text-blue-500" }
      ]
    },
    {
      title: "Spoiler Blocker",
      description: `Developed a lightweight browser extension to block spoilers on social media, focusing on Instagram. Implemented a customizable keyword filtering system to detect and blur spoiler content in real time, enhancing the browsing experience. Optimized for cross-browser compatibility with Chrome and Firefox, with plans for additional platforms.`,
      icon: <Shield className="w-7 h-7 text-blue-500" />, 
      tags: ["JavaScript", "HTML", "CSS"],
      date: "May 2024",
      link: "https://github.com/amansharma97385/Spolier-blocker-extension",
      color: "bg-blue-500",
      techLogos: [
        { name: "JavaScript", logo: "⚡", color: "text-yellow-400" },
        { name: "Instagram", logo: "📸", color: "text-pink-500" },
        { name: "Extension", logo: "🔧", color: "text-gray-600" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Subtle grid background */}
      <div className="dark:hidden absolute inset-0 pointer-events-none z-0" style={{backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
      <div className="hidden dark:block absolute inset-0 pointer-events-none z-0" style={{backgroundImage: 'linear-gradient(to right, #374151 1px, transparent 1px), linear-gradient(to bottom, #374151 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-center mb-2 bg-gradient-to-r from-blue-600 via-fuchsia-600 to-cyan-500 bg-clip-text text-transparent select-none">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-200 dark:border-slate-700"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 ${project.color} rounded-full`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {project.title}
                    </a>
                  </h3>
                </div>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold">
                  {project.date}
                </span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Technology Logos */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Built with:</span>
                <div className="flex gap-2">
                  {project.techLogos.map((tech, index) => (
                    <div key={index} className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      <span className={`text-lg ${tech.color}`}>{tech.logo}</span>
                      <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-start">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                  <Github className="w-5 h-5" />
                  <span className="text-sm font-medium">View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
