import { kotlProjectData } from '../../data/portfolioData';

export function KotlProject() {
  return (
    <section id="kotl" className="py-20 border-b border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2">
            // 04 FEATURED PERSONAL PROJECT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            {kotlProjectData.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {kotlProjectData.subtitle} • {kotlProjectData.description}
          </p>
        </div>

        {/* 55% Visual / 45% Information Desktop Split */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200 bg-white shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Prominent KOTL Photograph (55% = 7 cols on lg) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="img-frame relative aspect-16/10 sm:aspect-4/3 bg-slate-900 overflow-hidden shadow-sm">
                <img
                  src={kotlProjectData.imagePath || '/images/projects/kotl/kotl-dev-setup.webp'}
                  alt="KOTL Robot Development Setup"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Status Pill on Image */}
                <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-xs text-white text-xs font-mono font-medium border border-slate-700 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>ACTIVE PERSONAL PROJECT</span>
                </div>

                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-xs text-[10px] font-mono text-slate-300 border border-slate-700">
                  BENCHTOP RIG // ESP32
                </div>
              </div>

              <div className="text-xs text-slate-500 font-mono flex items-center justify-between px-1">
                <span>PROTOTYPE HARDWARE BENCH</span>
                <span className="text-blue-600 font-semibold">VERIFIED ARCHITECTURE</span>
              </div>
            </div>

            {/* Right Column: Technical Specifications & Subtle Bus Topology (45% = 5 cols on lg) */}
            <div className="lg:col-span-5 space-y-5">
              
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  SYSTEM OVERVIEW
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  KOTL Assistant Robot
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Real-time reactive facial animations on OLED and non-blocking I2S DAC sound playback via lightweight state machines on ESP32.
                </p>
              </div>

              {/* Hardware & Firmware Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                
                {/* Hardware */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                  <span className="font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2 text-[11px]">
                    Hardware
                  </span>
                  <ul className="space-y-1 text-slate-800 font-medium">
                    {kotlProjectData.hardware.map((hw, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{hw}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Firmware */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                  <span className="font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2 text-[11px]">
                    Firmware / Bus
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {kotlProjectData.firmware.map((fw, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[11px] font-mono font-semibold text-slate-700"
                      >
                        {fw}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Current Features */}
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Implemented Features
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-700">
                  {kotlProjectData.currentFeatures.map((feat, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-medium"
                    >
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{feat}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle Minimal Bus Topology (clean, non-dashboard) */}
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 font-mono text-[11px] text-slate-600">
                <div className="text-slate-400 text-[10px] uppercase font-bold mb-1.5">
                  // BUS TOPOLOGY
                </div>
                <div className="space-y-0.5 text-slate-700">
                  <div><span className="font-bold text-slate-900">ESP32 Core</span> (C/C++ State Machine)</div>
                  <div className="pl-3 border-l-2 border-slate-200 space-y-0.5 text-[11px]">
                    <div>├─ OLED (I2C // RoboEyes)</div>
                    <div>├─ MAX9814 (ADC // Mic Detect)</div>
                    <div>└─ MAX98357A (I2S // Non-Blocking Audio)</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
