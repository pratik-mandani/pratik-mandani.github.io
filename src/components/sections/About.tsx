import { aboutContent } from '../../data/portfolioData';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
          {aboutContent.heading}
        </h2>

        {/* Text Paragraphs */}
        <div className="space-y-4 text-base text-slate-700 leading-relaxed mb-10">
          {aboutContent.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Clean Visual Progression Flow */}
        <div className="p-6 rounded-lg border border-slate-200 bg-white">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 text-center sm:text-left">
            Engineering Evolution
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-semibold">
            {aboutContent.disciplineFlow.map((step, idx) => (
              <div key={idx} className="flex items-center gap-2 sm:gap-3">
                <span className="px-3.5 py-2 rounded bg-slate-100 text-slate-800 border border-slate-200 shadow-xs">
                  {step}
                </span>
                {idx < aboutContent.disciplineFlow.length - 1 && (
                  <span className="text-blue-600 font-bold text-base">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
