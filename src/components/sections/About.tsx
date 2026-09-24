import { aboutContent } from '../../data/portfolioData';

export function About() {
  return (
    <section id="about" className="py-14 sm:py-18 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-5">
          {aboutContent.heading}
        </h2>

        {/* Text Paragraphs */}
        <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed mb-8 max-w-3xl">
          {aboutContent.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Simple Process Visualization */}
        <div className="p-4 sm:p-5 rounded-lg border border-slate-200 bg-white max-w-3xl">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
            Core Engineering Evolution
          </div>

          {/* Desktop: Horizontal Process / Mobile: Stacked Vertically */}
          <div className="hidden sm:flex items-center justify-between gap-1.5 text-xs font-semibold">
            {aboutContent.disciplineFlow.map((step, idx) => (
              <div key={idx} className="flex items-center gap-1.5 flex-1 justify-between">
                <span className="px-3 py-1.5 rounded bg-slate-50 text-slate-800 border border-slate-200 text-center flex-1">
                  {step}
                </span>
                {idx < aboutContent.disciplineFlow.length - 1 && (
                  <span className="text-blue-600 font-bold px-1 select-none">→</span>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: Simple Vertical Stack with downward arrows */}
          <div className="flex sm:hidden flex-col items-center gap-1 text-xs font-semibold w-full">
            {aboutContent.disciplineFlow.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center w-full">
                <span className="w-full py-2 px-3 rounded bg-slate-50 text-slate-800 border border-slate-200 text-center">
                  {step}
                </span>
                {idx < aboutContent.disciplineFlow.length - 1 && (
                  <span className="text-blue-600 font-bold py-0.5 select-none">↓</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
