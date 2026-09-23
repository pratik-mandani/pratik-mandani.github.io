// Mobile lab layout — intentionally designed "engineering interface" for touch devices
// Premium CSS 3D perspective lab interface — NOT a fallback, feels like a dedicated mobile product
import { useState } from 'react';
import { personalInfo, journeyMilestones, projectCaseStudies, skillDomains, workExperiences } from '../../data/portfolioData';

type MobileSection = 'home' | 'journey' | 'hardware' | 'projects' | 'skills' | 'experience' | 'resume' | 'contact';

const CATEGORY_COLORS: Record<string, string> = {
  production: '#f59e0b',
  testing: '#60a5fa',
  hardware: '#22d3ee',
  rd: '#4ade80',
  web: '#818cf8',
  robotics: '#f472b6',
};

const PROJ_CAT: Record<string, string> = {
  hardware: '#22d3ee', embedded: '#f472b6', automation: '#fbbf24', web: '#818cf8',
};

function MobileNav({ active, onNav }: { active: MobileSection; onNav: (s: MobileSection) => void }) {
  const items: { id: MobileSection; label: string }[] = [
    { id: 'home', label: 'LAB' },
    { id: 'journey', label: 'JOURNEY' },
    { id: 'hardware', label: 'HW' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'experience', label: 'EXP' },
    { id: 'resume', label: 'RESUME' },
    { id: 'contact', label: 'CONTACT' },
  ];
  return (
    <div style={{ display: 'flex', overflowX: 'auto', borderBottom: '1px solid #0e3060', background: '#030912', scrollbarWidth: 'none' }}>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onNav(item.id)}
          style={{
            background: active === item.id ? 'rgba(56,189,248,0.08)' : 'transparent',
            border: 'none',
            borderBottom: active === item.id ? '2px solid #38bdf8' : '2px solid transparent',
            color: active === item.id ? '#38bdf8' : '#4a7a9b',
            padding: '10px 14px',
            fontFamily: '"Courier New", monospace',
            fontSize: 8,
            letterSpacing: 1.5,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

function HomeSection() {
  return (
    <div style={{ padding: '20px 16px' }}>
      {/* Lab header panel */}
      <div style={{
        background: '#050f1e',
        border: '1px solid #0e3060',
        borderTop: '2px solid #38bdf8',
        borderRadius: 6,
        padding: '20px 16px',
        marginBottom: 16,
        textAlign: 'center',
      }}>
        <div style={{ color: '#1e5a9a', fontSize: 9, letterSpacing: 4, marginBottom: 8 }}>
          ENGINEERING LAB — MOBILE INTERFACE
        </div>
        <div style={{ color: '#f0f9ff', fontSize: 26, fontWeight: 900, letterSpacing: '-0.5px', lineHeight: 1 }}>
          Pratik Mandani
        </div>
        <div style={{ color: '#38bdf8', fontSize: 11, fontWeight: 700, marginTop: 6, letterSpacing: 1.5, lineHeight: 1.4 }}>
          Embedded Engineer · Hardware · Full-Stack Web
        </div>
        <div style={{ color: '#4a7a9b', fontSize: 9, marginTop: 8 }}>
          Rajkot, Gujarat, India · Altius Infoway
        </div>
      </div>

      {/* Stats grid — like a system status panel */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
        {personalInfo.stats.map(({ label, value }) => (
          <div key={label} style={{
            background: '#050f1e',
            border: '1px solid #0e3060',
            borderRadius: 4,
            padding: '12px 14px',
            textAlign: 'center',
          }}>
            <div style={{ color: '#38bdf8', fontSize: 22, fontWeight: 900, letterSpacing: '-1px' }}>{value}</div>
            <div style={{ color: '#64748b', fontSize: 8, marginTop: 4, lineHeight: 1.3 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Differentiators */}
      {personalInfo.differentiators.map(({ title, description }) => (
        <div key={title} style={{
          background: '#050f1e',
          border: '1px solid #0e3060',
          borderLeft: '2px solid #38bdf8',
          borderRadius: 4,
          padding: '10px 14px',
          marginBottom: 8,
        }}>
          <div style={{ color: '#f0f9ff', fontSize: 11, fontWeight: 600, marginBottom: 4 }}>{title}</div>
          <div style={{ color: '#64748b', fontSize: 10, lineHeight: 1.5 }}>{description}</div>
        </div>
      ))}

      {/* Quick links */}
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
          style={{ flex: 1, background: 'transparent', border: '1px solid #0e3060', color: '#7dd3fc', textDecoration: 'none', padding: '8px 0', textAlign: 'center', fontSize: 9, letterSpacing: 2, fontFamily: '"Courier New", monospace', borderRadius: 2 }}>
          GITHUB ↗
        </a>
        <a href={personalInfo.resumeUrl} download style={{ flex: 1, background: 'transparent', border: '1px solid #38bdf8', color: '#38bdf8', textDecoration: 'none', padding: '8px 0', textAlign: 'center', fontSize: 9, letterSpacing: 2, fontFamily: '"Courier New", monospace', borderRadius: 2 }}>
          RESUME ↓
        </a>
      </div>
    </div>
  );
}

function JourneySection() {
  return (
    <div style={{ padding: '16px' }}>
      <div style={{ color: '#4a7a9b', fontSize: 10, letterSpacing: 2, marginBottom: 12, borderBottom: '1px solid #0e3060', paddingBottom: 8 }}>
        CAREER_TIMELINE · 11 MILESTONES
      </div>
      {journeyMilestones.map((m) => {
        const col = CATEGORY_COLORS[m.category] || '#38bdf8';
        return (
          <div key={m.id} style={{
            background: '#050f1e',
            border: `1px solid ${col}22`,
            borderLeft: `3px solid ${col}`,
            borderRadius: 4,
            padding: '12px 14px',
            marginBottom: 8,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ color: col, fontSize: 8, letterSpacing: 1.5 }}>
                {String(m.stepNumber).padStart(2, '0')} · {m.category.toUpperCase()}
              </span>
              <span style={{ color: '#4a7a9b', fontSize: 8 }}>{m.period}</span>
            </div>
            <div style={{ color: '#f0f9ff', fontSize: 12, fontWeight: 600, marginBottom: 3 }}>{m.title}</div>
            <div style={{ color: '#4a7a9b', fontSize: 9, marginBottom: 6 }}>{m.company}</div>
            <div style={{ color: '#94a3b8', fontSize: 10, lineHeight: 1.5 }}>{m.description}</div>
          </div>
        );
      })}
    </div>
  );
}

function HardwareSection() {
  const hwProjects = projectCaseStudies.filter(p => ['hardware', 'embedded', 'automation'].includes(p.category));
  return (
    <div style={{ padding: '16px' }}>
      <div style={{ color: '#22d3ee', fontSize: 9, letterSpacing: 2, marginBottom: 12, borderBottom: '1px solid #22d3ee22', paddingBottom: 8 }}>
        ELECTRONICS · PCB · EMBEDDED
      </div>
      {/* KOTL highlight */}
      <div style={{
        background: '#050f1e', border: '2px solid #22d3ee44', borderRadius: 6, padding: '14px 16px', marginBottom: 12,
      }}>
        <div style={{ color: '#22d3ee', fontSize: 9, letterSpacing: 2, marginBottom: 6 }}>⭐ PERSONAL PROJECT</div>
        <div style={{ color: '#f0f9ff', fontSize: 13, fontWeight: 700, marginBottom: 4 }}>KOTL — Smart Emotional Robot</div>
        <div style={{ color: '#64748b', fontSize: 10, lineHeight: 1.5, marginBottom: 8 }}>
          ESP32-based robot with I2S audio, OLED face animations, and sensor-driven emotional state machine.
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {['ESP32', 'I2C OLED', 'I2S Audio', 'FreeRTOS', 'Embedded C'].map(t => (
            <span key={t} style={{ background: '#22d3ee14', border: '1px solid #22d3ee30', color: '#22d3ee', fontSize: 8, padding: '2px 6px', borderRadius: 2 }}>
              {t}
            </span>
          ))}
        </div>
      </div>
      {hwProjects.filter(p => p.id !== 'kotl-emotional-robot').map((p) => {
        const col = PROJ_CAT[p.category] || '#38bdf8';
        return (
          <div key={p.id} style={{ background: '#050f1e', border: `1px solid ${col}22`, borderLeft: `2px solid ${col}`, borderRadius: 4, padding: '12px 14px', marginBottom: 8 }}>
            <div style={{ color: col, fontSize: 8, letterSpacing: 1.5, marginBottom: 4 }}>{p.category.toUpperCase()} · {p.period}</div>
            <div style={{ color: '#f0f9ff', fontSize: 12, fontWeight: 600, marginBottom: 4 }}>{p.title}</div>
            <div style={{ color: '#94a3b8', fontSize: 10, lineHeight: 1.5 }}>{p.summary}</div>
          </div>
        );
      })}
      <div style={{ marginTop: 8, padding: '8px 12px', background: '#050f1e', border: '1px solid #1e3a5f', borderRadius: 3, fontSize: 9, color: '#4a7a9b' }}>
        ℹ No proprietary PCB files or company circuit schematics are published here.
      </div>
    </div>
  );
}

function ProjectsSection() {
  const webProjects = projectCaseStudies.filter(p => p.category === 'web');
  return (
    <div style={{ padding: '16px' }}>
      <div style={{ color: '#818cf8', fontSize: 9, letterSpacing: 2, marginBottom: 12, borderBottom: '1px solid #818cf822', paddingBottom: 8 }}>
        WEB PLATFORMS · 100+ LIVE
      </div>
      {webProjects.map((p) => (
        <div key={p.id} style={{ background: '#050f1e', border: '1px solid #818cf822', borderLeft: '2px solid #818cf8', borderRadius: 4, padding: '12px 14px', marginBottom: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ color: '#818cf8', fontSize: 8, letterSpacing: 1 }}>WEB · {p.companyOrType}</span>
            <span style={{ color: '#4a7a9b', fontSize: 8 }}>{p.period}</span>
          </div>
          <div style={{ color: '#f0f9ff', fontSize: 12, fontWeight: 600, marginBottom: 4 }}>{p.title}</div>
          <div style={{ color: '#94a3b8', fontSize: 10, lineHeight: 1.5, marginBottom: 6 }}>{p.summary}</div>
          {p.isMissingDetails && (
            <div style={{ color: '#4a7a9b', fontSize: 8, fontStyle: 'italic' }}>[ Additional details to be added ]</div>
          )}
        </div>
      ))}
    </div>
  );
}

function SkillsSection() {
  return (
    <div style={{ padding: '16px' }}>
      {skillDomains.map((domain) => (
        <div key={domain.id} style={{ background: '#050f1e', border: '1px solid #0e3060', borderRadius: 4, padding: '14px 16px', marginBottom: 12 }}>
          <div style={{ color: '#38bdf8', fontSize: 11, fontWeight: 700, marginBottom: 2 }}>{domain.title}</div>
          <div style={{ color: '#4a7a9b', fontSize: 9, marginBottom: 10 }}>{domain.subtitle}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {domain.skills.map((s) => (
              <div key={s.name} style={{ borderLeft: '2px solid #0e3060', paddingLeft: 10 }}>
                <div style={{ color: '#e2e8f0', fontSize: 10, fontWeight: 600 }}>{s.name}</div>
                <div style={{ color: '#64748b', fontSize: 9, lineHeight: 1.4, marginTop: 2 }}>{s.description}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ExperienceSection() {
  return (
    <div style={{ padding: '16px' }}>
      {workExperiences.map((w) => (
        <div key={w.company} style={{ background: '#050f1e', border: '1px solid #0e3060', borderRadius: 6, padding: '16px', marginBottom: 14 }}>
          <div style={{ color: '#f0f9ff', fontSize: 14, fontWeight: 700, marginBottom: 3 }}>{w.company}</div>
          <div style={{ color: '#38bdf8', fontSize: 10, marginBottom: 2 }}>{w.role}</div>
          <div style={{ color: '#64748b', fontSize: 9, marginBottom: 8 }}>{w.period} · {w.location}</div>
          <div style={{ color: '#94a3b8', fontSize: 10, lineHeight: 1.6, marginBottom: 10 }}>{w.summary}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {w.technologies?.map(t => (
              <span key={t} style={{ background: '#0a1628', border: '1px solid #0e3060', color: '#60a5fa', fontSize: 8, padding: '2px 6px', borderRadius: 2 }}>{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ResumeSection() {
  return (
    <div style={{ padding: '20px 16px', textAlign: 'center' }}>
      <div style={{ background: '#050f1e', border: '1px solid #38bdf8', borderRadius: 6, padding: '30px 20px' }}>
        <div style={{ color: '#38bdf8', fontSize: 36, marginBottom: 12 }}>↓</div>
        <div style={{ color: '#f0f9ff', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Resume / CV</div>
        <div style={{ color: '#4a7a9b', fontSize: 11, marginBottom: 20, lineHeight: 1.6 }}>
          Download the latest resume — product development, embedded engineering, and full-stack web.
        </div>
        <a href="/resume/Pratik_Mandani.pdf" download="Pratik_Mandani_Resume.pdf"
          style={{ display: 'inline-block', background: '#38bdf8', color: '#030912', padding: '12px 28px', textDecoration: 'none', fontFamily: '"Courier New", monospace', fontSize: 11, letterSpacing: 2, borderRadius: 2, fontWeight: 700 }}>
          DOWNLOAD RESUME
        </a>
        <div style={{ marginTop: 12, color: '#1e5a9a', fontSize: 9 }}>PDF · Updated September 2026</div>
      </div>
    </div>
  );
}

function ContactSection() {
  const { linkedinIsPlaceholder } = personalInfo;
  return (
    <div style={{ padding: '16px' }}>
      <div style={{ color: '#4a7a9b', fontSize: 11, lineHeight: 1.7, marginBottom: 16 }}>
        Available for product development, embedded engineering, and full-stack web opportunities. Open to remote work.
      </div>
      {[
        { label: 'EMAIL', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#38bdf8' },
        { label: 'PHONE', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: '#4ade80' },
        { label: 'GITHUB', value: 'github.com/pratik-mandani', href: personalInfo.github, color: '#f0f9ff' },
        { label: 'LINKEDIN', value: linkedinIsPlaceholder ? '[ Placeholder — to be configured ]' : personalInfo.linkedin, href: linkedinIsPlaceholder ? undefined : personalInfo.linkedin, color: linkedinIsPlaceholder ? '#64748b' : '#60a5fa' },
      ].map(({ label, value, href, color }) => (
        <div key={label} style={{ background: '#050f1e', border: '1px solid #0e3060', borderRadius: 4, padding: '12px 16px', marginBottom: 8 }}>
          <div style={{ color: '#4a7a9b', fontSize: 8, letterSpacing: 2, marginBottom: 4 }}>{label}</div>
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" style={{ color, fontSize: 12, textDecoration: 'none', fontWeight: 600 }}>{value}</a>
          ) : (
            <div style={{ color, fontSize: 12 }}>{value}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export function MobileLabLayout() {
  const [section, setSection] = useState<MobileSection>('home');

  function renderSection() {
    switch (section) {
      case 'home': return <HomeSection />;
      case 'journey': return <JourneySection />;
      case 'hardware': return <HardwareSection />;
      case 'projects': return <ProjectsSection />;
      case 'skills': return <SkillsSection />;
      case 'experience': return <ExperienceSection />;
      case 'resume': return <ResumeSection />;
      case 'contact': return <ContactSection />;
    }
  }

  return (
    <div style={{
      minHeight: '100dvh',
      background: '#020610',
      backgroundImage: `linear-gradient(rgba(14,48,96,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,48,96,0.1) 1px, transparent 1px)`,
      backgroundSize: '32px 32px',
      fontFamily: '"Courier New", monospace',
      color: '#7dd3fc',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Top header */}
      <div style={{ padding: '12px 16px', borderBottom: '1px solid #0e3060', background: 'rgba(3,9,18,0.95)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
        <div>
          <div style={{ color: '#38bdf8', fontSize: 10, fontWeight: 700, letterSpacing: 2 }}>ENGINEERING LAB</div>
          <div style={{ color: '#1e5a9a', fontSize: 8, letterSpacing: 1 }}>PRATIK MANDANI</div>
        </div>
        <div style={{ color: '#4ade80', fontSize: 8, letterSpacing: 1 }}>● ONLINE</div>
      </div>

      {/* Navigation tabs */}
      <MobileNav active={section} onNav={setSection} />

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {renderSection()}
      </div>

      {/* Footer */}
      <div style={{ padding: '10px 16px', borderTop: '1px solid #0e3060', background: 'rgba(3,9,18,0.95)', fontSize: 8, color: '#1e5a9a', textAlign: 'center', flexShrink: 0 }}>
        ENGINEERING LAB · PRATIK MANDANI · RAJKOT, GUJARAT, INDIA
      </div>
    </div>
  );
}
