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

          {/* Right Column: Abstract Technical & Circuit Engineering Visual (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-7 rounded-2xl border border-slate-200 bg-slate-50/80 shadow-xs overflow-hidden">
              
              {/* Engineering Grid Underlay */}
              <div className="absolute inset-0 bg-eng-grid opacity-60 pointer-events-none"></div>

              {/* Header Bar */}
              <div className="relative flex items-center justify-between pb-4 mb-4 border-b border-slate-200 text-xs font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="font-semibold text-slate-700">ENGINEERING_MODULES</span>
                </div>
                <span>SYS // 24V &amp; MCU</span>
              </div>

              {/* Technical Architecture Diagram (Circuit nodes & layout) */}
              <div className="relative space-y-3 font-mono text-xs">
                
                {/* Module 1: Hardware & Power Section */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-blue-300 transition-all">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                      <span className="text-blue-600">■</span> HARDWARE &amp; POWER R&amp;D
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-semibold border border-blue-100">
                      24V → 12V
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 space-y-0.5">
                    <div>• LM2576 Step-Down Power Section</div>
                    <div>• Optocoupler Signal Isolation &amp; Relays</div>
                    <div>• Vending Machine Harness &amp; Wiring</div>
                  </div>
                </div>

                {/* Circuit Line Connector */}
                <div className="flex items-center justify-center my-1 text-slate-300">
                  <span className="h-4 w-px bg-slate-300"></span>
                </div>

                {/* Module 2: Embedded Firmware */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-blue-300 transition-all">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                      <span className="text-blue-600">■</span> EMBEDDED SYSTEMS
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-100">
                      ESP32 / C++
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 space-y-0.5">
                    <div>• SSD1306 OLED (I2C) &amp; RoboEyes Graphics</div>
                    <div>• MAX98357A I2S DAC Audio &amp; Non-blocking Playback</div>
                    <div>• MAX9814 Microphone Sound Trigger Input</div>
                  </div>
                </div>

                {/* Circuit Line Connector */}
                <div className="flex items-center justify-center my-1 text-slate-300">
                  <span className="h-4 w-px bg-slate-300"></span>
                </div>

                {/* Module 3: Web Platforms & Systems */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-blue-300 transition-all">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                      <span className="text-blue-600">■</span> WEB &amp; FULL-STACK
                    </span>
                    <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[10px] font-semibold border border-indigo-100">
                      LARAVEL / SQL
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 space-y-0.5">
                    <div>• 100+ Production Websites &amp; Applications</div>
                    <div>• E-Commerce, Catalogs &amp; Business Management ERP</div>
                    <div>• REST APIs, Database Architecture &amp; Deployment</div>
                  </div>
                </div>

              </div>

              {/* Footer Coordinate Stamp */}
              <div className="relative mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>COORD // 22.3039° N, 70.8022° E</span>
                <span className="text-blue-600 font-semibold">VERIFIED ARCHITECTURE</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
