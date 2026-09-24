import { personalInfo } from '../../data/portfolioData';

export function Hero() {
  return (
    <section id="hero" className="py-14 sm:py-18 md:py-20 border-b border-slate-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
          {personalInfo.name}
        </h1>

        {/* Main Professional Title */}
        <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">
          {personalInfo.mainTitle}
        </div>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-base font-medium text-slate-500 mb-6">
          {personalInfo.subtitle}
        </p>

        {/* Hero Intro */}
        <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed mb-8 max-w-3xl">
          {personalInfo.heroIntro}
        </p>

        {/* Hero Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-lg border border-slate-200 bg-slate-50/70 text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-7">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-2.5 rounded text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white text-center transition-colors shadow-xs"
          >
            View Projects
          </a>

          <a
            href={personalInfo.contact.resumeUrl}
            download="Pratik_Mandani_Resume.pdf"
            className="w-full sm:w-auto px-6 py-2.5 rounded text-sm font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-center transition-colors shadow-xs"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-2.5 rounded text-sm font-semibold bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-center transition-colors shadow-xs"
          >
            Contact Me
          </a>
        </div>

        {/* Quick Social & Contact Channels */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500 pt-4 border-t border-slate-100">
          <a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
          >
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${personalInfo.contact.email}`}
            className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
          >
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{personalInfo.contact.email}</span>
          </a>

          <span className="flex items-center gap-1 text-slate-500">
            <svg className="w-4 h-4 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{personalInfo.contact.location}</span>
          </span>
        </div>
      </div>
    </section>
  );
}
