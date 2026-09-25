import { skillsCategories } from '../../data/portfolioData';

export function Skills() {
  const groupIcons = [
    {
      symbol: '⚡',
      badge: 'HARDWARE & CIRCUIT R&D',
      accentColor: 'text-amber-600 bg-amber-50 border-amber-200',
    },
    {
      symbol: '⎔',
      badge: 'MCU & BUS PROTOCOLS',
      accentColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      symbol: '</>',
      badge: 'FULL-STACK SOFTWARE',
      accentColor: 'text-blue-600 bg-blue-50 border-blue-200',
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Technical Skills &amp; Domain Map
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Categorized map of confirmed hardware prototyping, embedded firmware protocols, and production web development proficiencies.
          </p>
        </div>

        {/* 3 Visually Distinct Skill Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillsCategories.map((group, idx) => {
            const meta = groupIcons[idx] || groupIcons[0];

            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase border ${meta.accentColor}`}>
                      <span>{meta.symbol}</span>
                      <span>{meta.badge}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-4">
                    {group.category}
                  </h3>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-white text-slate-800 border border-slate-200 shadow-2xs hover:border-blue-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/80 text-xs font-mono text-slate-400 flex items-center justify-between">
                  <span>DISCIPLINE</span>
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
