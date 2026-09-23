import { personalInfo } from '../../data/portfolioData';

export function ResumeSection() {
  return (
    <section id="resume" className="py-16 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
          Curriculum Vitae
        </h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
          Download Resume
        </h3>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-8">
          Detailed technical resume covering 7+ years of product development, machine testing, PCB prototyping, and 4+ years of full-stack web software engineering.
        </p>

        <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="text-left">
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              Pratik_Mandani_Resume.pdf
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Authentic Engineering Resume (PDF)
            </div>
          </div>

          <a
            href={personalInfo.resumeUrl}
            download="Pratik_Mandani_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
