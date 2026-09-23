// Always-visible navigation overlay — persistent HUD on top of 3D scene
import { useState } from 'react';
import { useLab, SectionId } from '../../context/LabContext';

interface NavItem {
  id: SectionId;
  label: string;
  shortcut?: string;
}

const NAV: NavItem[] = [
  { id: 'home', label: 'Lab Home' },
  { id: 'journey', label: 'Journey' },
  { id: 'hardware', label: 'Hardware' },
  { id: 'kotl', label: 'KOTL' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export function NavOverlay() {
  const { state, dispatch } = useLab();
  const [expanded, setExpanded] = useState(false);

  function navigate(id: SectionId) {
    dispatch({ type: 'NAVIGATE', section: id });
    if (['resume', 'contact', 'experience', 'journey', 'hardware', 'projects'].includes(id)) {
      dispatch({ type: 'OPEN_PANEL', panel: id });
    }
    setExpanded(false);
  }

  return (
    <>
      {/* Top-left lab badge */}
      <div
        style={{
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 50,
          fontFamily: '"Courier New", monospace',
          pointerEvents: 'none',
        }}
      >
        <div style={{ color: '#38bdf8', fontSize: 10, letterSpacing: 3, fontWeight: 700 }}>
          ENGINEERING LAB
        </div>
        <div style={{ color: '#1e5a9a', fontSize: 8, letterSpacing: 2 }}>
          PRATIK MANDANI
        </div>
      </div>

      {/* Top-right system status */}
      <div
        style={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 50,
          fontFamily: '"Courier New", monospace',
          textAlign: 'right',
          pointerEvents: 'none',
        }}
      >
        <div style={{ color: '#4ade80', fontSize: 8, letterSpacing: 2 }}>● SYS:ONLINE</div>
        <div style={{ color: '#1e5a9a', fontSize: 7, marginTop: 2 }}>
          {state.currentSection.toUpperCase()}_VIEW
        </div>
      </div>

      {/* Bottom navigation bar */}
      <nav
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: 'rgba(3, 9, 18, 0.92)',
          borderTop: '1px solid #0e3060',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
          padding: '0 16px',
          height: 44,
        }}
      >
        {NAV.map((item, i) => (
          <button
            key={item.id}
            onClick={() => navigate(item.id)}
            style={{
              background: state.currentSection === item.id ? 'rgba(56,189,248,0.08)' : 'transparent',
              border: 'none',
              borderTop: state.currentSection === item.id ? '2px solid #38bdf8' : '2px solid transparent',
              color: state.currentSection === item.id ? '#38bdf8' : '#4a7a9b',
              padding: '0 14px',
              height: '100%',
              cursor: 'pointer',
              fontFamily: '"Courier New", monospace',
              fontSize: 9,
              letterSpacing: '1.5px',
              fontWeight: state.currentSection === item.id ? 700 : 400,
              transition: 'all 0.15s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              if (state.currentSection !== item.id) {
                (e.currentTarget as HTMLButtonElement).style.color = '#7dd3fc';
              }
            }}
            onMouseLeave={e => {
              if (state.currentSection !== item.id) {
                (e.currentTarget as HTMLButtonElement).style.color = '#4a7a9b';
              }
            }}
          >
            {item.label.toUpperCase()}
          </button>
        ))}

        {/* Separator */}
        <div style={{ width: 1, height: 20, background: '#0e3060', margin: '0 12px' }} />

        {/* GitHub link */}
        <a
          href="https://github.com/pratik-mandani"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#4a7a9b',
            textDecoration: 'none',
            fontFamily: '"Courier New", monospace',
            fontSize: 9,
            letterSpacing: '1.5px',
            padding: '0 10px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          GITHUB ↗
        </a>
      </nav>

      {/* Section indicator — top center */}
      {state.introComplete && (
        <div
          style={{
            position: 'fixed',
            top: 14,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 50,
            fontFamily: '"Courier New", monospace',
            fontSize: 9,
            color: '#1e5a9a',
            letterSpacing: 3,
            pointerEvents: 'none',
          }}
        >
          {state.currentSection === 'home' ? 'LOOKING AT WORKSTATION' :
           state.currentSection === 'journey' ? 'CAREER TIMELINE WALL' :
           state.currentSection === 'hardware' ? 'ELECTRONICS WORKBENCH' :
           state.currentSection === 'kotl' ? 'KOTL ROBOT — EMBEDDED PROJECT' :
           state.currentSection === 'projects' ? 'PROJECT ARCHIVE PANEL' :
           state.currentSection === 'experience' ? 'WORK EXPERIENCE' :
           state.currentSection === 'resume' ? 'RESUME & DOWNLOAD' :
           'CONTACT STATION'}
        </div>
      )}
    </>
  );
}
