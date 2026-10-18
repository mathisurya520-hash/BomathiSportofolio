import React from 'react';
import { Terminal, BarChart3, Cpu, Wrench, CheckCircle2 } from 'lucide-react';

const skillsData = [
  {
    category: 'Programming',
    icon: Terminal,
    iconColor: 'text-teal-700',
    barColor: 'bg-teal-600',
    glowColor: 'rgba(13, 148, 136, 0.4)',
    description: 'Core languages for algorithm design, data pipelines, backend development, and web scripting.',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'SQL', level: 90 },
      { name: 'Java', level: 82 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML & CSS', level: 90 },
    ]
  },
  {
    category: 'Data Analytics & BI',
    icon: BarChart3,
    iconColor: 'text-pink-600',
    barColor: 'bg-pink-600',
    glowColor: 'rgba(219, 39, 119, 0.4)',
    description: 'Business intelligence, exploratory data analysis, KPI visualization, and DAX modeling.',
    skills: [
      { name: 'Tableau', level: 88 },
      { name: 'Power BI', level: 90 },
      { name: 'Data Analysis', level: 92 },
      { name: 'Data Visualization', level: 90 },
    ]
  },
  {
    category: 'AI & Data Science',
    icon: Cpu,
    iconColor: 'text-teal-700',
    barColor: 'bg-teal-600',
    glowColor: 'rgba(13, 148, 136, 0.4)',
    description: 'Generative AI workflows, prompt engineering, numerical manipulation, and data wrangling.',
    skills: [
      { name: 'Generative AI', level: 85 },
      { name: 'Prompt Engineering', level: 88 },
      { name: 'NumPy', level: 90 },
      { name: 'Pandas', level: 92 },
    ]
  },
  {
    category: 'Frameworks & Tools',
    icon: Wrench,
    iconColor: 'text-pink-600',
    barColor: 'bg-stone-800',
    glowColor: 'rgba(28, 25, 23, 0.3)',
    description: 'Fullstack web tools, cross-platform mobile, databases, virtual environments, and productivity suites.',
    skills: [
      { name: 'React & Node.js', level: 86 },
      { name: 'Express.js & MongoDB', level: 84 },
      { name: 'Flutter', level: 80 },
      { name: 'Anaconda & Conda', level: 88 },
      { name: 'Microsoft Office / Excel', level: 90 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative border-t border-stone-200/30 bg-[#faf7f2]">
      
      {/* Background soft glows */}
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-pink-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 rounded-full bg-teal-500/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-left mb-16">
          <span className="text-xs font-space uppercase tracking-widest text-teal-600 font-bold">02 / Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-space font-bold text-[#2d2722] mt-2">Technical Skills</h2>
          <p className="text-stone-500 text-xs sm:text-sm font-poppins mt-2 max-w-xl font-light">
            Verified skills and competencies extracted directly from Bomathi S's professional technical resume.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((categoryObj, idx) => {
            const Icon = categoryObj.icon;
            return (
              <div 
                key={idx} 
                className="glass-card p-6 rounded-3xl border border-stone-200/50 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md bg-white/70"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2.5 rounded-2xl bg-[#faf7f2] ${categoryObj.iconColor} border border-stone-200/60 shadow-xs`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="text-base font-space font-bold text-[#2d2722] tracking-wide">{categoryObj.category}</h3>
                  </div>

                  <p className="text-[11px] text-stone-500 font-poppins mb-6 leading-relaxed font-light text-left">
                    {categoryObj.description}
                  </p>

                  {/* Skills Progress Lines */}
                  <div className="space-y-4">
                    {categoryObj.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5 text-left">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-poppins font-medium text-stone-700">{skill.name}</span>
                          <span className="font-space font-bold text-stone-900 text-[11px]">{skill.level}%</span>
                        </div>
                        {/* Progress Bar Track */}
                        <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden border border-stone-200/40">
                          <div 
                            className={`h-full rounded-full transition-all duration-1000 ${categoryObj.barColor}`}
                            style={{ 
                              width: `${skill.level}%`,
                              boxShadow: `0 0 6px ${categoryObj.glowColor}`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer details */}
                <div className="border-t border-stone-100 pt-4 mt-6 flex items-center space-x-1.5 text-[10px] text-stone-500 font-mono">
                  <CheckCircle2 size={12} className={categoryObj.iconColor} />
                  <span>RESUME_VERIFIED_SKILL</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
