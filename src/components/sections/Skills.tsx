import { skillsCategories } from '../../data/portfolioData';

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Technical Skills
        </h2>
        <p className="text-sm text-slate-500 mb-8">
          Categorized breakdown of confirmed hardware, firmware, and web development proficiencies.
        </p>

        {/* 3 Clean Category Columns / Stack */}
        <div className="space-y-6">
          {skillsCategories.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-slate-200 bg-white"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                {group.category}
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
