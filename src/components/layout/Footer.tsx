import { personalInfo } from '../../data/portfolioData';

export function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-slate-200 text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h3 className="text-base font-bold text-slate-900">
          {personalInfo.name}
        </h3>
        <div className="text-xs font-semibold text-blue-600 mt-0.5">
          {personalInfo.mainTitle}
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Electronics • Embedded • Web Development
        </p>

        {/* Links */}
        <div className="flex items-center justify-center gap-6 mt-5 text-xs font-medium text-slate-600">
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

        <div className="text-[11px] text-slate-400 mt-6">
          © 2026 Pratik Mandani. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
