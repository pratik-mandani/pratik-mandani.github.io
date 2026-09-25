import { personalInfo } from '../../data/portfolioData';

export function Hero() {
  return (
    <section id="hero" className="relative py-16 sm:py-20 lg:py-24 border-b border-slate-200 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Text & Hero Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* System Status / Coordinate Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-600 bg-slate-100 border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>SYS // PRODUCT DEV &amp; FULL-STACK</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500">7 YEARS EXP</span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {personalInfo.name}
              </h1>

              {/* Main Professional Title */}
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mt-2 tracking-tight">
                {personalInfo.mainTitle}
              </div>

              {/* Subtitle */}
              <p className="text-sm sm:text-base font-medium text-slate-500 mt-2">
                {personalInfo.subtitle}
              </p>
            </div>

            {/* Hero Introduction Narrative */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              {personalInfo.heroIntro}
            </p>

            {/* 4 Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:px-3.5 sm:py-3 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300 transition-colors"
                >
                  <div className="text-lg sm:text-xl xl:text-2xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-500 mt-0.5 whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Primary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                View Projects
              </a>

              <a
                href={personalInfo.contact.resumeUrl}
                download="Pratik_Mandani_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 transition-colors shadow-2xs"
              >
                <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>

            {/* Location & Quick Channels */}
            <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-500">
              <div className="flex items-center gap-1.5 text-slate-600">
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{personalInfo.contact.location}</span>
              </div>
              <span className="text-slate-300">•</span>
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                GitHub
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                LinkedIn
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                Email
              </a>
            </div>

          </div>

          {/* Right Column: Large Mirrored Workstation Graphic (No Box) */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-none">
              <img
                src="/images/hero-workstation.webp"
                alt="Product Development & Full-Stack Engineer Workstation"
                className="w-full h-auto object-contain select-none drop-shadow-sm hover:scale-[1.015] transition-transform duration-300"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
