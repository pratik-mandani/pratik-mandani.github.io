import { ProjectCaseStudy } from '../../types';

interface Props {
  onSelectProject: (project: ProjectCaseStudy) => void;
  projects: ProjectCaseStudy[];
}

interface ProductItem {
  id: string;
  icon: string;
  name: string;
  company: string;
  description: string;
  challenge: string;
  architecture: string;
  outcome: string;
  role: string;
  tags: string[];
  schematicUrl: string;
}

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'symbian-common-control-card',
    icon: '🎛️',
    name: 'Common Vending Machine Control Card',
    company: 'Symbian Vending Solutions',
    description: 'Unified control card architecture designed to standardize machine electronics across diverse vending configurations.',
    challenge: 'Each custom vending model previously required bespoke wiring looms and separate board revisions, driving up assembly lead times and troubleshooting complexity.',
    architecture: 'Standardized motherboard with modular multi-pin bus headers, wide-range DC power management, over-current protection diodes, and status LED diagnostics.',
    outcome: 'Standardized electronics across multiple machine lines, reduced factory wiring assembly time by ~30%, and simplified field replacement.',
    role: 'Hardware Prototyping & Diagnostics Lead',
    tags: ['Modular Architecture', 'PCB Prototyping', 'Power Management', 'Vending'],
    schematicUrl: '/images/pcb/control-card.svg',
  },
  {
    id: 'symbian-coin-interface-pcb',
    icon: '⚡',
    name: '24V to 12V Coin Mechanism Interface PCB',
    company: 'Symbian Vending Solutions',
    description: 'Precision interface PCB providing DC step-down power conversion, signal level translation, and optical isolation for coin validators.',
    challenge: 'The vending machine operated on a 24V DC bus, while standard precision coin mechanisms strictly required 12V DC input and sensitive pulse-train logic levels.',
    architecture: 'Intermediate PCB featuring onboard step-down regulation, high-speed optocoupler isolation channels, and transient noise suppression filters.',
    outcome: 'Zero coin mechanism blowouts from over-voltage spikes, eliminated false coin credit triggers caused by motor inductive noise.',
    role: 'Electronics & Prototyping Engineer',
    tags: ['24V to 12V DC-DC', 'Optocoupler Isolation', 'Noise Filtering', 'PCB Design'],
    schematicUrl: '/images/pcb/coin-interface.svg',
  },
  {
    id: 'symbian-unattended-vending-system',
    icon: '🌐',
    name: 'QR/Web-Based Unattended Smart Vending Machine',
    company: 'Symbian Vending Solutions',
    description: 'Unattended smart vending solution designed for airports and unmanned public spaces, combining QR interaction and automated dispensing.',
    challenge: 'High-traffic public hubs required contactless cashless payments, unattended uptime tracking, and real-time inventory synchronization without cashier intervention.',
    architecture: 'End-to-end integration: customer scans dynamic QR $\\to$ completes payment on web backend $\\to$ Raspberry Pi gateway verifies token $\\to$ PLC commands motor actuation and verifies optical drop sensor.',
    outcome: 'Delivered working unattended prototype machines for pilot testing; zero double-dispense or lost transaction states during integration stress testing.',
    role: 'Product & System Integration Lead',
    tags: ['System Integration', 'Raspberry Pi IoT', 'Industrial PLC', 'Web Portal', 'Optical Drop Sensor'],
    schematicUrl: '/images/vending/qr-system.svg',
  },
  {
    id: 'symbian-production-200-units',
    icon: '🏗️',
    name: 'Vending Machine Production & QA Validation (200+ Units Sprint)',
    company: 'Symbian Vending Solutions',
    description: 'Manufacturing line optimization, electro-mechanical assembly leadership, and comprehensive QA/QC validation to deliver 200+ commercial units in 10 days.',
    challenge: 'A critical client delivery deadline required the manufacturing, electrical wiring, calibration, burn-in testing, and dispatch verification of 200+ complete machines within 10 days.',
    architecture: 'Standardized 5-stage gate protocol: (1) Frame Assembly $\\to$ (2) Harness Routing $\\to$ (3) Electrical Diagnostics $\\to$ (4) 50-Cycle Automated Burn-in $\\to$ (5) Final QA Sign-off.',
    outcome: 'Delivered and validated all 200+ units on schedule with zero fatal field return incidents during customer commissioning.',
    role: 'Production Team Lead & Quality Engineer',
    tags: ['QA/QC Checklists', 'Production Line Lead', 'Burn-in Testing', '50-Cycle Validation'],
    schematicUrl: '/images/symbian/production-testing.svg',
  },
  {
    id: 'kotl-emotional-robot',
    icon: '🤖',
    name: 'KOTL — The Smart Emotional Assistant Robot',
    company: 'Personal Embedded Project',
    description: 'Personal embedded robotics platform built around the ESP32 microcontroller, featuring animated OLED facial expressions and I2S digital audio.',
    challenge: 'Created to achieve deep embedded firmware mastery: exploring low-level microcontroller peripherals, real-time audio DAC streaming, and sensory-driven state machines.',
    architecture: 'ESP32 dual-core 240MHz SoC, SSD1306 OLED frame-buffer graphics, MAX98357A I2S digital audio amplifier, non-blocking sensor polling routines, and emotional finite state machines.',
    outcome: 'Working embedded prototype executing responsive facial expressions and synchronized I2S sound effects without frame jitter.',
    role: 'Embedded Firmware & Hardware Prototyper',
    tags: ['ESP32', 'I2S Audio DAC', 'OLED Animation', 'Embedded C++', 'Robotics'],
    schematicUrl: '/images/kotl/kotl-robot.svg',
  },
];

export function Products({ onSelectProject, projects }: Props) {
  function handleOpenModal(item: ProductItem) {
    const found = projects.find((p) => p.id === item.id);
    if (found) {
      onSelectProject(found);
    }
  }

  return (
    <section id="products" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
            Hardware &amp; Product Engineering
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Products &amp; Engineered Systems
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Product case studies highlighting hardware design intent, system architecture, component diagnostics, and real-world outcomes.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.id}
              className="bg-slate-50/70 dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Title */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl p-2 rounded-xl bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 flex-shrink-0">
                    {product.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
                      {product.company}
                    </span>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white leading-tight mt-0.5">
                      {product.name}
                    </h3>
                  </div>
                </div>

                {/* Brief description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Case Study Details */}
                <div className="space-y-2 mb-4 bg-white dark:bg-slate-900/60 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-700/60 text-xs">
                  <div className="case-block">
                    <span className="case-label text-amber-700 dark:text-amber-400">Challenge:</span>
                    <span>{product.challenge}</span>
                  </div>
                  <div className="case-block">
                    <span className="case-label text-blue-700 dark:text-blue-400">Architecture:</span>
                    <span>{product.architecture}</span>
                  </div>
                  <div className="case-block">
                    <span className="case-label text-emerald-700 dark:text-emerald-400">Outcome:</span>
                    <span>{product.outcome}</span>
                  </div>
                  <div className="pt-1 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-slate-400">My Role:</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">{product.role}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between gap-3 text-xs">
                <button
                  onClick={() => handleOpenModal(product)}
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>View Case Study</span>
                  <span>↗</span>
                </button>

                <a
                  href={product.schematicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                >
                  Diagram / SVG ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
