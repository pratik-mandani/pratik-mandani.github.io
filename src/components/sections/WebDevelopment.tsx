import { useState, useMemo } from 'react';
import {
  webDevelopmentIntro,
  featuredWebProjects,
  moreWebProjects,
} from '../../data/portfolioData';
import { WebCategory } from '../../types';

export function WebDevelopment() {
  const [activeFilter, setActiveFilter] = useState<WebCategory>('all');

  const filteredMoreProjects = useMemo(() => {
    if (activeFilter === 'all') return moreWebProjects;
    return moreWebProjects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const counts = useMemo(() => {
    return {
      all: moreWebProjects.length,
      corporate: moreWebProjects.filter((p) => p.category === 'corporate').length,
      ecommerce: moreWebProjects.filter((p) => p.category === 'ecommerce').length,
      business: moreWebProjects.filter((p) => p.category === 'business').length,
    };
  }, []);

  return (
    <section id="projects" className="py-14 sm:py-18 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
            Web Development
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {webDevelopmentIntro}
          </p>
        </div>

        {/* ======================================================== */}
        {/* 1. FEATURED PROJECTS (4 Large Cards)                      */}
        {/* ======================================================== */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>Featured Projects</span>
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              4 Selected E-Commerce &amp; Application Systems
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredWebProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between"
              >
                {/* Image / Clean Placeholder */}
                {project.imagePath ? (
                  <div className="h-44 sm:h-48 overflow-hidden bg-slate-100 border-b border-slate-200">
                    <img
                      src={project.imagePath}
                      alt={project.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="h-40 sm:h-44 bg-slate-50/90 border-b border-slate-200 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 mb-2 shadow-2xs">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-slate-700">
                      {project.name}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-0.5 font-mono">
                      Project image coming soon
                    </span>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Role Header */}
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500">
                        Role: {project.role}
                      </span>
                    </div>

                    {/* Name */}
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {project.name}
                    </h4>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Features (e.g. The Busa) */}
                    {project.features && (
                      <div className="mb-4">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                          Key Modules:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {project.features.map((feat, fIdx) => (
                            <span
                              key={fIdx}
                              className="text-[11px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100"
                            >
                              {feat}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Work Scope (e.g. Network Kitchenware) */}
                    {project.workScope && (
                      <div className="mb-4">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                          Scope of Frontend &amp; Backend Work:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {project.workScope.map((scope, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                            >
                              {scope}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Live Website Action Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs"
                    >
                      <span>Live Website</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <span className="text-xs text-slate-400 font-mono">
                      {new URL(project.liveUrl).hostname}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. MORE PROJECTS (Compact Filterable Grid)                */}
        {/* ======================================================== */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                <span>More Personally Developed Projects</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                16 websites personally developed across frontend and backend (PHP / Laravel / MySQL).
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-white border border-slate-200 self-start sm:self-auto">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                All ({counts.all})
              </button>
              <button
                onClick={() => setActiveFilter('corporate')}
                className={`px-3 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  activeFilter === 'corporate'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Corporate ({counts.corporate})
              </button>
              <button
                onClick={() => setActiveFilter('ecommerce')}
                className={`px-3 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  activeFilter === 'ecommerce'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                E-Commerce ({counts.ecommerce})
              </button>
              <button
                onClick={() => setActiveFilter('business')}
                className={`px-3 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  activeFilter === 'business'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Business ({counts.business})
              </button>
            </div>
          </div>

          {/* Compact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredMoreProjects.map((project) => (
              <div
                key={project.id}
                className="p-4 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-colors flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                      {project.categoryLabel}
                    </span>
                    <span className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      Laravel
                    </span>
                  </div>

                  <h4 className="font-bold text-sm text-slate-900 mb-1 leading-snug">
                    {project.name}
                  </h4>

                  <div className="text-[11px] text-slate-500 mb-2.5">
                    <span className="font-medium text-slate-600">Role: </span>
                    <span>{project.role}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
                      PHP
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
                      Laravel
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
                      MySQL
                    </span>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>Live Website</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
