import { productDevProjects } from '../../data/portfolioData';

export function ProductDevelopment() {
  const [project1, project2, project3] = productDevProjects;

  return (
    <section id="product-dev" className="py-20 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2">
            // 03 HARDWARE &amp; EMBEDDED R&amp;D
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Product Development &amp; Electronics
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Hands-on engineering in vending-machine manufacturing, custom PCB prototyping, power conversion, signal isolation, and commercial machine integration at Symbian Vending Solutions.
          </p>
        </div>

        <div className="space-y-16">
          
          {/* PROJECT 1: Reusable Vending Control Card (Image 55% LEFT, Content 45% RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-3xl border border-slate-200 bg-slate-50/50 shadow-xs hover:border-slate-300 transition-all">
            
            {/* Image (55% = 7 cols on lg) */}
            <div className="lg:col-span-7">
              <div className="img-frame aspect-16/10 relative flex items-center justify-center p-4 bg-slate-100">
                <img
                  src={project1.imagePath || '/images/pcb/control-card.svg'}
                  alt={project1.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[10px] font-mono font-semibold text-slate-700 border border-slate-200 shadow-2xs">
                  SCHEMATIC // PROTEUS 8
                </div>
              </div>
            </div>

            {/* Content (45% = 5 cols on lg) */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                  {project1.type}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {project1.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {project1.description}
              </p>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs">
                <span className="font-bold text-slate-700 block mb-1 font-mono uppercase text-[11px]">
                  Tooling &amp; Platform:
                </span>
                <span className="text-slate-600 font-medium">
                  {project1.tools} • Modular Header Interfaces • Relay Drivers
                </span>
              </div>

              {/* Responsibilities */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2 font-mono">
                  Key Responsibilities
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project1.responsibilities.map((resp, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white text-slate-700 border border-slate-200"
                    >
                      {resp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* PROJECT 2: 24V–12V Coin Mechanism Interface (REVERSE: Content 45% LEFT, Image 55% RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-3xl border border-slate-200 bg-slate-50/50 shadow-xs hover:border-slate-300 transition-all">
            
            {/* Content (45% = 5 cols on lg, ordered first on desktop) */}
            <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                  {project2.type}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {project2.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {project2.description}
              </p>

              {/* Confirmed Hardware */}
              {project2.confirmedHardware && (
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-2">
                  <span className="font-bold text-slate-800 block font-mono uppercase text-[11px]">
                    Confirmed Hardware Architecture:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 font-medium">
                    {project2.confirmedHardware.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Responsibilities */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2 font-mono">
                  Key Responsibilities
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project2.responsibilities.map((resp, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white text-slate-700 border border-slate-200"
                    >
                      {resp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Image (55% = 7 cols on lg, ordered second on desktop) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="img-frame aspect-16/10 relative flex items-center justify-center p-4 bg-slate-100">
                <img
                  src={project2.imagePath || '/images/pcb/coin-interface.svg'}
                  alt={project2.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[10px] font-mono font-semibold text-slate-700 border border-slate-200 shadow-2xs">
                  CIRCUIT // OPTOCOUPLER ISOLATION
                </div>
              </div>
            </div>

          </div>

          {/* PROJECT 3: Touch / QR / Automatic Cup Vending (Full-Width Featured Layout) */}
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200 bg-slate-50/50 shadow-xs hover:border-slate-300 transition-all space-y-8">
            
            {/* Top: Large Featured Preview Area */}
            <div className="img-frame w-full max-h-[360px] relative flex items-center justify-center p-6 bg-slate-100">
              <img
                src={project3.imagePath || '/images/vending/qr-system.svg'}
                alt={project3.title}
                className="w-full h-full max-h-[300px] object-contain"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[10px] font-mono font-semibold text-slate-700 border border-slate-200 shadow-2xs">
                SYSTEM INTEGRATION // COMMERCIAL MACHINES
              </div>
            </div>

            {/* Bottom: Detailed Case & Responsibilities */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                    {project3.type}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    {project3.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {project3.description}
                </p>

                {/* Explicit Disclaimer Alert */}
                {project3.disclaimer && (
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
                    <span className="font-bold text-amber-700 shrink-0 text-sm">ℹ</span>
                    <div>
                      <span className="font-bold">Role Clarification: </span>
                      {project3.disclaimer}
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3 font-mono">
                  Machine Integration Scope
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                  {project3.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-1.5 rounded bg-slate-50">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
