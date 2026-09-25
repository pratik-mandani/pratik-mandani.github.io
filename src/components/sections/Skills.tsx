import { skillsCategories } from '../../data/portfolioData';

export function Skills() {
  const groupMeta = [
    {
      symbol: '⚡',
      badge: 'HARDWARE & R&D',
      scope: 'PCB prototyping, schematic design in Proteus 8, 24V-12V power conversion, signal isolation, QA/QC machine testing, and assembly harness wiring.',
      accent: 'text-amber-600 bg-amber-50 border-amber-200',
    },
    {
      symbol: '⎔',
      badge: 'MCU & EMBEDDED BUS',
      scope: 'ESP32 & Arduino C/C++ firmware, SSD1306 OLED RoboEyes, MAX98357A I2S DAC audio, MAX9814 microphone ADC, and non-blocking state loops.',
      accent: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      symbol: '</>',
      badge: 'FULL-STACK SOFTWARE',
      scope: 'PHP/Laravel architecture, relational MySQL schemas, REST APIs, Bootstrap, Tailwind CSS, jQuery, Git version control, and client production deployments.',
      accent: 'text-blue-600 bg-blue-50 border-blue-200',
    },
  ];

  return (
    <section id="skills" className="py-20 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2">
            // 07 TECHNICAL CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Technical Skills &amp; Domain Map
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Categorized map of confirmed hardware prototyping, embedded firmware protocols, and production web development proficiencies.
          </p>
        </div>

        {/* 3 Visually Dense & Distinctive Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillsCategories.map((group, idx) => {
            const meta = groupMeta[idx] || groupMeta[0];

            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase border ${meta.accent}`}>
                      <span>{meta.symbol}</span>
                      <span>{meta.badge}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                    {group.category}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed mb-6 font-normal">
                    {meta.scope}
                  </p>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white text-slate-800 border border-slate-200/90 shadow-2xs hover:border-blue-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-3 border-t border-slate-200/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>CAPABILITIES</span>
                  <span className="text-slate-600 font-semibold">{group.skills.length} CONFIRMED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
