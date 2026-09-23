import { useEffect, useRef, useState } from 'react';

const TITLES = [
  'Embedded & Firmware Engineer',
  'Product Development Engineer',
  'Full-Stack Developer (Laravel & PHP)',
  'Industrial Automation & QA Specialist',
];

const STATS = [
  { value: '7+', label: 'Years QA & Hardware' },
  { value: '4+', label: 'Years Full-Stack' },
  { value: '100+', label: 'Live Platforms' },
  { value: '200+', label: 'Units Validated' },
];

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    const TYPING_SPEED = 100;
    const DELETING_SPEED = 50;
    const DELAY_AFTER_TYPE = 1200;
    const DELAY_AFTER_DELETE = 400;

    if (!isDeleting && charIndex < currentTitle.length) {
      timeoutRef.current = window.setTimeout(() => {
        setDisplayText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, TYPING_SPEED);
    } else if (!isDeleting && charIndex === currentTitle.length) {
      timeoutRef.current = window.setTimeout(() => setIsDeleting(true), DELAY_AFTER_TYPE);
    } else if (isDeleting && charIndex > 0) {
      timeoutRef.current = window.setTimeout(() => {
        setDisplayText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, DELETING_SPEED);
    } else if (isDeleting && charIndex === 0) {
      timeoutRef.current = window.setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((titleIndex + 1) % TITLES.length);
      }, DELAY_AFTER_DELETE);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section id="hero" className="py-12 sm:py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-start text-left">
          {/* Status Pill & Location */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300/60 dark:border-emerald-800/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Currently at Altius Infoway</span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <svg className="w-3.5 h-3.5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Rajkot, Gujarat, India</span>
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2 leading-tight">
            <span className="hero-gradient-text">Pratik Mandani</span>
          </h1>

          {/* Animated Typing Title */}
          <div className="text-lg sm:text-2xl font-bold text-blue-700 dark:text-blue-400 h-8 mb-3 flex items-center">
            <span>{displayText}</span>
            <span className="inline-block w-0.5 h-6 ml-1 bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
          </div>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3 max-w-3xl leading-snug">
            Bridging electro-mechanical product development, PCB validation, and embedded firmware with 4+ years of full-stack web software engineering.
          </p>

          {/* Chips */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="case-chip">7+ Years Industrial &amp; QA</span>
            <span className="case-chip">4+ Years Full-Stack</span>
            <span className="case-chip">100+ Live Web Platforms</span>
            <span className="case-chip">Hardware &amp; Firmware Duality</span>
          </div>

          {/* Bio Paragraph */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mb-6">
            Experienced engineer combining 7+ years of hands-on industrial product testing, QA/QC validation, and PCB prototyping with 4+ years of full-stack software development at <strong>Altius Infoway</strong>. Proven track record in component-level troubleshooting, precision SMD rework, and cross-functional integration spanning PLC, Raspberry Pi, embedded controllers (ESP32/Arduino), and enterprise Laravel architectures.
          </p>

          {/* Stats Counter Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl mb-6">
            {STATS.map((stat, idx) => (
              <div key={idx} className="hero-stat-item">
                <div className="hero-stat-value">{stat.value}</div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Quick Contact & Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href="#products"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all text-center flex items-center justify-center gap-2"
            >
              <span>View Products &amp; Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <a
              href="/resume/Pratik_Mandani.pdf"
              download="Pratik_Mandani_Resume.pdf"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700 transition-colors text-center flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Resume</span>
            </a>

            <a
              href="https://github.com/pratik-mandani"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-transparent hover:border-slate-300 dark:hover:border-slate-700 transition-colors text-center flex items-center justify-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
