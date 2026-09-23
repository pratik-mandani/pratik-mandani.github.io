import React, { useState } from 'react';
import {
  Bot,
  Cpu,
  Tv,
  Volume2,
  Activity,
  Layers,
  Sparkles,
  Zap,
  Code2,
  ShieldAlert,
} from 'lucide-react';

export const KotlSpotlight: React.FC = () => {
  const [activeFace, setActiveFace] = useState<'neutral' | 'curious' | 'happy' | 'alert'>('neutral');

  const expressions = {
    neutral: {
      title: 'Neutral / Idle State',
      face: '[ • _ • ]',
      sound: 'Ambient standby heartbeat / low chirp',
      fsm: 'Sensor values within ambient thresholds; OLED running at relaxed 15 FPS.',
    },
    curious: {
      title: 'Curious / Sensor Triggered',
      face: '[ o _ O ]',
      sound: 'Rising pitch dual-tone synthesized chime via I2S',
      fsm: 'Proximity sensor delta detected; eyes enlarge and head tilt calculated.',
    },
    happy: {
      title: 'Happy / Interaction Responsive',
      face: '[ ^ _ ^ ]',
      sound: 'Melodic affirmative arpeggio audio buffer',
      fsm: 'Touch/capacitive GPIO event triggered; inverted arc eye glyphs rendered.',
    },
    alert: {
      title: 'Alert / Boundary Threshold',
      face: '[ ! _ ! ]',
      sound: 'Rapid pulsing alert tone via MAX98357A I2S DAC',
      fsm: 'ADC threshold exceeded; immediate priority interrupt routine executed.',
    },
  };

  const current = expressions[activeFace];

  const hardwareSpecs = [
    { label: 'Core Controller', value: 'ESP32 Dual-Core Xtensa LX6 SoC (240MHz)' },
    { label: 'Visual Interface', value: 'SSD1306 / SH1106 128x64 OLED (I2C Bus)' },
    { label: 'Audio Pipeline', value: 'MAX98357A I2S Digital Audio Amplifier Module' },
    { label: 'Sensory Inputs', value: 'Analog & Digital Sensor Array via GPIO & ADC' },
    { label: 'Firmware Stack', value: 'Embedded C/C++, Non-Blocking Task Loop' },
    { label: 'Project Type', value: 'Personal Embedded Firmware & Hardware Project' },
  ];

  return (
    <section id="kotl" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-[#0B0F17] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <Bot className="w-3.5 h-3.5" />
            <span>PERSONAL EMBEDDED SPOTLIGHT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            KOTL — The Smart Emotional Assistant Robot
          </h2>

          <div className="inline-block px-3 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-amber-300 font-semibold mb-4">
            Notice: Personal Embedded Firmware &amp; Hardware Project (Not a company project)
          </div>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A hands-on experimental robotics project created for practical embedded firmware learning, 
            low-level peripheral programming, and multi-sensor hardware integration.
          </p>
        </div>

        {/* Main Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Interactive Robot Console / Simulator */}
          <div className="lg:col-span-5 bg-slate-900/80 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-slate-200">KOTL FIRMWARE RUNTIME</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">ESP32 // I2C + I2S</span>
            </div>

            {/* Simulated OLED Display Screen */}
            <div className="bg-[#05080E] p-8 rounded-xl border-2 border-slate-700/80 mb-6 text-center font-mono relative overflow-hidden group shadow-inner">
              <div className="absolute top-2 left-3 text-[10px] text-cyan-500/60 tracking-widest">
                OLED 128x64 // SSD1306
              </div>
              <div className="absolute top-2 right-3 text-[10px] text-emerald-500/80 font-bold">
                FPS: 45
              </div>

              {/* Facial Glyph */}
              <div className="py-8 text-4xl sm:text-5xl font-extrabold tracking-widest text-cyan-300 drop-shadow-[0_0_12px_rgba(6,182,212,0.4)] select-none">
                {current.face}
              </div>

              <div className="text-xs text-slate-400 font-mono">
                {current.title}
              </div>
            </div>

            {/* Expression Selector Controls */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Simulate Sensory Triggers:
              </div>
              <div className="grid grid-cols-2 gap-2">
                {(['neutral', 'curious', 'happy', 'alert'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveFace(key)}
                    className={`px-3 py-2 rounded-lg text-xs font-mono capitalize transition-all border ${
                      activeFace === key
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/60 font-bold'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {key} State
                  </button>
                ))}
              </div>
            </div>

            {/* Real-time State Machine Telemetry */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-mono space-y-2">
              <div className="flex items-start gap-2 text-slate-300">
                <Volume2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Audio (I2S):</strong> {current.sound}</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <Activity className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">State Logic:</strong> {current.fsm}</span>
              </div>
            </div>
          </div>

          {/* Technical Architecture & Specifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-xl font-bold text-white font-mono mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-amber-400" />
                <span>Hardware &amp; Firmware Subsystems</span>
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                KOTL is developed as an active testbed for embedded system design. It integrates sensory acquisition, 
                non-blocking display refreshing, and real-time audio playback onto a single ESP32 microcontroller without lag or RTOS task starvations.
              </p>

              {/* Hardware Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {hardwareSpecs.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80"
                  >
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-xs font-mono font-bold text-slate-200">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Firmware & Hardware Disciplines Practiced */}
              <div className="space-y-3 pt-4 border-t border-slate-800 text-xs font-mono text-slate-300">
                <div className="text-amber-400 font-bold uppercase tracking-wider">
                  Firmware &amp; Peripheral Focus Areas:
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag tech-tag-cyan">ESP32 SoC Architecture</span>
                  <span className="tech-tag tech-tag-cyan">I2S Digital Audio DMA</span>
                  <span className="tech-tag tech-tag-amber">OLED Framebuffer (I2C)</span>
                  <span className="tech-tag tech-tag-slate">GPIO Interrupt Handlers</span>
                  <span className="tech-tag tech-tag-slate">ADC Sampling &amp; Filtering</span>
                  <span className="tech-tag tech-tag-slate">C/C++ State Machines</span>
                </div>
              </div>
            </div>

            {/* Safety & Authenticity Badge */}
            <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800 flex items-center gap-3 text-xs font-mono text-slate-400">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Personal exploration project actively demonstrating continuous learning in embedded electronics and low-level firmware.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
