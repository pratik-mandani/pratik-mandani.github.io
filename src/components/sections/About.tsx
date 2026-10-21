import { aboutContent } from '../../data/portfolioData';

export function About() {
  const steps = [
    {
      num: '01',
      title: 'Electronics & Hardware',
      desc: 'Component analysis, power conversion, signal isolation, and schematic design.',
    },
    {
      num: '02',
      title: 'Product Development',
      desc: 'Rapid PCB prototyping, connector configuration, and wiring harness assembly.',
    },
    {
      num: '03',
      title: 'R&D & Machine Testing',
      desc: 'Hands-on QA/QC validation, operational diagnostics, and system troubleshooting.',
    },
    {
      num: '04',
      title: 'Full-Stack Web Dev',
      desc: 'PHP/Laravel platforms, MySQL schemas, REST APIs, and business applications.',
    },
    {
      num: '05',
      title: 'Embedded Firmware',
      desc: 'ESP32 C/C++ architecture, peripheral bus control, I2S audio, and OLED UI.',
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Tag */}
        <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-6">
          // 01 ENGINEERING PROFILE &amp; PHILOSOPHY
        </div>

        {/* Top Split: Profile Photo Card (4 cols) + Editorial Bio (8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          
          {/* Left: Professional Avatar / Persona Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-[320px] sm:max-w-sm rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-50 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                <img
                  src="/images/profile/pratik-avatar.jpg"
                  alt="Pratik Mandani - Product Development & Full-Stack Engineer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent pointer-events-none"></div>

                {/* Status Pill Badge over Photo */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/60 text-[10px] font-mono font-semibold text-slate-800 shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>ONLINE // RAJKOT</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="font-bold text-base sm:text-lg leading-tight drop-shadow-sm">
                    Pratik Mandani
                  </div>
                  <div className="text-xs text-slate-200 font-mono tracking-tight mt-0.5">
                    Product Dev &amp; Web Engineer
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer Micro-Bar */}
              <div className="px-4 py-2.5 bg-white border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-600">
                <span className="flex items-center gap-1">
                  <span className="text-blue-600 font-bold">EXP</span> 7+ Years
                </span>
                <span className="text-slate-300">•</span>
                <span>R&amp;D + FIRMWARE + WEB</span>
              </div>
            </div>
          </div>

          {/* Right: Narrative Bio & Dual Discipline Statement */}
          <div className="lg:col-span-8 space-y-5">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {aboutContent.heading}
            </h2>

            <div className="space-y-4 text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed font-normal">
              {aboutContent.paragraphs.map((p, idx) => (
                <p key={idx}>
                  {p}
                </p>
              ))}
            </div>

            {/* Bottom Summary Callout */}
            <div className="mt-4 p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/80 flex items-start gap-3 sm:gap-4 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 font-mono text-xs sm:text-sm font-bold shadow-xs">
                ✓
              </div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">Dual Discipline Core:</span> Bridging physical machine electronics, production line assembly, and commercial-grade full-stack web software under one unified engineering mindset.
              </div>
            </div>
          </div>

        </div>

        {/* Process Flow Header */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 text-xs font-mono text-slate-500">
            <div className="font-bold text-slate-900 tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              ENGINEERING PROCESS FLOW &amp; METHODOLOGY
            </div>
            <span>01 → 05 SEQUENTIAL R&amp;D LIFECYCLE</span>
          </div>

          {/* 5-Step Process Pipeline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/60 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-extrabold text-blue-600 px-1.5 py-0.5 rounded bg-blue-50 border border-blue-100">
                      {step.num}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
