import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, FileText, ExternalLink, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Hardware & QA', href: '#hardware' },
    { name: 'Embedded', href: '#embedded' },
    { name: 'Full-Stack', href: '#fullstack' },
    { name: 'Projects', href: '#projects' },
    { name: 'KOTL Robot', href: '#kotl' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F17]/90 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-amber-400 group-hover:border-amber-500/50 transition-colors">
            <Cpu className="w-5 h-5 transition-transform group-hover:scale-110" />
          </div>
          <div>
            <div className="font-mono text-sm font-bold tracking-wider text-slate-100 flex items-center gap-2">
              <span>PRATIK MANDANI</span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Active & Open for Opportunities" />
            </div>
            <div className="font-mono text-[10px] text-slate-400 tracking-wider">
              ENG // EMBEDDED &amp; FULL-STACK
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded text-xs font-mono tracking-wide transition-all ${
                  isActive
                    ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            download="Pratik_Mandani_Resume.pdf"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 hover:border-amber-400 transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume (PDF)</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B0F17]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded text-xs font-mono text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={personalInfo.resumeUrl}
              download="Pratik_Mandani_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded text-xs font-mono font-medium text-amber-300 bg-amber-500/10 border border-amber-500/30"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Official Resume (PDF)</span>
            </a>
            <div className="flex gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded text-xs font-mono bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded text-xs font-mono bg-cyan-950/40 border border-cyan-500/30 text-cyan-300"
              >
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
