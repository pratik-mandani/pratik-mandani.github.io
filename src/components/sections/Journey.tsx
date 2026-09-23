interface JourneyItem {
  step: number;
  title: string;
  category: string;
  company: string;
  period: string;
  description: string;
  learnings: string[];
}

const JOURNEY_STEPS: JourneyItem[] = [
  {
    step: 1,
    title: 'Production Assembly',
    category: 'Hardware',
    company: 'Symbian Vending Solutions',
    period: '2018',
    description: 'Started on the factory floor mastering electro-mechanical assembly, wiring harness routing, and structural chassis integration for commercial vending machines.',
    learnings: ['Electro-mechanical assembly', 'Wiring harness routing', 'Physical structural tolerances'],
  },
  {
    step: 2,
    title: 'Team Lead & Production Planning',
    category: 'Leadership',
    company: 'Symbian Vending Solutions',
    period: '2019',
    description: 'Promoted to lead daily shop-floor assembly, shift management, and stage-gate manufacturing workflows—validating 200+ units in a 10-day sprint.',
    learnings: ['Production stage-gates', 'Manufacturing bottlenecks', 'Shop-floor QA checklists'],
  },
  {
    step: 3,
    title: 'Machine Testing & Functional QA/QC',
    category: 'QA/QC',
    company: 'Symbian Vending Solutions',
    period: '2019 - 2020',
    description: 'Transitioned into dedicated functional validation, testing motor actuation, coin/note acceptance, sensor reliability, and dispatch verification.',
    learnings: ['Functional QA/QC protocols', 'Voltage drop analysis', 'Preventive screening'],
  },
  {
    step: 4,
    title: 'PCB Prototyping & SMD Rework',
    category: 'Electronics',
    company: 'Symbian Vending Solutions',
    period: '2020',
    description: 'Mastered component-level diagnostics, circuit tracing, multimeters, oscilloscopes, and precision fine-pitch SMD soldering/rework.',
    learnings: ['Precision SMD rework', 'Component diagnostics', 'Benchtop oscilloscope verification'],
  },
  {
    step: 5,
    title: 'R&D: Common Machine Control Card',
    category: 'R&D',
    company: 'Symbian Vending Solutions',
    period: '2020',
    description: 'Prototyped a unified, reusable motherboard standardizing electronics across multiple vending machine physical configurations.',
    learnings: ['Modular hardware bus', 'Over-current protection', 'Trace current sizing'],
  },
  {
    step: 6,
    title: 'R&D: 24V to 12V Coin Interface PCB',
    category: 'R&D',
    company: 'Symbian Vending Solutions',
    period: '2020',
    description: 'Engineered DC step-down regulation, optical signal isolation, and noise suppression protecting 12V coin mechanisms from 24V bus transients.',
    learnings: ['Optocoupler isolation', 'DC step-down design', 'Inductive spike mitigation'],
  },
  {
    step: 7,
    title: 'R&D: Unattended Smart QR Vending',
    category: 'Integration',
    company: 'Symbian Vending Solutions',
    period: '2021 - 2022',
    description: 'Product integration lead orchestrating multi-subsystem communication: QR payment portal $\\to$ Raspberry Pi gateway $\\to$ Industrial PLC $\\to$ Drop sensor.',
    learnings: ['PLC & Raspberry Pi integration', 'UART/TCP daemon protocols', 'Unattended dispensing logic'],
  },
  {
    step: 8,
    title: 'Frontend Web Development',
    category: 'Web Software',
    company: 'Altius Infoway',
    period: '2022',
    description: 'Pivoted to software engineering at Altius Infoway, transforming complex Figma wireframes into responsive, cross-browser web interfaces.',
    learnings: ['Figma-to-HTML conversion', 'Responsive layouts', 'Modern JavaScript (ES6+)'],
  },
  {
    step: 9,
    title: 'Backend Architecture & MySQL Schemas',
    category: 'Backend',
    company: 'Altius Infoway',
    period: '2022 - 2023',
    description: 'Architected relational MySQL databases, built robust PHP backend services, and structured RESTful APIs for heavy data processing.',
    learnings: ['Relational schema design', 'Indexed query tuning', 'RESTful API contracts'],
  },
  {
    step: 10,
    title: 'Full-Stack Platforms & Admin ERPs',
    category: 'Full-Stack',
    company: 'Altius Infoway',
    period: '2023 - Present',
    description: 'Delivered custom ERP/CRM administrative systems, e-commerce engines, and dynamic web portals across 100+ live client installations.',
    learnings: ['Laravel MVC framework', 'RBAC security models', 'High-volume production deployments'],
  },
  {
    step: 11,
    title: 'Personal Embedded & Robotics: KOTL',
    category: 'Robotics',
    company: 'Personal Embedded Project',
    period: 'Ongoing',
    description: 'Initiated KOTL—The Smart Emotional Assistant Robot—experimenting with ESP32 SoC, OLED facial animations, I2S digital audio, and sensor arrays.',
    learnings: ['ESP32 peripheral programming', 'I2S digital audio pipelines', 'OLED frame-buffer rendering'],
  },
];

export function Journey() {
  return (
    <section id="journey" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
            Career Evolution
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Engineering Journey (11 Milestones)
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            From factory-floor mechanical assembly and PCB hardware prototyping to delivering 100+ full-stack web platforms and embedded robotics.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {JOURNEY_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-slate-50/70 dark:bg-slate-800/70 rounded-xl p-5 border border-slate-200 dark:border-slate-700/80 hover:border-blue-400 dark:hover:border-blue-500 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                    {item.step}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-2">
                  {item.company} • {item.period}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                {item.learnings.map((l, lIdx) => (
                  <span
                    key={lIdx}
                    className="px-2 py-0.5 text-[10px] font-medium rounded bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
