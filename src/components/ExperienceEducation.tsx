import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { workExperiences, educationList } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-[#0B0F17]/90 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-amber-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TRACK RECORD &amp; CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Professional Experience &amp; Education
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Hands-on work history supported by verifiable industrial production deliveries and 
            commercial enterprise web systems.
          </p>
        </div>

        {/* Work Experience Timeline */}
        <div className="space-y-8 mb-16">
          {workExperiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 shadow-xl"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="text-xs font-mono text-amber-400 font-semibold mb-1">
                    {exp.company}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Role Progression tags */}
              {exp.progression && (
                <div className="py-4 border-b border-slate-800/80">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                    Role Progression &amp; Milestones:
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {exp.progression.map((p, pIdx) => (
                      <React.Fragment key={pIdx}>
                        <span className="px-2.5 py-1 rounded text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800">
                          {p}
                        </span>
                        {pIdx < exp.progression!.length - 1 && (
                          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* Executive Summary */}
              <div className="py-4 text-sm text-slate-300 leading-relaxed font-mono">
                {exp.summary}
              </div>

              {/* Responsibilities List */}
              <div className="space-y-2 py-2">
                <div className="text-xs font-mono text-white uppercase tracking-wider font-semibold mb-3">
                  Key Responsibilities &amp; Accomplishments:
                </div>
                {exp.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Used */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Technologies:</span>
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-mono">
                Formal Academic Education
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Foundational engineering credentials
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">
                {educationList[0].degree}
              </h4>
              <div className="text-xs font-mono text-amber-400 mt-1">
                {educationList[0].institution} • Passout Year: {educationList[0].year}
              </div>
              <p className="text-xs text-slate-400 mt-2 max-w-2xl leading-relaxed">
                {educationList[0].details}
              </p>
            </div>

            <div className="shrink-0 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-2 rounded-lg border border-slate-800">
              {educationList[0].location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
