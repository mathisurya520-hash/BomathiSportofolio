import React, { useState } from 'react';
import { 
  FileText, Download, Eye, Printer, Award, GraduationCap, 
  Sparkles, CheckCircle2, ExternalLink, Calendar, MapPin, 
  Mail, Phone, Globe, BookOpen, Layers, Check, ShieldCheck, 
  Maximize2, Copy, Search, Filter, ArrowUpRight
} from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import CertificateLightboxModal from '../components/CertificateLightboxModal';

export const certificationsList = [
  // 1. Thiranex Data Analytics
  {
    id: 'thiranex-da',
    title: 'Data Analytics Internship',
    topic: 'Data Analytics & Business Intelligence Dashboards',
    issuer: 'Thiranex EduTech LLP',
    category: 'Data Analytics',
    credentialId: 'THX-JUN0826-056',
    date: '08 Jun 2026 – 07 Jul 2026',
    hasCertificate: true,
    certificateImage: '/certificates/thiranex-data-analytics.jpg',
    status: 'Verified Certificate',
    badgeColor: 'border-teal-200 bg-teal-50 text-teal-700',
    iconColor: 'text-teal-600',
    description: 'Completed 1-month professional internship in Data Analytics focusing on enterprise business intelligence reporting and dashboard architecture.',
    objectives: [
      'Developed 5 comprehensive interactive dashboards in Tableau and Power BI for real-time reporting.',
      'Transformed raw multi-table operational data sources into actionable visual KPI scorecards.',
      'Identified data discrepancies, cleaned noisy inputs, and optimized dashboard querying response times.'
    ],
    skills: ['Tableau', 'Power BI', 'Data Analytics', 'BI Reporting', 'KPI Tracking'],
    verifiedBy: 'Hariharan M (Founder & CEO) • MSME Reg: UDYAM-TN-02-0512885'
  },
  // 2. TATA GenAI Powered Data Analytics
  {
    id: 'tata-genai-analytics',
    title: 'GenAI Powered Data Analytics Simulation',
    topic: 'Generative AI Analytics, Delinquency Prediction & Risk Modeling',
    issuer: 'TATA (via Forage)',
    category: 'Data Analytics',
    credentialId: 'Enrolment: W9HiCGRKb6jkj4xCu',
    userVerificationCode: '69b7cce6a3fc2c1dbadd5576',
    date: 'March 16th, 2026',
    hasCertificate: true,
    certificateImage: '/certificates/tata-genai-analytics.png',
    status: 'Verified Simulation',
    badgeColor: 'border-blue-200 bg-blue-50 text-blue-700',
    iconColor: 'text-blue-600',
    description: 'Corporate simulation with Tata Group applying GenAI models to customer risk profiling, delinquency forecasting, and collections optimization.',
    objectives: [
      'Conducted exploratory data analysis (EDA) and risk profiling across multi-variable consumer lending data.',
      'Applied AI predictive models to accurately anticipate customer delinquency and loan default probabilities.',
      'Synthesized business reports and narrative data storytelling to pitch an AI-driven collections strategy.'
    ],
    skills: ['GenAI Analytics', 'Risk Profiling', 'Predictive AI', 'Data Storytelling', 'Strategy Formulation'],
    verifiedBy: 'Tom Brunskill (Co-Founder of Forage) • TATA & Forage Verification'
  },
  // 3. Deloitte Data Analytics Job Simulation
  {
    id: 'deloitte-da',
    title: 'Data Analytics Job Simulation',
    topic: 'Enterprise Data Analysis & Forensic Technology',
    issuer: 'Deloitte (via Forage)',
    category: 'Data Analytics',
    credentialId: 'y3R2gWeufBLpAsFeB',
    userVerificationCode: '69b7cce6a3fc2c1dbadd5576',
    date: 'May 25, 2026',
    hasCertificate: true,
    certificateImage: '/certificates/deloitte-data-analytics.jpg',
    status: 'Verified Simulation',
    badgeColor: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    iconColor: 'text-emerald-600',
    description: 'Corporate simulation completing practical analytical and forensic technology tasks for client casework.',
    objectives: [
      'Executed forensic data analysis procedures on enterprise financial and operational transaction sets.',
      'Applied forensic technology workflows to detect anomalies and verify data integrity.',
      'Drafted clear findings summaries and visual recommendations for stakeholder briefings.'
    ],
    skills: ['Data Analysis', 'Forensic Technology', 'Data Integrity', 'Executive Communication'],
    verifiedBy: 'Tina McCreery (Chief Human Resources Officer, Deloitte)'
  },
  // 4. CodeAlpha Power BI
  {
    id: 'codealpha-powerbi',
    title: 'Power BI Virtual Internship',
    topic: 'Business Intelligence, DAX Modeling & Scorecards',
    issuer: 'CodeAlpha',
    category: 'Business Intelligence',
    credentialId: 'CA/DF1/252903',
    date: '20 Aug 2026 – 20 Sep 2026',
    hasCertificate: true,
    certificateImage: '/certificates/codealpha-power-bi.jpg',
    status: 'Verified Certificate',
    badgeColor: 'border-blue-200 bg-blue-50 text-blue-700',
    iconColor: 'text-blue-600',
    description: 'Specialized virtual internship dedicated to Power BI report authoring, DAX measures, and multi-table data modeling.',
    objectives: [
      'Built multi-dimensional data models and established schema relationships between disparate operational tables.',
      'Engineered complex DAX calculated measures, columns, and dynamic time-intelligence calculations.',
      'Constructed intuitive executive scorecards and drill-down visualization panels for data-driven decisions.'
    ],
    skills: ['Power BI', 'DAX Measures', 'Data Modeling', 'Data Visualization', 'Executive Dashboards'],
    verifiedBy: 'Swati Sri (CEO & Co-Founder) • MCA & MSME Recognized'
  },
  // 5. CodeAlpha Data Science
  {
    id: 'codealpha-datascience',
    title: 'Data Science Virtual Internship',
    topic: 'Python Data Science, EDA & Statistical Computing',
    issuer: 'CodeAlpha',
    category: 'Data Science & AI',
    credentialId: 'CA/DF1/193852',
    date: '10 Jul 2026 – 10 Aug 2026',
    hasCertificate: true,
    certificateImage: '/certificates/codealpha-data-science.jpg',
    status: 'Verified Certificate',
    badgeColor: 'border-purple-200 bg-purple-50 text-purple-700',
    iconColor: 'text-purple-600',
    description: 'End-to-end virtual internship exploring statistical analysis, NumPy/Pandas pipelines, and exploratory data analysis.',
    objectives: [
      'Applied Python, NumPy, Pandas, Anaconda, and Conda for statistical computation and pipeline structuring.',
      'Conducted rigorous exploratory data analysis (EDA), trend identification, and data cleansing on tabular datasets.',
      'Authored documented Jupyter notebooks summarizing data distributions and predictive signals.'
    ],
    skills: ['Python', 'Pandas', 'NumPy', 'EDA', 'Anaconda / Conda', 'Data Science'],
    verifiedBy: 'Swati Sri (CEO & Founder) • MSME Recognized'
  },
  // 6. Prodigy InfoTech Web Development
  {
    id: 'prodigy-webdev',
    title: 'Web Development Internship',
    topic: 'Front-End Engineering & Interactive Web Applications',
    issuer: 'Prodigy InfoTech',
    category: 'Web & Digital Tech',
    credentialId: 'CIN: PIT/MAY26/00736',
    date: '01 May 2026 – 31 May 2026',
    hasCertificate: true,
    certificateImage: '/certificates/prodigy-web-development.jpg',
    status: 'Verified Certificate',
    badgeColor: 'border-indigo-200 bg-indigo-50 text-indigo-700',
    iconColor: 'text-indigo-600',
    description: 'Completed 1-month internship in modern Web Development with outstanding remarks for software engineering and responsive design.',
    objectives: [
      'Engineered responsive web applications and interactive UI components with modern front-end standards.',
      'Implemented clean DOM architecture, state handling, event listeners, and performance optimizations.',
      'Received outstanding remarks for quality of deliverables and commitment to robust development standards.'
    ],
    skills: ['Web Development', 'JavaScript', 'HTML5/CSS3', 'UI Engineering', 'Responsive Design'],
    verifiedBy: 'Prodigy InfoTech Verification Authority • MSME Registered'
  },
  // 7. AWS Introduction to Generative AI
  {
    id: 'aws-genai',
    title: 'Introduction to Generative AI – Art of the Possible',
    topic: 'Generative AI Foundations, LLM Architectures & Cloud AI',
    issuer: 'Amazon Web Services (AWS)',
    category: 'Data Science & AI',
    date: 'March 20, 2026',
    hasCertificate: true,
    certificateImage: '/certificates/aws-generative-ai.png',
    status: 'Verified AWS Certificate',
    badgeColor: 'border-amber-200 bg-amber-50 text-amber-700',
    iconColor: 'text-amber-600',
    description: 'Official AWS Training & Certification completion credential awarded to Bomathi Surya covering generative artificial intelligence foundations.',
    objectives: [
      'Mastered core concepts of Generative AI, transformer foundations, and model selection benchmarks.',
      'Developed systematic prompt engineering techniques for high-precision generation and context grounding.',
      'Explored foundational model deployment architectures and responsible AI security guardrails on AWS cloud.'
    ],
    skills: ['Generative AI', 'Foundation Models', 'LLMs', 'Prompt Engineering', 'AWS Cloud AI'],
    verifiedBy: 'Michelle Vaz (Director, AWS Training & Certification)'
  },
  // 8. Research Paper Publication: Touch Free Extension
  {
    id: 'pub-touch-free',
    title: 'Touch Free Extension – Research Publication',
    topic: 'Touch-Free Computer Vision & Human-Computer Interaction (HCI)',
    issuer: 'Journal of Technology (UGC-CARE & Scopus)',
    category: 'Research & Publications',
    credentialId: 'Paper ID: JOT - 9108 | ISSN: 10123407',
    date: 'Volume 14, Issue 4, April - 2026',
    hasCertificate: true,
    certificateImage: '/certificates/publication-touch-free-extension.png',
    status: 'Published Paper',
    badgeColor: 'border-teal-200 bg-teal-50 text-teal-700',
    iconColor: 'text-teal-600',
    description: 'Peer-reviewed research paper authored by Bomathi S, published in Journal of Technology (UGC-CARE Group-2, ISO 7021-2008 & Scopus, Impact Factor 5.1).',
    objectives: [
      'Authored scientific research investigating touch-free computational human-computer interaction paradigms.',
      'Implemented computer vision pipelines for real-time gesture identification and seamless browser interaction.',
      'Published in UGC-CARE Group-2, ISO 7021-2008 & Scopus indexed journal with 5.1 Impact Factor.'
    ],
    skills: ['Computer Vision', 'Gesture Tracking', 'HCI Systems', 'Research Writing', 'Scopus / UGC-CARE'],
    verifiedBy: 'Dr. Ruth Kiraka (Editor-in-Chief, Journal of Technology)'
  },
  // 9. Research Paper Publication: Festivo Event Management System
  {
    id: 'pub-festivo',
    title: 'Festivo: Event Management System – Research Publication',
    topic: 'Cloud Event Coordination Architecture & Scalable Systems',
    issuer: 'Journal of Technology (UGC-CARE & Scopus)',
    category: 'Research & Publications',
    credentialId: 'Paper ID: JOT - 8431 | ISSN: 10123407',
    date: 'Volume 13, Issue 11, November - 2025',
    hasCertificate: true,
    certificateImage: '/certificates/publication-festivo.png',
    status: 'Published Paper',
    badgeColor: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    iconColor: 'text-emerald-600',
    description: 'Peer-reviewed research paper authored by Bomathi S on scalable event management architectures, published in UGC-CARE & Scopus journal.',
    objectives: [
      'Designed architectural model for distributed event scheduling, real-time ticket registration, and logistics.',
      'Evaluated system latency, data persistence under high-concurrency event traffic, and state management.',
      'Published in UGC-CARE Group-2, ISO 7021-2008 & Scopus indexed journal with 5.1 Impact Factor.'
    ],
    skills: ['System Architecture', 'Event Management Systems', 'Scalable Systems', 'Research Writing', 'Scopus / UGC-CARE'],
    verifiedBy: 'Dr. Ruth Kiraka (Editor-in-Chief, Journal of Technology)'
  },
  // 10. Great Learning Academy: Introduction to Digital Marketing
  {
    id: 'greatlearning-marketing',
    title: 'Introduction to Digital Marketing',
    topic: 'Digital Marketing Channels, Funnel Analytics & Web Growth',
    issuer: 'Great Learning Academy',
    category: 'Web & Digital Tech',
    date: 'December 2024',
    hasCertificate: true,
    certificateImage: '/certificates/greatlearning-digital-marketing.png',
    status: 'Verified Certificate',
    badgeColor: 'border-pink-200 bg-pink-50 text-pink-700',
    iconColor: 'text-pink-600',
    description: 'Completion certificate presented to BOMATHI.S covering digital channels, audience acquisition, and marketing analytics.',
    objectives: [
      'Learned fundamental principles of digital marketing, audience targeting, and content dissemination.',
      'Explored customer journey mapping, conversion funnel optimization, and web performance metrics.',
      'Applied analytical evaluation methods to quantify campaign reach and digital engagement.'
    ],
    skills: ['Digital Marketing', 'Web Analytics', 'Funnel Optimization', 'Audience Segmentation', 'Growth Metrics'],
    verifiedBy: 'Great Learning Academy Online Credentialing'
  },
  // 11. NPTEL Data Base Management System (Elite)
  {
    id: 'nptel-dbms',
    title: 'Data Base Management System (Elite)',
    topic: 'Relational Database Architecture, SQL Optimization & Indexing',
    issuer: 'NPTEL (IIT Kharagpur / MoE Govt. of India)',
    category: 'Databases & SQL',
    credentialId: 'Roll No: NPTEL26CS117S355400380',
    date: 'JUL-SEP 2026 (8 week course)',
    score: '60% (Online: 22.29/25, Exam: 37.5/75) • 3 Credits',
    hasCertificate: true,
    certificateImage: '/certificates/nptel-dbms.png',
    status: 'Elite Certification',
    badgeColor: 'border-teal-200 bg-teal-50 text-teal-700',
    iconColor: 'text-teal-600',
    description: 'Elite NPTEL certification in Relational DBMS awarded by Indian Institute of Technology Kharagpur with a consolidated score of 60%.',
    objectives: [
      'Mastered relational algebra, relational calculus, and ER schema modeling.',
      'Formulated and tuned complex SQL queries with indexing strategies and query execution plans.',
      'Applied normalization theory (1NF to BCNF) to eliminate redundancies and maintain ACID transaction integrity.'
    ],
    skills: ['Relational DBMS', 'SQL Optimization', 'Relational Algebra', 'Normalization', 'Indexing & ACID'],
    verifiedBy: 'Prof. Haimanti Banerji (Coordinator, NPTEL, IIT Kharagpur) • Swayam & Skill India'
  },
  // 12. HackerRank SQL (Intermediate)
  {
    id: 'hackerrank-sql-intermediate',
    title: 'SQL (Intermediate) Certification',
    topic: 'Advanced Multi-Table Joins, Complex Aggregations & Analytical Queries',
    issuer: 'HackerRank',
    category: 'Databases & SQL',
    credentialId: 'ID: EAF31DEF5A0E',
    date: '19 Aug, 2026',
    hasCertificate: true,
    certificateImage: '/certificates/hackerrank-sql-intermediate.png',
    status: 'Skill Certified',
    badgeColor: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    iconColor: 'text-emerald-600',
    description: 'Passed the HackerRank SQL (Intermediate) skill certification test solving timed challenges in multi-table queries and aggregations.',
    objectives: [
      'Solved complex multi-table joins and recursive query patterns under timed constraints.',
      'Constructed correlated subqueries, analytical windowing, and conditional CASE data transformations.',
      'Evaluated query execution efficiency and verified output against edge-case relational datasets.'
    ],
    skills: ['SQL (Intermediate)', 'Multi-Table Joins', 'Subqueries', 'Aggregations', 'Query Tuning'],
    verifiedBy: 'Harishankaran K (CTO, HackerRank)'
  },
  // 13. HackerRank SQL (Basic)
  {
    id: 'hackerrank-sql-basic',
    title: 'SQL (Basic) Certification',
    topic: 'Relational Query Fundamentals, Filtering & Grouping',
    issuer: 'HackerRank',
    category: 'Databases & SQL',
    credentialId: 'ID: 926485D1D1BA',
    date: '17 Mar, 2026',
    hasCertificate: true,
    certificateImage: '/certificates/hackerrank-sql-basic.png',
    status: 'Skill Certified',
    badgeColor: 'border-teal-200 bg-teal-50 text-teal-700',
    iconColor: 'text-teal-600',
    description: 'Passed the HackerRank SQL (Basic) skill certification test evaluating relational extraction and filtering logic.',
    objectives: [
      'Demonstrated fluency with SELECT, WHERE, GROUP BY, HAVING, and ORDER BY SQL statements.',
      'Handled aggregate functions (SUM, AVG, COUNT, MIN, MAX) and primary/foreign key table joins.',
      'Passed standardized testing on relational schema querying and data retrieval.'
    ],
    skills: ['SQL (Basic)', 'Relational Queries', 'Data Filtering', 'Group By', 'Aggregations'],
    verifiedBy: 'Harishankaran K (CTO, HackerRank)'
  },
  // 14. HackerRank Java (Basic)
  {
    id: 'hackerrank-java-basic',
    title: 'Java (Basic) Certification',
    topic: 'Object-Oriented Programming (OOP), Data Structures & Java Core',
    issuer: 'HackerRank',
    category: 'Programming & Software',
    credentialId: 'ID: 9D6FA6E6E89F',
    date: '17 Mar, 2026',
    hasCertificate: true,
    certificateImage: '/certificates/hackerrank-java-basic.png',
    status: 'Skill Certified',
    badgeColor: 'border-amber-200 bg-amber-50 text-amber-700',
    iconColor: 'text-amber-600',
    description: 'Passed the HackerRank Java (Basic) skill certification test testing core Java programming paradigms and algorithmic execution.',
    objectives: [
      'Mastered core Java Object-Oriented Programming: Classes, Objects, Inheritance, and Polymorphism.',
      'Implemented robust exception handling, standard collections, and control-flow architectures.',
      'Demonstrated algorithmic problem solving and clean coding conventions in standard Java.'
    ],
    skills: ['Java', 'Object-Oriented Programming (OOP)', 'Data Structures', 'Exception Handling', 'Algorithms'],
    verifiedBy: 'Harishankaran K (CTO, HackerRank)'
  },
  // 15. Great Learning Academy Introduction to Excel
  {
    id: 'greatlearning-excel',
    title: 'Introduction to Excel',
    topic: 'Spreadsheet Analytics, Dynamic Lookup Formulas & Pivot Tables',
    issuer: 'Great Learning Academy',
    category: 'Data Analytics',
    date: 'December 2024',
    hasCertificate: true,
    certificateImage: '/certificates/greatlearning-excel.png',
    status: 'Verified Certificate',
    badgeColor: 'border-green-200 bg-green-50 text-green-700',
    iconColor: 'text-green-600',
    description: 'Completion certificate presented to BOMATHI.S covering business spreadsheet modeling, data visualization, and reporting.',
    objectives: [
      'Implemented dynamic lookup functions (VLOOKUP, XLOOKUP, INDEX/MATCH) and conditional logical formulas.',
      'Created interactive Pivot Tables and Slicers to aggregate high-volume records efficiently.',
      'Designed analytical charts and executive dashboard summaries for business metrics.'
    ],
    skills: ['Excel Modeling', 'VLOOKUP / XLOOKUP', 'Pivot Tables', 'Data Cleaning', 'Spreadsheet Analytics'],
    verifiedBy: 'Great Learning Academy Online Credentialing'
  }
];

