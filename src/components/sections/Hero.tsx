import { personalInfo } from '../../data/portfolioData';

export function Hero() {
  return (
    <section id="home" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Name */}
        <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-xs font-semibold tracking-wider uppercase mb-4">
          Engineering Portfolio
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Pratik Mandani
        </h1>

        {/* Headline */}
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 mt-3">
          Product Development &amp; Full-Stack Engineer
        </h2>

        {/* Supporting Line */}
        <p className="text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 mt-2">
          Electronics | Embedded Systems | Firmware | Industrial Automation | Web Development
        </p>

        {/* Short Introduction */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-6 max-w-3xl">
          I started my career in product development and vending-machine systems, working across production, machine testing, PCB prototyping and R&amp;D. I later moved into web development and currently work across frontend, PHP, Laravel, MySQL, e-commerce and ERP systems.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
          >
            View Projects
          </a>

          <a
            href={personalInfo.resumeUrl}
            download="Pratik_Mandani_Resume.pdf"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-md bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors shadow-sm"
          >
            Download Resume (PDF)
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
