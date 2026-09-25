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
      title: 'Full-Stack Web Development',
      desc: 'PHP/Laravel platforms, MySQL schemas, REST APIs, and e-commerce applications.',
    },
    {
      num: '05',
      title: 'Embedded Firmware',
      desc: 'ESP32 C/C++ architecture, peripheral bus control, I2S audio, and OLED UI.',
    },
  ];

  return (
    <section id="about" className="py-20 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Tag */}
        <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2">
          // 01 ENGINEERING PROFILE &amp; PHILOSOPHY
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Editorial Paragraphs (7 cols) */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              {aboutContent.heading}
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed">
              {aboutContent.paragraphs.map((p, idx) => (
                <p key={idx} className="font-normal">
                  {p}
                </p>
              ))}
            </div>

            {/* Bottom Summary Callout */}
            <div className="mt-8 p-5 rounded-xl border border-slate-200 bg-slate-50/60 flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 font-mono text-sm font-bold">
                ✓
              </div>
              <div className="text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">Dual Discipline Core:</span> Bridging physical machine electronics, production line assembly, and commercial-grade full-stack web software under one unified engineering mindset.
              </div>
            </div>
          </div>

          {/* Right Column: "How I Work" / Engineering Evolution Process (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-slate-50/70 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono">
                  Engineering Evolution
                </h3>
                <span className="text-xs font-mono text-slate-400">01 → 05</span>
              </div>

              {/* Numbered Process Steps */}
              <div className="space-y-4">
                {steps.map((step) => (
                  <div
                    key={step.num}
                    className="p-4 rounded-xl border border-slate-200/90 bg-white hover:border-blue-300 transition-colors shadow-2xs flex items-start gap-4"
                  >
                    <span className="font-mono text-base font-extrabold text-blue-600 shrink-0">
                      {step.num}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-0.5">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>R&amp;D CADENCE</span>
                <span className="text-slate-600 font-medium">END-TO-END VERIFIED</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
