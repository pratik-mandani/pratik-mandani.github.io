import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Terminal,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-[#0B0F17]/95 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>COMMUNICATION CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Connect &amp; Collaborate
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Interested in product engineering, embedded firmware development, or scalable full-stack web platforms? 
            Reach out directly via email, phone, or GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Direct Email
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base sm:text-lg font-bold font-mono text-white hover:text-amber-400 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Phone / Mobile
                </div>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="text-base sm:text-lg font-bold font-mono text-white hover:text-cyan-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Current Location
                </div>
                <div className="text-base font-bold font-mono text-white">
                  {personalInfo.location}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Company: {personalInfo.company}
                </div>
              </div>
            </div>

            {/* Professional Profiles (GitHub + LinkedIn Placeholder) */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                Professional Online Profiles
              </div>

              <div className="space-y-3">
                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all text-xs font-mono group"
                >
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <GithubIcon className="w-4 h-4 text-white" />
                    <span>github.com/pratik-mandani</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                {/* LinkedIn Placeholder */}
                <div className="p-3 rounded-xl bg-slate-950/40 border border-dashed border-slate-700/80 text-xs font-mono flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-slate-400">
                    <LinkedinIcon className="w-4 h-4 text-cyan-500/60" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-medium">
                    Placeholder (Configure URL)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Interactive Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-white font-mono mb-2 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-amber-400" />
              <span>Send a Message</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Submitting opens your default email client with your message pre-formatted.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-xs font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Product Engineering Inquiry / Full-Stack Project"
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-xs font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your inquiry, project requirements, or opportunity..."
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-xs font-mono resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-mono font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-500/10"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Message</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  Message pre-composed in your email client!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
