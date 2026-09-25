import { useState, useMemo } from 'react';
import { featuredWebProjects, moreWebProjects, webDevelopmentIntro } from '../../data/portfolioData';

export function WebDevelopment() {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

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
    <section id="projects" className="py-20 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2">
            // 05 COMMERCIAL WEB ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Web Development &amp; Client Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {webDevelopmentIntro}
          </p>
        </div>

        {/* 1. FEATURED PROJECTS: 2-COLUMN GRID WITH LARGE DOMINANT SCREENSHOTS */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Featured Web Platforms
            </h3>
            <span className="text-xs font-mono text-slate-400">4 PRIMARY SHOWCASES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {featuredWebProjects.map((project) => (
              <div
                key={project.id}
                className="group p-5 sm:p-6 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Dominant Large Screenshot */}
                  <div className="img-frame aspect-16/10 mb-5 relative bg-slate-100 overflow-hidden">
                    <img
                      src={project.imagePath}
                      alt={project.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[10px] font-mono font-semibold text-slate-700 border border-slate-200 shadow-2xs">
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

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="text-xs font-semibold text-blue-600 font-mono">
                      Role: {project.role}
                    </div>
                  </div>
                </div>

                {/* Live Link Button */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">PRODUCTION</span>
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

        {/* 2. PROJECT DIRECTORY / ARCHIVE (MORE PROJECTS) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-3 border-b border-slate-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Project Directory &amp; Client Archive
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Catalog of corporate, business, and e-commerce platforms personally developed and deployed.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search archive by name/tech..."
                className="w-full px-3.5 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50/70 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:bg-white focus:ring-1 focus:ring-blue-500 font-mono"
              />
            </div>
          </div>

          {/* Clean Directory Table / List */}
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
            
            {/* Table Header (Hidden on small mobile) */}
            <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3 bg-slate-50 border-b border-slate-200 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              <div className="col-span-4">Project Name</div>
              <div className="col-span-3">Category</div>
              <div className="col-span-3">Core Stack</div>
              <div className="col-span-2 text-right">Live Link</div>
            </div>

            {/* Table Rows with Hover Effect */}
            <div className="divide-y divide-slate-100 font-mono text-xs">
              {filteredArchive.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 px-6 py-3.5 hover:bg-blue-50/40 transition-colors items-center group"
                >
                  <div className="sm:col-span-4 font-sans font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span className="group-hover:text-blue-600 transition-colors">{item.name}</span>
                  </div>

                  <div className="sm:col-span-3 text-slate-500 font-sans">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <div className="sm:col-span-3 text-slate-500 truncate text-[11px]">
                    {item.techStack.join(' • ')}
                  </div>

                  <div className="sm:col-span-2 sm:text-right pt-1 sm:pt-0">
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-bold transition-colors"
                    >
                      <span>Visit</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="mt-4 text-center sm:text-left text-xs font-mono text-slate-400">
            TOTAL VERIFIED DEPLOYMENTS: 100+ WEBSITES • SHOWING {filteredArchive.length} ARCHIVED ENTRIES
          </div>
        </div>

      </div>
    </section>
  );
}
