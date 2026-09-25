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

        {/* 1. FEATURED PROJECTS: 2-COLUMN GRID WITH DOMINANT SCREENSHOTS */}
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
                  {/* Dominant Large Screenshot (Visual Focus) */}
                  <div className="img-frame aspect-16/10 mb-5 relative bg-slate-100 overflow-hidden shadow-2xs">
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
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:px-6 hover:bg-slate-50/80 transition-colors gap-2 group"
              >
                {/* Left: Project Name */}
                <div className="sm:w-1/3 flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                  <span className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </span>
                </div>

                {/* Middle: Category */}
                <div className="sm:w-1/4">
                  <span className="text-xs text-slate-500 font-medium">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Technology */}
                <div className="sm:w-1/3 text-xs font-mono text-slate-500">
                  {item.techStack.filter(t => ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'Tailwind CSS'].includes(t)).join(' / ') || 'Laravel / MySQL'}
                </div>

                {/* Right: Live Link */}
                <div className="sm:w-24 text-left sm:text-right pt-1 sm:pt-0">
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
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
