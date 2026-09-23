interface CuratedWebsite {
  id: string;
  name: string;
  industry: string;
  role: string;
  technology: string[];
  features: string[];
  liveUrl?: string;
  imagePlaceholder?: string;
}

const CURATED_WEBSITES: CuratedWebsite[] = [
  {
    id: 'diamorivo',
    name: 'Diamorivo Diamond & Jewelry Systems',
    industry: 'Luxury E-Commerce & Inventory',
    role: 'Full-Stack Developer (PHP / Laravel / Blade)',
    technology: ['Laravel', 'MySQL', 'Blade', 'REST APIs', 'JavaScript'],
    features: ['Real-time diamond catalog filtering', 'Secure quotation flow', 'Admin inventory management'],
    liveUrl: 'https://diamorivo.com/',
  },
  {
    id: 'pisa-hardware',
    name: 'Pisa Architectural Hardware',
    industry: 'Industrial & Architectural Catalog',
    role: 'Frontend & Backend Developer',
    technology: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML5'],
    features: ['Technical specification filtering', 'Multi-variant product catalogs', 'Inquiry cart workflow'],
    liveUrl: 'https://pisaindia.com/',
  },
  {
    id: 'enterprise-erp-crm',
    name: 'Enterprise ERP & Administrative Portal',
    industry: 'Enterprise Business Management',
    role: 'Full-Stack Software Engineer',
    technology: ['Laravel', 'MySQL', 'Alpine.js', 'REST APIs'],
    features: ['Role-based access control (RBAC)', 'Multi-branch inventory ledger', 'PDF invoice generation'],
    liveUrl: '#',
  },
  {
    id: 'ecommerce-retail-platform',
    name: 'Omnichannel E-Commerce Platform',
    industry: 'Consumer Goods & Retail',
    role: 'Lead Full-Stack Developer',
    technology: ['Laravel', 'Blade', 'MySQL', 'Payment Gateways'],
    features: ['Payment gateway checkout orchestration', 'Dynamic coupon validation', 'Customer order tracker'],
    liveUrl: '#',
  },
  {
    id: 'b2b-distribution-portal',
    name: 'B2B Wholesale & Ordering Portal',
    industry: 'Wholesale Manufacturing',
    role: 'Full-Stack Developer',
    technology: ['PHP 8+', 'Laravel', 'MySQL', 'DataTables'],
    features: ['Tiered wholesale pricing rules', 'Bulk order uploads', 'Automated tax calculation'],
    liveUrl: '#',
  },
  {
    id: 'corporate-brand-showcase',
    name: 'Corporate Brand Experience Platform',
    industry: 'Corporate & Industrial Manufacturing',
    role: 'Frontend & CMS Developer',
    technology: ['HTML5', 'CSS3', 'JavaScript', 'Figma to Code', 'PHP'],
    features: ['Responsive micro-animations', 'Interactive service matrix', 'Lead generation analytics'],
    liveUrl: '#',
  },
  {
    id: 'healthcare-booking-system',
    name: 'Medical Clinic Booking & Patient Portal',
    industry: 'Healthcare Services',
    role: 'Full-Stack Developer',
    technology: ['Laravel', 'MySQL', 'REST APIs', 'Tailwind CSS'],
    features: ['Doctor schedule synchronization', 'Appointment booking workflow', 'Automated SMS/email reminders'],
    liveUrl: '#',
  },
  {
    id: 'real-estate-listing-engine',
    name: 'Commercial Real Estate Discovery Engine',
    industry: 'Real Estate & Property',
    role: 'Backend & Database Architect',
    technology: ['Laravel', 'MySQL', 'Elasticsearch / Full-text', 'Blade'],
    features: ['Advanced geospatial property search', 'Lead distribution CRM', 'Virtual tour embeds'],
    liveUrl: '#',
  },
];

export function WebDevelopment() {
  const categories = [
    {
      domain: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'Figma → HTML'],
    },
    {
      domain: 'Backend',
      skills: ['PHP', 'Laravel', 'Laravel Blade'],
    },
    {
      domain: 'Database',
      skills: ['MySQL'],
    },
    {
      domain: 'Applications',
      skills: ['Dynamic Websites', 'E-commerce', 'ERP'],
    },
  ];

  return (
    <section id="web-dev" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
          Enterprise Experience
        </h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          Web &amp; Full-Stack Development
        </h3>

        {/* Short Introduction */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-4 max-w-4xl">
          At Altius Infoway, I progressed from frontend development into PHP/Laravel and full-stack development. Over 4+ years, I have worked on 100+ websites and web platforms.
        </p>

        {/* Technology Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {categories.map((cat) => (
            <div
              key={cat.domain}
              className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700"
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                {cat.domain}
              </h4>
              <ul className="space-y-1">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Curated Portfolio of 8 Selected Websites */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Curated Web Platforms (8 Selected)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Representative sample of 100+ production platforms delivered at Altius Infoway.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CURATED_WEBSITES.map((site) => (
              <div
                key={site.id}
                className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 shadow-sm flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-500 transition-colors"
              >
                <div>
                  {/* Screenshot Placeholder */}
                  <div className="aspect-16/10 w-full bg-slate-100 dark:bg-slate-700/50 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-3">
                    <span className="text-[10px] font-mono text-slate-400">
                      [ SCREENSHOT_PLACEHOLDER ]
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                    {site.industry}
                  </span>

                  <h5 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1 mb-1">
                    {site.name}
                  </h5>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                    Role: <span className="text-slate-700 dark:text-slate-300 font-medium">{site.role}</span>
                  </p>

                  {/* Features */}
                  <ul className="space-y-0.5 mb-3 text-[11px] text-slate-600 dark:text-slate-300">
                    {site.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="line-clamp-1 flex items-center gap-1.5">
                        <span className="text-slate-400">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {site.technology.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 text-[10px] rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Link */}
                {site.liveUrl && site.liveUrl !== '#' ? (
                  <a
                    href={site.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-2 border-t border-slate-100 dark:border-slate-700"
                  >
                    <span>Visit Live Website</span>
                    <span>↗</span>
                  </a>
                ) : (
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-700">
                    Client Platform / Confidential
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
