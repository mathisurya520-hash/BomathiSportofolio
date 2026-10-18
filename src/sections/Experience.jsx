import React, { useState } from 'react';
import { Calendar, Briefcase, ChevronRight, CheckCircle2, Award, ShieldCheck } from 'lucide-react';
import { certificationsList } from './ResumeSection';
import CertificateLightboxModal from '../components/CertificateLightboxModal';

const experiencesData = [
  {
    company: 'Thiranex',
    role: 'Data Analyst Intern',
    period: '08 Jun 2026 – 07 Jul 2026',
    certId: 'thiranex-da',
    tasks: [
      'Developed five comprehensive interactive dashboards using Tableau and Power BI.',
      'Transformed raw data sources into actionable visual analytics for business intelligence reporting.',
      'Identified data discrepancies and optimized dashboard query performance.'
    ],
    skillsLearned: ['Tableau', 'Power BI', 'Dashboard Design', 'Data Analytics', 'BI Reporting'],
    color: 'border-teal-500/30'
  },
  {
    company: 'CodeAlpha',
    role: 'Data Science Intern',
    period: '10 Jul 2026 – 10 Aug 2026',
    certId: 'codealpha-datascience',
    tasks: [
      'Gained hands-on experience with Python, NumPy, Pandas, Anaconda, and Conda.',
      'Conducted exploratory data analysis (EDA), data cleaning, and statistical evaluations on tabular datasets.',
      'Documented reproducible analytical notebooks and data science workflows.'
    ],
    skillsLearned: ['Python', 'NumPy', 'Pandas', 'Anaconda', 'Conda', 'Data Science'],
    color: 'border-stone-200/50'
  },
  {
    company: 'CodeAlpha',
    role: 'Power BI Intern',
    period: '20 Aug 2026 – 20 Sep 2026',
    certId: 'codealpha-powerbi',
    tasks: [
      'Developed interactive Power BI dashboards and used DAX to create calculated measures for data-driven analysis.',
      'Built multi-dimensional data models and established relationships between disparate operational tables.',
      'Engineered dynamic KPI tracking visualizations to enhance executive decision-making.'
    ],
    skillsLearned: ['Power BI', 'DAX', 'Calculated Measures', 'Data Modeling', 'Data Visualization'],
    color: 'border-stone-200/50'
  },
  {
    company: 'TATA (via Forage)',
    role: 'GenAI Data Analytics Simulation',
    period: 'Completed March 2026',
    certId: 'tata-genai-analytics',
    tasks: [
      'Exploratory data analysis and customer risk profiling on lending portfolio data.',
      'Predicting customer delinquency using AI and classification modeling techniques.',
      'Formulating business reports and data storytelling for an AI-driven collections strategy.',
      'Implementing automated decisioning workflows for risk mitigation.'
    ],
    skillsLearned: ['GenAI Analytics', 'Risk Profiling', 'Predictive AI', 'Data Storytelling', 'Strategy'],
    color: 'border-blue-500/30'
  },
  {
    company: 'Deloitte (via Forage)',
    role: 'Data Analytics Job Simulation',
    period: 'Completed May 2026',
    certId: 'deloitte-da',
    tasks: [
      'Executed data analysis procedures on enterprise financial and operational transaction sets.',
      'Applied forensic technology workflows to detect anomalies and verify data integrity.',
      'Drafted clear findings summaries and visual recommendations for stakeholder briefings.'
    ],
    skillsLearned: ['Data Analysis', 'Forensic Technology', 'Data Integrity', 'Executive Communication'],
    color: 'border-emerald-500/30'
  },
  {
    company: 'Prodigy InfoTech',
    role: 'Web Development Intern',
    period: '01 May 2026 – 31 May 2026',
    certId: 'prodigy-webdev',
    tasks: [
      'Built responsive web applications and interactive UI components with modern front-end standards.',
      'Implemented clean DOM architecture, state handling, event listeners, and performance optimizations.',
      'Completed 1-month internship with outstanding remarks at Prodigy InfoTech.'
    ],
    skillsLearned: ['Web Development', 'JavaScript', 'HTML5/CSS3', 'UI Engineering', 'Responsive Design'],
    color: 'border-indigo-500/30'
  },
  {
    company: 'CodeSoft',
    role: 'Data Analytics Intern',
    period: 'Internship Experience',
    tasks: [
      'Developed interactive dashboards to analyze business data and track key performance indicators, including profit and loss.',
      'Synthesized complex revenue and expenditure trends into intuitive visual scorecards.',
      'Assisted in data extraction, validation, and performance metric computation.'
    ],
    skillsLearned: ['Data Analytics', 'KPI Tracking', 'Profit & Loss Analysis', 'Interactive Dashboards'],
    color: 'border-stone-200/50'
  },
  {
    company: 'Oasis Infobyte',
    role: 'Data Analytics Intern',
    period: 'Internship Experience',
    tasks: [
      'Developed interactive dashboards to analyze business data and track key performance among the analysis.',
      'Assessed key operational metrics and formatted business data for clear stakeholder visibility.',
      'Applied analytical techniques to uncover underlying trends in commercial datasets.'
    ],
    skillsLearned: ['Data Analytics', 'Dashboard Creation', 'Performance Analytics', 'Business Intelligence'],
    color: 'border-stone-200/50'
  }
];

