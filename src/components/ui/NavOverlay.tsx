// Minimalist HUD overlay — replaces the standard website navbar with a subtle [ LAB CONTROL ] system menu
// The primary navigation is inside the 3D scene (central monitor & physical lab objects)
import { useState } from 'react';
import { useLab, SectionId } from '../../context/LabContext';

interface NavItem {
  id: SectionId;
  label: string;
  icon: string;
}

const STATIONS: NavItem[] = [
  { id: 'home', label: 'Workstation (Home)', icon: '◈' },
  { id: 'hardware', label: 'Electronics Workbench', icon: '⬡' },
  { id: 'kotl', label: 'KOTL Robot Prototype', icon: '🤖' },
  { id: 'journey', label: 'Career Journey Wall', icon: '▶' },
  { id: 'projects', label: 'Web Platform Archive', icon: '◉' },
  { id: 'experience', label: 'Work Experience', icon: '◇' },
  { id: 'resume', label: 'Resume / CV', icon: '↓' },
  { id: 'contact', label: 'Contact Station', icon: '✉' },
];

export function NavOverlay() {
  const { state, dispatch } = useLab();
  const [open, setOpen] = useState(false);

  function navigate(id: SectionId) {
    dispatch({ type: 'NAVIGATE', section: id });
    if (['resume', 'contact', 'experience', 'journey', 'hardware', 'projects'].includes(id)) {
      dispatch({ type: 'OPEN_PANEL', panel: id });
    }
    setOpen(false);
  }

  return (
    <>
      {/* Top-left subtle lab badge */}
      <div
        style={{
          position: 'fixed',
          top: 18,
          left: 20,
          zIndex: 50,
          fontFamily: '"JetBrains Mono", monospace',
          pointerEvents: 'none',
        }}
      >
        <div style={{ color: '#38bdf8', fontSize: 11, letterSpacing: 3, fontWeight: 800 }}>
          PRATIK MANDANI
        </div>
        <div style={{ color: '#64748b', fontSize: 9, letterSpacing: 1.5, marginTop: 2 }}>
          THE ENGINEERING LAB
        </div>
      </div>

      {/* Top-right system status */}
      <div
        style={{
          position: 'fixed',
          top: 18,
          right: 20,
          zIndex: 50,
          fontFamily: '"JetBrains Mono", monospace',
          textAlign: 'right',
          pointerEvents: 'none',
        }}
      >
        <div style={{ color: '#4ade80', fontSize: 9, fontWeight: 700, letterSpacing: 1.5 }}>
          ● SYS:ONLINE
        </div>
        <div style={{ color: '#64748b', fontSize: 8, marginTop: 2, letterSpacing: 1 }}>
          {state.currentSection.toUpperCase()}_VIEW
        </div>
      </div>

      {/* Floating [ LAB CONTROL ] System Menu — Subtle & Non-Intrusive */}
      <div
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 60,
          fontFamily: '"JetBrains Mono", monospace',
        }}
      >
        {/* Expanded System Drawer */}
        {open && (
          <div
            style={{
              position: 'absolute',
              bottom: 48,
              right: 0,
              width: 250,
              background: 'rgba(5, 12, 24, 0.95)',
              border: '1px solid #0284c7',
              borderRadius: 6,
              padding: '10px',
              boxShadow: '0 0 30px rgba(0,0,0,0.8), 0 0 20px rgba(56,189,248,0.2)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div style={{ color: '#38bdf8', fontSize: 9, fontWeight: 800, letterSpacing: 1.5, marginBottom: 8, paddingBottom: 4, borderBottom: '1px solid #1e3a5f' }}>
              LAB CONTROL SYSTEM
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {STATIONS.map((station) => (
                <button
                  key={station.id}
                  onClick={() => navigate(station.id)}
                  style={{
                    background: state.currentSection === station.id ? 'rgba(56,189,248,0.15)' : 'transparent',
                    border: 'none',
                    borderRadius: 3,
                    color: state.currentSection === station.id ? '#38bdf8' : '#94a3b8',
                    padding: '6px 8px',
                    fontSize: 9.5,
                    fontFamily: 'inherit',
                    fontWeight: 600,
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (state.currentSection !== station.id) {
                      e.currentTarget.style.color = '#f8fafc';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (state.currentSection !== station.id) {
                      e.currentTarget.style.color = '#94a3b8';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <span style={{ color: '#38bdf8', fontSize: 10 }}>{station.icon}</span>
                  <span>{station.label}</span>
                </button>
              ))}
            </div>

            <div style={{ marginTop: 8, paddingTop: 6, borderTop: '1px solid #1e2e46', display: 'flex', justifyContent: 'space-between' }}>
              <a
                href="/resume/Pratik_Mandani.pdf"
                download="Pratik_Mandani_Resume.pdf"
                style={{ color: '#38bdf8', fontSize: 8.5, textDecoration: 'none', fontWeight: 700 }}
              >
                RESUME ↓
              </a>
              <a
                href="https://github.com/pratik-mandani"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#64748b', fontSize: 8.5, textDecoration: 'none' }}
              >
                GITHUB ↗
              </a>
            </div>
          </div>
        )}

        {/* Minimalist Trigger Button */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: open ? '#0284c7' : 'rgba(5, 12, 24, 0.9)',
            border: '1px solid #0284c7',
            borderRadius: 4,
            color: '#f8fafc',
            padding: '8px 14px',
            fontSize: 10,
            fontFamily: 'inherit',
            fontWeight: 800,
            letterSpacing: 1.5,
            cursor: 'pointer',
            boxShadow: '0 0 15px rgba(56,189,248,0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            backdropFilter: 'blur(6px)',
          }}
        >
          <span style={{ color: open ? '#ffffff' : '#38bdf8' }}>⬡</span>
          <span>[ LAB CONTROL {open ? '▴' : '▾'} ]</span>
        </button>
      </div>
    </>
  );
}
