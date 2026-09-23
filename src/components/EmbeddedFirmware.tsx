import React from 'react';
import {
  Cpu,
  Radio,
  Share2,
  Terminal,
  Layers,
  Code2,
  CheckCircle2,
} from 'lucide-react';

export const EmbeddedFirmware: React.FC = () => {
  const protocols = [
    { name: 'I2C', desc: 'Display & Sensor Bus', note: 'Interfacing SSD1306 OLED, temperature/distance sensors' },
    { name: 'I2S', desc: 'Digital Audio Bus', note: 'Streaming audio PCM samples directly to MAX98357A DAC' },
    { name: 'UART / Serial', desc: 'Inter-Subsystem Bus', note: 'Baud-rate matched commands between SBC, PLC, and controllers' },
    { name: 'SPI', desc: 'High-Speed Peripheral Bus', note: 'High throughput data transfers for displays and memory' },
    { name: 'GPIO / ADC / PWM', desc: 'Physical IO & Actuation', note: 'Analog sensor quantization, motor speed control, interrupt inputs' },
  ];

  const firmwarePractices = [
    {
      title: 'Non-Blocking Finite State Machines (FSM)',
      desc: 'Architecting deterministic state machines in C/C++ to handle sensor polling, communication timeouts, and mechanical sequencing without blocking delay loops.',
    },
    {
      title: 'Real-Time Hardware Interfacing',
      desc: 'Configuring hardware timer interrupts and edge-triggered GPIO interrupts to measure pulse-train signals from coin validators and optical drop sensors with microsecond accuracy.',
    },
    {
      title: 'Multi-Subsystem Communication Bridges',
      desc: 'Coordinating physical signals across voltage domains: connecting 3.3V logic microcontrollers with 5V sensors, 12V peripherals, and 24V industrial PLC lines through isolation buffers.',
    },
  ];

  return (
    <section id="embedded" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-[#0B0F17] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>CHAPTER 02 // EMBEDDED LOGIC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Embedded &amp; Firmware Systems
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Writing low-level firmware in C and C++, configuring microcontroller peripherals, and orchestrating 
            high-reliability communication between sensors, actuators, and industrial controllers.
          </p>
        </div>

        {/* Microcontroller & Firmware Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {firmwarePractices.map((practice, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-mono mb-3">
                  {practice.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {practice.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Communication Protocols Matrix */}
        <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Share2 className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white font-mono">
                Hardware Communication Protocol Stack
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
              LOW-LEVEL BUS ARCHITECTURE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {protocols.map((proto, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="text-base font-mono font-bold text-cyan-400 mb-1">
                    {proto.name}
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mb-2">
                    {proto.desc}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-relaxed">
                    {proto.note}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Microcontroller Platforms */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-slate-200 font-bold">Target Microcontrollers:</span>
              <span className="tech-tag tech-tag-cyan">ESP32 (Dual-Core 240MHz)</span>
              <span className="tech-tag tech-tag-slate">ATmega328P / Arduino</span>
              <span className="tech-tag tech-tag-slate">Raspberry Pi (SBC Interfacing)</span>
            </div>
            <div className="text-xs font-mono text-slate-400">
              Languages: <span className="text-white font-semibold">C, C++</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
