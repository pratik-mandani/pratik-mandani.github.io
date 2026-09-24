import { skillsCategories } from '../../data/portfolioData';

export function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-18 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Technical Skills
        </h2>
        <p className="text-sm sm:text-base text-slate-500 mb-8 max-w-2xl">
          Verified technical skills categorized across product development &amp; electronics, embedded firmware, and full-stack web engineering.
        </p>

        {/* 3 Clean Category Cards */}
        <div className="space-y-6">
          {skillsCategories.map((group, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-lg border border-slate-200 bg-white shadow-2xs"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>{group.category}</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 text-xs font-medium rounded bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
