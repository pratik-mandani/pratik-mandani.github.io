import { journeyStages } from '../../data/portfolioData';

export function Journey() {
  return (
    <section id="journey" className="py-16 sm:py-20 border-b border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2">
            // 02 7-YEAR ENGINEERING TIMELINE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            7-Year Engineering Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Continuous progression from machine assembly and R&amp;D at Symbian Vending Solutions to full-stack web platforms at Altius Infoway.
          </p>
        </div>

        {/* Connected Horizontal Timeline (Desktop) / Vertical (Mobile) */}
        <div className="relative">
          
          {/* Continuous Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-[20px] left-[15%] right-[15%] h-[2px] bg-blue-200 z-0"></div>

          {/* Continuous Connecting Line for Mobile */}
          <div className="block md:hidden absolute top-3 bottom-3 left-[19px] w-[2px] bg-blue-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {journeyStages.map((stage) => {
              const companyName =
                stage.stageNumber === 3 ? 'Altius Infoway' : 'Symbian Vending Solutions';

              return (
                <div key={stage.stageNumber} className="relative flex flex-col pl-10 md:pl-0">
                  
                  {/* Timeline Node Marker */}
                  <div className="absolute left-0 md:relative md:left-auto flex items-center md:justify-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-xs">
                      <span className="w-3.5 h-3.5 rounded-full bg-blue-600"></span>
                    </div>
                  </div>

                  {/* Stage Card */}
                  <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-300 hover:shadow-xs transition-all flex-1 flex flex-col justify-between">
                    <div>
                      {/* Period Badge */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-bold text-blue-700 px-2 py-0.5 rounded bg-blue-50 border border-blue-100">
                          {stage.period}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          STAGE 0{stage.stageNumber}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-slate-900 mt-1 mb-0.5">
                        {stage.title}
                      </h3>

                      {/* Company */}
                      <div className="text-xs font-semibold text-slate-500 mb-3 pb-2 border-b border-slate-100">
                        {companyName}
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                        {stage.items.slice(0, 5).map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-blue-600 font-bold shrink-0">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-slate-100 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                      <span>VERIFIED HISTORY</span>
                      <span className="text-slate-600 font-semibold">{stage.stageNumber === 1 ? '1 YR' : stage.stageNumber === 2 ? '3 YRS' : '4 YRS'}</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
