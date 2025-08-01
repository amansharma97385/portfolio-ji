
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const tagline = "Full Stack Developer | UI/UX Enthusiast | Tech Explorer";
  const typingSpeed = 60;

  useEffect(() => {
    if (currentIndex < tagline.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(tagline.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, tagline]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Subtle grid background */}
      <div className="dark:hidden absolute inset-0 pointer-events-none z-0" style={{backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
      <div className="hidden dark:block absolute inset-0 pointer-events-none z-0" style={{backgroundImage: 'linear-gradient(to right, #374151 1px, transparent 1px), linear-gradient(to bottom, #374151 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-4 py-20">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="absolute -right-6 -bottom-6 w-56 h-56 rounded-full bg-blue-100 dark:bg-blue-900 border-2 border-blue-200 dark:border-blue-700 z-0" />
          <img
            src="/port-uploads/df4b7a15-fe2e-4f19-9762-502d1a23aeb3.png"
            alt="Aman Sharma"
            className="w-56 h-56 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-lg relative z-10"
            style={{ boxShadow: '0 8px 32px 0 rgba(124, 58, 237, 0.25)' }}
          />
        </div>
        {/* Name with gradient */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center mb-3 tracking-tight leading-tight bg-gradient-to-r from-blue-600 via-fuchsia-600 to-cyan-500 bg-clip-text text-transparent select-none">
          Aman Sharma
        </h1>
        {/* Animated tagline */}
        <div className="font-mono text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 text-center mb-8 min-h-[3rem]">
          {displayedText}
          {currentIndex < tagline.length && <span className="animate-pulse text-blue-400 dark:text-cyan-400">|</span>}
        </div>
        {/* Socials as command chips */}
        <div className="flex flex-row items-center justify-center gap-6 mb-10">
          <a href="https://github.com/amansharma97385" target="_blank" rel="noopener noreferrer">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-800 text-green-400 font-mono rounded shadow hover:bg-slate-800 dark:hover:bg-slate-700 hover:text-green-400 dark:hover:text-green-300 transition-all cursor-pointer text-base border border-slate-700 dark:border-slate-600">
              <Github className="h-5 w-5" /> github
            </span>
          </a>
          <a href="https://www.linkedin.com/in/amansharma97385/" target="_blank" rel="noopener noreferrer">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-800 text-blue-300 font-mono rounded shadow hover:bg-slate-800 dark:hover:bg-slate-700 hover:text-blue-300 dark:hover:text-blue-200 transition-all cursor-pointer text-base border border-slate-700 dark:border-slate-600">
              <Linkedin className="h-5 w-5" /> linkedin
            </span>
          </a>
          <a href="mailto:amansharma97385@gmail.com">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-800 text-pink-300 font-mono rounded shadow hover:bg-slate-800 dark:hover:bg-slate-700 hover:text-pink-300 dark:hover:text-pink-200 transition-all cursor-pointer text-base border border-slate-700 dark:border-slate-600">
              <Mail className="h-5 w-5" /> email
            </span>
          </a>
        </div>
        {/* Download Resume as terminal button */}
        <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
          <Button className="bg-black dark:bg-slate-800 text-green-400 font-mono px-10 py-4 rounded-b-lg rounded-t shadow-lg border-2 border-green-400 dark:border-green-500 hover:bg-slate-900 dark:hover:bg-slate-700 hover:text-green-300 transition-all duration-200 text-lg flex items-center gap-2">
            <Download className="h-6 w-6 mr-1" /> Download Resume
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
