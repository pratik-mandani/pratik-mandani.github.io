import { journeyStages } from '../../data/portfolioData';

export function Journey() {
  return (
    <section id="journey" className="py-14 sm:py-18 border-b border-slate-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          7-Year Journey
        </h2>
        <p className="text-sm sm:text-base text-slate-500 mb-8 max-w-2xl">
          Three distinct stages reflecting hands-on progression from production floor electronics to full-stack software development.
        </p>

        {/* 3 Major Stages Grid (Visually Equal Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {journeyStages.map((stage) => (
            <div
              key={stage.stageNumber}
              className="p-5 sm:p-6 rounded-lg border border-slate-200 bg-slate-50/60 flex flex-col h-full"
            >
              {/* Header: Stage Number & Period */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Stage {stage.stageNumber}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-white text-slate-700 border border-slate-200 shadow-2xs">
                  {stage.period}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-base text-slate-900 mb-4 leading-snug">
                {stage.title}
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 flex-1">
                {stage.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 select-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
