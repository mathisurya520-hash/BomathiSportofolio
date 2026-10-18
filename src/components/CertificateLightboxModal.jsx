import React, { useState, useEffect } from 'react';
import { 
  X, Download, ExternalLink, CheckCircle2, Award, 
  ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, 
  Copy, Check, ShieldCheck, Calendar, BookOpen, Layers
} from 'lucide-react';

const CertificateLightboxModal = ({ 
  isOpen, 
  onClose, 
  selectedCert, 
  certificates = [], 
  onSelectCert 
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [copiedId, setCopiedId] = useState(false);

  useEffect(() => {
    // Reset zoom when cert changes or modal opens
    setZoomLevel(1);
    setCopiedId(false);
  }, [selectedCert, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  if (!isOpen || !selectedCert) return null;

  // Filter only certificates that have an image for navigation
  const visualCerts = certificates.filter(c => c.hasCertificate && c.certificateImage);
  const currentIndex = visualCerts.findIndex(c => c.id === selectedCert.id);

  const handleNext = () => {
    if (visualCerts.length <= 1) return;
    const nextIdx = (currentIndex + 1) % visualCerts.length;
    if (onSelectCert) onSelectCert(visualCerts[nextIdx]);
  };

  const handlePrev = () => {
    if (visualCerts.length <= 1) return;
    const prevIdx = (currentIndex - 1 + visualCerts.length) % visualCerts.length;
    if (onSelectCert) onSelectCert(visualCerts[prevIdx]);
  };

  const handleCopyId = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Modal Card */}
      <div 
        className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar Header */}
        <div className="px-6 py-4 bg-stone-50/90 border-b border-stone-200 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
              <Award size={18} />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-sm sm:text-base font-space font-bold text-stone-900 leading-tight">
                  {selectedCert.title}
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700">
                  <ShieldCheck size={11} />
                  Verified Proof
                </span>
              </div>
              <p className="text-xs text-stone-500 font-poppins">
                Issued to <span className="font-semibold text-stone-800">Bomathi S</span> • {selectedCert.issuer}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {selectedCert.hasCertificate && selectedCert.certificateImage && (
              <>
                <a
                  href={selectedCert.certificateImage}
                  download={`${selectedCert.title.replace(/\s+/g, '_')}_Certificate.jpg`}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-stone-200 hover:border-teal-500 text-stone-700 hover:text-teal-700 text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
                  title="Download Certificate File"
                >
                  <Download size={13} />
                  <span>Download</span>
                </a>

                <a
                  href={selectedCert.certificateImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-stone-200 hover:border-teal-500 text-stone-700 hover:text-teal-700 text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
                  title="Open Original Image in New Tab"
                >
                  <ExternalLink size={13} />
                  <span>Open Full</span>
                </a>
              </>
            )}

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white hover:bg-stone-100 border border-stone-200 text-stone-500 hover:text-stone-800 flex items-center justify-center transition-colors cursor-pointer"
              title="Close (Esc)"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body: Two Columns (Image Preview + Details) */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 min-h-0 bg-stone-100/50">
          
          {/* Left Column: Certificate Image Viewer */}
          <div className="lg:col-span-8 p-4 sm:p-6 flex flex-col items-center justify-center relative min-h-[320px] sm:min-h-[460px] bg-stone-900/5">
            {selectedCert.hasCertificate && selectedCert.certificateImage ? (
              <div className="w-full h-full flex flex-col items-center justify-center relative">
                
                {/* Navigation arrows */}
                {visualCerts.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-stone-800 shadow-lg border border-stone-200 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
                      title="Previous Certificate (Left Arrow)"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-stone-800 shadow-lg border border-stone-200 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
                      title="Next Certificate (Right Arrow)"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* The Certificate Image Container */}
                <div className="relative overflow-hidden rounded-2xl max-h-[500px] w-full flex items-center justify-center shadow-lg bg-white border border-stone-200/80">
                  <img
                    src={selectedCert.certificateImage}
                    alt={`${selectedCert.title} - Bomathi S`}
                    style={{ transform: `scale(${zoomLevel})` }}
                    className="max-h-[480px] w-auto max-w-full object-contain transition-transform duration-200 ease-out select-none"
                  />
                </div>

                {/* Floating Image Zoom Bar */}
                <div className="mt-4 flex items-center space-x-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-stone-200 shadow-md text-xs font-mono text-stone-600">
                  <button 
                    onClick={handleZoomOut} 
                    className="p-1 hover:text-teal-700 transition-colors cursor-pointer" 
                    title="Zoom Out"
                  >
                    <ZoomOut size={15} />
                  </button>
                  <span className="px-1 text-[11px] font-bold text-stone-800">{Math.round(zoomLevel * 100)}%</span>
                  <button 
                    onClick={handleZoomIn} 
                    className="p-1 hover:text-teal-700 transition-colors cursor-pointer" 
                    title="Zoom In"
                  >
                    <ZoomIn size={15} />
                  </button>
                  <span className="w-px h-3 bg-stone-300 mx-1" />
                  <button 
                    onClick={handleResetZoom} 
                    className="p-1 hover:text-teal-700 transition-colors cursor-pointer flex items-center gap-1 text-[11px]"
                    title="Reset Zoom"
                  >
                    <RotateCcw size={13} />
                    <span>Reset</span>
                  </button>
                </div>

              </div>
            ) : (
              /* When Certificate is Curriculum & Objectives based */
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-white rounded-2xl border border-stone-200 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mb-4">
                  <BookOpen size={30} />
                </div>
                <h4 className="text-lg font-space font-bold text-stone-800">
                  Course &amp; Skill Certification
                </h4>
                <p className="text-xs text-stone-500 font-poppins max-w-sm mt-1 mb-4">
                  Official syllabus objectives and competency benchmarks completed for {selectedCert.title}.
                </p>
                <div className="px-3.5 py-2 rounded-xl bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono font-medium flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-teal-600" />
                  <span>Credential Status: {selectedCert.status || 'Verified'}</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Detailed Topic & Objectives Panel */}
          <div className="lg:col-span-4 p-6 bg-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-200">
            <div className="space-y-5 text-left">
              
              {/* Category & Status */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md font-bold bg-teal-50 border border-teal-200 text-teal-800">
                  {selectedCert.category}
                </span>
                <span className="text-[10px] font-mono text-stone-500 font-semibold px-2 py-0.5 rounded-md bg-stone-100 border border-stone-200">
                  {selectedCert.status}
                </span>
              </div>

              {/* Title & Topic Box */}
              <div>
                <h4 className="text-lg font-space font-bold text-stone-900 leading-snug">
                  {selectedCert.title}
                </h4>
                <div className="mt-2 p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                  <span className="text-[10px] font-mono uppercase text-teal-700 font-bold block mb-0.5">
                    Certification Topic:
                  </span>
                  <p className="text-xs font-medium text-stone-800">
                    {selectedCert.topic || selectedCert.title}
                  </p>
                </div>
              </div>

              {/* Objectives Section */}
              <div>
                <div className="flex items-center space-x-1.5 mb-2">
                  <Layers size={14} className="text-teal-600" />
                  <span className="text-xs font-space font-bold uppercase tracking-wider text-stone-800">
                    Certification Objectives
                  </span>
                </div>
                
                {selectedCert.objectives && selectedCert.objectives.length > 0 ? (
                  <ul className="space-y-2">
                    {selectedCert.objectives.map((obj, i) => (
                      <li key={i} className="text-xs text-stone-600 font-poppins font-light leading-relaxed flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-stone-600 font-poppins font-light leading-relaxed">
                    {selectedCert.description}
                  </p>
                )}
              </div>

              {/* Skills Tags */}
              {selectedCert.skills && selectedCert.skills.length > 0 && (
                <div>
                  <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block mb-1.5">
                    Competencies &amp; Tools:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skills.map((s, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 border border-stone-200 font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Verification & Credential Details */}
              <div className="pt-3 border-t border-stone-100 space-y-2 text-xs">
                {selectedCert.credentialId && (
                  <div className="flex items-center justify-between p-2 rounded-lg bg-stone-50 border border-stone-200">
                    <div>
                      <span className="text-[10px] text-stone-400 font-mono block">Credential / Student ID</span>
                      <span className="font-mono font-bold text-stone-800 text-[11px]">{selectedCert.credentialId}</span>
                    </div>
                    <button
                      onClick={() => handleCopyId(selectedCert.credentialId)}
                      className="p-1.5 hover:bg-stone-200 rounded-md text-stone-600 hover:text-teal-700 transition-colors cursor-pointer"
                      title="Copy Credential ID"
                    >
                      {copiedId ? <Check size={14} className="text-teal-600" /> : <Copy size={14} />}
                    </button>
                  </div>
                )}

                {selectedCert.date && (
                  <div className="flex items-center gap-2 text-stone-500 font-mono text-[11px]">
                    <Calendar size={13} className="text-teal-600 flex-shrink-0" />
                    <span>Duration: {selectedCert.date}</span>
                  </div>
                )}

                {selectedCert.verifiedBy && (
                  <div className="text-[11px] text-stone-500 font-poppins font-light">
                    <span className="font-medium text-stone-700">Issued by:</span> {selectedCert.verifiedBy}
                  </div>
                )}
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-4 mt-4 border-t border-stone-200 flex items-center justify-between gap-2">
              <span className="text-[10px] font-mono text-stone-400">
                {selectedCert.hasCertificate 
                  ? `Certificate ${currentIndex + 1} of ${visualCerts.length}`
                  : 'Academic & Skill Specialization'}
              </span>

              {selectedCert.hasCertificate && selectedCert.certificateImage && (
                <a
                  href={selectedCert.certificateImage}
                  download={`${selectedCert.title.replace(/\s+/g, '_')}_Certificate.jpg`}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                >
                  <Download size={13} />
                  <span>Download</span>
                </a>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default CertificateLightboxModal;