const educationList = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Sri Shakthi Institute of Engineering and Technology',
    period: '2024 – 2028',
    score: 'CGPA: 8.3 / 10.0',
    highlights: [
      'Focusing on Data Analytics, Machine Learning, and Data Engineering',
      'Active contributor to student technical dashboards and data science projects',
      'Strong academic foundation in Algorithms, Database Systems, and Mathematics'
    ],
    status: 'Pursuing (Undergraduate)'
  },
  {
    degree: 'Class XII (Higher Secondary Education)',
    institution: 'Bannari Amman Vidya Niketan MHSS',
    period: 'Completed 2024',
    score: '85.6%',
    highlights: [
      'Core Mathematics, Computer Science, and Science curriculum',
      'Distinction in academic evaluations and analytical coursework'
    ],
    status: 'First Class with Distinction'
  },
  {
    degree: 'Class X (Secondary School Leaving Certificate)',
    institution: 'Bannari Amman Vidya Niketan MHSS',
    period: 'Completed 2022',
    score: '90.2%',
    highlights: [
      'Outstanding academic performance across all foundational disciplines',
      'Strong quantitative reasoning and scientific aptitude'
    ],
    status: 'Top Tier Distinction'
  }
];

const interestsList = [
  { name: 'Machine Learning', desc: 'Predictive modeling, classification, regression, and model evaluation' },
  { name: 'Data Analytics', desc: 'Exploratory data analysis, KPI analysis, and actionable business insights' },
  { name: 'Artificial Intelligence', desc: 'Generative AI, neural algorithms, and intelligent automated workflows' },
  { name: 'Computer Vision', desc: 'Image processing, gesture detection, and visual recognition pipelines' },
  { name: 'Business Intelligence', desc: 'Interactive dashboards, DAX measures, Power BI, and Tableau' },
  { name: 'Data Engineering', desc: 'ETL pipelines, relational schemas, SQL querying, and database architecture' },
];

