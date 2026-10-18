import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, FileText } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';

const Footer = ({ onOpenResumeModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-stone-200/30 py-12 px-6 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Logo and Credits */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
          <p className="text-sm font-space font-semibold text-[#2d2722] tracking-widest uppercase">
            BOMATHI S — PORTFOLIO &amp; RESUME
          </p>
          <p className="text-[11px] text-stone-500 font-poppins flex items-center gap-1.5 justify-center sm:justify-start font-light">
            Computer Science Engineering Student • Data Analytics &amp; Data Science © {new Date().getFullYear()}
          </p>
        </div>

        {/* Quick Links & Social Icons */}
        <div className="flex items-center space-x-3">
          <a
            href="/Bomathi_S_Resume.pdf"
            download="Bomathi_S_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-white text-stone-600 hover:text-teal-700 hover:border-teal-500/30 text-xs font-medium transition-all shadow-xs"
            title="Download Resume PDF"
          >
            <FileText size={13} />
            <span>Resume.pdf</span>
          </a>

          <a
            href="https://github.com/mathisurya520-hash"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl border border-stone-200 bg-white text-stone-500 hover:text-teal-700 hover:border-teal-500/30 transition-all duration-300 shadow-xs"
            title="GitHub: mathisurya520-hash"
          >
            <Github size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/bomathi-suryaprakasam"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl border border-stone-200 bg-white text-stone-500 hover:text-teal-700 hover:border-teal-500/30 transition-all duration-300 shadow-xs"
            title="LinkedIn: bomathi-suryaprakasam"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 p-3 rounded-full border border-teal-500/30 text-teal-700 bg-white shadow-md shadow-teal-500/10 hover:bg-teal-50 hover:border-teal-500/50 transition-all duration-300 transform cursor-pointer ${
          showScrollTop ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-75 pointer-events-none'
        }`}
        title="Scroll to Top"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
};

export default Footer;
