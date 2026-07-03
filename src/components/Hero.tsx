
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen min-h-[100dvh] flex flex-col items-center justify-center bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden w-full">
      {/* Subtle grid background */}
      <div className="dark:hidden absolute inset-0 pointer-events-none z-0" style={{backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
      <div className="hidden dark:block absolute inset-0 pointer-events-none z-0" style={{backgroundImage: 'linear-gradient(to right, #374151 1px, transparent 1px), linear-gradient(to bottom, #374151 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl min-w-0 px-4 pt-24 pb-12 sm:pt-28 sm:pb-16 md:py-20">
        {/* Profile Image - scales down on small screens */}
        <div className="mb-4 sm:mb-6 md:mb-8 relative">
          <div className="absolute -right-3 -bottom-3 w-36 h-36 sm:-right-4 sm:-bottom-4 sm:w-44 sm:h-44 md:-right-6 md:-bottom-6 md:w-56 md:h-56 rounded-full bg-blue-100 dark:bg-blue-900 border-2 border-blue-200 dark:border-blue-700 z-0" />
          <img
            src="/port-uploads/df4b7a15-fe2e-4f19-9762-502d1a23aeb3.png"
            alt="Aman Sharma"
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-lg relative z-10"
            style={{ boxShadow: '0 8px 32px 0 rgba(124, 58, 237, 0.25)' }}
          />
        </div>
        {/* Name with gradient - responsive type scale */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-6 sm:mb-8 tracking-tight leading-tight bg-gradient-to-r from-blue-600 via-fuchsia-600 to-cyan-500 bg-clip-text text-transparent select-none px-1">
          Aman Sharma
        </h1>
        {/* Socials - wrap on narrow screens */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-10">
          <a href="https://github.com/amansharma97385" target="_blank" rel="noopener noreferrer" className="shrink-0">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-900 dark:bg-slate-800 text-green-400 font-mono rounded shadow hover:bg-slate-800 dark:hover:bg-slate-700 transition-all cursor-pointer text-sm sm:text-base border border-slate-700 dark:border-slate-600">
              <Github className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" /> github
            </span>
          </a>
          <a href="https://www.linkedin.com/in/amansharma97385/" target="_blank" rel="noopener noreferrer" className="shrink-0">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-900 dark:bg-slate-800 text-blue-300 font-mono rounded shadow hover:bg-slate-800 dark:hover:bg-slate-700 transition-all cursor-pointer text-sm sm:text-base border border-slate-700 dark:border-slate-600">
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" /> linkedin
            </span>
          </a>
          <a href="mailto:amansharma97385@gmail.com" className="shrink-0">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-900 dark:bg-slate-800 text-pink-300 font-mono rounded shadow hover:bg-slate-800 dark:hover:bg-slate-700 transition-all cursor-pointer text-sm sm:text-base border border-slate-700 dark:border-slate-600">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" /> email
            </span>
          </a>
        </div>
        {/* Download Resume - full width on mobile */}
        <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto max-w-xs sm:max-w-none">
          <Button className="w-full sm:w-auto bg-black dark:bg-slate-800 text-green-400 font-mono px-6 py-3 sm:px-10 sm:py-4 rounded-b-lg rounded-t shadow-lg border-2 border-green-400 dark:border-green-500 hover:bg-slate-900 dark:hover:bg-slate-700 hover:text-green-300 transition-all duration-200 text-base sm:text-lg flex items-center justify-center gap-2">
            <Download className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" /> Download Resume
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
