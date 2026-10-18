import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ParticleCanvas from './components/ParticleCanvas';
import CursorGlow from './components/CursorGlow';
import ResumeModal from './components/ResumeModal';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import ResumeSection from './sections/ResumeSection';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';

function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#faf7f2] text-[#2d2722] overflow-x-hidden selection:bg-teal-100 selection:text-teal-900">
      {/* Background Interactive Particles */}
      <ParticleCanvas />
      
      {/* Radial Hover Spotlight Gradient */}
      <CursorGlow />

      {/* Header Sticky Navigation */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Content wrapper */}
      <main className="relative w-full z-20">
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ResumeSection onOpenModal={() => setResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer copyright and actions */}
      <Footer onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Interactive Resume Modal Viewer */}
      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />
    </div>
  );
}

export default App;
