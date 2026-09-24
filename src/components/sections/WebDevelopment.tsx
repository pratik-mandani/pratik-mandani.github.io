import { useState, useMemo } from 'react';
import { webDevelopmentIntro, webProjects } from '../../data/portfolioData';
import { WebCategory } from '../../types';

export function WebDevelopment() {
  const [activeTab, setActiveTab] = useState<WebCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return webProjects.filter((project) => {
      const matchesTab = activeTab === 'all' || project.category === activeTab;
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-4xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
            Web Development
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {webDevelopmentIntro}
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-white border border-slate-200 self-start">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              All Projects ({webProjects.length})
            </button>
            <button
              onClick={() => setActiveTab('corporate')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                activeTab === 'corporate'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Corporate / Business (16)
            </button>
            <button
              onClick={() => setActiveTab('ecommerce')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                activeTab === 'ecommerce'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              E-Commerce (3)
            </button>
            <button
              onClick={() => setActiveTab('erp')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                activeTab === 'erp'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Business / ERP (1)
            </button>
          </div>

          {/* Keyword Search */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or tech..."
              className="w-full px-3 py-1.5 text-xs rounded border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="eng-card p-5 flex flex-col justify-between"
            >
              <div>
                {/* Header: Category Badge & Verified Marker */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                    {project.categoryLabel}
                  </span>
                  {project.isPersonallyDeveloped && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Personally Developed
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="font-bold text-base text-slate-900 mb-1 leading-snug">
                  {project.name}
                </h3>

                {/* Role */}
                <div className="text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-slate-700">Role: </span>
                  <span>{project.role}</span>
                </div>

                {/* Specific Notes for E-Commerce & ERP */}
                {project.frontendNote && (
                  <p className="text-xs text-slate-600 bg-slate-50 p-2 rounded border border-slate-100 mb-3">
                    {project.frontendNote}
                  </p>
                )}

                {project.description && (
                  <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-100 mb-3 leading-relaxed">
                    {project.description}
                  </p>
                )}

                {/* Features if listed */}
                {project.features && (
                  <div className="mb-3">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Key Features:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feat, fIdx) => (
                        <span key={fIdx} className="text-[11px] px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Work Scope for ERP */}
                {project.workScope && (
                  <div className="mb-3">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Scope of Work:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {project.workScope.map((scope, sIdx) => (
                        <span key={sIdx} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                          {scope}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button: Live Link */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>Live Website</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <span className="text-[11px] text-slate-400 font-mono">
                  {new URL(project.liveUrl).hostname}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="p-8 text-center text-sm text-slate-500 bg-white rounded border border-slate-200">
            No projects found matching &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </div>
    </section>
  );
}
