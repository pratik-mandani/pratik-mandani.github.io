export function About() {
  return (
    <section id="about" className="py-16 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
          Professional Positioning
        </h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          Bridging Physical Hardware &amp; Scalable Software
        </h3>

        <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
          <p>
            My engineering identity is defined by a practical combination rarely found in a single profile: <strong>Hardware &amp; Product Development</strong> alongside <strong>Software &amp; Full-Stack Web Development</strong>.
          </p>
          <p>
            I began on the factory floor with <strong>Symbian Vending Solutions</strong>, advancing from mechanical assembly and functional machine QA/QC testing to team leadership, PCB prototyping, and R&amp;D for unattended telemetry-driven vending machines. This foundation gave me deep respect for signal integrity, component diagnostics, precision soldering, and real-world system reliability.
          </p>
          <p>
            Building upon this hands-on engineering mindset, I transitioned into professional software engineering with <strong>Altius Infoway</strong>. Over 4+ years, I have architected and deployed over 100 live web platforms, mastering frontend engineering, relational database schema design, and production Laravel/PHP enterprise systems.
          </p>
        </div>

        {/* 2-Column Core Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-1">
              Focus 01
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Hardware &amp; Product Development
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-normal">
              7+ years of industrial assembly, machine validation, component troubleshooting, PCB prototyping (Eagle), SMD rework, and cross-functional integration across PLCs and Raspberry Pi microcomputers.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              Focus 02
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Software &amp; Full-Stack Development
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-normal">
              4+ years of professional development at Altius Infoway, contributing to 100+ production platforms across PHP, Laravel MVC, MySQL architecture, custom e-commerce engines, and enterprise ERP systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
