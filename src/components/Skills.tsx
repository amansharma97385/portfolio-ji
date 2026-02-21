
import { Code, Database, Palette, Cpu, Zap, Rocket } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "bg-blue-500",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "PHP", level: 80 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-green-500",
      skills: [
        { name: "Flask", level: 85 },
        { name: "React", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "Bootstrap", level: 90 }
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-6 h-6" />,
      color: "bg-purple-500",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 80 }
      ]
    },
    {
      title: "Design & Other",
      icon: <Palette className="w-6 h-6" />,
      color: "bg-orange-500",
      skills: [
        { name: "UI/UX Design", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 relative bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden w-full">
      {/* Subtle grid background */}
      <div className="dark:hidden absolute inset-0 pointer-events-none z-0" style={{backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
      <div className="hidden dark:block absolute inset-0 pointer-events-none z-0" style={{backgroundImage: 'linear-gradient(to right, #374151 1px, transparent 1px), linear-gradient(to bottom, #374151 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-2 bg-gradient-to-r from-blue-600 via-fuchsia-600 to-cyan-500 bg-clip-text text-transparent select-none">Skills & Expertise</h2>
        </div>
        
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow border border-gray-200 dark:border-slate-700 min-w-0">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 min-w-0">
                <div className={`p-2 sm:p-3 ${category.color} rounded-full shrink-0`}>
                  {category.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white truncate min-w-0">{category.title}</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="min-w-0">
                    <div className="flex justify-between items-center mb-1 sm:mb-2 gap-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base truncate min-w-0">{skill.name}</span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-sm sm:text-base shrink-0">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2 min-w-0">
                      <div 
                        className={`h-1.5 sm:h-2 ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional skills showcase */}
        <div className="mt-10 sm:mt-16 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-slate-700">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {[
                "REST APIs", "Web Development", "Chrome Extensions", "Tkinter",
                "Speech Recognition", "PyAutoGUI", "Responsive Design", "Wireframing",
                "Visual Design", "Accessibility", "Leadership", "Project Management"
              ].map((skill) => (
                <span key={skill} className="bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
