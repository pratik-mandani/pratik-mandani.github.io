import { ProjectCaseStudy } from '../../types';

interface Props {
  projects: ProjectCaseStudy[];
  onSelectProject: (project: ProjectCaseStudy) => void;
}

export function getProjectImage(project: ProjectCaseStudy): string {
  if (project.id === 'symbian-common-control-card') return '/images/pcb/control-card.svg';
  if (project.id === 'symbian-coin-interface-pcb') return '/images/pcb/coin-interface.svg';
  if (project.id === 'symbian-unattended-vending-system') return '/images/vending/qr-system.svg';
  if (project.id === 'symbian-production-200-units') return '/images/symbian/production-testing.svg';
  if (project.id === 'kotl-emotional-robot') return '/images/kotl/kotl-robot.svg';
  if (project.category === 'web' || project.id.startsWith('altius-')) return '/images/web/web-platform.svg';
  if (project.media && project.media.length > 0 && project.media[0].path) {
    return project.media[0].path;
  }
  return '/images/web/web-platform.svg';
}

export function getProjectTechnologies(project: ProjectCaseStudy): string[] {
  const list: string[] = [];
  if (project.hardwareSpecs) list.push(...project.hardwareSpecs);
  if (project.firmwareSpecs) list.push(...project.firmwareSpecs);
  if (project.softwareSpecs) list.push(...project.softwareSpecs);
  if (project.pcbSpecs) list.push(...project.pcbSpecs);
  if (project.protocols) list.push(...project.protocols);
  return list.length > 0 ? list : ['Engineering', 'Embedded', 'Hardware'];
}

export function FeaturedProjects({ projects, onSelectProject }: Props) {
  // Filter the 6 initial projects specified by the user
  const featured = projects.filter((p) => [
    'symbian-common-control-card',
    'symbian-coin-interface-pcb',
    'symbian-unattended-vending-system',
    'symbian-production-200-units',
    'kotl-emotional-robot',
    'altius-diamorivo-systems',
  ].includes(p.id));

  // If some ids differ, fall back to the first 6 featured projects
  const displayProjects = featured.length >= 5 ? featured : projects.slice(0, 6);

  return (
    <section id="projects" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
          Portfolio
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Featured Projects
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Selected engineering case studies across product development, electronics, embedded systems, and full-stack software.
            </p>
          </div>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project) => {
            const imgSrc = getProjectImage(project);
            const techList = getProjectTechnologies(project);

            return (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-500 transition-colors group"
              >
                <div>
                  {/* Project Image */}
                  <div className="relative aspect-video w-full bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 overflow-hidden flex items-center justify-center p-3">
                    <img
                      src={imgSrc}
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-200"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-white/95 dark:bg-slate-900/95 text-slate-700 dark:text-slate-300 rounded shadow-xs border border-slate-200 dark:border-slate-700">
                      {project.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-1">
                      {project.title}
                    </h4>

                    {/* My Role */}
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 mb-2.5">
                      Role: <span className="text-slate-700 dark:text-slate-200">{project.role}</span>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-normal mb-4">
                      {project.summary}
                    </p>

                    {/* Technologies Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {techList.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[11px] font-medium rounded bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 line-clamp-1 max-w-[200px]"
                        >
                          {tech}
                        </span>
                      ))}
                      {techList.length > 3 && (
                        <span className="px-1.5 py-0.5 text-[11px] text-slate-400 font-medium">
                          +{techList.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* View Project Button */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full py-2 px-3 text-xs font-semibold rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View Project</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
