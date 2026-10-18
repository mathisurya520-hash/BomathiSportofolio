import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Phone, Globe, Download, AlertCircle, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const targetEmail = 'bomathisurya6@gmail.com';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Direct email dispatch to bomathisurya6@gmail.com via FormSubmit AJAX service
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          _subject: formData.subject 
            ? `[Portfolio Inquiry] ${formData.subject}` 
            : `New Message from ${formData.name} via Portfolio`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback: trigger mailto if API returns unexpected format
        throw new Error(data.message || 'Unable to deliver message automatically');
      }
    } catch (err) {
      console.warn('FormSubmit network error, providing direct mailto fallback:', err);
      // Construct fallback mailto URL so user's message is never lost
      const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
        formData.subject || `Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      setErrorMessage(
        'Direct delivery was blocked by your browser/network. Click below to send via your email client:'
      );
      // Optionally open mail client
      window.location.href = mailtoUrl;
    } finally {
      setIsSubmitting(false);
    }
  };

  const getDirectMailto = () => {
    const subj = encodeURIComponent(formData.subject || 'Portfolio Inquiry for Bomathi S');
    const body = encodeURIComponent(
      formData.message 
        ? `Name: ${formData.name || 'Visitor'}\nEmail: ${formData.email || ''}\n\nMessage:\n${formData.message}`
        : 'Hello Bomathi,\n\nI came across your portfolio and would like to discuss an opportunity...'
    );
    return `mailto:${targetEmail}?subject=${subj}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 relative border-t border-stone-200/30 bg-[#faf7f2]">
      {/* Ambient backgrounds */}
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-1/4 top-1/2 w-80 h-80 rounded-full bg-pink-500/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-left mb-16">
          <span className="text-xs font-space uppercase tracking-widest text-teal-600 font-bold">06 / Connect</span>
          <h2 className="text-3xl md:text-5xl font-space font-bold text-[#2d2722] mt-2">Get In Touch</h2>
          <p className="text-stone-500 text-xs sm:text-sm font-poppins mt-2 max-w-lg font-light">
            Have a project, role, or question? Send a message directly to <strong className="text-teal-700 font-semibold">{targetEmail}</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Information Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-left">
              <h3 className="text-2xl font-space font-bold text-[#2d2722] tracking-wide">
                Let’s build something impactful together.
              </h3>
              <p className="text-stone-500 font-poppins text-xs sm:text-sm leading-relaxed max-w-sm font-light">
                Seeking opportunities in Data Analytics, Data Science, Machine Learning, or Dashboard Engineering. All incoming messages are forwarded directly to my inbox.
              </p>
            </div>

            {/* Info list */}
            <div className="space-y-3">
              
              {/* Email Address Card */}
              <a 
                href={`mailto:${targetEmail}`}
                className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-teal-500/30 hover:border-teal-500/60 text-left group shadow-xs transition-all bg-white/80"
              >
                <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-700 group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-teal-700 font-mono uppercase tracking-wider block font-bold">Direct Email (Active)</span>
                  <span className="text-sm font-bold text-stone-900 font-mono">{targetEmail}</span>
                </div>
              </a>

              {/* Phone */}
              <a 
                href="tel:6381270345"
                className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-stone-200/50 hover:border-teal-500/40 text-left group shadow-xs transition-all bg-white/70"
              >
                <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-700 group-hover:scale-110 transition-transform">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 font-mono uppercase tracking-wider block font-semibold">Direct Phone</span>
                  <span className="text-sm font-bold text-stone-800 font-mono">6381270345</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/bomathi-suryaprakasam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-stone-200/50 hover:border-teal-500/40 text-left group shadow-xs transition-all bg-white/70"
              >
                <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-700 group-hover:scale-110 transition-transform">
                  <Linkedin size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 font-mono uppercase tracking-wider block font-semibold">LinkedIn Profile</span>
                  <span className="text-sm font-bold text-stone-800">bomathi-suryaprakasam</span>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/mathisurya520-hash"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-stone-200/50 hover:border-teal-500/40 text-left group shadow-xs transition-all bg-white/70"
              >
                <div className="p-3 rounded-xl bg-stone-100 border border-stone-200 text-stone-700 group-hover:scale-110 transition-transform">
                  <Github size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 font-mono uppercase tracking-wider block font-semibold">GitHub Repository</span>
                  <span className="text-sm font-bold text-stone-800">mathisurya520-hash</span>
                </div>
              </a>

              {/* Resume download quick banner */}
              <div className="p-4 rounded-2xl bg-teal-500/5 border border-teal-500/20 flex items-center justify-between">
                <div className="text-left">
                  <span className="text-[10px] text-teal-800 font-mono uppercase tracking-wider block font-bold">Verified Resume</span>
                  <span className="text-xs text-stone-700 font-medium">Bomathi_S_Resume.pdf</span>
                </div>
                <a
                  href="/Bomathi_S_Resume.pdf"
                  download="Bomathi_S_Resume.pdf"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold shadow-xs transition-all"
                >
                  <Download size={12} />
                  Download
                </a>
              </div>

            </div>
          </div>

          {/* Right Side: Message Input Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-stone-200/50 relative overflow-hidden bg-white/80 shadow-xs">
              
              {submitSuccess ? (
                <div className="py-14 flex flex-col items-center justify-center space-y-4 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-700 animate-bounce">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-xl font-space font-bold text-[#2d2722] tracking-wide">Message Dispatched!</h4>
                  <p className="text-xs text-stone-600 font-poppins max-w-sm font-light leading-relaxed">
                    Your message has been delivered to <strong className="text-teal-700 font-semibold">{targetEmail}</strong>. Bomathi S will respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-2 px-5 py-2 text-xs font-semibold rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-stone-500 font-mono uppercase tracking-wider block font-semibold">Your Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Jane Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-800 placeholder-stone-400 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 focus:bg-white transition-all font-poppins shadow-xs text-xs sm:text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-stone-500 font-mono uppercase tracking-wider block font-semibold">Your Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. jane@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-800 placeholder-stone-400 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 focus:bg-white transition-all font-poppins shadow-xs text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-stone-500 font-mono uppercase tracking-wider block font-semibold">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Data Analytics Intern Opportunity / Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-800 placeholder-stone-400 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 focus:bg-white transition-all font-poppins shadow-xs text-xs sm:text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-stone-500 font-mono uppercase tracking-wider block font-semibold">Message Body *</label>
                    <textarea 
                      name="message" 
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your project, internship, or inquiry details..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-800 placeholder-stone-400 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 focus:bg-white transition-all resize-none font-poppins shadow-xs text-xs sm:text-sm"
                    />
                  </div>

                  {/* Delivery notification notice */}
                  <div className="text-[11px] text-stone-500 font-poppins flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse" />
                      Direct email delivery to <strong className="text-teal-800">{targetEmail}</strong>
                    </span>
                    <a
                      href={getDirectMailto()}
                      className="text-teal-700 hover:underline flex items-center gap-1 font-medium"
                    >
                      <span>Open in Mail App</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>

                  {/* Error / Fallback Alert if network blocked */}
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <AlertCircle size={16} className="text-amber-600 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                      <a
                        href={getDirectMailto()}
                        className="px-3 py-1 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors whitespace-nowrap"
                      >
                        Send via Email App
                      </a>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-teal-800 text-white font-semibold hover:bg-teal-900 transition-all flex items-center justify-center gap-2 text-sm shadow-sm cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>Delivering to {targetEmail}...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message to Bomathi S</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
