// Section panels — slide-in content panels for each lab section
import { useLab, SectionId } from '../../context/LabContext';
import { personalInfo, journeyMilestones, workExperiences, educationList, skillDomains } from '../../data/portfolioData';

const CATEGORY_COLORS: Record<string, string> = {
  production: '#f59e0b',
  testing: '#60a5fa',
  hardware: '#22d3ee',
  rd: '#4ade80',
  web: '#818cf8',
  robotics: '#f472b6',
};

// ─── Journey Panel ────────────────────────────────────────────────────────────
function JourneyPanel() {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ color: '#94a3b8', fontSize: 12, lineHeight: 1.7 }}>
          An engineering journey spanning <strong style={{ color: '#38bdf8' }}>7+ years</strong> across product development,
          industrial QA, embedded firmware, and full-stack web development.
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {journeyMilestones.map((m) => {
          const col = CATEGORY_COLORS[m.category] || '#38bdf8';
          return (
            <div key={m.id} style={{
              background: '#050f1e',
              border: `1px solid ${col}22`,
              borderLeft: `3px solid ${col}`,
              borderRadius: 4,
              padding: '12px 16px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <div style={{ color: col, fontSize: 9, letterSpacing: 2, fontWeight: 700 }}>
                  {String(m.stepNumber).padStart(2, '0')} · {m.category.toUpperCase()}
                </div>
                <div style={{ color: '#4a7a9b', fontSize: 9 }}>{m.period}</div>
              </div>
              <div style={{ color: '#f0f9ff', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{m.title}</div>
              <div style={{ color: '#4a7a9b', fontSize: 10, marginBottom: 6 }}>{m.company}</div>
              <div style={{ color: '#94a3b8', fontSize: 11, lineHeight: 1.5 }}>{m.description}</div>
              {m.keyLearnings && (
                <div style={{ marginTop: 8, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {m.keyLearnings.map((k, i) => (
                    <span key={i} style={{ background: col + '14', border: `1px solid ${col}30`, color: col, fontSize: 8, padding: '2px 8px', borderRadius: 2 }}>
                      {k}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Hardware Panel ───────────────────────────────────────────────────────────
function HardwarePanel() {
  return (
    <div>
      <div style={{ color: '#94a3b8', fontSize: 12, lineHeight: 1.7, marginBottom: 16 }}>
        Hands-on background in industrial hardware — PCB prototyping, SMD rework, QA/QC testing, and embedded system integration.
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
        {[
          { label: 'PCB Prototyping', icon: '⬡', desc: 'Common control card, coin isolation PCB, FR4 boards' },
          { label: 'SMD Rework', icon: '◈', desc: 'Precision hand soldering, 0805/0603 component replacement' },
          { label: 'Instruments', icon: '◉', desc: 'Multimeters, oscilloscopes, bench power supplies' },
          { label: 'QA/QC', icon: '◇', desc: 'Stage-gate testing, 200+ units validated, burn-in protocols' },
          { label: 'Diagnostics', icon: '▶', desc: 'Circuit tracing, voltage analysis, fault root-cause' },
          { label: 'Industrial PLC', icon: '▦', desc: 'Integration coordination for Mitsubishi/Siemens PLC systems' },
        ].map(({ label, icon, desc }) => (
          <div key={label} style={{ background: '#050f1e', border: '1px solid #22d3ee22', borderRadius: 4, padding: '12px 14px' }}>
            <div style={{ color: '#22d3ee', fontSize: 16, marginBottom: 6 }}>{icon}</div>
            <div style={{ color: '#f0f9ff', fontSize: 12, fontWeight: 600, marginBottom: 4 }}>{label}</div>
            <div style={{ color: '#64748b', fontSize: 10, lineHeight: 1.4 }}>{desc}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: '10px 14px', background: '#050f1e', border: '1px solid #1e3a5f', borderRadius: 3, fontSize: 10, color: '#4a7a9b', lineHeight: 1.5 }}>
        ℹ Hardware project details are published at a high level only. No proprietary PCB files or circuit schematics are disclosed.
      </div>
    </div>
  );
}

// ─── Experience Panel ─────────────────────────────────────────────────────────
function ExperiencePanel() {
  return (
    <div>
      {workExperiences.map((w) => (
        <div key={w.company} style={{ marginBottom: 24, background: '#050f1e', border: '1px solid #0e3060', borderRadius: 4, padding: '16px 18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
            <div>
              <div style={{ color: '#f0f9ff', fontSize: 15, fontWeight: 700 }}>{w.company}</div>
              <div style={{ color: '#38bdf8', fontSize: 11, marginTop: 2 }}>{w.role}</div>
              <div style={{ color: '#4a7a9b', fontSize: 9, marginTop: 2 }}>{w.location}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#4ade80', fontSize: 9 }}>{w.type}</div>
              <div style={{ color: '#64748b', fontSize: 9, marginTop: 2 }}>{w.period}</div>
            </div>
          </div>
          {w.progression && (
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
              {w.progression.map((p, i) => (
                <span key={i} style={{ background: '#0a1628', border: '1px solid #1e3a5f', color: '#4a7a9b', fontSize: 8, padding: '2px 8px', borderRadius: 2 }}>
                  {p}
                </span>
              ))}
            </div>
          )}
          <div style={{ color: '#94a3b8', fontSize: 11, lineHeight: 1.6, marginBottom: 10 }}>{w.summary}</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {w.technologies?.map((t) => (
              <span key={t} style={{ background: '#0a1628', border: '1px solid #0e3060', color: '#60a5fa', fontSize: 8, padding: '2px 8px', borderRadius: 2 }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
      {/* Education */}
      <div style={{ marginTop: 4 }}>
        <div style={{ color: '#818cf8', fontSize: 9, letterSpacing: 2, marginBottom: 10 }}>EDUCATION</div>
        {educationList.map((e) => (
          <div key={e.institution} style={{ background: '#050f1e', border: '1px solid #818cf822', borderRadius: 4, padding: '14px 16px' }}>
            <div style={{ color: '#f0f9ff', fontSize: 13, fontWeight: 600 }}>{e.degree}</div>
            <div style={{ color: '#818cf8', fontSize: 11, marginTop: 3 }}>{e.institution}</div>
            <div style={{ color: '#4a7a9b', fontSize: 9, marginTop: 2 }}>{e.year} · {e.location}</div>
            <div style={{ color: '#94a3b8', fontSize: 10, marginTop: 8, lineHeight: 1.5 }}>{e.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Resume Panel ─────────────────────────────────────────────────────────────
function ResumePanel() {
  return (
    <div style={{ textAlign: 'center', padding: '20px 0' }}>
      <div style={{ fontSize: 48, marginBottom: 16, color: '#38bdf8' }}>↓</div>
      <div style={{ color: '#f0f9ff', fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Resume / CV</div>
      <div style={{ color: '#4a7a9b', fontSize: 12, marginBottom: 24, lineHeight: 1.6 }}>
        Download Pratik Mandani's latest resume covering product development,<br />
        embedded engineering, and 4+ years of full-stack web development.
      </div>
      <a
        href="/resume/Pratik_Mandani.pdf"
        download="Pratik_Mandani_Resume.pdf"
        style={{
          display: 'inline-block',
          background: 'transparent',
          border: '1px solid #38bdf8',
          color: '#38bdf8',
          padding: '12px 36px',
          textDecoration: 'none',
          fontFamily: '"Courier New", monospace',
          fontSize: 12,
          letterSpacing: 3,
          borderRadius: 2,
          fontWeight: 700,
        }}
      >
        [ DOWNLOAD RESUME ]
      </a>
      <div style={{ marginTop: 14, color: '#1e5a9a', fontSize: 9 }}>
        PDF · Updated September 2026
      </div>
    </div>
  );
}

// ─── Contact Panel ────────────────────────────────────────────────────────────
function ContactPanel() {
  const { linkedinIsPlaceholder } = personalInfo;
  return (
    <div>
      <div style={{ color: '#94a3b8', fontSize: 12, lineHeight: 1.7, marginBottom: 20 }}>
        Available for product development, embedded engineering, and full-stack web development opportunities.
        Rajkot, Gujarat, India. Open to remote collaboration.
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          { label: 'EMAIL', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#38bdf8' },
          { label: 'PHONE', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: '#4ade80' },
          { label: 'GITHUB', value: 'github.com/pratik-mandani', href: personalInfo.github, color: '#f0f9ff' },
          {
            label: 'LINKEDIN',
            value: linkedinIsPlaceholder ? '[ Placeholder — URL to be configured ]' : personalInfo.linkedin,
            href: linkedinIsPlaceholder ? undefined : personalInfo.linkedin,
            color: linkedinIsPlaceholder ? '#64748b' : '#60a5fa',
            note: linkedinIsPlaceholder ? 'LinkedIn URL not yet set.' : undefined,
          },
        ].map(({ label, value, href, color, note }) => (
          <div key={label} style={{ background: '#050f1e', border: '1px solid #0e3060', borderRadius: 4, padding: '12px 16px' }}>
            <div style={{ color: '#4a7a9b', fontSize: 9, letterSpacing: 2, marginBottom: 4 }}>{label}</div>
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer" style={{ color, fontSize: 12, textDecoration: 'none', fontWeight: 600 }}>
                {value}
              </a>
            ) : (
              <div style={{ color, fontSize: 12 }}>{value}</div>
            )}
            {note && <div style={{ color: '#4a7a9b', fontSize: 9, marginTop: 3, fontStyle: 'italic' }}>{note}</div>}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, padding: '10px 14px', background: '#050f1e', border: '1px solid #1e3a5f', borderRadius: 3, fontSize: 10, color: '#4a7a9b', lineHeight: 1.5 }}>
        📍 Rajkot, Gujarat, India · Open to remote work & relocation
      </div>
    </div>
  );
}

// ─── Master Section Panel ─────────────────────────────────────────────────────
const PANEL_CONFIG: Record<string, { title: string; color: string; icon: string }> = {
  journey: { title: 'CAREER JOURNEY', color: '#38bdf8', icon: '▶' },
  hardware: { title: 'HARDWARE & ELECTRONICS', color: '#22d3ee', icon: '⬡' },
  projects: { title: 'WEB PROJECT ARCHIVE', color: '#818cf8', icon: '◉' },
  experience: { title: 'WORK EXPERIENCE & EDUCATION', color: '#818cf8', icon: '◇' },
  resume: { title: 'RESUME DOWNLOAD', color: '#38bdf8', icon: '↓' },
  contact: { title: 'CONTACT STATION', color: '#4ade80', icon: '✉' },
};

export function SectionPanel() {
  const { state, dispatch } = useLab();
  const panel = state.openPanel;
  if (!panel || !PANEL_CONFIG[panel]) return null;

  const { title, color, icon } = PANEL_CONFIG[panel];

  function handleClose() {
    dispatch({ type: 'CLOSE_PANEL' });
  }

  function renderContent() {
    switch (panel) {
      case 'journey': return <JourneyPanel />;
      case 'hardware': return <HardwarePanel />;
      case 'experience': return <ExperiencePanel />;
      case 'resume': return <ResumePanel />;
      case 'contact': return <ContactPanel />;
      default: return <div style={{ color: '#4a7a9b' }}>Navigate to a section using the lab monitors or bottom nav.</div>;
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 44, // above nav bar
        width: 'min(520px, 90vw)',
        zIndex: 60,
        background: 'rgba(3, 9, 18, 0.97)',
        borderLeft: `1px solid ${color}33`,
        borderTop: `2px solid ${color}`,
        fontFamily: '"Courier New", Courier, monospace',
        color: '#7dd3fc',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: `-20px 0 60px rgba(0,0,0,0.7)`,
        backdropFilter: 'blur(4px)',
      }}
    >
      {/* Panel header */}
      <div style={{
        padding: '16px 20px',
        borderBottom: `1px solid ${color}22`,
        background: '#050f1e',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexShrink: 0,
      }}>
        <div>
          <div style={{ color, fontSize: 10, letterSpacing: 3, fontWeight: 700 }}>
            {icon} {title}
          </div>
        </div>
        <button
          onClick={handleClose}
          style={{
            background: 'none',
            border: '1px solid #0e3060',
            color: '#4a7a9b',
            cursor: 'pointer',
            fontFamily: '"Courier New", monospace',
            fontSize: 10,
            padding: '5px 10px',
            borderRadius: 2,
          }}
        >
          ✕ CLOSE
        </button>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px' }}>
        {renderContent()}
      </div>
    </div>
  );
}
