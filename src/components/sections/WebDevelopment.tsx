import { useState, useMemo } from 'react';
import { featuredWebProjects, moreWebProjects, webDevelopmentIntro } from '../../data/portfolioData';
import { FeaturedWebProject } from '../../types';

export function WebDevelopment() {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAudit, setSelectedAudit] = useState<FeaturedWebProject | null>(null);
  const [auditDevice, setAuditDevice] = useState<'desktop' | 'mobile'>('desktop');

  const filteredArchive = useMemo(() => {
    return moreWebProjects.filter((item) => {
      const matchesCategory =
        filterCategory === 'all' || item.category.toLowerCase() === filterCategory.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [filterCategory, searchQuery]);

  return (
    <section id="projects" className="py-14 sm:py-20 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2">
            // 05 COMMERCIAL WEB ARCHITECTURE
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Web Development &amp; Client Projects
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
            {webDevelopmentIntro}
          </p>
        </div>

        {/* 1. FEATURED PROJECTS: 2-COLUMN GRID WITH DOMINANT SCREENSHOTS */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center justify-between mb-6 sm:mb-8 pb-3 border-b border-slate-200">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Featured Web Platforms
            </h3>
            <span className="text-xs font-mono text-slate-400">4 PRIMARY SHOWCASES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {featuredWebProjects.map((project) => (
              <div
                key={project.id}
                className="group p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Dominant Large Screenshot (Visual Focus) */}
                  <div className="img-frame aspect-16/10 mb-4 sm:mb-5 relative bg-slate-100 overflow-hidden shadow-2xs">
                    <img
                      src={project.imagePath}
                      alt={project.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[10px] font-mono font-bold text-slate-700 border border-slate-200 shadow-2xs">
                      {project.category}
                    </div>
                  </div>

                  {/* Metadata & Title */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {project.name}
                      </h4>
                      <div className="flex items-center gap-1.5">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-white text-slate-700 border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    <div className="text-xs font-semibold text-blue-600 font-mono">
                      Role: {project.role}
                    </div>

                    {/* Verified Lighthouse Performance Audit Card */}
                    {project.lighthouse && (
                      <div className="mt-3 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-800">
                              Lighthouse Audit
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedAudit(project);
                              setAuditDevice('desktop');
                            }}
                            className="text-[11px] font-mono font-semibold text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center gap-1 cursor-pointer"
                          >
                            <span>View Report</span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                        </div>

                        <div className="grid grid-cols-4 gap-1.5 text-center">
                          <div className="p-1.5 rounded-lg bg-emerald-50/70 border border-emerald-200/70">
                            <div className="text-xs sm:text-sm font-extrabold text-emerald-700 font-mono">
                              {project.lighthouse.desktopScore}
                            </div>
                            <div className="text-[10px] font-mono text-emerald-800">Desktop</div>
                          </div>
                          <div className="p-1.5 rounded-lg bg-emerald-50/70 border border-emerald-200/70">
                            <div className="text-xs sm:text-sm font-extrabold text-emerald-700 font-mono">
                              {project.lighthouse.mobileScore}
                            </div>
                            <div className="text-[10px] font-mono text-emerald-800">Mobile</div>
                          </div>
                          <div className="p-1.5 rounded-lg bg-emerald-50/70 border border-emerald-200/70">
                            <div className="text-xs sm:text-sm font-extrabold text-emerald-700 font-mono">
                              {project.lighthouse.bestPractices}
                            </div>
                            <div className="text-[10px] font-mono text-emerald-800">Best Prac.</div>
                          </div>
                          <div className="p-1.5 rounded-lg bg-emerald-50/70 border border-emerald-200/70">
                            <div className="text-xs sm:text-sm font-extrabold text-emerald-700 font-mono">
                              {project.lighthouse.tbt}
                            </div>
                            <div className="text-[10px] font-mono text-emerald-800">0ms Block</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Live Link Button */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">PRODUCTION DEPLOYMENT</span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-2xs"
                  >
                    <span>Visit Live Website</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Lighthouse Modal Report Viewer */}
        {selectedAudit && selectedAudit.lighthouse && (
          <div
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
            onClick={() => setSelectedAudit(null)}
          >
            <div
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="px-4 sm:px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/90">
                <div>
                  <div className="text-[10px] font-mono uppercase font-bold text-blue-600">
                    GOOGLE LIGHTHOUSE PERFORMANCE REPORT
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    {selectedAudit.name} — Verified Speed &amp; Optimization
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedAudit(null)}
                  className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                  aria-label="Close report modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Device Tab Selector */}
              <div className="px-4 sm:px-6 py-2.5 bg-white border-b border-slate-100 flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setAuditDevice('desktop')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                      auditDevice === 'desktop'
                        ? 'bg-blue-600 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    🖥️ Desktop ({selectedAudit.lighthouse.desktopScore}/100)
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuditDevice('mobile')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                      auditDevice === 'mobile'
                        ? 'bg-blue-600 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    📱 Mobile ({selectedAudit.lighthouse.mobileScore}/100)
                  </button>
                </div>

                <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono text-slate-500">
                  <span>FCP: <strong className="text-emerald-600">{selectedAudit.lighthouse.fcp}</strong></span>
                  <span>LCP: <strong className="text-emerald-600">{selectedAudit.lighthouse.lcp}</strong></span>
                  <span>TBT: <strong className="text-emerald-600">{selectedAudit.lighthouse.tbt}</strong></span>
                </div>
              </div>

              {/* Screenshot Viewer Area */}
              <div className="p-3 sm:p-5 overflow-y-auto max-h-[calc(90vh-140px)] flex items-center justify-center bg-slate-100/60">
                <img
                  src={
                    auditDevice === 'desktop'
                      ? selectedAudit.lighthouse.auditImageDesktop
                      : selectedAudit.lighthouse.auditImageMobile
                  }
                  alt={`${selectedAudit.name} Lighthouse Audit`}
                  className="max-w-full max-h-full rounded-xl border border-slate-200 shadow-sm object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        )}

        {/* 2. PROJECT DIRECTORY / PROFESSIONAL ARCHIVE */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-3 border-b border-slate-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Project Archive
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Catalog of corporate, business, and e-commerce platforms personally developed and deployed.
              </p>
            </div>

            {/* Filter Tabs & Search */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-100 border border-slate-200 text-xs">
                {['all', 'corporate', 'ecommerce'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-2.5 py-1 rounded-md capitalize font-medium transition-colors cursor-pointer ${
                      filterCategory === cat
                        ? 'bg-white text-blue-600 shadow-2xs font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
              </div>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search archive..."
                className="w-full sm:w-48 px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:bg-white focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Clean Professional Project Archive Rows */}
          <div className="border border-slate-200/90 rounded-2xl bg-white divide-y divide-slate-100 overflow-hidden shadow-2xs">
            {filteredArchive.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3.5 sm:px-6 hover:bg-slate-50/80 transition-colors gap-2 group"
              >
                {/* Left: Project Name & Mobile Subtext */}
                <div className="flex-1 min-w-0 pr-2 sm:w-1/3 sm:flex-none">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                    <span className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors truncate">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 shrink-0 hidden sm:inline-block">
                      {item.categoryLabel}
                    </span>
                  </div>
                  <div className="sm:hidden text-[11px] font-mono text-slate-500 mt-0.5 truncate pl-3.5">
                    <span className="text-slate-400 font-sans">{item.categoryLabel}</span> • {item.techStack.filter(t => ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'Tailwind CSS'].includes(t)).join(' / ') || 'Laravel / MySQL'}
                  </div>
                </div>

                {/* Middle (Desktop only): Category */}
                <div className="hidden sm:block sm:w-1/4">
                  <span className="text-xs text-slate-500 font-medium">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Technology (Desktop only) */}
                <div className="hidden sm:block sm:w-1/3 text-xs font-mono text-slate-500">
                  {item.techStack.filter(t => ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'Tailwind CSS'].includes(t)).join(' / ') || 'Laravel / MySQL'}
                </div>

                {/* Right: Live Link */}
                <div className="shrink-0 sm:w-24 text-right">
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-0 sm:py-0 rounded-md sm:rounded-none bg-blue-50 sm:bg-transparent text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>Live</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-xs font-mono text-slate-400 flex items-center justify-between px-1">
            <span>SHOWING {filteredArchive.length} ARCHIVED PLATFORMS</span>
            <span>100+ DEPLOYMENTS RECORDED</span>
          </div>
        </div>

      </div>
    </section>
  );
}
