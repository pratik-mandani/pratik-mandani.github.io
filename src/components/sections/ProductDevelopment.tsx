import { productDevProjects } from '../../data/portfolioData';

export function ProductDevelopment() {
  return (
    <section id="product-dev" className="py-16 sm:py-20 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Product Development &amp; Electronics
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-2xl leading-relaxed">
          Hands-on experience in vending-machine manufacturing, electronics, PCB prototyping, machine integration, testing and R&amp;D.
        </p>

        {/* Project Cards Stack / Grid */}
        <div className="space-y-6">
          {productDevProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-7 rounded-lg border border-slate-200 bg-white shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    {project.type}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                    {project.title}
                  </h3>
                </div>

                {project.tools && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200 self-start sm:self-auto">
                    Tools: {project.tools}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Confirmed Hardware if present (Project 2) */}
              {project.confirmedHardware && (
                <div className="mb-4 p-3.5 rounded bg-slate-50 border border-slate-200 text-xs">
                  <span className="font-bold text-slate-800 block mb-1.5 uppercase tracking-wider text-[11px]">
                    Confirmed Hardware Architecture:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-700">
                    {project.confirmedHardware.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Responsibilities */}
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Key Responsibilities
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.responsibilities.map((resp, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-medium rounded bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {resp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Disclaimer if present (Project 3) */}
              {project.disclaimer && (
                <div className="p-3 rounded bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed mb-4">
                  <span className="font-bold">Role Clarification: </span>
                  {project.disclaimer}
                </div>
              )}

              {/* Documentation image placeholder */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Project documentation image archive verified</span>
                </span>
                <span className="font-semibold text-slate-500">Symbian Vending R&amp;D</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