const strengthsList = [
  { title: 'Problem Solving', desc: 'Tackling complex algorithmic and analytical roadblocks with systematic decomposition.' },
  { title: 'Analytical Thinking', desc: 'Translating noisy, raw data into clear, actionable business and technical metrics.' },
  { title: 'Self-Learning', desc: 'Rapidly adopting new technologies, libraries, and frameworks proactively.' },
  { title: 'Team Collaboration', desc: 'Thriving in cross-functional team environments and collaborative hackathons.' },
  { title: 'Communication', desc: 'Clearly explaining complex data findings to stakeholders and peers.' },
];

const ResumeSection = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState('full-resume');
  const [copied, setCopied] = useState(false);
  const [selectedCertModal, setSelectedCertModal] = useState(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [certFilter, setCertFilter] = useState('all'); // 'all' | 'verified' | 'specialization'
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [copiedId, setCopiedId] = useState(null);

  const handleOpenCert = (cert) => {
    setSelectedCertModal(cert);
    setIsCertModalOpen(true);
  };

  const handleCopyId = (e, text) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopy = () => {
    const text = `BOMATHI S - Computer Science Engineering Student | Data Analytics & Data Science
Phone: 6381270345 | Email: mathisurya520@gmail.com
LinkedIn: https://www.linkedin.com/in/bomathi-suryaprakasam | GitHub: https://github.com/mathisurya520-hash
Portfolio: https://portfolio-3-tggt.onrender.com/`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume" className="py-24 px-6 relative border-t border-stone-200/30 bg-[#faf7f2]">
      {/* Background ambient lighting */}
      <div className="absolute right-10 top-1/3 w-96 h-96 rounded-full bg-teal-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute left-10 bottom-1/4 w-80 h-80 rounded-full bg-pink-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
          <div>
            <span className="text-xs font-space uppercase tracking-widest text-teal-600 font-bold">05 / Credentials</span>
            <h2 className="text-3xl md:text-5xl font-space font-bold text-[#2d2722] mt-2">Resume & Credentials</h2>
          </div>
          
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenModal}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <Eye size={14} className="text-teal-600" />
              Fullscreen Viewer
            </button>

            <a
              href="/Bomathi_S_Resume.pdf"
              download="Bomathi_S_Resume.pdf"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold shadow-md shadow-teal-700/15 transition-all cursor-pointer"
            >
              <Download size={14} />
              Download Resume (PDF)
            </a>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-2.5 pb-6 mb-8 border-b border-stone-200/40 justify-start">
          {[
            { id: 'full-resume', label: 'Resume Document', icon: FileText },
            { id: 'certifications', label: 'Certifications', icon: Award },
            { id: 'education', label: 'Education & Academics', icon: GraduationCap },
            { id: 'strengths', label: 'Interests & Strengths', icon: Sparkles },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-teal-700 text-white shadow-md shadow-teal-700/20'
                    : 'bg-white text-stone-600 border border-stone-200 hover:text-teal-700 hover:bg-stone-50'
                }`}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* TAB 1: FULL RESUME SHEET */}
        {activeTab === 'full-resume' && (
          <div className="glass-card rounded-3xl p-6 sm:p-12 border border-stone-200/50 shadow-lg text-left relative overflow-hidden bg-white/80">
            {/* Watermark / system badge */}
            <div className="flex flex-wrap items-center justify-between pb-6 border-b border-stone-200/60 mb-8 gap-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-teal-800 bg-teal-50 px-3 py-1.5 rounded-xl border border-teal-200/60 font-semibold">
                <CheckCircle2 size={13} className="text-teal-600" />
                <span>OFFICIAL VERIFIED RESUME</span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-stone-600 hover:text-teal-700 bg-white border border-stone-200 shadow-xs cursor-pointer"
                >
                  {copied ? <Check size={13} className="text-teal-600" /> : <Globe size={13} />}
                  <span>{copied ? 'Copied Contact!' : 'Copy Summary'}</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-stone-600 hover:text-teal-700 bg-white border border-stone-200 shadow-xs cursor-pointer"
                >
                  <Printer size={13} />
                  <span>Print</span>
                </button>

                <a
                  href="/Bomathi_S_Resume.pdf"
                  download="Bomathi_S_Resume.pdf"
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 shadow-xs cursor-pointer"
                >
                  <Download size={13} />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* Resume Main Body */}
            <div className="space-y-8 font-poppins text-stone-800">
              
              {/* Header */}
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-space font-bold text-teal-900 tracking-tight">BOMATHI S</h1>
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-teal-700 uppercase mt-1">
                  Computer Science Engineering Student | Data Analytics & Data Science
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-600 mt-3 font-mono">
                  <a href="tel:6381270345" className="hover:text-teal-700 flex items-center gap-1">
                    <Phone size={12} className="text-teal-600" />
                    6381270345
                  </a>
                  <span>•</span>
                  <a href="mailto:mathisurya520@gmail.com" className="hover:text-teal-700 flex items-center gap-1">
                    <Mail size={12} className="text-teal-600" />
                    mathisurya520@gmail.com
                  </a>
                  <span>•</span>
                  <a 
                    href="https://www.linkedin.com/in/bomathi-suryaprakasam" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-teal-700 flex items-center gap-1"
                  >
                    <Linkedin size={12} className="text-teal-600" />
                    LinkedIn
                  </a>
                  <span>•</span>
                  <a 
                    href="https://github.com/mathisurya520-hash" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-teal-700 flex items-center gap-1"
                  >
                    <Github size={12} className="text-teal-600" />
                    GitHub
                  </a>
                  <span>•</span>
                  <a 
                    href="https://portfolio-3-tggt.onrender.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-teal-700 flex items-center gap-1"
                  >
                    <Globe size={12} className="text-teal-600" />
                    Portfolio
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h2 className="text-xs font-space font-bold tracking-widest text-teal-800 uppercase pb-1 border-b-2 border-teal-600 mb-2">
                  Professional Summary
                </h2>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                  Computer Science Engineering student with project experience in Python, SQL, data analytics, dashboard development, and AI-powered applications. Familiar with Tableau and Power BI for data visualization and with Python libraries for data analysis. Interested in Data Analytics, Data Science, and Machine Learning, with a focus on building practical, data-driven solutions.
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-xs font-space font-bold tracking-widest text-teal-800 uppercase pb-1 border-b-2 border-teal-600 mb-3">
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                    <span className="font-bold text-teal-900 block mb-1">Programming</span>
                    <span className="text-stone-700">Python, SQL, Java, JavaScript, HTML, CSS</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                    <span className="font-bold text-teal-900 block mb-1">Data Analytics & BI</span>
                    <span className="text-stone-700">Tableau, Power BI, Data Analysis, Data Visualization</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                    <span className="font-bold text-teal-900 block mb-1">AI & Data</span>
                    <span className="text-stone-700">Generative AI, Prompt Engineering, NumPy, Pandas</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                    <span className="font-bold text-teal-900 block mb-1">Frameworks & Tools</span>
                    <span className="text-stone-700">React, Node.js, Express.js, Flutter, MongoDB, Anaconda, Conda, Microsoft Office</span>
                  </div>
                </div>
              </div>

              {/* Projects (5 from resume) */}
              <div>
                <h2 className="text-xs font-space font-bold tracking-widest text-teal-800 uppercase pb-1 border-b-2 border-teal-600 mb-4">
                  Projects
                </h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-teal-500 pl-4">
                    <h3 className="text-sm font-bold text-stone-900">Customer Churn Prediction</h3>
                    <ul className="list-disc list-inside text-xs text-stone-600 mt-1 space-y-0.5 font-light">
                      <li>Analyzed customer data to identify churn patterns based on customer tenure, contract type, and service usage.</li>
                      <li>Explored customer behavior and developed insights to support customer retention strategies.</li>
                    </ul>
                    <p className="text-[11px] text-stone-500 font-mono mt-1">
                      <span className="font-semibold text-stone-700">Tech Stack:</span> Python, Pandas, Scikit-learn, SQL, Power BI
                    </p>
                  </div>

                  <div className="border-l-2 border-teal-500 pl-4">
                    <h3 className="text-sm font-bold text-stone-900">Google Play Store Analysis</h3>
                    <ul className="list-disc list-inside text-xs text-stone-600 mt-1 space-y-0.5 font-light">
                      <li>Performed data cleaning and exploratory data analysis on Google Play Store data to examine app ratings, reviews, installs, and categories.</li>
                      <li>Identified app performance trends and compared application categories.</li>
                    </ul>
                    <p className="text-[11px] text-stone-500 font-mono mt-1">
                      <span className="font-semibold text-stone-700">Tech Stack:</span> Python, Pandas, NumPy, Matplotlib, Seaborn
                    </p>
                  </div>

                  <div className="border-l-2 border-teal-500 pl-4">
                    <h3 className="text-sm font-bold text-stone-900">Diabetes Data Analysis</h3>
                    <ul className="list-disc list-inside text-xs text-stone-600 mt-1 space-y-0.5 font-light">
                      <li>Analyzed a diabetes dataset to explore patterns across glucose levels, BMI, age, and other available health-related variables.</li>
                      <li>Created data visualizations to identify correlations and compare recorded outcome patterns.</li>
                    </ul>
                    <p className="text-[11px] text-stone-500 font-mono mt-1">
                      <span className="font-semibold text-stone-700">Tech Stack:</span> Python, Pandas, NumPy, Matplotlib, Seaborn
                    </p>
                  </div>

                  <div className="border-l-2 border-teal-500 pl-4">
                    <h3 className="text-sm font-bold text-stone-900">Breast Cancer Data Analysis</h3>
                    <ul className="list-disc list-inside text-xs text-stone-600 mt-1 space-y-0.5 font-light">
                      <li>Performed exploratory data analysis on a breast cancer dataset to examine tumor-related features and recorded diagnosis groups.</li>
                      <li>Applied data visualization and statistical analysis to identify patterns in the dataset.</li>
                    </ul>
                    <p className="text-[11px] text-stone-500 font-mono mt-1">
                      <span className="font-semibold text-stone-700">Tech Stack:</span> Python, Pandas, NumPy, Matplotlib, Seaborn
                    </p>
                  </div>

                  <div className="border-l-2 border-teal-500 pl-4">
                    <h3 className="text-sm font-bold text-stone-900">Unemployment Trend Analysis</h3>
                    <ul className="list-disc list-inside text-xs text-stone-600 mt-1 space-y-0.5 font-light">
                      <li>Analyzed unemployment data to explore changes over time and compare trends across available regions.</li>
                      <li>Created visualizations to highlight unemployment patterns and communicate key economic insights.</li>
                    </ul>
                    <p className="text-[11px] text-stone-500 font-mono mt-1">
                      <span className="font-semibold text-stone-700">Tech Stack:</span> Python, Pandas, NumPy, Matplotlib, Seaborn
                    </p>
                  </div>
                </div>
              </div>

              {/* Internships & Experience */}
              <div>
                <h2 className="text-xs font-space font-bold tracking-widest text-teal-800 uppercase pb-1 border-b-2 border-teal-600 mb-4">
                  Internships & Experience
                </h2>
                <div className="space-y-3.5 text-xs">
                  <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200/50">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-stone-900">Data Analyst Intern – Thiranex</h3>
                      <span className="text-[10px] font-mono text-teal-700 font-semibold">Tableau & Power BI</span>
                    </div>
                    <p className="text-stone-600 mt-1 font-light">• Developed five dashboards using Tableau and Power BI.</p>
                  </div>

                  <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200/50">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-stone-900">Data Science Intern – CodeAlpha</h3>
                      <span className="text-[10px] font-mono text-teal-700 font-semibold">Python & Anaconda</span>
                    </div>
                    <p className="text-stone-600 mt-1 font-light">• Gained experience with Python, NumPy, Pandas, Anaconda, and Conda.</p>
                  </div>

                  <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200/50">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-stone-900">Power BI Intern – CodeAlpha</h3>
                      <span className="text-[10px] font-mono text-teal-700 font-semibold">DAX & Modeling</span>
                    </div>
                    <p className="text-stone-600 mt-1 font-light">• Developed interactive Power BI dashboards and used DAX to create calculated measures for data-driven analysis.</p>
                  </div>

                  <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200/50">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-stone-900">Data Analytics Intern – CodeSoft</h3>
                      <span className="text-[10px] font-mono text-teal-700 font-semibold">KPI & Profit/Loss</span>
                    </div>
                    <p className="text-stone-600 mt-1 font-light">• Developed interactive dashboards to analyze business data and track key performance indicators, including profit and loss.</p>
                  </div>

                  <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200/50">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-stone-900">Data Analytics Intern – Oasis Infobyte</h3>
                      <span className="text-[10px] font-mono text-teal-700 font-semibold">Business Analytics</span>
                    </div>
                    <p className="text-stone-600 mt-1 font-light">• Developed interactive dashboards to analyze business data and track key performance among the analysis.</p>
                  </div>
                </div>
              </div>

              {/* Education & Certifications Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div>
                  <h2 className="text-xs font-space font-bold tracking-widest text-teal-800 uppercase pb-1 border-b-2 border-teal-600 mb-3">
                    Education
                  </h2>
                  <div className="space-y-2 text-xs text-stone-700">
                    <p><strong className="text-stone-900">B.E. Computer Science and Engineering</strong> | Sri Shakthi Institute of Engineering and Technology | 2024–2028 | <strong className="text-teal-700">CGPA: 8.3</strong></p>
                    <p><strong className="text-stone-900">Class XII:</strong> 85.6% (2024) – Bannari Amman Vidya Niketan MHSS</p>
                    <p><strong className="text-stone-900">Class X:</strong> 90.2% (2022) – Bannari Amman Vidya Niketan MHSS</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xs font-space font-bold tracking-widest text-teal-800 uppercase pb-1 border-b-2 border-teal-600 mb-3 flex items-center justify-between">
                    <span>Certifications &amp; Publications (15)</span>
                    <span className="text-[10px] text-teal-700 font-mono font-normal">15 Verified Proofs</span>
                  </h2>
                  <div className="flex flex-wrap gap-1.5 text-[11px]">
                    <span className="px-2.5 py-1 bg-teal-50 rounded-lg text-teal-800 border border-teal-200 font-medium">Data Analytics – Thiranex</span>
                    <span className="px-2.5 py-1 bg-teal-50 rounded-lg text-teal-800 border border-teal-200 font-medium">GenAI Analytics – TATA</span>
                    <span className="px-2.5 py-1 bg-teal-50 rounded-lg text-teal-800 border border-teal-200 font-medium">Data Analytics Simulation – Deloitte</span>
                    <span className="px-2.5 py-1 bg-teal-50 rounded-lg text-teal-800 border border-teal-200 font-medium">Power BI – CodeAlpha</span>
                    <span className="px-2.5 py-1 bg-teal-50 rounded-lg text-teal-800 border border-teal-200 font-medium">Data Science – CodeAlpha</span>
                    <span className="px-2.5 py-1 bg-teal-50 rounded-lg text-teal-800 border border-teal-200 font-medium">Web Development – Prodigy InfoTech</span>
                    <span className="px-2.5 py-1 bg-teal-50 rounded-lg text-teal-800 border border-teal-200 font-medium">Generative AI – AWS</span>
                    <span className="px-2.5 py-1 bg-teal-50 rounded-lg text-teal-800 border border-teal-200 font-medium">Touch Free Extension (UGC-CARE)</span>
                    <span className="px-2.5 py-1 bg-teal-50 rounded-lg text-teal-800 border border-teal-200 font-medium">Festivo Event System (UGC-CARE)</span>
                    <span className="px-2.5 py-1 bg-teal-50 rounded-lg text-teal-800 border border-teal-200 font-medium">Digital Marketing – Great Learning</span>
                    <span className="px-2.5 py-1 bg-teal-50 rounded-lg text-teal-800 border border-teal-200 font-medium">DBMS (Elite 60%) – NPTEL</span>
                    <span className="px-2.5 py-1 bg-teal-50 rounded-lg text-teal-800 border border-teal-200 font-medium">SQL (Intermediate) – HackerRank</span>
                    <span className="px-2.5 py-1 bg-teal-50 rounded-lg text-teal-800 border border-teal-200 font-medium">SQL (Basic) – HackerRank</span>
                    <span className="px-2.5 py-1 bg-teal-50 rounded-lg text-teal-800 border border-teal-200 font-medium">Java (Basic) – HackerRank</span>
                    <span className="px-2.5 py-1 bg-teal-50 rounded-lg text-teal-800 border border-teal-200 font-medium">Excel – Great Learning</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: CERTIFICATIONS SHOWCASE */}
        {activeTab === 'certifications' && (
          <div className="space-y-8">
            
            {/* Filter and Stats Control Bar */}
            <div className="glass-card p-5 sm:p-6 rounded-3xl border border-stone-200/60 bg-white/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              {/* Left: Filter Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: 'all', label: 'All Credentials', count: certificationsList.length },
                  { id: 'internships', label: 'Internships & Industry', count: certificationsList.filter(c => ['thiranex-da', 'tata-genai-analytics', 'deloitte-da', 'codealpha-powerbi', 'codealpha-datascience', 'prodigy-webdev'].includes(c.id)).length },
                  { id: 'skills', label: 'Technical & Skill Tests', count: certificationsList.filter(c => ['nptel-dbms', 'hackerrank-sql-intermediate', 'hackerrank-sql-basic', 'hackerrank-java-basic', 'aws-genai', 'greatlearning-excel', 'greatlearning-marketing'].includes(c.id)).length },
                  { id: 'research', label: 'Research Publications', count: certificationsList.filter(c => c.category === 'Research & Publications').length },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setCertFilter(f.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                      certFilter === f.id
                        ? 'bg-teal-700 text-white shadow-sm shadow-teal-700/20'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200/80'
                    }`}
                  >
                    <span>{f.label}</span>
                    <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                      certFilter === f.id ? 'bg-teal-800 text-teal-100' : 'bg-stone-200/70 text-stone-600'
                    }`}>
                      {f.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Right: Category Filter Chips */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-[11px] font-mono uppercase text-stone-400 font-bold mr-1 flex items-center gap-1">
                  <Filter size={12} />
                  Domain:
                </span>
                {[
                  'all',
                  'Databases & SQL',
                  'Programming & Software',
                  'Data Analytics',
                  'Business Intelligence',
                  'Data Science & AI',
                  'Research & Publications',
                  'Web & Digital Tech'
                ].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors cursor-pointer ${
                      categoryFilter === cat
                        ? 'bg-teal-100 text-teal-800 font-bold border border-teal-300'
                        : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    {cat === 'all' ? 'All Domains' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificationsList
                .filter(c => {
                  if (certFilter === 'internships' && !['thiranex-da', 'tata-genai-analytics', 'deloitte-da', 'codealpha-powerbi', 'codealpha-datascience', 'prodigy-webdev'].includes(c.id)) return false;
                  if (certFilter === 'skills' && !['nptel-dbms', 'hackerrank-sql-intermediate', 'hackerrank-sql-basic', 'hackerrank-java-basic', 'aws-genai', 'greatlearning-excel', 'greatlearning-marketing'].includes(c.id)) return false;
                  if (certFilter === 'research' && c.category !== 'Research & Publications') return false;
                  if (categoryFilter !== 'all' && c.category !== categoryFilter) return false;
                  return true;
                })
                .map((cert) => (
                  <div 
                    key={cert.id}
                    className="glass-card rounded-3xl border border-stone-200/60 flex flex-col justify-between text-left group hover:shadow-lg transition-all duration-300 bg-white/80 overflow-hidden relative"
                  >
                    {/* Top: Certificate Image Preview (if certificate image exists) */}
                    {cert.hasCertificate && cert.certificateImage ? (
                      <div 
                        className="relative w-full aspect-16/10 bg-stone-900/5 border-b border-stone-200 overflow-hidden cursor-pointer group/img"
                        onClick={() => handleOpenCert(cert)}
                      >
                        <img 
                          src={cert.certificateImage} 
                          alt={`${cert.title} Certificate`}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                          loading="lazy"
                        />
                        
                        {/* Certificate Badge Overlay */}
                        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-stone-200 text-teal-800 text-[10px] font-mono font-bold shadow-xs">
                          <ShieldCheck size={12} className="text-teal-600" />
                          <span>Official Certificate Available</span>
                        </div>

                        {/* Hover Overlay with Inspect Button */}
                        <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenCert(cert);
                            }}
                            className="px-4 py-2 rounded-xl bg-white text-stone-900 font-space font-bold text-xs shadow-lg flex items-center gap-1.5 hover:bg-stone-50 transition-colors cursor-pointer"
                          >
                            <Eye size={13} className="text-teal-600" />
                            <span>Inspect Certificate</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Top Header for Curriculum Specializations */
                      <div className="p-5 pb-0">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md font-bold border ${cert.badgeColor}`}>
                            {cert.category}
                          </span>
                          <span className="text-[10px] font-mono text-stone-500 font-semibold flex items-center gap-1">
                            <BookOpen size={11} className="text-teal-600" />
                            {cert.status}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        {/* If card has image, show category pill here */}
                        {cert.hasCertificate && (
                          <div className="flex items-center justify-between mb-2.5">
                            <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md font-bold border ${cert.badgeColor}`}>
                              {cert.category}
                            </span>
                            <span className="text-[10px] font-mono text-teal-700 font-semibold flex items-center gap-1">
                              <CheckCircle2 size={12} />
                              Verified Proof
                            </span>
                          </div>
                        )}

                        {/* Title and Issuer */}
                        <h3 
                          onClick={() => handleOpenCert(cert)}
                          className="text-base sm:text-lg font-space font-bold text-stone-900 group-hover:text-teal-700 transition-colors leading-snug cursor-pointer flex items-start justify-between gap-2"
                        >
                          <span>{cert.title}</span>
                          <ArrowUpRight size={16} className="text-stone-300 group-hover:text-teal-600 transition-colors flex-shrink-0 mt-0.5" />
                        </h3>

                        <p className="text-xs font-semibold text-pink-600 mt-1 mb-3">
                          {cert.issuer}
                        </p>

                        {/* Certification Topic Highlight Box */}
                        <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 mb-3.5">
                          <span className="text-[10px] font-mono uppercase text-teal-700 font-bold block mb-0.5 tracking-wider">
                            Topic:
                          </span>
                          <p className="text-xs font-medium text-stone-800 leading-snug">
                            {cert.topic}
                          </p>
                        </div>

                        {/* Certification Objectives Box */}
                        <div className="mb-3.5">
                          <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block mb-1.5 tracking-wider flex items-center gap-1">
                            <Layers size={11} className="text-teal-600" />
                            Core Objectives:
                          </span>
                          <ul className="space-y-1.5">
                            {cert.objectives.map((obj, oIdx) => (
                              <li key={oIdx} className="text-xs text-stone-600 font-poppins font-light leading-relaxed flex items-start gap-1.5">
                                <span className="text-teal-600 font-bold mt-0.5 flex-shrink-0">•</span>
                                <span>{obj}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Credential / Student ID */}
                        {cert.credentialId && (
                          <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 bg-stone-50 px-2.5 py-1.5 rounded-lg border border-stone-200/60 mb-3">
                            <span className="truncate mr-2">ID: <strong className="text-stone-700">{cert.credentialId}</strong></span>
                            <button
                              onClick={(e) => handleCopyId(e, cert.credentialId)}
                              className="text-stone-400 hover:text-teal-700 transition-colors p-0.5 cursor-pointer flex-shrink-0"
                              title="Copy ID"
                            >
                              {copiedId === cert.credentialId ? <Check size={13} className="text-teal-600" /> : <Copy size={13} />}
                            </button>
                          </div>
                        )}

                        {/* Skills Pills */}
                        {cert.skills && (
                          <div className="flex flex-wrap gap-1 pt-1">
                            {cert.skills.slice(0, 4).map((s, sIdx) => (
                              <span 
                                key={sIdx}
                                className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 border border-stone-200/60 font-medium"
                              >
                                {s}
                              </span>
                            ))}
                            {cert.skills.length > 4 && (
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-md text-stone-400">
                                +{cert.skills.length - 4} more
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Card Footer Actions */}
                      <div className="border-t border-stone-100 pt-4 flex items-center justify-between gap-2">
                        <button
                          onClick={() => handleOpenCert(cert)}
                          className="flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800 transition-colors cursor-pointer"
                        >
                          <Eye size={13} />
                          <span>{cert.hasCertificate ? 'Inspect Certificate' : 'View Full Objectives'}</span>
                        </button>

                        {cert.hasCertificate && cert.certificateImage ? (
                          <a
                            href={cert.certificateImage}
                            download={`${cert.title.replace(/\s+/g, '_')}_Certificate.jpg`}
                            className="p-1.5 rounded-lg text-stone-400 hover:text-teal-700 hover:bg-stone-100 transition-colors cursor-pointer"
                            title="Download Certificate"
                          >
                            <Download size={14} />
                          </a>
                        ) : (
                          <span className="text-[10px] font-mono text-stone-400 font-medium">Curriculum Verified</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

          </div>
        )}

        {/* TAB 3: EDUCATION & ACADEMICS */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            {educationList.map((edu, idx) => (
              <div 
                key={idx}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200/50 text-left flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/70"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-md font-bold">
                      {edu.period}
                    </span>
                    <span className="text-xs font-mono text-stone-400 font-semibold">
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-space font-bold text-stone-900">
                    {edu.degree}
                  </h3>

                  <p className="text-sm font-semibold text-stone-600">
                    {edu.institution}
                  </p>

                  <ul className="space-y-1.5 pt-2">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-stone-500 font-poppins flex items-start gap-2 font-light">
                        <span className="text-teal-600 mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 md:border-l border-stone-200 pt-4 md:pt-0 md:pl-8 flex-shrink-0">
                  <span className="text-[10px] font-mono uppercase text-stone-400 font-semibold">Evaluation Score</span>
                  <span className="text-2xl sm:text-3xl font-space font-bold text-teal-700 mt-1">
                    {edu.score}
                  </span>
                  <span className="text-[10px] text-stone-500 font-poppins mt-0.5">Academic Record</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: INTERESTS & STRENGTHS */}
        {activeTab === 'strengths' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            {/* Left: Areas of Interest */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center space-x-2 mb-2">
                <Sparkles size={18} className="text-teal-600" />
                <h3 className="text-xl font-space font-bold text-stone-900">Areas of Interest</h3>
              </div>
              <p className="text-xs text-stone-500 font-poppins mb-4 font-light">
                Core domain specializations and technical areas where Bomathi applies computational algorithms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {interestsList.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/80 border border-stone-200/50 shadow-xs">
                    <span className="text-sm font-bold text-teal-800 font-space block mb-1">{item.name}</span>
                    <span className="text-xs text-stone-500 font-poppins font-light leading-relaxed">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Core Strengths */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle2 size={18} className="text-pink-600" />
                <h3 className="text-xl font-space font-bold text-stone-900">Professional Strengths</h3>
              </div>
              <p className="text-xs text-stone-500 font-poppins mb-4 font-light">
                Key problem-solving and interpersonal attributes demonstrated through academic and internship experience.
              </p>

              <div className="space-y-3">
                {strengthsList.map((strength, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/80 border border-stone-200/50 shadow-xs flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-500/10 text-pink-600 flex items-center justify-center flex-shrink-0 text-xs font-bold font-mono">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 font-space">{strength.title}</h4>
                      <p className="text-xs text-stone-500 font-poppins font-light mt-0.5 leading-relaxed">{strength.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Modal for inspecting certificates & objectives */}
      <CertificateLightboxModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        selectedCert={selectedCertModal}
        certificates={certificationsList}
        onSelectCert={(cert) => setSelectedCertModal(cert)}
      />
    </section>
  );
};

export default ResumeSection;
