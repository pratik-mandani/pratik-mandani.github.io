import { personalInfo } from '../../data/portfolioData';

export function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div>
            <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
              {personalInfo.name}
            </h3>
            <div className="text-xs font-semibold text-blue-600 mt-0.5">
              {personalInfo.mainTitle}
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Hardware R&amp;D • Embedded Firmware • Full-Stack Web Architecture
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-medium text-slate-600">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
            <span className="text-slate-300">•</span>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-300">•</span>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="hover:text-blue-600 transition-colors"
            >
              Email
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
          <span>SYS_ID: PM-PORTFOLIO-2026</span>
          <span>© 2026 Pratik Mandani. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
