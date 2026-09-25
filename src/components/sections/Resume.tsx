import { personalInfo } from '../../data/portfolioData';

export function Resume() {
  return (
    <section id="resume" className="py-20 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Strong Professional CTA Band */}
        <div className="relative p-8 sm:p-12 lg:p-14 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl overflow-hidden">
          
          {/* Subtle Grid Accent in Background */}
          <div className="absolute inset-0 bg-eng-grid opacity-15 pointer-events-none"></div>

          <div className="relative max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-800">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>TECHNICAL DOSSIER &amp; SPECIFICATIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Ready to Build Something?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              View my complete professional background, product development history, and full-stack engineering track record.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={personalInfo.contact.resumeUrl}
                download="Pratik_Mandani_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Resume</span>
              </a>

              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors shadow-2xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>View GitHub</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Contact Me →
              </a>
            </div>

            <div className="pt-4 text-xs font-mono text-slate-400">
              PRATIK_MANDANI_RESUME.PDF • 7 YEARS TRACK RECORD
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
