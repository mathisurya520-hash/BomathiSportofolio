import React, { useState } from 'react';
import { ExternalLink, Sparkles, Play, Code2 } from 'lucide-react';
import { Github } from '../components/Icons';
import NeuroXOGame from '../components/NeuroXOGame';

const projectsData = [
  {
    id: 'aeroforecast-ai',
    title: 'AeroForecast AI',
    category: 'Machine Learning',
    subCategories: ['Machine Learning', 'Data Analytics', 'Data Engineering'],
    description: 'An AI-based air quality forecasting system that predicts NO₂ and O₃ pollutant levels and analyzes pollution trends using weather forecasts and historical environmental data.',
    features: [
      'Predictive modeling for NO₂ and O₃ pollutant levels',
      'Weather forecasts and historical data integration',
      'Environmental trend analysis & visualization',
      'FastAPI backend with interactive React interface'
    ],
    tech: ['Python', 'FastAPI', 'React', 'Scikit-learn', 'Machine Learning'],
    demoUrl: 'https://aeroforecast-ai-pollution-forecasting.onrender.com/',
    githubUrl: 'https://github.com/mathisurya520-hash/AeroForecast-AI',
    isPlayable: false,
    featured: true
  },
  {
    id: 'speakwise-ai',
    title: 'SpeakWise-AI',
    category: 'AI Platform',
    subCategories: ['AI & Computer Vision', 'Machine Learning'],
    description: 'An AI-powered communication platform featuring speech analysis, public speaking practice, email assistance, group discussions, presentation evaluation, mock interviews, and debate practice.',
    features: [
      'Real-time speech analysis & evaluation',
      'Public speaking and debate practice modules',
      'AI email assistance & communication coaching',
      'Mock interviews & group discussion assessments'
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    demoUrl: 'https://speakwiseai-comm.onrender.com',
    githubUrl: 'https://github.com/mathisurya520-hash/SpeakwiseAi',
    isPlayable: false,
    featured: true
  },
  {
    id: 'datasense-ai',
    title: 'DataSense AI — Data Analyst Assistant',
    category: 'AI & Analytics',
    subCategories: ['Data Analytics', 'AI & Computer Vision', 'Dashboard', 'Data Engineering'],
    description: 'An AI-powered data analysis assistant that helps analysts correct SQL queries, generate queries, understand data, and build insightful dashboards.',
    features: [
      'Automated SQL query generation & syntax correction',
      'Natural language dataset understanding & exploration',
      'Insightful data interpretation & recommendations',
      'Dashboard-ready analytics with Tableau support'
    ],
    tech: ['React', 'Python', 'SQL', 'Tableau'],
    demoUrl: '#',
    githubUrl: 'https://github.com/mathisurya520-hash/DataSense-AI',
    isPlayable: false,
    featured: true
  },
  {
    id: 'unemployment-analysis',
    title: 'Unemployment Analysis with Python',
    category: 'Data Analytics',
    subCategories: ['Data Analytics'],
    description: 'A data analysis project exploring unemployment trends across different regions and time periods to identify patterns and variations in employment.',
    features: [
      'Unemployment trend analysis across states and regions',
      'Regional comparison and demographic insights',
      'Time-based pattern and seasonal variation analysis',
      'Data visualization and economic trend reporting'
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    demoUrl: '#',
    githubUrl: 'https://github.com/mathisurya520-hash/CodeAlpha_UnemploymentAnalysis',
    isPlayable: false,
    featured: true
  },
  {
    id: 'spam-detection',
    title: 'Spam Detection',
    category: 'Machine Learning',
    subCategories: ['Machine Learning', 'Data Analytics'],
    description: 'A responsive machine learning web application designed to help users identify and classify suspicious or unwanted messages with high accuracy.',
    features: [
      'Clean and responsive user interface',
      'Message input and spam checking interface',
      'Instant prediction and classification score',
      'User-friendly interactive design'
    ],
    tech: ['Python', 'Scikit-learn', 'NLP', 'React.js'],
    demoUrl: '#',
    githubUrl: 'https://github.com/mathisurya520-hash/Spam-Detection',
    isPlayable: false,
    featured: false
  },
  {
    id: 'dorm-desk',
    title: 'Dorm Desk',
    category: 'Data Engineering',
    subCategories: ['Data Engineering'],
    description: 'A hostel complaint management system designed for college students, with separate student and admin portals to submit complaints, track issues, and manage resolutions.',
    features: [
      'Dedicated student and admin management portals',
      'Complaint submission and real-time status tracking',
      'Resolution management and issue escalation workflow',
      'Role-based secure authentication and dashboards'
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    demoUrl: '#',
    githubUrl: 'https://github.com/mathisurya520-hash/DormDesk',
    isPlayable: false,
    featured: false
  },
  {
    id: 'iris-classification',
    title: 'Iris Flower Classification',
    category: 'Machine Learning',
    subCategories: ['Machine Learning'],
    description: 'A beginner-friendly machine learning project that classifies Iris flowers into different species based on their sepal and petal measurements.',
    features: [
      'Dataset exploration & preprocessing',
      'Feature-based classification algorithms',
      'Model training & evaluation metrics',
      'Species prediction across flower attributes'
    ],
    tech: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Machine Learning'],
    demoUrl: '#',
    githubUrl: 'https://github.com/mathisurya520-hash/CodeAlpha_IrisFlowerClassification',
    isPlayable: false,
    featured: false
  },
  {
    id: 'educational-performance',
    title: 'Educational Performance & Resource Analysis',
    category: 'Data Analytics',
    subCategories: ['Data Analytics', 'Dashboard'],
    description: 'A data analytics project analyzing student performance and educational resources to identify academic trends and resource-related insights.',
    features: [
      'Student performance and grade distributions',
      'Subject-wise performance metrics and correlations',
      'Resource utilization analysis for academic institutions',
      'Interactive performance dashboards and reports'
    ],
    tech: ['Excel', 'SQL', 'Python', 'Pandas', 'Tableau'],
    demoUrl: '#',
    githubUrl: 'https://github.com/mathisurya520-hash/CodeAlpha_EducationalPerformanceDashboard',
    isPlayable: false,
    featured: false
  },
  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation & Targeted Marketing',
    category: 'Data Analytics',
    subCategories: ['Data Analytics', 'Machine Learning'],
    description: 'A data-driven customer segmentation project that groups customers based on purchasing behavior and characteristics to support targeted marketing strategies.',
    features: [
      'Customer purchasing behavior analysis',
      'K-Means clustering & demographic segmentation',
      'Spending pattern identification',
      'Actionable insights for targeted marketing campaigns'
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Tableau'],
    demoUrl: '#',
    githubUrl: 'https://github.com/mathisurya520-hash/Customer-Segmentation-Analysis-Dashboard',
    isPlayable: false,
    featured: false
  },
  {
    id: 'google-play-growth',
    title: 'Google Play Store Growth Analysis',
    category: 'Data Analytics',
    subCategories: ['Data Analytics', 'Dashboard'],
    description: 'A data analytics project analyzing Google Play Store applications to identify growth patterns, app performance, ratings, reviews, and category trends.',
    features: [
      'App category & performance benchmarking',
      'Rating and review distribution analysis',
      'Installation volume and growth dynamics',
      'Interactive visual dashboards with Tableau & Excel'
    ],
    tech: ['Python', 'Pandas', 'Excel', 'Tableau'],
    demoUrl: '#',
    githubUrl: 'https://github.com/mathisurya520-hash/google_playstore_analysis',
    isPlayable: false,
    featured: true
  },
  {
    id: 'festivo',
    title: 'Festivo',
    category: 'Data Engineering',
    subCategories: ['Data Engineering'],
    description: 'An event management website that allows users to create events, receive notifications, manage schedules, and organize events efficiently.',
    features: [
      'Event creation and schedule organization',
      'Automated notification and alert system',
      'Interactive event calendar management',
      'Streamlined database schema and coordination workflow'
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    demoUrl: '#',
    githubUrl: 'https://github.com/mathisurya520-hash',
    isPlayable: false,
    featured: false
  },
  {
    id: 'opportunity-platform',
    title: 'AI-Powered Opportunity Platform',
    category: 'AI & Data Systems',
    subCategories: ['AI & Computer Vision', 'Data Engineering'],
    description: 'An AI-powered platform that helps students discover relevant internships and scholarships, making it easier to explore academic and career opportunities.',
    features: [
      'AI-driven internship & scholarship recommendations',
      'Personalized academic & career discovery',
      'Student profile and opportunity matching algorithms',
      'Deadline notifications and application status tracking'
    ],
    tech: ['React', 'Node.js', 'Firebase', 'MySQL'],
    demoUrl: '#',
    githubUrl: 'https://github.com/mathisurya520-hash',
    isPlayable: false,
    featured: true
  },
  {
    id: 'sm-fashion',
    title: 'SM-Fashion',
    category: 'Data Engineering',
    subCategories: ['Data Engineering'],
    description: 'A boutique e-commerce website inspired by online shopping platforms like Flipkart, featuring fashion products and a convenient shopping experience.',
    features: [
      'Boutique fashion catalog and product filtering',
      'Cart, wishlist, and checkout workflow',
      'Flipkart-inspired responsive shopping experience',
      'Secure Node.js & MongoDB backend architecture'
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    demoUrl: '#',
    githubUrl: 'https://github.com/mathisurya520-hash',
    isPlayable: false,
    featured: false
  },
  {
    id: 'sheshield-app',
    title: 'SheShield App',
    category: 'Mobile & Cloud Systems',
    subCategories: ['AI & Computer Vision', 'Data Engineering'],
    description: 'A women’s safety application designed to detect configured distress phrases in the background and trigger SOS alerts with notifications to the designated administrator.',
    features: [
      'Background voice detection for configured distress phrases',
      'Instant emergency SOS trigger and location sharing',
      'Real-time push notifications to designated administrator',
      'Flutter mobile client backed by Firebase & Node.js'
    ],
    tech: ['Flutter', 'Node.js', 'Firebase'],
    demoUrl: '#',
    githubUrl: 'https://github.com/mathisurya520-hash',
    isPlayable: false,
    featured: true
  },
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn Prediction',
    category: 'Machine Learning',
    subCategories: ['Machine Learning', 'Data Analytics', 'Dashboard'],
    description: 'A machine learning and predictive analytics project that analyzes customer tenure, contract types, and service usage to forecast attrition and recommend retention tactics.',
    features: [
      'Analyzed customer data to identify churn patterns based on tenure and usage',
      'Explored customer behavior and developed insights to support retention',
      'Engineered classification pipeline with Scikit-learn and SQL data pipelines',
      'Interactive Power BI dashboard for executive risk tracking'
    ],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'SQL', 'Power BI'],
    demoUrl: '#',
    githubUrl: 'https://github.com/mathisurya520-hash',
    isPlayable: false,
    featured: true
  },
  {
    id: 'diabetes-data-analysis',
    title: 'Diabetes Data Analysis',
    category: 'Healthcare Analytics',
    subCategories: ['Data Analytics', 'Machine Learning'],
    description: 'Healthcare data analysis examining diagnostic patterns across glucose levels, BMI, age, and patient metrics to identify correlations and predictive factors.',
    features: [
      'Explored patterns across glucose levels, BMI, age, and health variables',
      'Created data visualizations to identify correlations and compare outcomes',
      'Statistical distribution analysis and feature relationship mining',
      'Visual reporting on high-risk indicator groupings'
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    demoUrl: '#',
    githubUrl: 'https://github.com/mathisurya520-hash',
    isPlayable: false,
    featured: true
  },
  {
    id: 'breast-cancer-data-analysis',
    title: 'Breast Cancer Data Analysis',
    category: 'Biomedical Data',
    subCategories: ['Machine Learning', 'Data Analytics'],
    description: 'Biomedical exploratory data analysis on breast cancer cell nuclei measurements to uncover patterns across diagnosis groups and support clinical predictive modeling.',
    features: [
      'Exploratory data analysis on tumor features and recorded diagnoses',
      'Applied data visualization and statistical analysis to detect patterns',
      'Collinearity detection and feature significance assessment',
      'Statistical foundation for diagnostic classification models'
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    demoUrl: '#',
    githubUrl: 'https://github.com/mathisurya520-hash',
    isPlayable: false,
    featured: true
  },
  {
    id: 'touchfree',
    title: 'TouchFree',
    category: 'Computer Vision',
    subCategories: ['AI & Computer Vision', 'Machine Learning'],
    description: 'A touch-free presentation control system using computer vision to enable hands-free interaction with PowerPoint through real-time hand gestures.',
    features: [
      'Real-time hand gesture detection',
      'Touch-free PowerPoint navigation',
      'Webcam-based interaction',
      'Accessibility-focused control system'
    ],
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
    demoUrl: '#',
    githubUrl: 'https://github.com/mathisurya520-hash',
    isPlayable: false,
    featured: true
  },
  {
    id: 'financial-health-dashboard',
    title: 'Financial Health Dashboard',
    category: 'Dashboard',
    subCategories: ['Dashboard', 'Data Analytics'],
    description: 'An interactive financial dashboard designed to monitor income, expenses, savings, and key financial indicators for better financial analysis.',
    features: [
      'Income & expense tracking',
      'Savings analysis',
      'Financial KPI monitoring',
      'Interactive visual dashboard'
    ],
    tech: ['Excel', 'SQL', 'Power BI', 'Data Visualization'],
    demoUrl: '#',
    githubUrl: 'https://github.com/mathisurya520-hash',
    isPlayable: false,
    featured: false
  },
  {
    id: 'neuro-xo',
    title: 'NeuroXO - Playable AI Game',
    category: 'AI & Game Engine',
    subCategories: ['AI & Computer Vision', 'Machine Learning'],
    description: 'AI-powered futuristic Tic-Tac-Toe game featuring AI opponent, multiple difficulty levels, voice interaction, score tracking, statistics dashboard, and interactive UI.',
    features: [
      'AI gameplay with Easy / Medium / Hardcore modes',
      'Voice assistance & match commentary support',
      'Statistics tracking & match logs in dashboard',
      'Glassmorphism dashboard & futuristic animations'
    ],
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Web Speech API'],
    demoUrl: 'https://neuro-xo.vercel.app/',
    githubUrl: 'https://github.com/mathisurya520-hash',
    isPlayable: true,
    featured: false
  }
];

const tabs = ['All', 'Data Analytics', 'Data Engineering', 'Machine Learning', 'Dashboard', 'AI & Computer Vision'];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [xoGameOpen, setXoGameOpen] = useState(false);

  // Filter logic
  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === 'All') return true;
    return project.subCategories.includes(activeTab);
  });

  return (
    <section id="projects" className="py-24 px-6 relative border-t border-stone-200/30">
      {/* Dynamic Background Blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-teal-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
          <div>
            <span className="text-xs font-space uppercase tracking-widest text-teal-600 font-bold">03 / Works</span>
            <h2 className="text-3xl md:text-5xl font-space font-bold text-[#2d2722] mt-2">Projects Showcase</h2>
          </div>
          
          <p className="text-stone-500 font-poppins max-w-sm mt-4 md:mt-0 text-xs md:text-sm leading-relaxed font-light">
            A comprehensive portfolio of {projectsData.length} projects across Data Analytics, Machine Learning, Data Engineering, Dashboards, and AI Systems.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2.5 pb-8 mb-8 border-b border-stone-200/30 justify-start">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border cursor-pointer ${
                activeTab === tab
                  ? 'bg-teal-700 text-white border-teal-700 shadow-md shadow-teal-700/20'
                  : 'bg-white text-stone-600 border-stone-200 hover:text-teal-700 hover:bg-stone-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`glass-card rounded-3xl p-6 border flex flex-col justify-between group relative overflow-hidden shadow-xs hover:shadow-md bg-white/75 ${
                project.featured 
                  ? 'border-teal-500/30 hover:border-teal-500/60 shadow-xs' 
                  : 'border-stone-200/40 hover:border-stone-300'
              }`}
            >
              {/* Highlight flare inside card */}
              <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-teal-500/10" />

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-teal-800 uppercase px-2.5 py-1 rounded-md bg-teal-50 border border-teal-200 font-bold">
                    {project.category}
                  </span>
                  
                  {project.featured && (
                    <div className="flex items-center space-x-1.5 text-xs text-teal-700 font-bold">
                      <Sparkles size={12} className="text-teal-600" />
                      <span>Featured Work</span>
                    </div>
                  )}
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-space font-bold text-[#2d2722] mb-3 text-left group-hover:text-teal-800 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-stone-600 font-poppins text-left leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-8 text-left">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-[11px] text-stone-600 leading-snug font-light">
                      <span className="text-teal-600 mr-2 block">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies list */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[9px] font-mono font-medium text-stone-700 px-2 py-0.5 rounded bg-stone-100 border border-stone-200/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Interactive Action Buttons */}
                <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                  <div className="flex items-center space-x-3">
                    {project.isPlayable ? (
                      <button
                        onClick={() => setXoGameOpen(true)}
                        className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-pink-500 text-white hover:bg-pink-600 transition-all duration-300 shadow-sm cursor-pointer"
                      >
                        <Play size={10} fill="currentColor" />
                        Play Game
                      </button>
                    ) : project.demoUrl !== '#' ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-stone-800 hover:text-teal-700 transition-colors"
                      >
                        <ExternalLink size={12} />
                        Live Demo
                      </a>
                    ) : (
                      <span className="text-[10px] text-stone-400 font-mono italic bg-stone-50/50 border border-stone-200/20 px-2.5 py-1.5 rounded-xl cursor-default">
                        Source on GitHub
                      </span>
                    )}

                    {project.githubUrl && project.githubUrl !== '#' ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-stone-200 bg-white text-stone-500 hover:text-teal-700 hover:border-teal-500/30 hover:bg-teal-50/50 transition-all duration-300"
                        title="View Source on GitHub"
                      >
                        <Github size={14} />
                      </a>
                    ) : (
                      <span
                        className="p-2 rounded-lg border border-stone-100 bg-stone-50/50 text-stone-300 cursor-not-allowed"
                        title="GitHub"
                      >
                        <Github size={14} />
                      </span>
                    )}
                  </div>

                  <span className="text-[9px] font-mono text-stone-400 uppercase flex items-center gap-1 font-semibold">
                    <Code2 size={10} />
                    {project.id}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* NeuroXO Pop-up Modal */}
      <NeuroXOGame isOpen={xoGameOpen} onClose={() => setXoGameOpen(false)} />
    </section>
  );
};

export default Projects;
