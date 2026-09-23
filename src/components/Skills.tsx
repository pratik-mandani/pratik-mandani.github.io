import React from 'react';
import {
  Wrench,
  Cpu,
  Globe,
  Layers,
  CheckCircle,
  Terminal,
} from 'lucide-react';
import { skillDomains } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-emerald-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-400" />;
      default: return <Terminal className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-[#0B0F17] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Engineering Skills &amp; Domain Capabilities
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A comprehensive matrix of hands-on physical hardware verification disciplines, 
            microcontroller firmware engineering, and scalable enterprise full-stack web technologies.
          </p>
        </div>

        {/* 4 Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillDomains.map((domain) => (
            <div
              key={domain.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Domain Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/80">
                    {getDomainIcon(domain.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-mono">
                      {domain.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {domain.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3 mt-6">
                  {domain.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-mono font-bold text-slate-200">
                          {skill.name}
                        </div>
                        {skill.description && (
                          <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                            {skill.description}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
