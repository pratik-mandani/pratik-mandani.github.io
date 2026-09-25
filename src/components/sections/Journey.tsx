import { journeyStages } from '../../data/portfolioData';

export function Journey() {
  return (
    <section id="journey" className="py-20 border-b border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2">
            // 02 7-YEAR ENGINEERING TIMELINE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            7-Year Engineering Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Continuous progression from machine assembly and R&amp;D at Symbian Vending Solutions to full-stack web platforms at Altius Infoway.
          </p>
        </div>

        {/* Connected Horizontal Timeline (Desktop) / Vertical (Mobile) */}
        <div className="relative">
          
          {/* Continuous Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-slate-200 z-0"></div>

          {/* Continuous Connecting Line for Mobile */}
          <div className="block md:hidden absolute top-4 bottom-4 left-[21px] w-[2px] bg-slate-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
            {journeyStages.map((stage) => {
              const companyName =
                stage.stageNumber === 3 ? 'Altius Infoway' : 'Symbian Vending Solutions';

              return (
                <div key={stage.stageNumber} className="relative flex flex-col pl-12 md:pl-0">
                  
                  {/* Timeline Node Marker */}
                  <div className="absolute left-0 md:relative md:left-auto flex items-center md:justify-center mb-4 md:mb-6">
                    <div className="w-11 h-11 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-xs">
                      <span className="w-4 h-4 rounded-full bg-blue-600"></span>
                    </div>
                  </div>

                  {/* Stage Card */}
                  <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-300 hover:shadow-xs transition-all flex-1 flex flex-col justify-between">
                    <div>
                      {/* Year / Period Badge */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-sm font-extrabold text-blue-600 px-2.5 py-1 rounded bg-blue-50 border border-blue-100">
                          {stage.period}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          STAGE 0{stage.stageNumber}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-slate-900 mt-2 mb-1">
                        {stage.title}
                      </h3>

                      {/* Company */}
                      <div className="text-xs font-semibold text-slate-500 mb-4 pb-3 border-b border-slate-100">
                        {companyName}
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                        {stage.items.slice(0, 5).map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold shrink-0 mt-0.5">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                      <span>VERIFIED</span>
                      <span className="text-slate-500">{stage.stageNumber === 1 ? '1 YR' : stage.stageNumber === 2 ? '3 YRS' : '4 YRS'}</span>
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
