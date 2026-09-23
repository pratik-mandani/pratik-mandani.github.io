export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Product & Electronics',
      skills: [
        'Product Development',
        'PCB Prototyping',
        'Hardware Troubleshooting',
        'Machine Testing',
        'System Integration',
        'Electronics',
      ],
    },
    {
      title: 'Embedded',
      skills: [
        'C/C++',
        'ESP32',
        'Arduino',
        'GPIO',
        'ADC',
        'I2C',
        'SPI',
        'UART',
        'I2S',
        'Sensors',
        'Embedded Firmware',
      ],
    },
    {
      title: 'Web / Full-Stack',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'PHP',
        'Laravel',
        'Laravel Blade',
        'MySQL',
        'E-commerce',
        'ERP',
        'Figma → HTML',
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
          Technical Capabilities
        </h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-8">
          Core Engineering Skills
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-700 mb-4">
                {cat.title}
              </h4>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2"
                  >
                    <span className="text-blue-500 font-bold">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
