import React, { useEffect, useState } from 'react';
import { Award, Layers, Terminal, Cpu, GraduationCap, CheckCircle2, BookOpen, Compass } from 'lucide-react';
import heroImg from '../assets/hero.jpg';

const statsData = [
  { label: 'Featured Projects', count: 5, suffix: '', icon: Layers, color: 'text-teal-600' },
  { label: 'Internships Done', count: 6, suffix: '+', icon: Award, color: 'text-pink-600' },
  { label: 'Certificates & Papers', count: 15, suffix: '+', icon: BookOpen, color: 'text-teal-600' },
  { label: 'Academic CGPA', count: 8.3, suffix: '', isDecimal: true, icon: GraduationCap, color: 'text-amber-600' },
];

const StatCard = ({ label, count, suffix, isDecimal, icon: Icon, color }) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const target = count;
    
    if (isDecimal) {
      setCurrentCount(count);
      return;
    }

    const increment = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCurrentCount(target);
        clearInterval(timer);
      } else {
        setCurrentCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [count, isDecimal]);

  return (
    <div className="glass-card p-5 rounded-2xl border border-stone-200/50 flex flex-col items-start text-left relative overflow-hidden group bg-white/70">
      <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-teal-100/20 group-hover:bg-teal-100/40 blur-xl transition-all duration-500" />
      
      <div className={`p-2.5 rounded-xl bg-white border border-stone-200/60 ${color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xs`}>
        <Icon size={20} />
      </div>

      <span className="text-3xl font-space font-bold text-[#2d2722] tracking-tight">
        {currentCount}
        {suffix}
      </span>
      <span className="text-xs text-stone-500 font-poppins mt-2 tracking-wide font-medium">{label}</span>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden border-t border-stone-200/30">
      {/* Decorative Accent Blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-16">
          <span className="text-xs font-space uppercase tracking-widest text-teal-600 font-bold">01 / Profile</span>
          <h2 className="text-3xl md:text-5xl font-space font-bold text-[#2d2722] mt-2">About Myself</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Portrait Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] glass-card rounded-3xl p-2 border border-stone-200/50 flex items-center justify-center shadow-lg overflow-hidden group">
              <img 
                src={heroImg} 
                alt="Bomathi S" 
                className="w-full h-full object-cover rounded-[22px] group-hover:scale-102 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              {/* Technical details overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-white bg-black/60 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/10 shadow-sm">
                <span>SECURE_ID: BOMATHI_S</span>
                <span className="flex items-center gap-1.5 text-teal-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  VERIFIED_STUDENT
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Text Bio and Stats Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-space font-bold text-[#2d2722] tracking-wide">
                Bomathi S — Computer Science Engineering Student
              </h3>
              
              {/* Exact Resume Professional Summary */}
              <div className="p-4 rounded-2xl bg-teal-500/5 border border-teal-500/20 text-stone-700 font-poppins text-sm leading-relaxed font-light">
                <p>
                  "Computer Science Engineering student with project experience in Python, SQL, data analytics, dashboard development, and AI-powered applications. Familiar with Tableau and Power BI for data visualization and with Python libraries for data analysis. Interested in Data Analytics, Data Science, and Machine Learning, with a focus on building practical, data-driven solutions."
                </p>
              </div>

              <p className="text-stone-600 font-poppins text-sm leading-relaxed font-light">
                Currently pursuing a Bachelor of Engineering in Computer Science and Engineering at <strong className="text-teal-800 font-semibold">Sri Shakthi Institute of Engineering and Technology (2024–2028)</strong> with a <strong className="text-teal-800 font-semibold">CGPA of 8.3</strong>.
              </p>

              <p className="text-stone-600 font-poppins text-sm leading-relaxed font-light">
                Previous academic milestones include achieving <strong className="text-stone-800 font-medium">85.6%</strong> in Class XII (2024) and <strong className="text-stone-800 font-medium">90.2%</strong> in Class X (2022) at Bannari Amman Vidya Niketan MHSS.
              </p>
            </div>

            {/* Statistics Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {statsData.map((stat, index) => (
                <StatCard
                  key={index}
                  label={stat.label}
                  count={stat.count}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                  icon={stat.icon}
                  color={stat.color}
                />
              ))}
            </div>

            {/* Quick Summary Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700">
                Data Analytics
              </span>
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700">
                Machine Learning
              </span>
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700">
                Power BI &amp; Tableau
              </span>
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700">
                SQL &amp; Database Design
              </span>
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700">
                Python Data Science
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
