import { ProjectCaseStudy } from '../../types';

interface Props {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

function getProjectImage(project: ProjectCaseStudy): string {
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

function getProjectTechnologies(project: ProjectCaseStudy): string[] {
  const list: string[] = [];
  if (project.hardwareSpecs) list.push(...project.hardwareSpecs);
  if (project.firmwareSpecs) list.push(...project.firmwareSpecs);
  if (project.softwareSpecs) list.push(...project.softwareSpecs);
  if (project.pcbSpecs) list.push(...project.pcbSpecs);
  if (project.protocols) list.push(...project.protocols);
  return list.length > 0 ? list : ['Engineering', 'Embedded', 'Hardware'];
}

export function CaseStudyModal({ project, onClose }: Props) {
  if (!project) return null;

  const imgSrc = getProjectImage(project);
  const techList = getProjectTechnologies(project);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6 text-slate-700 dark:text-slate-300">
          {/* Project Diagram / Graphic */}
          <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-4 flex items-center justify-center">
            <img
              src={imgSrc}
              alt={project.title}
              className="w-full h-auto max-h-64 object-contain"
            />
          </div>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200/60 dark:border-slate-700/60 text-sm">
            <div>
              <span className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 block">
                My Role
              </span>
              <span className="font-semibold text-slate-900 dark:text-white">
                {project.role}
              </span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 block">
                Organization / Context
              </span>
              <span className="font-semibold text-slate-900 dark:text-white">
                {project.companyOrType} ({project.period})
              </span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Overview
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {project.summary}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 p-4 rounded-xl">
              <h5 className="text-xs font-bold uppercase text-amber-700 dark:text-amber-400 mb-1">
                Challenge
              </h5>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-normal">
                {project.problem || 'Details to be added'}
              </p>
            </div>
            <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 p-4 rounded-xl">
              <h5 className="text-xs font-bold uppercase text-blue-700 dark:text-blue-400 mb-1">
                Architecture &amp; Solution
              </h5>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-normal">
                {project.solution || 'Details to be added'}
              </p>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Technical Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="font-bold block text-slate-900 dark:text-white mb-1">Hardware</span>
                <span className="text-slate-600 dark:text-slate-400">
                  {project.hardwareSpecs && project.hardwareSpecs.length > 0
                    ? project.hardwareSpecs.join(', ')
                    : 'Details to be added'}
                </span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="font-bold block text-slate-900 dark:text-white mb-1">Software / Firmware</span>
                <span className="text-slate-600 dark:text-slate-400">
                  {project.firmwareSpecs && project.firmwareSpecs.length > 0
                    ? project.firmwareSpecs.join(', ')
                    : project.softwareSpecs && project.softwareSpecs.length > 0
                    ? project.softwareSpecs.join(', ')
                    : 'Details to be added'}
                </span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="font-bold block text-slate-900 dark:text-white mb-1">PCB / Electronics</span>
                <span className="text-slate-600 dark:text-slate-400">
                  {project.pcbSpecs && project.pcbSpecs.length > 0
                    ? project.pcbSpecs.join(', ')
                    : project.category === 'hardware'
                    ? 'Eagle schematic capture, double-sided FR4, ground planes, solder mask validation.'
                    : 'Details to be added'}
                </span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="font-bold block text-slate-900 dark:text-white mb-1">Protocols &amp; Communication</span>
                <span className="text-slate-600 dark:text-slate-400">
                  {project.protocols && project.protocols.length > 0
                    ? project.protocols.join(', ')
                    : 'Details to be added'}
                </span>
              </div>
            </div>
          </div>

          {/* Testing & QA */}
          {project.testingAndDebugging && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Testing &amp; Validation
              </h4>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5">✓</span>
                <span>{project.testingAndDebugging}</span>
              </div>
            </div>
          )}

          {/* Results & Key Outcomes */}
          {project.results && project.results.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Results &amp; Impact
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {project.results.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Tag Cloud */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Key Technologies &amp; Components
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {techList.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="border-t border-slate-200 dark:border-slate-800 pt-4 flex items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <span>Live Demo / Platform</span>
                  <span>↗</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:underline flex items-center gap-1"
                >
                  <span>Source Code</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
