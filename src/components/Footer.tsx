import { Cpu, ArrowUp, FileText } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-[#070A10] text-slate-400 text-xs font-mono">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand stamp */}
        <div className="flex items-center gap-3 text-left">
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-bold text-white tracking-wider">
              PRATIK MANDANI
            </div>
            <div className="text-[11px] text-slate-500">
              Product Development &bull; Embedded Systems &bull; Full-Stack Web
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center gap-4 text-slate-400">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span>•</span>
          <a
            href={personalInfo.resumeUrl}
            download="Pratik_Mandani_Resume.pdf"
            className="hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
          <span>•</span>
          <a href="#about" className="hover:text-amber-400 transition-colors">
            About
          </a>
          <span>•</span>
          <a href="#projects" className="hover:text-amber-400 transition-colors">
            Projects
          </a>
        </div>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
        <div>
          &copy; {new Date().getFullYear()} Pratik Mandani. Designed for high technical fidelity.
        </div>
        <div className="text-slate-600">
          Hosted on GitHub Pages &bull; Base Root Domain &bull; Built with React &amp; TypeScript
        </div>
      </div>
    </footer>
  );
};