const Experience = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  const handleOpenCertById = (certId) => {
    const cert = certificationsList.find(c => c.id === certId);
    if (cert) {
      setSelectedCert(cert);
      setIsCertModalOpen(true);
    }
  };

  return (
    <section id="experience" className="py-24 px-6 relative border-t border-stone-200/30 bg-[#faf7f2]">
      
      {/* Background ambient lighting */}
      <div className="absolute left-0 bottom-1/4 w-80 h-80 rounded-full bg-teal-500/4 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-left mb-16 md:text-center md:items-center md:flex md:flex-col">
          <span className="text-xs font-space uppercase tracking-widest text-teal-600 font-bold">04 / Journey</span>
          <h2 className="text-3xl md:text-5xl font-space font-bold text-[#2d2722] mt-2">Internships &amp; Experience</h2>
          <p className="text-stone-500 text-xs sm:text-sm font-poppins mt-2 max-w-md font-light">
            Verified internship track record across Data Analytics, Data Science, and Power BI development.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-stone-200 ml-4 md:ml-32 py-4 space-y-12">
          
          {experiencesData.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              
              {/* Timeline Glowing Node */}
              <span className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-teal-600 shadow-[0_0_10px_rgba(13,148,136,0.3)] transition-all duration-300 group-hover:scale-125 group-hover:bg-teal-600" />

              {/* Side Date Tag (Desktop Only) */}
              <div className="absolute right-full mr-8 top-1 hidden md:flex flex-col items-end w-28">
                <span className="text-xs font-bold font-space text-stone-800">{exp.company}</span>
                <span className="text-[10px] text-teal-700 font-mono mt-0.5 uppercase font-semibold">Verified</span>
              </div>

              {/* Experience Card */}
              <div className={`glass-card p-6 md:p-8 rounded-3xl border transition-all duration-300 text-left shadow-xs hover:shadow-md bg-white/75 ${exp.color}`}>
                
                {/* Mobile Company label */}
                <div className="flex items-center justify-between text-xs text-stone-500 font-semibold mb-3 md:hidden">
                  <div className="flex items-center space-x-2">
                    <Calendar size={12} className="text-teal-600" />
                    <span>{exp.company}</span>
                  </div>
                  {exp.period && <span className="text-[10px] font-mono text-stone-400">{exp.period}</span>}
                </div>

                {/* Company & Role */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-space font-bold text-[#2d2722] tracking-wide">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-sm font-bold text-teal-700">{exp.company}</span>
                      {exp.period && (
                        <span className="text-xs text-stone-400 font-mono hidden sm:inline">
                          • {exp.period}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {exp.certId && (
                      <button
                        onClick={() => handleOpenCertById(exp.certId)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-50 hover:bg-teal-100 border border-teal-200 text-teal-800 text-xs font-semibold shadow-2xs transition-all cursor-pointer"
                        title="View Official Certificate"
                      >
                        <ShieldCheck size={13} className="text-teal-600" />
                        <span>View Certificate</span>
                      </button>
                    )}
                    <div className="p-2 bg-white rounded-lg border border-stone-200/50 text-teal-700 shadow-xs">
                      <Briefcase size={16} />
                    </div>
                  </div>
                </div>

                {/* Tasks Bullet List */}
                <ul className="space-y-2.5 mb-6">
                  {exp.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="flex items-start text-xs text-stone-600 leading-relaxed font-poppins font-light">
                      <ChevronRight size={14} className="text-teal-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills learned tags */}
                <div className="border-t border-stone-100 pt-4 flex flex-wrap gap-1.5">
                  {exp.skillsLearned.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-[9px] font-mono font-bold text-teal-800 px-2 py-0.5 rounded-md bg-teal-50 border border-teal-200/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Lightbox Modal for inspecting certificates from timeline */}
      <CertificateLightboxModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        selectedCert={selectedCert}
        certificates={certificationsList}
        onSelectCert={(cert) => setSelectedCert(cert)}
      />
    </section>
  );
};

export default Experience;
