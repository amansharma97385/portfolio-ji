
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen w-full max-w-[100vw] font-inter bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-x-hidden">
      {/* Animated background elements - smaller on mobile */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-2000" />
        <div className="absolute top-20 left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-4000" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Top gradient line */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 h-px w-full max-w-[90vw] sm:max-w-[75%] bg-gradient-to-r from-transparent via-teal-400 to-transparent z-50" />
      
      <div className="relative z-10 w-full min-w-0">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
