import React, { useState } from 'react';
import {
  Compass,
  Hammer,
  Users,
  CheckCircle,
  Cpu,
  Layers,
  Layout,
  Server,
  Boxes,
  ShoppingBag,
  Database,
  Bot,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { journeyMilestones } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer': return <Hammer className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      case 'CheckCircle': return <CheckCircle className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      case 'Layers': return <Layers className="w-4 h-4" />;
      case 'Layout': return <Layout className="w-4 h-4" />;
      case 'Server': return <Server className="w-4 h-4" />;
      case 'Boxes': return <Boxes className="w-4 h-4" />;
      case 'ShoppingBag': return <ShoppingBag className="w-4 h-4" />;
      case 'Database': return <Database className="w-4 h-4" />;
      case 'Bot': return <Bot className="w-4 h-4" />;
      default: return <Cpu className="w-4 h-4" />;
    }
  };

  const activeMilestone = journeyMilestones.find((m) => m.stepNumber === selectedStep) || journeyMilestones[0];

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-[#0B0F17] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>CHRONOLOGICAL EVOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            My Professional Engineering Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From the manufacturing factory floor assembling industrial machines to leading R&amp;D prototyping, 
            and advancing through 4+ years of full-stack web architectures and robotics firmware.
          </p>
        </div>

        {/* Phase Breakdown Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-500/30">
            <div className="text-xs font-mono text-amber-400 font-semibold mb-1">
              PHASE 1: INDUSTRIAL PRODUCT &amp; R&amp;D
            </div>
            <div className="text-sm font-bold text-white">
              Symbian Vending Solutions (Steps 1–5)
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Assembly, Team Leadership, QA/QC, PCB Prototyping, Unattended Vending
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-cyan-500/30">
            <div className="text-xs font-mono text-cyan-400 font-semibold mb-1">
              PHASE 2: FULL-STACK WEB EVOLUTION
            </div>
            <div className="text-sm font-bold text-white">
              Altius Infoway (Steps 6–10)
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Frontend Intern $\to$ PHP $\to$ Laravel $\to$ E-Commerce $\to$ ERP Systems (100+ Sites)
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-emerald-500/30">
            <div className="text-xs font-mono text-emerald-400 font-semibold mb-1">
              PHASE 3: PERSONAL EMBEDDED &amp; ROBOTICS
            </div>
            <div className="text-sm font-bold text-white">
              KOTL Robot (Step 11)
            </div>
            <div className="text-xs text-slate-400 mt-1">
              ESP32 SoC, OLED expressions, I2S audio, sensor state machines
            </div>
          </div>
        </div>

        {/* Interactive Timeline Stepper */}
        <div className="bg-slate-900/40 p-4 sm:p-6 rounded-2xl border border-slate-800 mb-8">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between">
            <span>Select a Milestone to View Details</span>
            <span className="text-amber-400">Step {selectedStep} of 11</span>
          </div>

          {/* Stepper Buttons (Horizontal Scrollable on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 no-scrollbar">
            {journeyMilestones.map((step) => {
              const isSelected = selectedStep === step.stepNumber;
              return (
                <button
                  key={step.id}
                  onClick={() => setSelectedStep(step.stepNumber)}
                  className={`flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono transition-all border ${
                    isSelected
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-md shadow-amber-500/10 scale-105'
                      : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                  <span className="whitespace-nowrap font-medium">{step.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Milestone Detail Spotlight */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                {getStepIcon(activeMilestone.icon)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-amber-400">
                    STEP {activeMilestone.stepNumber.toString().padStart(2, '0')}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-xs font-mono text-slate-400">
                    {activeMilestone.period}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {activeMilestone.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded text-xs font-mono bg-slate-800 text-cyan-300 border border-cyan-500/20">
                {activeMilestone.company}
              </span>
            </div>
          </div>

          <div className="py-6">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6">
              {activeMilestone.description}
            </p>

            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              <div className="text-xs font-mono text-amber-400 mb-2 flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CORE ENGINEERING COMPETENCIES DEVELOPED</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {activeMilestone.keyLearnings.map((learning, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900/60 px-3 py-2 rounded-lg border border-slate-800"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{learning}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stepper Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs font-mono">
            <button
              onClick={() => setSelectedStep(Math.max(1, selectedStep - 1))}
              disabled={selectedStep === 1}
              className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-slate-300 transition-colors"
            >
              &larr; Previous Step
            </button>
            <span className="text-slate-500">
              Click next to continue through the timeline
            </span>
            <button
              onClick={() => setSelectedStep(Math.min(11, selectedStep + 1))}
              disabled={selectedStep === 11}
              className="flex items-center gap-1 px-3 py-1.5 rounded bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 disabled:opacity-30 disabled:pointer-events-none text-amber-300 transition-colors"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Complete Vertical Timeline View for Full Overview */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h4 className="text-sm font-mono text-slate-400 uppercase tracking-widest">
              Full Chronological Overview
            </h4>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
            {journeyMilestones.map((m) => (
              <div
                key={m.id}
                className="relative group cursor-pointer"
                onClick={() => {
                  setSelectedStep(m.stepNumber);
                  const el = document.getElementById('journey');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {/* Node indicator */}
                <div
                  className={`absolute -left-[33px] sm:-left-[41px] top-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all ${
                    selectedStep === m.stepNumber
                      ? 'bg-amber-400 text-slate-950 ring-4 ring-amber-500/20'
                      : 'bg-slate-900 border border-slate-700 text-slate-400 group-hover:border-amber-400 group-hover:text-white'
                  }`}
                >
                  {m.stepNumber}
                </div>

                <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/80 hover:border-slate-700 group-hover:bg-slate-900/60 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors font-mono">
                      {m.title}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {m.period} • {m.company}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
