import React, { useEffect } from 'react';
import {
  X,
  Cpu,
  Layers,
  Wrench,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Code2,
  Share2,
  FileCode,
  Image as ImageIcon,
  ShieldCheck,
} from 'lucide-react';
import { ProjectCaseStudy } from '../types';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0F1420] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-slate-800 bg-[#0B0F17]/90">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono text-slate-300 bg-slate-800 border border-slate-700">
                {project.companyOrType}
              </span>
              <span className="text-xs font-mono text-slate-400">
                • {project.period}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <div className="text-xs sm:text-sm font-mono text-cyan-400 mt-1">
              Role: <span className="text-slate-200 font-medium">{project.role}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-8 text-slate-300 text-sm leading-relaxed">
          {/* Executive Summary */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 text-base leading-relaxed">
            {project.summary}
          </div>

          {/* Missing Details Banner if applicable */}
          {project.isMissingDetails && (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3 text-amber-300 text-xs font-mono">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>
                Notice: Specific technical metrics and production documents for this project will be updated in the next milestone. Placeholder cues are preserved.
              </span>
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
              <h3 className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>The Challenge / Requirements</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
              <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Engineering Solution &amp; Architecture</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technical Subsystems Breakdown */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono text-white uppercase tracking-wider font-bold border-b border-slate-800 pb-2">
              Technical Subsystem Specifications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Hardware Specs */}
              {project.hardwareSpecs && project.hardwareSpecs.length > 0 && (
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="text-xs font-mono text-amber-400 font-bold mb-2 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Hardware &amp; Electro-Mechanical:</span>
                  </div>
                  <ul className="space-y-1 text-xs font-mono text-slate-300">
                    {project.hardwareSpecs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-400">&bull;</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Firmware Specs */}
              {project.firmwareSpecs && project.firmwareSpecs.length > 0 && (
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="text-xs font-mono text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Firmware &amp; Microcontroller:</span>
                  </div>
                  <ul className="space-y-1 text-xs font-mono text-slate-300">
                    {project.firmwareSpecs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400">&bull;</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* PCB Specs */}
              {project.pcbSpecs && project.pcbSpecs.length > 0 && (
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="text-xs font-mono text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>PCB Layout &amp; Fabrication:</span>
                  </div>
                  <ul className="space-y-1 text-xs font-mono text-slate-300">
                    {project.pcbSpecs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400">&bull;</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Software Specs */}
              {project.softwareSpecs && project.softwareSpecs.length > 0 && (
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="text-xs font-mono text-indigo-400 font-bold mb-2 flex items-center gap-1.5">
                    <FileCode className="w-3.5 h-3.5" />
                    <span>Software &amp; Web Stack:</span>
                  </div>
                  <ul className="space-y-1 text-xs font-mono text-slate-300">
                    {project.softwareSpecs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-indigo-400">&bull;</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Communication Protocols */}
              {project.protocols && project.protocols.length > 0 && (
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 md:col-span-2">
                  <div className="text-xs font-mono text-slate-300 font-bold mb-2 flex items-center gap-1.5">
                    <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Communication Protocols &amp; Interfaces:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.protocols.map((p, i) => (
                      <span key={i} className="tech-tag tech-tag-cyan">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Testing, Validation & Debugging */}
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
            <h3 className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold">
              Testing, Calibration &amp; Debugging Approach
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
              {project.testingAndDebugging}
            </p>
          </div>

          {/* Tangible Results */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-white uppercase tracking-wider font-bold">
              Key Results &amp; Impact
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.results.map((res, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-300"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Media & Diagram Placeholders */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono text-slate-300 uppercase tracking-wider font-bold flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-amber-400" />
                <span>Project Visuals &amp; Architecture Documentation</span>
              </h3>
              <span className="text-[11px] font-mono text-slate-500">
                Folder: /public/images/projects/
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.media.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-950/80 border border-dashed border-slate-700/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                      <span className="font-semibold text-slate-200">{item.title}</span>
                      <span className="text-[10px] uppercase text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40">
                        {item.placeholderType}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-snug mb-4">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 bg-slate-900/60 p-2 rounded border border-slate-800">
                    File Target: <code className="text-amber-400">{item.path}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-[#0B0F17] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verified Engineering Case Study</span>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-colors"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded text-xs font-mono bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
