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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Detailed operational tenure across full-stack software development at Altius Infoway and hardware manufacturing R&amp;D at Symbian Vending Solutions.
          </p>
        </div>

        {/* 2 Timeline Experience Blocks */}
        <div className="space-y-12">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 transition-all"
            >
              {/* Header: Company, Date & Role */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {exp.company}
                  </h3>
                  <div className="text-base sm:text-lg font-bold text-blue-600 mt-1">
                    {exp.designation}
                  </div>
                  {exp.teamSize && (
                    <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                      {exp.teamSize}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 self-start font-mono text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 border border-slate-200">
                  <span>{exp.period}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-blue-600">{exp.duration}</span>
                </div>
              </div>

              {/* Career Progression Flow */}
              <div className="py-5 border-b border-slate-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                  Career Progression:
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold">
                  {exp.careerProgression.map((role, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200">
                        {role}
                      </span>
                      {rIdx < exp.careerProgression.length - 1 && (
                        <span className="text-blue-600 font-bold text-base">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsibilities in 2 Columns */}
              <div className="pt-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-4">
                  Operational Responsibilities
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-700 leading-relaxed font-normal">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold shrink-0 mt-0.5">•</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Context Footer if present */}
              {exp.contextNote && (
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-mono">
                  {exp.contextNote}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
