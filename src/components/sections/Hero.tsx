import { personalInfo } from '../../data/portfolioData';

export function Hero() {
  return (
    <section id="hero" className="relative py-16 sm:py-20 lg:py-24 border-b border-slate-200 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-500 mt-0.5">
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

          {/* Right Column: Subtle Editorial Circuit & System Schematic Visual (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-3xl border border-slate-200/80 bg-slate-50/50 shadow-2xs overflow-hidden">
              
              {/* Subtle Grid Underlay */}
              <div className="absolute inset-0 bg-eng-grid opacity-40 pointer-events-none"></div>

              {/* Minimal Editorial Schematic Header */}
              <div className="relative flex items-center justify-between pb-3 mb-6 border-b border-slate-200/80 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span className="text-slate-700 font-semibold">FIG. 01 — SYSTEM ARCHITECTURE</span>
                </span>
                <span>SCHEMATIC // REV 2.4</span>
              </div>

              {/* Clean SVG Circuit & Geometry Illustration */}
              <div className="relative flex items-center justify-center py-2">
                <svg
                  viewBox="0 0 380 260"
                  className="w-full h-auto text-slate-700"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Subtle alignment crosshairs */}
                  <path d="M20 20 L30 20 M20 20 L20 30" stroke="#cbd5e1" strokeWidth="1" />
                  <path d="M360 20 L350 20 M360 20 L360 30" stroke="#cbd5e1" strokeWidth="1" />
                  <path d="M20 240 L30 240 M20 240 L20 230" stroke="#cbd5e1" strokeWidth="1" />
                  <path d="M360 240 L350 240 M360 240 L360 230" stroke="#cbd5e1" strokeWidth="1" />

                  {/* Central Engineering Hub Node */}
                  <rect x="130" y="85" width="120" height="70" rx="8" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
                  <text x="190" y="115" textAnchor="middle" fill="#0f172a" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="700">CORE ENGINE</text>
                  <text x="190" y="132" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono, monospace">HARDWARE + WEB</text>

                  {/* Top Left: Power Section (24V -> 12V) */}
                  <rect x="30" y="30" width="85" height="42" rx="6" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" />
                  <text x="72" y="48" textAnchor="middle" fill="#0f172a" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600">PWR SECTION</text>
                  <text x="72" y="61" textAnchor="middle" fill="#2563eb" fontSize="8" fontFamily="JetBrains Mono, monospace">24V → 12V DC</text>

                  {/* Top Right: Full-Stack Web Platform */}
                  <rect x="265" y="30" width="85" height="42" rx="6" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" />
                  <text x="307" y="48" textAnchor="middle" fill="#0f172a" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600">WEB PLATFORM</text>
                  <text x="307" y="61" textAnchor="middle" fill="#2563eb" fontSize="8" fontFamily="JetBrains Mono, monospace">LARAVEL / SQL</text>

                  {/* Bottom Left: Embedded MCU & Bus */}
                  <rect x="30" y="170" width="85" height="42" rx="6" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" />
                  <text x="72" y="188" textAnchor="middle" fill="#0f172a" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600">EMBEDDED MCU</text>
                  <text x="72" y="201" textAnchor="middle" fill="#2563eb" fontSize="8" fontFamily="JetBrains Mono, monospace">ESP32 / C++</text>

                  {/* Bottom Right: Industrial R&D Testing */}
                  <rect x="265" y="170" width="85" height="42" rx="6" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" />
                  <text x="307" y="188" textAnchor="middle" fill="#0f172a" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600">QA / QC VALIDATION</text>
                  <text x="307" y="201" textAnchor="middle" fill="#2563eb" fontSize="8" fontFamily="JetBrains Mono, monospace">TESTING &amp; R&amp;D</text>

                  {/* Connecting Traces with subtle engineering nodes */}
                  {/* Power to Core */}
                  <path d="M115 51 L150 51 L150 85" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 3" />
                  <circle cx="115" cy="51" r="2.5" fill="#2563eb" />
                  <circle cx="150" cy="85" r="2.5" fill="#2563eb" />

                  {/* Web to Core */}
                  <path d="M265 51 L230 51 L230 85" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 3" />
                  <circle cx="265" cy="51" r="2.5" fill="#2563eb" />
                  <circle cx="230" cy="85" r="2.5" fill="#2563eb" />

                  {/* Embedded to Core */}
                  <path d="M115 191 L150 191 L150 155" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 3" />
                  <circle cx="115" cy="191" r="2.5" fill="#2563eb" />
                  <circle cx="150" cy="155" r="2.5" fill="#2563eb" />

                  {/* QA/QC to Core */}
                  <path d="M265 191 L230 191 L230 155" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 3" />
                  <circle cx="265" cy="191" r="2.5" fill="#2563eb" />
                  <circle cx="230" cy="155" r="2.5" fill="#2563eb" />

                  {/* Bus Labels */}
                  <text x="190" y="70" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="JetBrains Mono, monospace">REST API // JSON</text>
                  <text x="190" y="175" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="JetBrains Mono, monospace">I2C • I2S • GPIO</text>
                </svg>
              </div>

              {/* Minimal Engineering Footnote */}
              <div className="relative mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>COORD // RAJKOT, GUJARAT</span>
                <span className="text-slate-600 font-medium">END-TO-END DOMAIN</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
