import { kotlProjectData } from '../../data/portfolioData';

export function KotlProject() {
  return (
    <section id="embedded" className="py-16 sm:py-20 border-b border-slate-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 mb-3">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          <span>{kotlProjectData.status}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-1">
          {kotlProjectData.title}
        </h2>
        <div className="text-sm sm:text-base font-semibold text-slate-500 mb-4">
          {kotlProjectData.subtitle}
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-8 max-w-3xl">
          {kotlProjectData.description}
        </p>

        {/* 2-Column Technical Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Confirmed Hardware */}
          <div className="p-6 rounded-lg border border-slate-200 bg-slate-50/50">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Hardware Components
            </h3>
            <ul className="space-y-2 text-sm text-slate-800">
              {kotlProjectData.hardware.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Software / Firmware Stack */}
          <div className="p-6 rounded-lg border border-slate-200 bg-slate-50/50">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Firmware &amp; Peripheral Interfaces
            </h3>
            <div className="flex flex-wrap gap-2">
              {kotlProjectData.firmware.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-semibold rounded bg-white text-slate-700 border border-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Current Implemented Features */}
        <div className="p-6 rounded-lg border border-slate-200 bg-white">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Currently Implemented Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs sm:text-sm text-slate-700 font-medium">
            {kotlProjectData.currentFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 rounded bg-slate-50 border border-slate-100">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
