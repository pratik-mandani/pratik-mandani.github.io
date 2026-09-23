import { ProjectCaseStudy } from '../../types';

interface Props {
  onOpenKotlModal: () => void;
  kotlProject?: ProjectCaseStudy;
}

export function KotlSpotlight({ onOpenKotlModal }: Props) {
  const techStack = [
    'ESP32',
    'OLED',
    'Sensors',
    'Audio',
    'GPIO',
    'ADC',
    'I2S',
    'Embedded Firmware',
    'Electronics',
  ];

  return (
    <section id="kotl" className="py-16 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Image Placeholder */}
            <div className="lg:col-span-5">
              <div className="aspect-square sm:aspect-4/3 lg:aspect-square w-full rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 overflow-hidden flex items-center justify-center p-6">
                <img
                  src="/images/kotl/kotl-robot.svg"
                  alt="KOTL — The Smart Emotional Assistant Robot"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Column: Information */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-3 py-1 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 rounded text-xs font-semibold tracking-wider">
                Personal Embedded Firmware &amp; Hardware Project
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                KOTL — The Smart Emotional Assistant Robot
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                A personal project created for fun, experimentation and practical embedded learning. Developed around an ESP32 microcontroller, KOTL features animated OLED facial expressions, audio output routines, and sensor input integration designed for interactive experimentation.
              </p>

              {/* Technologies */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                  Technology Direction:
                </span>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenKotlModal}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
                >
                  <span>Explore KOTL Case Study</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
