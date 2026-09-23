export function ProductDevSection() {
  const cards = [
    {
      num: '01',
      title: 'Production & Machine Testing',
      description: 'Production assembly, machine testing, functional testing, troubleshooting and production coordination.',
      details: [
        'Electro-mechanical assembly of commercial vending platforms',
        'Structured QA/QC functional verification checklists',
        'Led team to deliver 200+ units in a 10-day sprint',
      ],
    },
    {
      num: '02',
      title: 'PCB Prototyping',
      description: 'Developed/prototyped vending-machine control and interface PCB solutions.',
      details: [
        'Common Vending Machine Control Card layout & validation',
        '24V → 12V coin mechanism optocoupled isolation board',
        'Precision hand soldering, SMD component rework, and bench diagnostics',
      ],
    },
    {
      num: '03',
      title: 'Vending R&D',
      description: 'Worked with the R&D team on QR/web-based unattended vending systems and machine-level integration.',
      details: [
        'Hardware-level interface for telemetry modules',
        'Pulse, MDB, and serial communication protocol integration',
        'Dynamic QR display and unattended vend cycle coordination',
      ],
    },
    {
      num: '04',
      title: 'System Integration',
      description: 'Worked across PLC, Raspberry Pi, web and embedded development teams to integrate complete vending systems.',
      details: [
        'Bridging industrial controllers (PLC) with embedded single-board computers',
        'Serial and GPIO hardware testing across subsystems',
        'Cross-functional debugging between software and hardware engineers',
      ],
    },
  ];

  return (
    <section id="product-dev" className="py-16 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
          Industrial Background
        </h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-8">
          Product Development &amp; Electronics
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.num}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                    CARD {card.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-teal-500" />
                </div>

                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {card.title}
                </h4>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-normal">
                  {card.description}
                </p>

                <ul className="space-y-1.5 border-t border-slate-100 dark:border-slate-700/60 pt-3">
                  {card.details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2">
                      <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
