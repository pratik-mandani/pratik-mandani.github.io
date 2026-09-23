import React from 'react';
import {
  Globe,
  Database,
  Layers,
  Code,
  Layout,
  Server,
  ShoppingBag,
  Cpu,
  CheckCircle2,
  FileCode,
} from 'lucide-react';

export const WebFullStack: React.FC = () => {
  const capabilities = [
    {
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      title: 'Backend Logic & Architecture',
      desc: 'Architecting robust server-side applications with PHP 8 and Laravel. Engineering MVC controllers, middleware auth pipelines, custom service providers, and REST API services.',
      tags: ['PHP 8+', 'Laravel', 'Laravel Blade', 'RESTful APIs'],
    },
    {
      icon: <Database className="w-5 h-5 text-amber-400" />,
      title: 'Database Design & Optimization',
      desc: 'Designing relational MySQL database schemas, complex relationships, indexing for high-frequency queries, and eliminating N+1 performance bottlenecks.',
      tags: ['MySQL', 'Eloquent ORM', 'Query Optimization', 'Transactions'],
    },
    {
      icon: <Layout className="w-5 h-5 text-emerald-400" />,
      title: 'Figma to Code & UI Engineering',
      desc: 'Translating complex designer Figma mockups into responsive, high-fidelity HTML5, CSS3, and JavaScript interfaces. Building completely from scratch with pixel perfection.',
      tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap / Tailwind', 'Figma to Code'],
    },
    {
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      title: 'Enterprise ERP & Administrative Platforms',
      desc: 'Developing specialized internal management tools, inventory workflows, quotation generators, and role-based administrative dashboards for industrial companies.',
      tags: ['Custom ERP', 'CRM Platforms', 'Role-Based Access', 'Data Export / Import'],
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-rose-400" />,
      title: 'E-Commerce Engineering',
      desc: 'Building scalable online storefronts featuring multi-tier product variant pricing, dynamic shopping carts, payment gateway webhooks, and automated order handling.',
      tags: ['Payment Gateways', 'Cart Logic', 'Order Workflows', 'Product Variants'],
    },
    {
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      title: 'Hardware & Web Bridge Integration',
      desc: 'Leveraging my hardware background to build web backends that talk to physical devices, receive telemetry from Raspberry Pi gateways, and process IoT events.',
      tags: ['IoT Gateways', 'Webhook Endpoints', 'Hardware Telemetry', 'QR Handshakes'],
    },
  ];

  const milestonesAtAltius = [
    { role: 'Frontend Intern', period: 'Month 1', note: 'Rapid onboarding, HTML5, CSS3, JavaScript fundamentals' },
    { role: 'Frontend Developer', period: 'Year 1', note: 'Pixel-perfect Figma-to-HTML, mobile-first responsive interfaces' },
    { role: 'Dynamic & PHP Developer', period: 'Year 2', note: 'Server-side data pipelines, MySQL connectivity, CMS development' },
    { role: 'Laravel & E-Commerce Developer', period: 'Year 3', note: 'Enterprise MVC architecture, payment gateways, complex catalogs' },
    { role: 'Full-Stack & ERP Systems Engineer', period: '4+ Years Active', note: 'End-to-end full-stack delivery across 100+ production platforms' },
  ];

  return (
    <section id="fullstack" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-[#0B0F17]/90 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>CHAPTER 03 // FULL-STACK WEB ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Web &amp; Full-Stack Development
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Over <span className="text-white font-semibold">4+ continuous years at Altius Infoway</span>, I have engineered and launched 
            <span className="text-amber-400 font-semibold"> 100+ websites</span>, custom enterprise ERP platforms, dynamic database architectures, and e-commerce portals.
          </p>
        </div>

        {/* Altius Progression Banner */}
        <div className="bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800 mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4 flex items-center justify-between">
            <span>Career Progression at Altius Infoway (4+ Years Continuous)</span>
            <span className="text-slate-400">100+ Live Production Sites</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {milestonesAtAltius.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-mono text-amber-400 font-semibold mb-1">
                    {item.period}
                  </div>
                  <div className="text-sm font-bold text-white mb-2">
                    {item.role}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Core Full-Stack Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="p-2.5 rounded-xl bg-slate-800/80 w-fit mb-4 group-hover:scale-105 transition-transform">
                  {cap.icon}
                </div>
                <h3 className="text-base font-bold text-white font-mono mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {cap.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {cap.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Web Competency Summary Box */}
        <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Capable of converting Figma designs to responsive code or architecting entire custom platforms from scratch.</span>
          </div>
          <div className="text-amber-400 font-semibold shrink-0">
            FULL-STACK + HARDWARE DIFFERENTIATION
          </div>
        </div>
      </div>
    </section>
  );
};
