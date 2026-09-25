import { experienceData } from '../../data/portfolioData';

export function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2">
            // 06 CAREER HISTORY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Detailed operational tenure across full-stack software development at Altius Infoway and hardware manufacturing R&amp;D at Symbian Vending Solutions.
          </p>
        </div>

        {/* Professional Career Timeline */}
        <div className="relative pl-6 sm:pl-8 space-y-12 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-[2px] before:bg-slate-200">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Track Node */}
              <div className="absolute -left-[29px] sm:-left-[37px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-blue-600 shadow-2xs"></div>

              {/* Main Timeline Card */}
              <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 transition-all">
                
                {/* Header: Company, Date & Role */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
                      {exp.company}
                    </h3>
                    <div className="text-base font-bold text-blue-600 mt-0.5">
                      {exp.designation}
                    </div>
                    {exp.teamSize && (
                      <div className="text-xs font-medium text-slate-500 mt-0.5">
                        {exp.teamSize}
                      </div>
                    )}
                  </div>

                  <div className="self-start sm:self-auto font-mono text-xs font-bold px-3 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200">
                    <span>{exp.period}</span>
                    <span className="text-slate-300 mx-1.5">•</span>
                    <span className="text-blue-600">{exp.duration}</span>
                  </div>
                </div>

                {/* Career Progression Flow */}
                <div className="py-4 border-b border-slate-100">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Career Progression:
                  </span>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold">
                    {exp.careerProgression.map((role, rIdx) => (
                      <div key={rIdx} className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-800 border border-slate-200">
                          {role}
                        </span>
                        {rIdx < exp.careerProgression.length - 1 && (
                          <span className="text-blue-600 font-bold">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compact 2-Column Responsibilities */}
                <div className="pt-5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Operational Scope &amp; Responsibilities
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold shrink-0 mt-0.5">•</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optional context note */}
                {exp.contextNote && (
                  <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-mono text-slate-400">
                    {exp.contextNote}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
