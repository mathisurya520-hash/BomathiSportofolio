import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Download } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ onOpenResumeModal }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for sticky shadow/border adjustments
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to update active navigation item based on scroll position
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navbarHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-stone-200/50 py-3.5 shadow-xs'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-xl sm:text-2xl font-space font-bold tracking-widest text-[#2d2722] hover:opacity-85 transition-opacity flex items-center gap-1.5"
        >
          <span>BOMATHI S</span>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 glass-panel px-2 py-1 rounded-full border border-stone-200/50 shadow-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'text-teal-800 bg-teal-500/10 border border-teal-500/20 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 border border-transparent'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-2.5">
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-teal-500/30 hover:border-teal-500/60 text-xs font-semibold bg-teal-50/50 hover:bg-teal-50 text-teal-800 transition-all shadow-xs cursor-pointer"
          >
            <FileText size={13} className="text-teal-700" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-teal-700 hover:bg-teal-800 text-xs font-semibold text-white transition-all shadow-xs cursor-pointer"
          >
            <span>Connect</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-stone-700 hover:text-stone-900 focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full glass-panel border-b border-stone-200/50 transition-all duration-300 md:hidden overflow-hidden ${
          mobileMenuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-3 p-6 bg-white/95 backdrop-blur-xl text-left">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-base font-medium py-1.5 border-b border-stone-100 transition-all ${
                  isActive ? 'text-teal-700 pl-2 border-teal-500/30 font-bold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {item.name}
              </a>
            );
          })}

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenResumeModal) onOpenResumeModal();
              }}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-teal-500/30 bg-teal-50/70 text-teal-800 font-semibold text-sm"
            >
              <FileText size={15} />
              <span>View Full Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-700 text-white font-semibold text-sm shadow-xs"
            >
              <span>Connect</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
