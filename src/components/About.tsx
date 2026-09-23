import React from 'react';
import {
  Wrench,
  Server,
  Layers,
  Search,
  CheckCircle2,
  GraduationCap,
  Languages,
  Zap,
} from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      title: 'Hardware & Diagnostic Mindset',
      desc: 'Formed through years of electro-mechanical assembly, component-level circuit tracing, digital multimeters, oscilloscopes, and precision SMD rework on real production lines.',
    },
    {
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      title: 'Full-Stack Software Scalability',
      desc: '4+ continuous years at Altius Infoway developing 100+ live websites, engineering relational MySQL schemas, and architecting custom enterprise ERP/CRM business engines in Laravel & PHP.',
    },
    {
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      title: 'End-to-End System Integration',
      desc: 'Bridging the physical and digital gap: coordinating industrial PLCs, single-board computers (Raspberry Pi), embedded controllers (ESP32/Arduino), and web backends into cohesive automated solutions.',
    },
    {
      icon: <Search className="w-5 h-5 text-indigo-400" />,
      title: 'Relentless Problem-Solving',
      desc: 'Whether tracing an intermittent voltage drop across a 24V machine harness or profiling an un-indexed SQL query stalling a production database, the diagnostic method remains rigorous and systematic.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#0B0F17]/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-amber-400 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>THE CORE DIFFERENTIATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Where Physical Engineering Meets Scalable Web Software
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Most software engineers never touch a soldering iron, and most hardware specialists don’t build cloud databases. 
            My career is built at the intersection of both disciplines.
          </p>
        </div>

        {/* Narrative & Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Professional Story */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed bg-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <span className="text-amber-400">//</span> Professional Summary
            </h3>
            
            <p>
              I began my engineering journey at <span className="text-white font-semibold">Symbian Vending Solutions</span>, starting on the assembly floor. 
              Hands-on involvement in physical product manufacturing quickly earned me team lead responsibilities, machine testing, and field troubleshooting. 
              Driven by curiosity, I transitioned into electronics prototyping—designing standardized machine control cards, 24V-to-12V isolation PCBs, and integrating R&amp;D unattended airport vending systems.
            </p>

            <p>
              That passion for logic led me to software engineering at <span className="text-white font-semibold">Altius Infoway</span>, starting as a frontend intern and rising to full-stack developer. Over <span className="text-amber-400 font-semibold">4+ continuous years</span>, I have engineered and launched <span className="text-white font-semibold">100+ websites</span>, custom enterprise ERP platforms, dynamic database architectures, and e-commerce portals.
            </p>

            <p className="text-sm font-mono text-slate-400 border-l-2 border-amber-400 pl-4 py-1 italic">
              "My strength is understanding the complete system lifecycle: from component-level circuit diagnostics and microcontroller firmware to scalable backend databases and pixel-perfect user interfaces."
            </p>

            {/* Quick Badges */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span className="tech-tag tech-tag-amber">Hardware Validation</span>
              <span className="tech-tag tech-tag-amber">PCB Prototyping</span>
              <span className="tech-tag tech-tag-cyan">PHP &amp; Laravel</span>
              <span className="tech-tag tech-tag-cyan">MySQL Architecture</span>
              <span className="tech-tag tech-tag-slate">ESP32 &amp; Arduino</span>
              <span className="tech-tag tech-tag-slate">PLC / RPi Handshake</span>
            </div>
          </div>

          {/* Education & Vital Details */}
          <div className="lg:col-span-5 space-y-5">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                    Formal Technical Education
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {educationList[0].degree}
                  </h4>
                  <div className="text-xs font-mono text-slate-400 mt-1">
                    {educationList[0].institution} • Passout {educationList[0].year}
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {educationList[0].details}
                  </p>
                </div>
              </div>
            </div>

            {/* Practical Strengths Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Key Professional Competencies
              </div>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Component-level troubleshooting &amp; precision SMD rework</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Production line planning &amp; QA/QC stage-gate checklists</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Figma-to-HTML conversion &amp; responsive UI design</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Complex ERP/CRM data pipelines &amp; SQL indexing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ESP32 / Arduino firmware &amp; I2S/I2C sensor integration</span>
                </li>
              </ul>
            </div>

            {/* Languages & Location */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <Languages className="w-4 h-4 text-amber-400" />
                <span>English, Hindi, Gujarati</span>
              </div>
              <div className="text-slate-400">
                Rajkot, Gujarat, India
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="mb-3 p-2 rounded-lg bg-slate-800/60 w-fit">
                  {pillar.icon}
                </div>
                <h4 className="text-sm font-bold text-white font-mono mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
