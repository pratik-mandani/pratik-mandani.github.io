import { productDevProjects } from '../../data/portfolioData';

export function ProductDevelopment() {
  return (
    <section id="product-dev" className="py-14 sm:py-18 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Product Development &amp; Electronics
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-3xl leading-relaxed">
          Hands-on product development across vending machines, power interface circuits, PCB prototyping, wiring, and operational machine integration.
        </p>

        {/* 3 Project Cards Stack */}
        <div className="space-y-8">
          {productDevProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 sm:p-7 rounded-lg border border-slate-200 bg-white shadow-xs"
            >
              {/* Card Header: Type, Title, Tools */}
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
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Confirmed Hardware Architecture (for Project 2) */}
              {project.confirmedHardware && (
                <div className="mb-5 p-3.5 sm:p-4 rounded-md bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                  <span className="font-bold text-slate-900 block mb-2 uppercase tracking-wider text-[11px]">
                    Confirmed Hardware Architecture
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                    {project.confirmedHardware.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-blue-600 font-bold select-none">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Responsibilities */}
              <div className="mb-5">
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

              {/* Role Disclaimer (for Project 3) */}
              {project.disclaimer && (
                <div className="p-3 sm:p-3.5 rounded bg-amber-50/80 border border-amber-200 text-xs text-amber-900 leading-relaxed mb-5">
                  <span className="font-bold">Role Clarification: </span>
                  {project.disclaimer}
                </div>
              )}

              {/* Image Gallery Area */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Project Documentation Gallery
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    4 Verification Slots
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.gallerySlots?.map((slot, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-md border border-dashed border-slate-200 bg-slate-50/70 flex flex-col items-center justify-center text-center min-h-[100px] sm:min-h-[110px]"
                    >
                      <svg
                        className="w-5 h-5 text-slate-400 mb-1.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-xs font-semibold text-slate-800 leading-tight mb-1">
                        {slot.label}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Project images coming soon
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
