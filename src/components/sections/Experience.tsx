export function Experience() {
  const experiences = [
    {
      company: 'Altius Infoway',
      role: 'Web Developer / Full-Stack Developer',
      period: '2022 - Present',
      location: 'Rajkot, Gujarat, India',
      summary: 'Developing production web platforms, custom ERPs, and dynamic e-commerce architectures using PHP, Laravel, and MySQL.',
      achievements: [
        'Delivered and maintained 100+ live web platforms across industrial manufacturing, ceramic exporters, and architectural brands.',
        'Engineered scalable relational MySQL database schemas, resolving N+1 bottlenecks to ensure sub-second page delivery.',
        'Built custom admin portals, role-based access control (RBAC) matrices, and automated quotation RFQ workflows.',
        'Converted complex Figma UI designs into responsive, accessible, cross-browser frontend code.',
      ],
      focus: ['Laravel', 'PHP 8+', 'MySQL', 'REST APIs', 'Blade Templating', 'Admin ERPs'],
      dotColor: '#22c55e',
    },
    {
      company: 'Symbian Vending Solutions',
      role: 'Product Development, Hardware & QA Lead',
      period: '2018 - 2022 (4 Years)',
      location: 'Rajkot, Gujarat, India',
      summary: 'Led electro-mechanical assembly, production planning, functional QA/QC diagnostics, PCB prototyping, and smart vending integration.',
      achievements: [
        'Spearheaded production team to assemble, test, calibrate, and dispatch 200+ commercial vending units within a 10-day sprint.',
        'Prototyped the Common Machine Control Card and 24V-to-12V optocoupled Coin Mechanism Interface PCB.',
        'Orchestrated multi-subsystem integration linking industrial PLCs, Raspberry Pi IoT gateways, and cloud payment web services.',
        'Conducted precision SMD soldering rework and root-cause failure analysis using digital oscilloscopes and multimeters.',
      ],
      focus: ['Hardware Testing', 'PCB Validation', 'SMD Rework', 'QA/QC Protocols', 'PLC & Raspberry Pi', 'System Integration'],
      dotColor: '#2563eb',
    },
  ];

  return (
    <section id="experience" className="py-16 bg-slate-50/70 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
            Work History
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Detailed career timeline highlighting technical leadership, production delivery, and system integration.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
              style={{
                borderLeftWidth: '4px',
                borderLeftColor: exp.dotColor,
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {exp.company}
                  </div>
                </div>

                <div className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 self-start sm:self-auto">
                  {exp.period} • {exp.location}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {exp.summary}
              </p>

              {/* Achievements list */}
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Key Achievements &amp; Responsibilities
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5">✓</span>
                      <span className="leading-normal">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Focus tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-700/60">
                {exp.focus.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Subsection */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span>🎓 Education</span>
          </h3>

          <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
                Technical Diploma
              </span>
              <h4 className="font-bold text-base text-slate-900 dark:text-white mt-0.5">
                Diploma in Electronics &amp; Communication Engineering
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                Gujarat Technological University (GTU) • Rajkot, Gujarat, India
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Foundation in digital electronics, microprocessors, circuit analysis, and embedded control principles.
              </p>
            </div>

            <div className="text-xs font-bold px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 self-start sm:self-auto">
              2015 – 2018
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
