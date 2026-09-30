import { useState } from 'react';
import { productDevProjects } from '../../data/portfolioData';

export function ProductDevelopment() {
  const [project1, project2, project3] = productDevProjects;

  // Active gallery tabs for project 1 and 2
  const [p1Tab, setP1Tab] = useState(0);
  const [p2Tab, setP2Tab] = useState(0);

  const p1Slots = [
    {
      label: 'Physical PCB Board',
      type: 'image',
      path: '/images/projects/vending-control-card/pcb-hardware-prototype.webp',
      badgeTop: 'PHYSICAL HARDWARE // SYMBIAN',
      badgeBottom: 'MANUFACTURED PCB',
      bg: 'bg-slate-50',
    },
    {
      label: 'CAD PCB Layout',
      type: 'image',
      path: '/images/projects/vending-control-card/proteus-pcb-layout.webp',
      badgeTop: 'PROTEUS 8 // PCB LAYOUT',
      badgeBottom: 'CAD TRACE & PINOUT ROUTING',
      bg: 'bg-black',
    },
    {
      label: '3D CAD Visualizer',
      type: 'image',
      path: '/images/projects/vending-control-card/proteus-3d-visualizer.webp',
      badgeTop: 'PROTEUS 8 // 3D VISUALIZER',
      badgeBottom: 'BOARD CONTOUR & SMT PADS',
      bg: 'bg-[#e0dedf]',
    },
  ];

  const p2Slots = [
    {
      label: 'Physical Interface PCB',
      type: 'image',
      path: '/images/projects/coin-interface/coin-interface-pcb.webp',
      badgeTop: 'PHYSICAL HARDWARE // INFOTRONIX',
      badgeBottom: 'MANUFACTURED MODULE',
      bg: 'bg-slate-50',
    },
    {
      label: 'CAD PCB Layout',
      type: 'image',
      path: '/images/projects/coin-interface/proteus-pcb-layout.webp',
      badgeTop: 'PROTEUS 8 // PCB LAYOUT',
      badgeBottom: '75.9mm × 55.2mm // NO DRC ERRORS',
      bg: 'bg-black',
    },
    {
      label: '3D CAD Visualizer',
      type: 'image',
      path: '/images/projects/coin-interface/proteus-3d-visualizer.webp',
      badgeTop: 'PROTEUS 8 // 3D VISUALIZER',
      badgeBottom: 'RELAY, LM2596 & TERMINALS',
      bg: 'bg-[#e0dedf]',
    },
  ];

  function renderGalleryViewer(
    slots: Array<{
      label: string;
      type: string;
      path?: string;
      detail?: string;
      badgeTop?: string;
      badgeBottom?: string;
      bg?: string;
    }>,
    activeIdx: number,
    setActiveIdx: (i: number) => void
  ) {
    const activeSlot = slots[activeIdx];
    const frameBg = activeSlot.bg || 'bg-slate-50';

    return (
      <div className="space-y-3">
        {/* Main View Area */}
        <div className={`img-frame aspect-16/10 relative flex items-center justify-center p-2 sm:p-4 border border-slate-200 overflow-hidden transition-colors ${frameBg}`}>
          {activeSlot.type === 'image' || activeSlot.type === 'schematic' ? (
            <div className="w-full h-full flex flex-col items-center justify-center relative">
              <img
                src={activeSlot.path}
                alt={activeSlot.label}
                className="w-full h-full object-contain select-none"
                loading="lazy"
              />
              <div className="absolute top-2 left-2 px-2.5 py-1 rounded bg-slate-900/85 backdrop-blur-xs text-[10px] font-mono font-bold text-white border border-slate-700 shadow-2xs">
                {activeSlot.badgeTop || 'PROTEUS 8 // CAD'}
              </div>
              <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-slate-900/85 backdrop-blur-xs text-[10px] font-mono font-medium text-slate-300 border border-slate-700 shadow-2xs">
                {activeSlot.badgeBottom || 'VERIFIED HARDWARE'}
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-slate-100/70 border border-dashed border-slate-300 rounded-xl relative">
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 mb-2 shadow-2xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="font-mono text-xs font-bold text-slate-800 uppercase tracking-wider">
                PROJECT IMAGE COMING SOON
              </span>
              <span className="text-[11px] text-slate-500 mt-1 max-w-xs">
                {activeSlot.detail}
              </span>
              <span className="mt-3 px-2.5 py-0.5 rounded text-[10px] font-mono text-blue-700 bg-blue-50 border border-blue-200">
                PENDING HARDWARE PHOTO ARCHIVE
              </span>
            </div>
          )}
        </div>

        {/* Gallery Slot Navigation Tabs */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {slots.map((slot, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeIdx === idx
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {slot.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section id="product-dev" className="py-14 sm:py-20 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2">
            // 03 HARDWARE &amp; EMBEDDED R&amp;D
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Product Development &amp; Electronics
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
            Hands-on engineering in vending-machine manufacturing, custom PCB prototyping, power conversion, signal isolation, and commercial machine integration at Symbian Vending Solutions.
          </p>
        </div>

        <div className="space-y-10 sm:space-y-16">
          
          {/* PROJECT 1: Reusable Vending Control Card (Image 55% LEFT, Content 45% RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50/50 shadow-xs hover:border-slate-300 transition-all">
            
            {/* Gallery Area (55% = 7 cols on lg) */}
            <div className="lg:col-span-7">
              {renderGalleryViewer(p1Slots, p1Tab, setP1Tab)}
            </div>

            {/* Content (45% = 5 cols on lg) */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                  {project1.type}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {project1.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {project1.description}
              </p>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs">
                <span className="font-bold text-slate-700 block mb-1 font-mono uppercase text-[11px]">
                  Tooling &amp; Platform:
                </span>
                <span className="text-slate-600 font-medium">
                  {project1.tools} • Modular Header Interfaces • Relay Drivers
                </span>
              </div>

              {/* Confirmed Hardware Silk Screen & Pinouts */}
              <div className="p-3.5 rounded-xl bg-slate-100/70 border border-slate-200 text-xs space-y-1.5 font-mono">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-bold uppercase">
                  <span>BOARD SPECIFICATIONS</span>
                  <span className="text-blue-600 font-semibold">SYMBIAN // INFOTRONIX</span>
                </div>
                <div className="text-slate-700 text-xs space-y-1 font-sans">
                  <div>• <strong>Silk Screen:</strong> SYMBIAN TEA VENDING SOLUTIONS ®</div>
                  <div>• <strong>CAD Project:</strong> sy to cp convertor (Proteus 8 Professional)</div>
                  <div>• <strong>Connector Pinouts:</strong> V1–V3 (Valves), W1–W3 (Water), G1–G3 (Grounds), HOT/FIL/HTR</div>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2 font-mono">
                  Key Responsibilities
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project1.responsibilities.map((resp, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white text-slate-700 border border-slate-200"
                    >
                      {resp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* PROJECT 2: 24V–12V Coin Mechanism Interface (REVERSE: Content 45% LEFT, Image 55% RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50/50 shadow-xs hover:border-slate-300 transition-all">
            
            {/* Content (45% = 5 cols on lg, ordered first on desktop) */}
            <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                  {project2.type}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {project2.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {project2.description}
              </p>

              {/* Confirmed Hardware */}
              {project2.confirmedHardware && (
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-2">
                  <span className="font-bold text-slate-800 block font-mono uppercase text-[11px]">
                    Confirmed Hardware Architecture:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 font-medium">
                    {project2.confirmedHardware.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Confirmed Module Specifications */}
              <div className="p-3.5 rounded-xl bg-slate-100/70 border border-slate-200 text-xs space-y-1.5 font-mono">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-bold uppercase">
                  <span>MODULE SPECIFICATIONS</span>
                  <span className="text-blue-600 font-semibold">INFOTRONIX // PROTEUS 8</span>
                </div>
                <div className="text-slate-700 text-xs space-y-1 font-sans">
                  <div>• <strong>Board Footprint:</strong> 75.9mm × 55.2mm (Custom CNC profile &amp; corner mounting)</div>
                  <div>• <strong>Active ICs:</strong> LM2596 (Step-Down Buck Regulator), PC817 Optocoupler</div>
                  <div>• <strong>Terminals:</strong> V IN (24V), V OUT (12V), R IN / C SIN OUT (Relay control), GND</div>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2 font-mono">
                  Key Responsibilities
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project2.responsibilities.map((resp, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white text-slate-700 border border-slate-200"
                    >
                      {resp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery Area (55% = 7 cols on lg, ordered second on desktop) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              {renderGalleryViewer(p2Slots, p2Tab, setP2Tab)}
            </div>

          </div>

          {/* PROJECT 3: Touch / QR / Automatic Cup Vending (Full-Width Featured Layout) */}
          <div className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50/50 shadow-xs hover:border-slate-300 transition-all space-y-6 sm:space-y-8">

            {/* Top: Real Machine Gallery (Side-by-Side on Desktop, Stacked on Mobile) */}
            <div>
              <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span>VENDING SYSTEM DEVELOPMENT</span>
                <span className="text-blue-600 font-semibold">REAL PROJECT PHOTOGRAPHY</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Image 1: Earlier Vending Machine Version */}
                <div className="rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-4 flex flex-col justify-between shadow-2xs hover:border-slate-300 transition-all group">
                  <div className="h-[280px] sm:h-[380px] md:h-[420px] w-full flex items-center justify-center bg-slate-50 rounded-xl p-2 sm:p-3 overflow-hidden">
                    <img
                      src="/images/projects/vending-systems/earlier-vending-machine.webp"
                      alt="Earlier Vending Machine Version"
                      className="max-h-full max-w-full object-contain transform group-hover:scale-[1.015] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] sm:text-xs font-mono text-slate-700">
                    <span className="font-bold text-slate-900">Earlier Vending Machine Version</span>
                    <span className="text-[10px] text-slate-400">TOUCH INTERFACE</span>
                  </div>
                </div>

                {/* Image 2: Automatic Cup Dispensing Version */}
                <div className="rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-4 flex flex-col justify-between shadow-2xs hover:border-slate-300 transition-all group">
                  <div className="h-[280px] sm:h-[380px] md:h-[420px] w-full flex items-center justify-center bg-slate-50 rounded-xl p-2 sm:p-3 overflow-hidden">
                    <img
                      src="/images/projects/vending-systems/automatic-cup-vending-machine.webp"
                      alt="Automatic Cup Dispensing Version"
                      className="max-h-full max-w-full object-contain transform group-hover:scale-[1.015] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] sm:text-xs font-mono text-slate-700">
                    <span className="font-bold text-slate-900">Automatic Cup Dispensing Version</span>
                    <span className="text-[10px] text-slate-400">QR &amp; CUP DISPENSER</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Detailed Case & Responsibilities */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                    {project3.type}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    {project3.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {project3.description}
                </p>

                {/* Explicit Disclaimer Alert */}
                {project3.disclaimer && (
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
                    <span className="font-bold text-amber-700 shrink-0 text-sm">ℹ</span>
                    <div>
                      <span className="font-bold">Role Clarification: </span>
                      {project3.disclaimer}
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3 font-mono">
                  Machine Integration Scope
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                  {project3.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-1.5 rounded bg-slate-50">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{resp}</span>
                    </div>
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
