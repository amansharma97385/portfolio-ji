
import { GraduationCap, Award, User, Briefcase } from 'lucide-react';

const About = () => {
  const experience = [
    {
      role: "Systems Associate",
      company: "Infosys",
      period: "January 2026 – Present",
      description: "Full-time Systems Associate working in Cloud & Infrastructure Services (CIS) – EXOS stream, supporting enterprise IT environments."
    },
    {
      role: "Systems Associate Trainee",
      company: "Infosys",
      period: "September 2025 – December 2025",
      description: "Completed training under CIS (Cloud & Infrastructure Services) – EXOS track with hands-on exposure to enterprise tools and infrastructure concepts."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Graphic Era Hill University, Dehradun",
      year: "2022-2025",
      details: "CGPA: 8.12/10",
      courses: "Relevant Coursework: Data Structures, Web Development, Database Management"
    },
    {
      degree: "Intermediate (Class 12) – CBSE",
      institution: "Kendriya Vidyalaya Uttarkashi, Uttarakhand",
      year: "2021-2022",
      details: "Completed with distinction in Science stream"
    },
    {
      degree: "High School (Class 10) – CBSE",
      institution: "Kendriya Vidyalaya Uttarkashi, Uttarakhand",
      year: "2019-2020",
      details: "Excelled in Mathematics and Science subjects"
    }
  ];

  const certifications = [
    {
      title: "Foundations of User Experience (UX) Design on Coursera",
      image: "/port-uploads/uiux.png"
    },
    {
      title: "CSS, JavaScript, PHP and Python Programming All in One Course on Udemy",
      image: "/port-uploads/css,jss,php and python.png"
    },
    {
      title: "Python and Flask Demonstrations Practice Course on Udemy",
      image: "/port-uploads/py and flask.png"
    },
    {
      title: "PHP Tutorial Beginner to Advanced on Udemy",
      image: "/port-uploads/php.png"
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Subtle grid background */}
      <div className="dark:hidden absolute inset-0 pointer-events-none z-0" style={{backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
      <div className="hidden dark:block absolute inset-0 pointer-events-none z-0" style={{backgroundImage: 'linear-gradient(to right, #374151 1px, transparent 1px), linear-gradient(to bottom, #374151 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-center mb-2 bg-gradient-to-r from-blue-600 via-fuchsia-600 to-cyan-500 bg-clip-text text-transparent select-none">About Me</h2>
        </div>
        
        <div className="space-y-12">
          {/* Bio Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <User className="w-7 h-7 text-green-500" />
              <h3 className="text-2xl font-mono font-semibold text-slate-800 dark:text-slate-200">Professional Summary</h3>
            </div>
            <div className="bg-slate-900 dark:bg-slate-800 text-blue-100 dark:text-blue-200 font-mono rounded shadow border border-slate-700 dark:border-slate-600 p-6">
              <p className="text-slate-300 dark:text-slate-400 font-mono leading-relaxed text-base">
                Computer Applications graduate currently working as a Systems Associate at Infosys, with practical exposure to Windows Administration, PowerShell, ServiceNow, Microsoft 365, and Entra ID. Strong technical foundation in Python, Flask, and AI/ML concepts. Skilled in troubleshooting, automation, and system support while continuously expanding expertise in software engineering and cloud technologies.
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-7 h-7 text-amber-500" />
              <h3 className="text-2xl font-mono font-semibold text-slate-800 dark:text-slate-200">💼 Experience</h3>
            </div>
            <div className="grid gap-4">
              {experience.map((exp) => (
                <div key={exp.role} className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 bg-slate-900 dark:bg-slate-800 text-blue-100 dark:text-blue-200 font-mono rounded shadow px-6 py-4 mb-2 border border-slate-700 dark:border-slate-600">
                  <div>
                    <span className="text-green-400">{'>'}</span> <span className="font-bold text-lg">{exp.role}</span>
                    <div className="text-blue-200 dark:text-blue-300 text-base">{exp.company}</div>
                    <p className="text-sm text-slate-400 dark:text-slate-500 mt-2 leading-relaxed">{exp.description}</p>
                  </div>
                  <span className="text-sm text-green-300 dark:text-green-400 bg-slate-800 dark:bg-slate-700 px-3 py-1 rounded-full shrink-0">{exp.period}</span>
                </div>
              ))}
            </div>
          </div>
  
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-7 h-7 text-blue-500" />
              <h3 className="text-2xl font-mono font-semibold text-slate-800 dark:text-slate-200">Education</h3>
            </div>
            <div className="grid gap-4">
              {education.map((edu, index) => (
                <div key={edu.degree} className="flex flex-col md:flex-row md:items-center md:justify-between bg-slate-900 dark:bg-slate-800 text-blue-100 dark:text-blue-200 font-mono rounded shadow px-6 py-4 mb-2 border border-slate-700 dark:border-slate-600">
                  <div>
                    <span className="text-green-400">{'>'}</span> <span className="font-bold text-lg">{edu.degree}</span>
                    <div className="text-blue-200 dark:text-blue-300 text-base">{edu.institution}</div>
                    <div className="text-sm text-slate-400 dark:text-slate-500">{edu.details}</div>
                    {edu.courses && <div className="text-sm text-slate-500 dark:text-slate-400">{edu.courses}</div>}
                  </div>
                  <span className="text-sm text-green-300 dark:text-green-400 bg-slate-800 dark:bg-slate-700 px-3 py-1 rounded-full mt-2 md:mt-0">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>
  
          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-7 h-7 text-fuchsia-500" />
              <h3 className="text-2xl font-mono font-semibold text-slate-800 dark:text-slate-200">Certifications</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex flex-col items-center bg-slate-900 dark:bg-slate-800 text-blue-100 dark:text-blue-200 font-mono rounded shadow px-6 py-4 border border-slate-700 dark:border-slate-600">
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-slate-800 dark:bg-slate-700 flex items-center justify-center">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="max-h-44 object-contain"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full flex items-center justify-center">
                      <span className="text-slate-400 dark:text-slate-500 text-base text-center px-4">{cert.title}</span>
                    </div>
                  </div>
                  <span className="font-bold text-blue-200 dark:text-blue-300 text-base leading-tight text-center">{cert.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
