import { kotlProjectData } from '../../data/portfolioData';

export function KotlProject() {
  return (
    <section id="kotl" className="py-14 sm:py-20 border-b border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2">
            // 04 FEATURED PERSONAL PROJECT
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            {kotlProjectData.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {kotlProjectData.subtitle} • {kotlProjectData.description}
          </p>
        </div>

        {/* Main Project Card Container */}
        <div className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-xs space-y-8">
          
          {/* Top Row: Visual + Hardware Topology (5 cols) & Full-Stack Tech Specs (7 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            
            {/* Left Column: Benchtop Photo + Live Hardware & Cloud Topology (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
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
                  BENCHTOP RIG // ESP32 + NODE.JS
                </div>
              </div>

              <div className="text-xs text-slate-500 font-mono flex items-center justify-between px-1">
                <span>PROTOTYPE HARDWARE BENCH</span>
                <span className="text-blue-600 font-semibold">VERIFIED ARCHITECTURE</span>
              </div>

              {/* End-to-End System & Bus Topology Diagram */}
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/80 font-mono text-[11px] text-slate-600 shadow-xs">
                <div className="flex items-center justify-between text-slate-400 text-[10px] uppercase font-bold mb-2">
                  <span>// SYSTEM ARCHITECTURE & TOPOLOGY</span>
                  <span className="text-emerald-600 font-semibold">LIVE PIPELINE</span>
                </div>
                <div className="space-y-1.5 text-slate-700">
                  <div>
                    <span className="font-bold text-slate-900">ESP32 Edge MCU</span>{' '}
                    <span className="text-slate-500 text-[10px]">(C/C++ State Machine)</span>
                  </div>
                  <div className="pl-3 border-l-2 border-slate-300 space-y-1 text-[11px]">
                    <div>├─ <span className="font-semibold text-slate-800">SSD1306 OLED</span> (I2C // RoboEyes Expressions)</div>
                    <div>├─ <span className="font-semibold text-slate-800">MAX9814 AGC</span> (ADC1 // 8kHz Voice Sampling)</div>
                    <div>├─ <span className="font-semibold text-slate-800">MAX98357A</span> (I2S DMA // Non-Blocking Audio)</div>
                    <div>└─ <span className="font-semibold text-slate-800">Wi-Fi HTTP</span> (LittleFS Audio Chunk Buffering)</div>
                  </div>
                  
                  <div className="py-1 text-center text-indigo-600 font-semibold text-[10px] tracking-wide">
                    ↕ HTTP REST / Binary PCM Stream / Session JSON
                  </div>

                  <div>
                    <span className="font-bold text-indigo-950">Node.js Web Backend</span>{' '}
                    <span className="text-indigo-600 text-[10px]">(Express :3000 Server)</span>
                  </div>
                  <div className="pl-3 border-l-2 border-indigo-200 space-y-1 text-[11px]">
                    <div>├─ <span className="font-semibold text-indigo-900">STT:</span> Groq Whisper-v3 / Local Whisper.cpp</div>
                    <div>├─ <span className="font-semibold text-indigo-900">AI LLM:</span> Google Gemini (Free API) / Groq LLaMA 3.3</div>
                    <div>└─ <span className="font-semibold text-indigo-900">Neural TTS:</span> Local Piper ONNX + FFmpeg (16kHz)</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Specifications & Concepts Grid (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                    FULL-STACK EMBEDDED AI
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-100 text-blue-700">
                    EDGE + CLOUD
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  KOTL Assistant Robot
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  A conversational AI companion robot integrating real-time voice streaming from an ESP32 edge device with a Node.js orchestration backend, multi-provider free AI reasoning, and local neural voice synthesis.
                </p>
              </div>

              {/* 4-Block Technical Specification Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                
                {/* 1. Hardware & Sensors */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                  <span className="font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2 text-[11px] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    Hardware & Sensors
                  </span>
                  <ul className="space-y-1.5 text-slate-800 font-medium">
                    {kotlProjectData.hardware.map((hw, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px]">
                        <span className="text-blue-600 font-bold leading-none mt-0.5">•</span>
                        <span>{hw}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Firmware & Protocols */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                  <span className="font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2 text-[11px] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    Firmware & Protocols
                  </span>
                  <ul className="space-y-1.5 text-slate-800 font-medium">
                    {kotlProjectData.firmware.map((fw, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px]">
                        <span className="text-emerald-600 font-bold leading-none mt-0.5">•</span>
                        <span>{fw}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Node.js Web Backend */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                  <span className="font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2 text-[11px] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                    Node.js Web Backend
                  </span>
                  <ul className="space-y-1.5 text-slate-800 font-medium">
                    {(kotlProjectData.backend || []).map((be, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px]">
                        <span className="text-indigo-600 font-bold leading-none mt-0.5">•</span>
                        <span>{be}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. AI Models & Free Tokens */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                  <span className="font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2 text-[11px] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
                    AI Engine & Free Tokens
                  </span>
                  <ul className="space-y-1.5 text-slate-800 font-medium">
                    {(kotlProjectData.aiStack || []).map((ai, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px]">
                        <span className="text-violet-600 font-bold leading-none mt-0.5">•</span>
                        <span>{ai}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Implemented Features */}
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Key Implemented Capabilities
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

          {/* Bottom Section: End-to-End Voice Turn Pipeline Flow (Full Width) */}
          {kotlProjectData.pipelineFlow && kotlProjectData.pipelineFlow.length > 0 && (
            <div className="pt-6 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
                    VOICE INTERACTION LIFECYCLE
                  </span>
                  <h4 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                    End-to-End Speech & AI Pipeline
                  </h4>
                </div>
                <div className="text-xs font-mono text-slate-500">
                  Non-Blocking Event-Driven Loop
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
                {kotlProjectData.pipelineFlow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[10px] font-mono font-bold text-blue-600 uppercase mb-1">
                        {step.step}
                      </div>
                      <div className="text-xs font-bold text-slate-900 mb-1 leading-snug">
                        {step.tech}
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
