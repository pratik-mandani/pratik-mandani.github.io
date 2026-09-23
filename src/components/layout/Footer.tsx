import { personalInfo } from '../../data/portfolioData';

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Pratik Mandani
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Product Development | Embedded | Full-Stack
        </p>

        {/* Clean Links */}
        <div className="flex justify-center items-center space-x-6 mt-6 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn profile URL to be configured"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            LinkedIn <span className="text-xs text-slate-400 dark:text-slate-500">(Placeholder)</span>
          </a>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Email
          </a>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <a
            href={personalInfo.resumeUrl}
            download="Pratik_Mandani_Resume.pdf"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Resume (PDF)
          </a>
        </div>

        <p className="text-xs text-slate-400 dark:text-slate-500 mt-8">
          © {new Date().getFullYear()} Pratik Mandani. Built with clean React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
