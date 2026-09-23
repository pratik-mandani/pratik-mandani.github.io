import React, { useState } from 'react';
import {
  Layers,
  Cpu,
  Globe,
  Wrench,
  Bot,
  ArrowRight,
  Sparkles,
  ExternalLink,
  SlidersHorizontal,
} from 'lucide-react';
import { projectCaseStudies } from '../data/portfolioData';
import { ProjectCaseStudy, ProjectCategory } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

export const FeaturedProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);

  const filterTabs: { id: ProjectCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects', count: projectCaseStudies.length },
    {
      id: 'hardware',
      label: 'Electronics & PCB',
      count: projectCaseStudies.filter((p) => p.category === 'hardware').length,
    },
    {
      id: 'automation',
      label: 'Industrial & Automation',
      count: projectCaseStudies.filter((p) => p.category === 'automation').length,
    },
    {
      id: 'web',
      label: 'Full-Stack Web (Altius)',
      count: projectCaseStudies.filter((p) => p.category === 'web').length,
    },
    {
      id: 'embedded',
      label: 'Personal Embedded (KOTL)',
      count: projectCaseStudies.filter((p) => p.category === 'embedded').length,
    },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectCaseStudies
    : projectCaseStudies.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-[#0B0F17]/95 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>ENGINEERING CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Featured Projects &amp; System Case Studies
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every project represents real engineering challenges—from PCB layout and vending machine QA to 
            enterprise web platforms and embedded robotics. Click any project for the detailed case study.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all border ${
                selectedCategory === tab.id
                  ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold shadow-md shadow-amber-500/10'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`px-1.5 py-0.2 rounded text-[10px] ${
                  selectedCategory === tab.id
                    ? 'bg-slate-950/20 text-slate-950 font-extrabold'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900/80 transition-all flex flex-col justify-between cursor-pointer group shadow-lg shadow-black/20"
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {project.period}
                  </span>
                </div>

                {/* Company Tag */}
                <div className="text-xs font-mono text-cyan-400 font-medium mb-2">
                  {project.companyOrType}
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {project.title}
                </h3>

                {/* Role */}
                <div className="text-xs font-mono text-slate-400 mb-3">
                  Role: <span className="text-slate-200">{project.role}</span>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                  {project.summary}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 font-semibold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>

                {project.isMissingDetails && (
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-800/60 px-2 py-0.5 rounded">
                    Placeholder
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Viewer */}
        <CaseStudyModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};
