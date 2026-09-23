import { personalInfo } from '../../data/portfolioData';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
          Get in Touch
        </h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
          Contact Information
        </h3>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed">
          I am currently open to discussing product development roles, embedded engineering initiatives, and full-stack software development projects. Feel free to reach out directly through any of the channels below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <span className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 block mb-1">
              Email
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>

          {/* GitHub */}
          <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <span className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 block mb-1">
              GitHub Profile
            </span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
            >
              <span>github.com/pratik-mandani</span>
              <span className="text-xs text-slate-400">↗</span>
            </a>
          </div>

          {/* LinkedIn Placeholder */}
          <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <span className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 block mb-1">
              LinkedIn
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                linkedin.com/in/pratik-mandani
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400">
                Placeholder
              </span>
            </div>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
              URL to be configured upon verification
            </p>
          </div>

          {/* Resume Download */}
          <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <span className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 block mb-1">
              Resume Document
            </span>
            <a
              href={personalInfo.resumeUrl}
              download="Pratik_Mandani_Resume.pdf"
              className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1.5"
            >
              <span>Download PDF (20 KB)</span>
              <span className="text-xs">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
