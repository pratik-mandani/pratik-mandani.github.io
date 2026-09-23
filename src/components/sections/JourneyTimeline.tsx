interface Step {
  title: string;
  stage: string;
  description: string;
  tag: string;
}

const STEPS: Step[] = [
  {
    title: 'Production Assembly',
    stage: '01',
    tag: 'Hardware',
    description: 'Electro-mechanical assembly of commercial vending machines, wiring harness routing, and mechanical alignment on the factory floor.',
  },
  {
    title: 'Team Lead',
    stage: '02',
    tag: 'Leadership',
    description: 'Led production floor operations and resource allocation, successfully delivering a critical 200+ unit sprint within 10 days.',
  },
  {
    title: 'Machine Testing',
    stage: '03',
    tag: 'QA/QC',
    description: 'Designed comprehensive QA/QC checklists, performed full functional testing, calibration, and component-level troubleshooting.',
  },
  {
    title: 'PCB Prototyping',
    stage: '04',
    tag: 'Electronics',
    description: 'Schematic capture, PCB layout in Eagle, precision hand soldering, and SMD rework for vending control and 24V-to-12V isolation boards.',
  },
  {
    title: 'Vending R&D',
    stage: '05',
    tag: 'R&D',
    description: 'Collaborated with R&D on next-generation unattended telemetry systems integrating microcontrollers with industrial coin and note acceptors.',
  },
  {
    title: 'Frontend Development',
    stage: '06',
    tag: 'Software',
    description: 'Transitioned to web development at Altius Infoway, translating complex Figma designs into responsive, pixel-perfect HTML/CSS/JavaScript.',
  },
  {
    title: 'PHP / Laravel',
    stage: '07',
    tag: 'Backend',
    description: 'Engineered robust backend architectures using PHP 8+ and Laravel MVC, implementing secure authentication, routing, and RESTful APIs.',
  },
  {
    title: 'E-commerce',
    stage: '08',
    tag: 'Web Platforms',
    description: 'Developed custom e-commerce engines with product catalog management, shopping cart state workflows, and payment gateway integrations.',
  },
  {
    title: 'ERP',
    stage: '09',
    tag: 'Enterprise',
    description: 'Architected custom enterprise ERP and CRM platforms handling multi-role access control, inventory tracking, and complex business workflows.',
  },
  {
    title: 'Full-Stack Development',
    stage: '10',
    tag: '100+ Sites',
    description: 'Delivered 100+ live web platforms over 4+ continuous years at Altius Infoway, managing full product lifecycles from database to UI.',
  },
  {
    title: 'Personal Embedded Projects',
    stage: '11',
    tag: 'Embedded / IoT',
    description: 'Returning full circle: developing custom firmware, ESP32 companion robotics (KOTL), OLED drivers, and I2S audio systems.',
  },
];

export function JourneyTimeline() {
  return (
    <section id="journey" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
          Career Evolution
        </h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-8">
          My Engineering Journey
        </h3>

        {/* Clean Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
          {STEPS.map((step) => (
            <div key={step.stage} className="relative group">
              {/* Circle Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-400 dark:border-slate-600 group-hover:border-slate-900 dark:group-hover:border-white transition-colors" />

              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                  {step.stage}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h4>
                <span className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {step.tag}
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-normal max-w-2xl">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
