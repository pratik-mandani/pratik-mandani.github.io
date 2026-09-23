interface SkillCategory {
  label: string;
  icon: string;
  accent: string;
  level: string;
  context: string[];
  description: string;
  items: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'Languages & Core Web',
    icon: '💻',
    accent: '#2d6cdf',
    level: 'Advanced',
    context: ['Embedded & Full-Stack', 'Production-grade'],
    description: 'Programming, firmware & scripting languages',
    items: ['C', 'Embedded C', 'PHP 8+', 'JavaScript (ES6+)', 'TypeScript', 'Python (Basics)', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    label: 'Microcontrollers & Hardware',
    icon: '🎛️',
    accent: '#7c3aed',
    level: 'Expert',
    context: ['Board bring-up', 'Real-time firmware'],
    description: 'SoC & microcontroller development',
    items: ['ESP32 (Dual-Core)', 'Arduino (Uno / Nano / Mega)', 'Raspberry Pi 3/4', 'Industrial PLC', 'Atmel AVR', 'ARM Basics'],
  },
  {
    label: 'Protocols & Interfaces',
    icon: '📡',
    accent: '#0ea5e9',
    level: 'Advanced',
    context: ['Bus communication', 'Telemetry'],
    description: 'Peripherals & communication standards',
    items: ['I2C', 'SPI', 'UART / Serial', 'I2S Digital Audio', 'ADC', 'PWM', 'GPIO Interrupts', 'TCP/IP', 'REST APIs', 'MDB (Vending)'],
  },
  {
    label: 'Hardware Testing & QA/QC',
    icon: '🔬',
    accent: '#0891b2',
    level: 'Expert',
    context: ['7+ Years Industrial', 'Zero-defect focus'],
    description: 'Component diagnostics & validation',
    items: ['Digital Multimeter', 'Digital Oscilloscope', 'Variable DC Bench Supply', 'Insulation Tester', 'Burn-in Test Jigs', '50-Cycle QA Protocol', 'Continuity Tracing'],
  },
  {
    label: 'PCB Prototyping & Rework',
    icon: '⚡',
    accent: '#db2777',
    level: 'Expert',
    context: ['Precision SMD Rework', 'Factory prototypes'],
    description: 'Board design & precision soldering',
    items: ['Precision SMD Soldering', 'Hot Air Rework', 'Eagle Schematic Capture', 'Double-Sided FR4 Layout', 'Ground Plane Isolation', 'Reverse Polarity Protection', '24V to 12V DC Conversion'],
  },
  {
    label: 'Full-Stack Web & Laravel',
    icon: '🌐',
    accent: '#ea580c',
    level: 'Expert',
    context: ['100+ Live Platforms', 'Altius Infoway'],
    description: 'Production web architectures & databases',
    items: ['Laravel MVC', 'MySQL Relational Schema', 'Database Indexing & Tuning', 'RESTful API Architecture', 'Admin Portals & ERPs', 'Blade Templating', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    label: 'Industrial Automation & Vending',
    icon: '🏭',
    accent: '#4f46e5',
    level: 'Expert',
    context: ['Commercial machines', '200+ Units sprint'],
    description: 'Smart machines & automated dispensing',
    items: ['Unattended QR Vending', 'Coin Mechanism Interface', 'Bill Acceptors', 'Optical Drop Detection', 'Spiral Motor Actuation', 'Relay Drivers', 'Stage-Gate Manufacturing'],
  },
  {
    label: 'Developer Tools & Workflows',
    icon: '🛠️',
    accent: '#16a34a',
    level: 'Advanced',
    context: ['Version control', 'Figma conversion'],
    description: 'Toolchains, version control & design',
    items: ['Git & GitHub', 'VS Code', 'Arduino IDE', 'ESP-IDF', 'Postman', 'Figma-to-HTML', 'Linux / Bash CLI', 'Agile / Scrum'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-slate-50/70 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
            Technical Expertise
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills &amp; Engineering Disciplines
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Core competencies developed across 7+ years of industrial product testing, PCB prototyping, and 4+ years of full-stack software development.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
              style={{
                borderLeftWidth: '4px',
                borderLeftColor: cat.accent,
              }}
            >
              <div>
                {/* Header: Icon, Category Name, Description */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: `${cat.accent}18` }}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white leading-tight">
                      {cat.label}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Level and Context Badges */}
                <div className="flex flex-wrap items-center gap-1.5 mb-4">
                  <span
                    className="px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-full"
                    style={{
                      backgroundColor: `${cat.accent}20`,
                      color: cat.accent,
                    }}
                  >
                    {cat.level}
                  </span>
                  {cat.context.map((ctx, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-slate-100 dark:bg-slate-700/70 text-slate-600 dark:text-slate-300"
                    >
                      {ctx}
                    </span>
                  ))}
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg transition-colors"
                      style={{
                        backgroundColor: `${cat.accent}12`,
                        color: cat.accent,
                        border: `1px solid ${cat.accent}28`,
                      }}
                    >
                      {item}
                    </span>
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
