interface WebProject {
  icon: string;
  name: string;
  client: string;
  period: string;
  description: string;
  challenge: string;
  architecture: string;
  outcome: string;
  role: string;
  tags: string[];
}

const WEB_PROJECTS: WebProject[] = [
  {
    icon: '🏭',
    name: 'Diamorivo Systems — Industrial Equipment Platform',
    client: 'Diamorivo Systems',
    period: '2023 - 2024',
    description: 'Enterprise web platform and dynamic management architecture engineered for showcasing heavy industrial machinery.',
    challenge: 'Needed a scalable, high-speed digital catalog capable of organizing heavy technical specifications, certification documents, and client inquiries without database bottlenecks.',
    architecture: 'Normalized MySQL database schemas, developed backend business logic using PHP/Laravel, and engineered a responsive, high-fidelity front-end.',
    outcome: 'Sub-second page load times across extensive equipment catalogs and streamlined business inquiry pipeline for the sales team.',
    role: 'Logic & Web Systems Engineer',
    tags: ['PHP 8', 'Laravel', 'MySQL Relational Schema', 'Admin Portal', 'Lead Management'],
  },
  {
    icon: '🚪',
    name: 'Pisa Hardware — Architectural Hardware Catalog',
    client: 'Pisa Hardware',
    period: '2023',
    description: 'Dynamic catalog platform and product discovery system for architectural and industrial hardware fixtures.',
    challenge: 'Complex product variants with dozens of material finishes, dimensional configurations, and technical PDF brochures required seamless filtering.',
    architecture: 'Constructed an intuitive multi-parameter filter engine, optimized image delivery, and built an administrative CMS for effortless inventory updates.',
    outcome: 'Significantly improved user discovery across hundreds of hardware SKU variants; Figma design converted with 100% visual fidelity.',
    role: 'Full-Stack Web Developer',
    tags: ['Laravel Framework', 'JavaScript Filter Engine', 'MySQL', 'Figma-to-HTML'],
  },
  {
    icon: '⚡',
    name: 'Akash Electric Company — Heavy Electrical Equipment',
    client: 'Akash Electric Company',
    period: '2023',
    description: 'Industrial electrical equipment platform engineered for showcasing transformers, panels, and heavy electrical components.',
    challenge: 'Industrial customers required precise electrical specification sheets, dimensional blueprints, and swift quotation request routing.',
    architecture: 'Architected structured database tables for electrical parameters (kVA ratings, voltage classes, phase types) and developed custom quotation cart logic.',
    outcome: 'Structured technical browsing for industrial procurement engineers; automated inquiry notifications dispatched instantly to sales managers.',
    role: 'Logic & Web Systems Engineer',
    tags: ['PHP & Laravel', 'RFQ Pipeline', 'MySQL Database', 'Responsive UI'],
  },
  {
    icon: '🏛️',
    name: 'Lakme Vitrified — Ceramic Surface Digital Showroom',
    client: 'Lakme Vitrified',
    period: '2024',
    description: 'A visual-first digital showroom and management platform highlighting large-format ceramic surfaces and export catalogs.',
    challenge: 'High-resolution tile imagery caused heavy page weight and slow initial render times, harming international distributor engagement.',
    architecture: 'Engineered an image lazy-loading and responsive srcset pipeline, paired with dynamic collection filtering by finish, size, and application.',
    outcome: 'High-performance tile gallery loading smoothly even on modest mobile networks; seamless multi-lingual export brochure downloads.',
    role: 'Full-Stack Web Developer',
    tags: ['Laravel MVC', 'Responsive Image Pipeline', 'MySQL Product Collections', 'Export Catalog'],
  },
  {
    icon: '📊',
    name: 'Custom Industrial ERP & Inventory Platform',
    client: 'Altius Infoway Enterprise Client',
    period: '2024',
    description: 'Customized enterprise resource planning platform engineered for manufacturing inventory and order lifecycle tracking.',
    challenge: 'Eliminating manual spreadsheets and synchronizing real-time warehouse stock, purchase orders, and shipment tracking.',
    architecture: 'Role-based access control (RBAC), multi-warehouse stock auditing, automated PDF invoice/dispatch generation, and relational audit logging.',
    outcome: 'Streamlined inventory turnover visibility and completely automated stage-gate order fulfillment.',
    role: 'Logic & Web Systems Engineer',
    tags: ['Laravel Backend', 'RBAC Security', 'MySQL Transactions', 'REST APIs'],
  },
  {
    icon: '🛍️',
    name: 'Direct-to-Consumer E-Commerce & Payment Engine',
    client: 'Retail Brand',
    period: '2023',
    description: 'Full-featured direct-to-consumer e-commerce portal with integrated payment gateway and automated order fulfillment.',
    challenge: 'Building a frictionless shopping cart and instant checkout flow with automated payment reconciliation webhooks.',
    architecture: 'Modular cart session store, integrated payment gateway API webhooks, automated stock deduction, and customer SMS/email notifications.',
    outcome: 'Reliable customer checkout with 100% verified payment webhook reconciliation and zero dropped transaction states.',
    role: 'Full-Stack Developer',
    tags: ['Payment Gateways', 'Laravel MVC', 'MySQL Optimization', 'E-Commerce'],
  },
];

export function WebPlatforms() {
  return (
    <section id="web-platforms" className="py-16 bg-slate-50/70 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
            Software Engineering at Altius Infoway
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Web Platforms &amp; Enterprise Systems
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            4+ years building 100+ production platforms across industrial manufacturing, ceramic exporters, and architectural brands using PHP, Laravel, and MySQL.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WEB_PROJECTS.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl p-2 rounded-xl bg-blue-50 dark:bg-slate-700/60 border border-blue-100 dark:border-slate-600 flex-shrink-0">
                    {proj.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
                      {proj.client} • {proj.period}
                    </span>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white leading-tight mt-0.5">
                      {proj.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {proj.description}
                </p>

                {/* Case Study Details */}
                <div className="space-y-2 mb-4 bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-700/60 text-xs">
                  <div className="case-block">
                    <span className="case-label text-amber-700 dark:text-amber-400">Challenge:</span>
                    <span>{proj.challenge}</span>
                  </div>
                  <div className="case-block">
                    <span className="case-label text-blue-700 dark:text-blue-400">Architecture:</span>
                    <span>{proj.architecture}</span>
                  </div>
                  <div className="case-block">
                    <span className="case-label text-emerald-700 dark:text-emerald-400">Outcome:</span>
                    <span>{proj.outcome}</span>
                  </div>
                  <div className="pt-1 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-slate-400">My Role:</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">{proj.role}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                <span>Altius Infoway Verified Production</span>
                <span>✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
