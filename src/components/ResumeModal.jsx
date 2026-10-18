import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, ExternalLink, Mail, Phone, Globe, GraduationCap, Award, Briefcase, Code, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const resumeText = `BOMATHI S
COMPUTER SCIENCE ENGINEERING STUDENT | DATA ANALYTICS & DATA SCIENCE
Phone: 6381270345 | Email: mathisurya520@gmail.com
LinkedIn: https://www.linkedin.com/in/bomathi-suryaprakasam
GitHub: https://github.com/mathisurya520-hash
Portfolio: https://portfolio-3-tggt.onrender.com/

PROFESSIONAL SUMMARY
Computer Science Engineering student with project experience in Python, SQL, data analytics, dashboard development, and AI-powered applications. Familiar with Tableau and Power BI for data visualization and with Python libraries for data analysis. Interested in Data Analytics, Data Science, and Machine Learning, with a focus on building practical, data-driven solutions.

TECHNICAL SKILLS
Programming: Python, SQL, Java, JavaScript, HTML, CSS
Data Analytics & BI: Tableau, Power BI, Data Analysis, Data Visualization
AI & Data: Generative AI, Prompt Engineering, NumPy, Pandas
Frameworks & Tools: React, Node.js, Express.js, Flutter, MongoDB, Anaconda, Conda, Microsoft Office

PROJECTS
• Customer Churn Prediction: Analyzed customer data to identify churn patterns based on customer tenure, contract type, and service usage. Explored customer behavior and developed insights to support customer retention strategies. (Tech: Python, Pandas, Scikit-learn, SQL, Power BI)
• Google Play Store Analysis: Performed data cleaning and exploratory data analysis on Google Play Store data to examine app ratings, reviews, installs, and categories. Identified app performance trends and compared application categories. (Tech: Python, Pandas, NumPy, Matplotlib, Seaborn)
• Diabetes Data Analysis: Analyzed a diabetes dataset to explore patterns across glucose levels, BMI, age, and other available health-related variables. Created data visualizations to identify correlations and compare recorded outcome patterns. (Tech: Python, Pandas, NumPy, Matplotlib, Seaborn)
• Breast Cancer Data Analysis: Performed exploratory data analysis on a breast cancer dataset to examine tumor-related features and recorded diagnosis groups. Applied data visualization and statistical analysis to identify patterns in the dataset. (Tech: Python, Pandas, NumPy, Matplotlib, Seaborn)
• Unemployment Trend Analysis: Analyzed unemployment data to explore changes over time and compare trends across available regions. Created visualizations to highlight unemployment patterns and communicate key economic insights. (Tech: Python, Pandas, NumPy, Matplotlib, Seaborn)

INTERNSHIPS & EXPERIENCE
• Data Analyst Intern – Thiranex: Developed five dashboards using Tableau and Power BI.
• Data Science Intern – CodeAlpha: Gained experience with Python, NumPy, Pandas, Anaconda, and Conda.
• Power BI Intern – CodeAlpha: Developed interactive Power BI dashboards and used DAX to create calculated measures for data-driven analysis.
• Data Analytics Intern – CodeSoft: Developed interactive dashboards to analyze business data and track key performance indicators, including profit and loss.
• Data Analytics Intern – Oasis Infobyte: Developed interactive dashboards to analyze business data and track key performance among the analysis.

EDUCATION
• B.E. Computer Science and Engineering | Sri Shakthi Institute of Engineering and Technology | 2024–2028 | CGPA: 8.3
• Class XII: 85.6% (2024) – Bannari Amman Vidya Niketan MHSS
• Class X: 90.2% (2022) – Bannari Amman Vidya Niketan MHSS

CERTIFICATIONS
• Data Base Management System (Elite 60%) – NPTEL (IIT Kharagpur)
• SQL (Intermediate) Certification – HackerRank
• SQL (Basic) Certification – HackerRank
• Java (Basic) Certification – HackerRank
• Introduction to Generative AI – AWS
• Data Analytics Internship – Thiranex EduTech
• GenAI Powered Data Analytics Simulation – TATA (via Forage)
• Data Analytics Job Simulation – Deloitte (via Forage)
• Power BI Virtual Internship – CodeAlpha
• Data Science Virtual Internship – CodeAlpha
• Web Development Internship – Prodigy InfoTech
• Introduction to Excel – Great Learning Academy
• Introduction to Digital Marketing – Great Learning Academy
• Research Paper: Touch Free Extension – Journal of Technology (UGC-CARE & Scopus)
• Research Paper: Festivo: Event Management System – Journal of Technology (UGC-CARE & Scopus)

AREAS OF INTEREST & STRENGTHS
• Areas of Interest: Machine Learning, Data Analytics, Artificial Intelligence, Computer Vision, Business Intelligence, Data Engineering
• Strengths: Problem Solving, Analytical Thinking, Self-Learning, Team Collaboration, Communication`;

    navigator.clipboard.writeText(resumeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-xl bg-teal-500/10 text-teal-700">
              <FileText size={18} />
            </span>
            <div>
              <h3 className="text-base font-space font-bold text-stone-900 leading-none">Bomathi S — Official Resume</h3>
              <p className="text-[11px] text-stone-500 font-poppins mt-0.5">Verified ATS Resume Document</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 hover:text-teal-700 bg-white hover:bg-stone-100 rounded-xl border border-stone-200 shadow-sm transition-all"
              title="Copy Resume Plaintext"
            >
              {copied ? <Check size={14} className="text-teal-600" /> : <Copy size={14} />}
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 hover:text-teal-700 bg-white hover:bg-stone-100 rounded-xl border border-stone-200 shadow-sm transition-all"
              title="Print Resume"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href="/Bomathi_S_Resume.pdf"
              download="Bomathi_S_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-sm transition-all"
              title="Download PDF Resume"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-all ml-1"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-left font-poppins selection:bg-teal-100 selection:text-teal-900 bg-white text-stone-800">
          
          {/* Header */}
          <div className="text-center border-b border-stone-200 pb-5">
            <h1 className="text-3xl sm:text-4xl font-space font-bold text-teal-800 tracking-tight">BOMATHI S</h1>
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-teal-700 uppercase mt-1">
              Computer Science Engineering Student | Data Analytics & Data Science
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-stone-600 mt-3 font-mono">
              <a href="tel:6381270345" className="hover:text-teal-700 flex items-center gap-1">
                <Phone size={11} className="text-teal-600" />
                6381270345
              </a>
              <span>•</span>
              <a href="mailto:mathisurya520@gmail.com" className="hover:text-teal-700 flex items-center gap-1">
                <Mail size={11} className="text-teal-600" />
                mathisurya520@gmail.com
              </a>
              <span>•</span>
              <a 
                href="https://www.linkedin.com/in/bomathi-suryaprakasam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-teal-700 flex items-center gap-1"
              >
                <Linkedin size={11} className="text-teal-600" />
                linkedin.com/in/bomathi-suryaprakasam
              </a>
              <span>•</span>
              <a 
                href="https://github.com/mathisurya520-hash" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-teal-700 flex items-center gap-1"
              >
                <Github size={11} className="text-teal-600" />
                github.com/mathisurya520-hash
              </a>
              <span>•</span>
              <a 
                href="https://portfolio-3-tggt.onrender.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-teal-700 flex items-center gap-1"
              >
                <Globe size={11} className="text-teal-600" />
                portfolio-3-tggt.onrender.com
              </a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div>
            <div className="flex items-center space-x-2 border-b-2 border-teal-600 pb-1 mb-2.5">
              <Sparkles size={14} className="text-teal-700" />
              <h2 className="text-xs font-space font-bold tracking-wider text-teal-800 uppercase">Professional Summary</h2>
            </div>
            <p className="text-xs sm:text-[13px] text-stone-700 leading-relaxed font-light">
              Computer Science Engineering student with project experience in Python, SQL, data analytics, dashboard development, and AI-powered applications. Familiar with Tableau and Power BI for data visualization and with Python libraries for data analysis. Interested in Data Analytics, Data Science, and Machine Learning, with a focus on building practical, data-driven solutions.
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div>
            <div className="flex items-center space-x-2 border-b-2 border-teal-600 pb-1 mb-2.5">
              <Code size={14} className="text-teal-700" />
              <h2 className="text-xs font-space font-bold tracking-wider text-teal-800 uppercase">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-1 gap-2 text-xs sm:text-[13px]">
              <div>
                <span className="font-bold text-stone-900">Programming: </span>
                <span className="text-stone-700">Python, SQL, Java, JavaScript, HTML, CSS</span>
              </div>
              <div>
                <span className="font-bold text-stone-900">Data Analytics & BI: </span>
                <span className="text-stone-700">Tableau, Power BI, Data Analysis, Data Visualization</span>
              </div>
              <div>
                <span className="font-bold text-stone-900">AI & Data: </span>
                <span className="text-stone-700">Generative AI, Prompt Engineering, NumPy, Pandas</span>
              </div>
              <div>
                <span className="font-bold text-stone-900">Frameworks & Tools: </span>
                <span className="text-stone-700">React, Node.js, Express.js, Flutter, MongoDB, Anaconda, Conda, Microsoft Office</span>
              </div>
            </div>
          </div>

          {/* Section: Projects */}
          <div>
            <div className="flex items-center space-x-2 border-b-2 border-teal-600 pb-1 mb-3">
              <Briefcase size={14} className="text-teal-700" />
              <h2 className="text-xs font-space font-bold tracking-wider text-teal-800 uppercase">Projects</h2>
            </div>
            
            <div className="space-y-4">
              {/* Project 1 */}
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-stone-900">Customer Churn Prediction</h3>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">ML & BI</span>
                </div>
                <ul className="list-disc list-inside text-xs text-stone-700 space-y-1 mt-1 font-light">
                  <li>Analyzed customer data to identify churn patterns based on customer tenure, contract type, and service usage.</li>
                  <li>Explored customer behavior and developed insights to support customer retention strategies.</li>
                </ul>
                <p className="text-[11px] text-stone-500 font-mono mt-1">
                  <strong className="text-stone-700">Tech Stack:</strong> Python, Pandas, Scikit-learn, SQL, Power BI
                </p>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-stone-900">Google Play Store Analysis</h3>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">Data Analytics</span>
                </div>
                <ul className="list-disc list-inside text-xs text-stone-700 space-y-1 mt-1 font-light">
                  <li>Performed data cleaning and exploratory data analysis on Google Play Store data to examine app ratings, reviews, installs, and categories.</li>
                  <li>Identified app performance trends and compared application categories.</li>
                </ul>
                <p className="text-[11px] text-stone-500 font-mono mt-1">
                  <strong className="text-stone-700">Tech Stack:</strong> Python, Pandas, NumPy, Matplotlib, Seaborn
                </p>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-stone-900">Diabetes Data Analysis</h3>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">Healthcare Analytics</span>
                </div>
                <ul className="list-disc list-inside text-xs text-stone-700 space-y-1 mt-1 font-light">
                  <li>Analyzed a diabetes dataset to explore patterns across glucose levels, BMI, age, and other available health-related variables.</li>
                  <li>Created data visualizations to identify correlations and compare recorded outcome patterns.</li>
                </ul>
                <p className="text-[11px] text-stone-500 font-mono mt-1">
                  <strong className="text-stone-700">Tech Stack:</strong> Python, Pandas, NumPy, Matplotlib, Seaborn
                </p>
              </div>

              {/* Project 4 */}
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-stone-900">Breast Cancer Data Analysis</h3>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">Biomedical Analytics</span>
                </div>
                <ul className="list-disc list-inside text-xs text-stone-700 space-y-1 mt-1 font-light">
                  <li>Performed exploratory data analysis on a breast cancer dataset to examine tumor-related features and recorded diagnosis groups.</li>
                  <li>Applied data visualization and statistical analysis to identify patterns in the dataset.</li>
                </ul>
                <p className="text-[11px] text-stone-500 font-mono mt-1">
                  <strong className="text-stone-700">Tech Stack:</strong> Python, Pandas, NumPy, Matplotlib, Seaborn
                </p>
              </div>

              {/* Project 5 */}
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-stone-900">Unemployment Trend Analysis</h3>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">Economic Analytics</span>
                </div>
                <ul className="list-disc list-inside text-xs text-stone-700 space-y-1 mt-1 font-light">
                  <li>Analyzed unemployment data to explore changes over time and compare trends across available regions.</li>
                  <li>Created visualizations to highlight unemployment patterns and communicate key economic insights.</li>
                </ul>
                <p className="text-[11px] text-stone-500 font-mono mt-1">
                  <strong className="text-stone-700">Tech Stack:</strong> Python, Pandas, NumPy, Matplotlib, Seaborn
                </p>
              </div>
            </div>
          </div>

          {/* Section: Internships & Experience */}
          <div>
            <div className="flex items-center space-x-2 border-b-2 border-teal-600 pb-1 mb-3">
              <Award size={14} className="text-teal-700" />
              <h2 className="text-xs font-space font-bold tracking-wider text-teal-800 uppercase">Internships & Experience</h2>
            </div>

            <div className="space-y-3.5">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-stone-900">Data Analyst Intern – Thiranex</h3>
                </div>
                <p className="text-xs text-stone-700 mt-0.5 font-light">• Developed five dashboards using Tableau and Power BI.</p>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-stone-900">Data Science Intern – CodeAlpha</h3>
                </div>
                <p className="text-xs text-stone-700 mt-0.5 font-light">• Gained experience with Python, NumPy, Pandas, Anaconda, and Conda.</p>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-stone-900">Power BI Intern – CodeAlpha</h3>
                </div>
                <p className="text-xs text-stone-700 mt-0.5 font-light">• Developed interactive Power BI dashboards and used DAX to create calculated measures for data-driven analysis.</p>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-stone-900">Data Analytics Intern – CodeSoft</h3>
                </div>
                <p className="text-xs text-stone-700 mt-0.5 font-light">• Developed interactive dashboards to analyze business data and track key performance indicators, including profit and loss.</p>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-stone-900">Data Analytics Intern – Oasis Infobyte</h3>
                </div>
                <p className="text-xs text-stone-700 mt-0.5 font-light">• Developed interactive dashboards to analyze business data and track key performance among the analysis.</p>
              </div>
            </div>
          </div>

          {/* Section: Education */}
          <div>
            <div className="flex items-center space-x-2 border-b-2 border-teal-600 pb-1 mb-2.5">
              <GraduationCap size={14} className="text-teal-700" />
              <h2 className="text-xs font-space font-bold tracking-wider text-teal-800 uppercase">Education</h2>
            </div>
            
            <div className="space-y-2 text-xs sm:text-[13px] text-stone-700">
              <div>
                <span className="font-bold text-stone-900">B.E. Computer Science and Engineering</span> | Sri Shakthi Institute of Engineering and Technology | 2024–2028 | <strong className="text-teal-700 font-bold">CGPA: 8.3</strong>
              </div>
              <div>
                <span className="font-bold text-stone-900">Class XII: 85.6% (2024)</span> – Bannari Amman Vidya Niketan MHSS
              </div>
              <div>
                <span className="font-bold text-stone-900">Class X: 90.2% (2022)</span> – Bannari Amman Vidya Niketan MHSS
              </div>
            </div>
          </div>

          {/* Section: Certifications & Publications */}
          <div>
            <div className="flex items-center space-x-2 border-b-2 border-teal-600 pb-1 mb-2.5">
              <Award size={14} className="text-teal-700" />
              <h2 className="text-xs font-space font-bold tracking-wider text-teal-800 uppercase">Certifications &amp; Publications (15 Verified Credentials)</h2>
            </div>
            
            <div className="space-y-2 text-xs sm:text-[13px] text-stone-700 leading-relaxed">
              <p>
                <strong className="text-stone-900 font-medium">Databases &amp; Programming:</strong>{' '}
                <span>DBMS (Elite 60%) – NPTEL IIT Kharagpur</span> &nbsp;|&nbsp; 
                <span>SQL (Intermediate) – HackerRank</span> &nbsp;|&nbsp; 
                <span>SQL (Basic) – HackerRank</span> &nbsp;|&nbsp; 
                <span>Java (Basic) – HackerRank</span>
              </p>
              <p>
                <strong className="text-stone-900 font-medium">Industry Internships &amp; Simulations:</strong>{' '}
                <span>Data Analytics – Thiranex</span> &nbsp;|&nbsp; 
                <span>GenAI Analytics Simulation – TATA</span> &nbsp;|&nbsp; 
                <span>Data Analytics Simulation – Deloitte</span> &nbsp;|&nbsp; 
                <span>Power BI – CodeAlpha</span> &nbsp;|&nbsp; 
                <span>Data Science – CodeAlpha</span> &nbsp;|&nbsp; 
                <span>Web Development – Prodigy InfoTech</span>
              </p>
              <p>
                <strong className="text-stone-900 font-medium">Cloud AI &amp; Analytics Skills:</strong>{' '}
                <span>Generative AI (Art of the Possible) – AWS</span> &nbsp;|&nbsp; 
                <span>Introduction to Excel – Great Learning</span> &nbsp;|&nbsp; 
                <span>Digital Marketing – Great Learning</span>
              </p>
              <p>
                <strong className="text-stone-900 font-medium">Peer-Reviewed Research Publications:</strong>{' '}
                <span>"Touch Free Extension" – Journal of Technology (UGC-CARE &amp; Scopus, IF 5.1)</span> &nbsp;|&nbsp; 
                <span>"Festivo: Event Management System" – Journal of Technology (UGC-CARE &amp; Scopus, IF 5.1)</span>
              </p>
            </div>
          </div>

          {/* Section: Areas of Interest & Strengths */}
          <div>
            <div className="flex items-center space-x-2 border-b-2 border-teal-600 pb-1 mb-2.5">
              <Sparkles size={14} className="text-teal-700" />
              <h2 className="text-xs font-space font-bold tracking-wider text-teal-800 uppercase">Areas of Interest & Strengths</h2>
            </div>
            
            <div className="space-y-1.5 text-xs sm:text-[13px] text-stone-700">
              <p>
                <strong className="text-stone-900">Areas of Interest:</strong> Machine Learning, Data Analytics, Artificial Intelligence, Computer Vision, Business Intelligence, Data Engineering
              </p>
              <p>
                <strong className="text-stone-900">Strengths:</strong> Problem Solving, Analytical Thinking, Self-Learning, Team Collaboration, Communication
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 flex-shrink-0 text-xs">
          <span className="text-stone-500 font-mono text-[11px]">
            File: Bomathi_S_Resume.pdf • Updated October 2026
          </span>
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-stone-700 hover:bg-stone-200 font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href="/Bomathi_S_Resume.pdf"
              download="Bomathi_S_Resume.pdf"
              className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
