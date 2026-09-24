import { kotlProjectData } from '../../data/portfolioData';

export function KotlProject() {
  return (
    <section id="embedded" className="py-14 sm:py-18 border-b border-slate-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header Badges & Titles */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>{kotlProjectData.status}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-1">
            {kotlProjectData.title}
          </h2>
          <div className="text-sm sm:text-base font-semibold text-slate-500 mb-3">
            {kotlProjectData.subtitle}
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
            {kotlProjectData.description}
          </p>
        </div>

        {/* Desktop 2-Column Layout (Left: Project Image / Placeholder, Right: Technical Specs) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Project Image / Clean Technical Placeholder */}
          <div className="lg:col-span-5 h-full">
            {kotlProjectData.imagePath ? (
              <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-xs">
                <div className="bg-slate-900/5 p-1 flex items-center justify-center">
                  <img
                    src={kotlProjectData.imagePath}
                    alt={kotlProjectData.title}
                    className="w-full h-auto object-cover rounded"
                  />
                </div>
                <div className="p-3 bg-white border-t border-slate-100">
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    <span>Hardware Prototype Rig</span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Verified Setup
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-snug">
                    Workbench breadboard test rig showing ESP32, SSD1306 OLED (RoboEyes), MAX9814 mic, MAX98357A I2S amplifier, and speaker.
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-lg border-2 border-dashed border-slate-200 bg-slate-50/70 p-6 sm:p-8 flex flex-col items-center justify-center text-center h-full min-h-[280px] sm:min-h-[380px]">
                <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-3">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-bold text-slate-900 mb-1">
                  KOTL Hardware &amp; Display Rig
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white text-slate-600 border border-slate-200 mb-3 shadow-2xs">
                  KOTL project image coming soon
                </span>
                <p className="text-[11px] text-slate-500 max-w-xs leading-relaxed">
                  Real workbench photos of the ESP32 setup, SSD1306 display, and I2S audio module will be uploaded directly.
                </p>
              </div>
            )}
          </div>

          {/* RIGHT: Project Information & Specs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Hardware & Interfaces Sub-grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Confirmed Hardware */}
              <div className="p-4 sm:p-5 rounded-lg border border-slate-200 bg-slate-50/50">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Hardware Components
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800">
                  {kotlProjectData.hardware.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-blue-600 font-bold select-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Firmware / Interfaces */}
              <div className="p-4 sm:p-5 rounded-lg border border-slate-200 bg-slate-50/50">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Firmware / Interfaces
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {kotlProjectData.firmware.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-semibold rounded bg-white text-slate-700 border border-slate-200 shadow-2xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Currently Implemented Features */}
            <div className="p-4 sm:p-5 rounded-lg border border-slate-200 bg-white">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Currently Implemented Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                {kotlProjectData.currentFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded bg-slate-50 border border-slate-100"
                  >
                    <span className="text-emerald-600 font-bold select-none">✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
