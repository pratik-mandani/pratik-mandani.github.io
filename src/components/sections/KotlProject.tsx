import { kotlProjectData } from '../../data/portfolioData';

export function KotlProject() {
  return (
    <section id="kotl" className="py-14 sm:py-20 border-b border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (Distinct, non-repetitive) */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2">
            // 04 ACTIVE EMBEDDED PROJECT
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            {kotlProjectData.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {kotlProjectData.subtitle} • Real-time MCU voice interaction, non-blocking I2S audio streaming, and modern cloud/local AI intelligence.
          </p>
        </div>

        {/* Main Balanced Card Container */}
        <div className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            
            {/* Left Column: Prominent Photo + Live Architecture Pipeline (6 cols on lg) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="img-frame relative aspect-16/10 sm:aspect-16/9 bg-slate-900 overflow-hidden shadow-sm rounded-xl sm:rounded-2xl border border-slate-200">
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
                  BENCHTOP RIG // ESP32 + NODE.JS
                </div>
              </div>

              <div className="text-xs text-slate-500 font-mono flex items-center justify-between px-1">
                <span>PROTOTYPE HARDWARE BENCH</span>
                <span className="text-blue-600 font-semibold">VERIFIED ARCHITECTURE</span>
              </div>

              {/* System Pipeline Box on Left - Fills vertical height balance perfectly */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/80 font-mono text-[11px] text-slate-600 shadow-2xs">
                <div className="text-slate-400 text-[10px] uppercase font-bold mb-2 flex items-center justify-between">
                  <span>// SYSTEM ARCHITECTURE &amp; PIPELINE</span>
                  <span className="text-emerald-600 font-semibold">EDGE ➔ BACKEND</span>
                </div>
                <div className="space-y-1.5 text-slate-700">
                  <div>
                    <span className="font-bold text-slate-900">ESP32 Core</span>{' '}
                    <span className="text-slate-500">(C/C++ Event State Machine)</span>
                  </div>
                  <div className="pl-3 border-l-2 border-slate-300 space-y-0.5 text-[11px]">
                    <div>├─ OLED (I2C RoboEyes) • MAX9814 Mic (ADC) • I2S DAC (Audio)</div>
                    <div>└─ Wi-Fi HTTP ── <span className="font-semibold text-slate-900">Node.js Server</span> (:3000)</div>
                  </div>
                  <div className="pl-6 border-l-2 border-indigo-200 pt-0.5 space-y-0.5 text-[11px] text-indigo-900">
                    <div>├─ AI Brain: Google Gemini (Free API Token)</div>
                    <div>├─ STT: Groq Whisper-v3 (Multilingual Speech)</div>
                    <div>└─ TTS: Local Piper Neural ONNX (16kHz Audio)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Key Specifications & Capabilities (6 cols on lg) */}
            <div className="lg:col-span-6 space-y-4">
              
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  SYSTEM OVERVIEW
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  KOTL Assistant Robot
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {kotlProjectData.description}
                </p>
              </div>

              {/* 2 Clean Full-Width Specification Cards */}
              <div className="space-y-3">
                
                {/* Card 1: Hardware & MCU Edge */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono font-bold uppercase tracking-wider text-slate-500 text-[11px] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      Hardware &amp; MCU Edge
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">ESP32 + SENSORS</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-800 font-medium">
                    <div className="flex items-center gap-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>ESP32 Dual-Core (Wi-Fi 802.11)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>SSD1306 OLED (128×64, I2C)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>MAX9814 AGC Mic &amp; 8Ω Speaker</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>MAX98357A I2S DAC Amp</span>
                    </div>
                  </div>
                </div>

                {/* Card 2: Node.js Backend & Free AI Pipeline */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono font-bold uppercase tracking-wider text-slate-500 text-[11px] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                      Node.js Backend &amp; AI Pipeline
                    </span>
                    <span className="text-[10px] font-mono text-indigo-600 font-semibold">FREE API TOKENS</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-800 font-medium">
                    <div className="flex items-center gap-1.5">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>Node.js &amp; Express REST API</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>Google Gemini (Free API Token)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>Groq Whisper-v3 (Speech-to-Text)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>Local Piper Neural TTS (ONNX)</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Key Capabilities */}
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Key Capabilities
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

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
