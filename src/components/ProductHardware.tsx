import React from 'react';
import {
  Wrench,
  Cpu,
  Layers,
  CheckCircle,
  Activity,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const ProductHardware: React.FC = () => {
  const hardwareHighlights = [
    {
      title: 'Common Machine Control Card',
      category: 'PCB & Systems Architecture',
      description: 'Engineered a unified, reusable master control card architecture that eliminated model-specific wiring looms across diverse vending machine chassis. Standardized motor drive signals, keypad buses, and sensor arrays into a modular backplane.',
      specs: ['FR4 Double-sided Layout', 'Multi-channel Inductive Drive', 'Over-current & Transient Protection', 'Universal Harness Interface'],
    },
    {
      title: '24V to 12V Coin Mechanism Interface PCB',
      category: 'Power Conversion & Signal Isolation',
      description: 'Solved critical voltage mismatch where 24V industrial machine power threatened sensitive 12V coin validator modules. Built a dedicated intermediate PCB combining regulated step-down DC conversion with optical pulse isolation to eliminate electrical noise spikes.',
      specs: ['24V to 12V Regulated DC Step-Down', 'High-Speed Optocoupler Isolation', 'EMI Noise Filtering', 'Plug-and-play validator interchangeability'],
    },
    {
      title: '200+ Unit Manufacturing & Validation Sprint',
      category: 'Production Leadership & QA/QC',
      description: 'Led the electro-mechanical assembly, stage-gate testing, electrical safety checks, and dispatch validation for 200+ complete commercial vending machines delivered within a compressed 10-day production window.',
      specs: ['5-Stage Assembly Protocol', 'Multi-Unit 50-Cycle Burn-In', 'Zero Fatal Field Defects', 'Standardized QA Checklists'],
    },
  ];

  const practicalSkills = [
    { name: 'Component-Level Diagnostics', desc: 'Tracing shorts, voltage drops, and failed semiconductors' },
    { name: 'Precision Hand Soldering & SMD Rework', desc: '0805/0603 passive components, IC desoldering, and pad repair' },
    { name: 'Instrument Testing', desc: 'Digital multimeters, bench oscilloscopes, and insulation testers' },
    { name: 'Incoming Inspection & Metrology', desc: 'Tolerance verification and QA screening of vendor parts' },
    { name: 'Wire Harness Routing', desc: 'Industrial cable management, crimping, and isolation standards' },
    { name: 'Field Failure Analysis', desc: 'Root-cause analysis and preventive maintenance guidelines' },
  ];

  return (
    <section id="hardware" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-[#0B0F17]/90 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>CHAPTER 01 // PHYSICAL SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Product Development &amp; Electronics
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            My foundation was built on factory floors and test benches—handling electro-mechanical integration, 
            diagnosing circuit faults at the component level, and designing custom PCBs for industrial automation.
          </p>
        </div>

        {/* 3 Core Hardware Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {hardwareHighlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900/80 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                    {item.category}
                  </span>
                  <Cpu className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                  Technical Specifications:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Practical Skills & Workbench Experience */}
        <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold text-white font-mono">
              Industrial Bench &amp; Shop-Floor Disciplines
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {practicalSkills.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3"
              >
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono font-bold text-white mb-1">
                    {skill.name}
                  </div>
                  <div className="text-xs text-slate-400 leading-snug">
                    {skill.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Verification note */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Supported by verified industrial production tenure at Symbian Vending Solutions.
            </span>
            <span className="text-slate-500 hidden sm:inline">
              NO FABRICATED SPECS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
