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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            KOTL — The Smart Emotional Assistant Robot
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Personal embedded firmware &amp; hardware project developed to implement non-blocking audio state machines, I2S DAC drivers, and dynamic OLED facial expressions on ESP32.
          </p>
        </div>

        {/* Large 2-Column Feature Block */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200 bg-white shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Large Actual KOTL Photo & Bench Setup (5 cols on lg) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="img-frame relative aspect-4/3 bg-slate-900 overflow-hidden">
                <img
                  src={kotlProjectData.imagePath || '/images/projects/kotl/kotl-dev-setup.webp'}
                  alt="KOTL Robot Development Setup"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Status Pill on Image */}
                <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-xs text-white text-xs font-mono font-medium border border-slate-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>STATUS: ACTIVE</span>
                </div>

                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-xs text-[10px] font-mono text-slate-300 border border-slate-700">
                  BENCHTOP_RIG // ESP32
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">Prototype Objective:</span> Real-time reactive emotional expressions with non-blocking audio playback without operating system overhead.
              </div>
            </div>

            {/* Right Column: Technical Details, Hardware, Firmware & Visual Tree (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase mb-2">
                  <span>● Active Personal Project</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {kotlProjectData.title}
                </h3>
                <div className="text-sm font-semibold text-slate-500 mt-1">
                  {kotlProjectData.subtitle}
                </div>
              </div>

              {/* Hardware & Firmware 2-Column Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Hardware */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Confirmed Hardware
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 font-medium">
                    {kotlProjectData.hardware.map((hw, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{hw}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Firmware */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Firmware &amp; Bus
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {kotlProjectData.firmware.map((fw, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono font-semibold text-slate-700"
                      >
                        {fw}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Features Pill Grid */}
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Implemented Features
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                  {kotlProjectData.currentFeatures.map((feat, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-900"
                    >
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{feat}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* CSS/HTML System Architecture Tree */}
              <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs">
                <div className="text-slate-400 text-[11px] mb-2 uppercase font-semibold">
                  // PERIPHERAL_BUS_TOPOLOGY
                </div>
                <div className="space-y-1 text-slate-300">
                  <div className="text-emerald-400 font-bold">ESP32 (Core Controller)</div>
                  <div className="pl-3 border-l border-slate-700 space-y-1">
                    <div>├── <span className="text-blue-400">SSD1306 OLED</span> (I2C // RoboEyes Expressions)</div>
                    <div>├── <span className="text-amber-400">MAX9814 Microphone</span> (ADC // Sound Detection)</div>
                    <div>└── <span className="text-indigo-400">MAX98357A DAC</span> (I2S // Non-Blocking Audio)</div>
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
