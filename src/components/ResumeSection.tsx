import React from 'react';
import {
  FileText,
  Download,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const verifiedResumeHighlights = [
    '7+ Years of hands-on experience in industrial product testing & hardware prototyping',
    'Component-level troubleshooting, electrical diagnostics, and precision SMD rework',
    'Designed & prototyped Common Machine Control Card & 24V-to-12V Isolation PCB',
    '4+ Years continuous full-stack web engineering at Altius Infoway (100+ live web platforms)',
    'Scalable Laravel backend architecture, complex MySQL indexing, and custom ERP/CRM engines',
    'Figma-to-HTML conversion with responsive, accessible cross-device fidelity',
    'Validated and delivered 200+ production vending units in a strict 10-day sprint',
    'Diploma in Electronics & Communication Engineering (GTU, 2018)',
  ];

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-[#0B0F17] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>VERIFIED RESUME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Curriculum Vitae &amp; Qualifications
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            All qualifications and metrics are strictly supported by verified employment and official credentials.
          </p>
        </div>

        {/* Resume Preview Card */}
        <div className="p-6 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider mb-1">
                <Award className="w-4 h-4" />
                <span>Official PDF Document</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Pratik Mandani — Resume (Latest)
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Product Development &amp; Embedded Quality Engineer • Logic &amp; Web Systems Engineer
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={personalInfo.resumeUrl}
                download="Pratik_Mandani_Resume.pdf"
                className="flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-mono font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-500/10"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-xs font-mono font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
              >
                <span>View PDF In Browser</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="py-8">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 font-semibold">
              Key Supported Qualifications:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {verifiedResumeHighlights.map((hl, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs font-mono text-slate-300"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Badge */}
          <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Verified file source: <code>/resume/Pratik_Mandani.pdf</code>
            </span>
            <span className="text-slate-500">
              Notice: Immediate / 30 Days Availability
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
