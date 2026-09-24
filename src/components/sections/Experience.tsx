import { experienceData } from '../../data/portfolioData';

export function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-18 border-b border-slate-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Professional Experience
        </h2>
        <p className="text-sm sm:text-base text-slate-500 mb-8 max-w-2xl">
          Detailed background across machine manufacturing operations, product R&amp;D, and full-stack web application development.
        </p>

        {/* 2 Clean Experience Cards */}
        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-7 rounded-lg border border-slate-200 bg-slate-50/50 shadow-xs"
            >
              {/* Header: Company & Period */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {exp.company}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200 self-start sm:self-auto shadow-2xs">
                  {exp.period} ({exp.duration})
                </span>
              </div>

              {/* Designation or Team Size */}
              {exp.designation && (
                <div className="text-sm font-semibold text-blue-600 mb-3">
                  Designation: {exp.designation}
                </div>
              )}
              {exp.teamSize && (
                <div className="text-xs font-medium text-slate-500 mb-3">
                  {exp.teamSize}
                </div>
              )}

              {/* Career Progression Flow */}
              <div className="mb-4 p-3 rounded bg-white border border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                  Career Progression:
                </span>
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-800">
                  {exp.careerProgression.map((role, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {role}
                      </span>
                      {rIdx < exp.careerProgression.length - 1 && (
                        <span className="text-blue-600 font-bold select-none">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Context Note (e.g. 100+ websites) */}
              {exp.contextNote && (
                <div className="p-3 rounded bg-blue-50/80 border border-blue-200 text-xs text-blue-900 font-medium mb-4">
                  {exp.contextNote}
                </div>
              )}

              {/* Responsibilities */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Key Responsibilities:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1.5 text-xs text-slate-700">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-1.5">
                      <span className="text-blue-500 font-bold select-none">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
