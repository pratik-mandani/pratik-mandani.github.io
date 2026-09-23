import React from 'react';
import {
  ArrowDown,
  Layers,
  FileText,
  MapPin,
  Briefcase,
  Compass,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern bg-circuit-glow">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full text-center">
        {/* Engineering status tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-300 shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="text-amber-400 font-semibold">// PRODUCT DEV &bull; EMBEDDED &bull; FULL-STACK</span>
          <span className="text-slate-500">|</span>
          <span className="flex items-center gap-1 text-slate-400">
            <MapPin className="w-3 h-3 text-slate-400" />
            {personalInfo.location}
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          From Product Development to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-cyan-400">
            Full-Stack Engineering
          </span>
        </h1>

        {/* Subtitle / Positioning */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed mb-8">
          Bridging electro-mechanical product engineering, PCB validation, and embedded firmware with{' '}
          <span className="text-white font-semibold">4+ years of scalable full-stack web software engineering</span>{' '}
          (PHP, Laravel, MySQL, REST APIs) across 100+ production platforms.
        </p>

        {/* Current status pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-300 mb-10">
          <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-slate-400">Currently:</span>
          <span className="text-white font-medium">{personalInfo.currentRole}</span>
          <span className="text-slate-500">@</span>
          <span className="text-cyan-400 font-medium">{personalInfo.company}</span>
        </div>

        {/* Verified Technical Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-all text-left group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-400 mb-1 group-hover:text-amber-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto mb-12">
          {/* View My Journey */}
          <a
            href="#journey"
            className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-mono font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-500/10 hover:shadow-amber-500/20"
          >
            <Compass className="w-4 h-4" />
            <span>View My Journey</span>
          </a>

          {/* Explore Projects */}
          <a
            href="#projects"
            className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-mono font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Explore Projects</span>
          </a>

          {/* Download Resume */}
          <a
            href={personalInfo.resumeUrl}
            download="Pratik_Mandani_Resume.pdf"
            className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-mono font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          {/* GitHub Profile */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-mono text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4 text-slate-100" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn Placeholder */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-mono text-slate-400 bg-slate-900/60 hover:bg-slate-800/80 border border-dashed border-slate-700 transition-all"
            title="LinkedIn (Configurable placeholder)"
          >
            <LinkedinIcon className="w-4 h-4 text-cyan-500/70" />
            <span>LinkedIn</span>
            <span className="text-[10px] text-amber-400/90 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
              Placeholder
            </span>
          </a>
        </div>

        {/* Scroll indicator cue */}
        <div className="flex flex-col items-center gap-2 text-slate-500 text-xs font-mono">
          <span>DISCOVER THE ARCHITECTURE</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-slate-400" />
        </div>
      </div>
    </section>
  );
};
