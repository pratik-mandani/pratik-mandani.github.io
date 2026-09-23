export function ExperienceSection() {
  const experiences = [
    {
      company: 'Altius Infoway',
      role: 'Web Developer / Full-Stack Developer',
      period: '2022 – Present (4+ Years)',
      location: 'Rajkot, Gujarat, India',
      highlights: [
        'Frontend Intern & Frontend Developer',
        'PHP / Laravel MVC Backend Engineering',
        'Custom E-commerce Engine Development',
        'Enterprise ERP & Administrative Platforms',
        'Full-Stack Architecture & MySQL Optimization',
        'Contributed to 100+ Production Websites & Web Platforms',
      ],
    },
    {
      company: 'Symbian Vending Solutions',
      role: 'Product Development & Embedded Quality Engineer',
      period: '2018 – 2022 (4+ Years)',
      location: 'Rajkot, Gujarat, India',
      highlights: [
        'Electro-Mechanical Production Assembly',
        'Production Floor Team Leadership (200+ Unit Sprint)',
        'Machine Testing & Functional QA/QC Verification',
        'PCB Prototyping (Control Cards, 24V-to-12V Interfaces, SMD Rework)',
        'Vending R&D (Unattended Telemetry, QR Payments)',
        'Product & System Integration across PLCs and Embedded Controllers',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
          Career History
        </h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-8">
          Work Experience
        </h3>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {exp.company}
                </h4>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {exp.period}
                </span>
              </div>

              <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
                {exp.role} · <span className="text-slate-500 dark:text-slate-400 font-normal">{exp.location}</span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-slate-400 dark:text-slate-500">•</span>
                    <span>{item}</span>
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
