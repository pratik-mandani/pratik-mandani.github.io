// Dominant Central Monitor — The Heart of the Engineering Lab
// Displays the AI Development System narrative, build progress, and station navigation
import { useState } from 'react';
import { Html } from '@react-three/drei';
import { useLab, SectionId } from '../../context/LabContext';

function MonitorDisplay() {
  const { state, dispatch } = useLab();
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  function handleNavigate(section: SectionId) {
    dispatch({ type: 'NAVIGATE', section });
    if (['journey', 'hardware', 'projects', 'resume', 'contact'].includes(section)) {
      dispatch({ type: 'OPEN_PANEL', panel: section });
    }
  }

  function handleEnterLab() {
    dispatch({ type: 'COMPLETE_INTRO' });
    dispatch({ type: 'NAVIGATE', section: 'hardware' });
    dispatch({ type: 'OPEN_PANEL', panel: 'hardware' });
  }

  return (
    <div
      style={{
        width: '640px',
        height: '370px',
        background: 'linear-gradient(180deg, #040913 0%, #02060d 100%)',
        border: '1px solid #1e3a5f',
        borderRadius: '6px',
        fontFamily: '"JetBrains Mono", "Courier New", monospace',
        color: '#e2e8f0',
        padding: '16px 22px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        userSelect: 'none',
        pointerEvents: 'auto',
        position: 'relative',
        boxShadow: 'inset 0 0 50px rgba(56,189,248,0.08)',
      }}
    >
      {/* Top Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #1e2e46', paddingBottom: '10px', marginBottom: '12px' }}>
        <div>
          <div style={{ color: '#38bdf8', fontSize: '14px', fontWeight: 800, letterSpacing: '2.5px' }}>
            PRATIK // ENGINEERING LAB
          </div>
          <div style={{ color: '#64748b', fontSize: '10px', letterSpacing: '1.5px', marginTop: '2px' }}>
            AI DEVELOPMENT SYSTEM
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', padding: '3px 8px', borderRadius: '3px' }}>
            <span style={{ width: '6px', height: '6px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 6px #22c55e' }} />
            <span style={{ color: '#4ade80', fontSize: '9px', fontWeight: 700, letterSpacing: '1px' }}>AI ACTIVE</span>
          </div>
          <div style={{ color: '#475569', fontSize: '8px', marginTop: '3px' }}>SYS_CORE: ONLINE</div>
        </div>
      </div>

      {/* Main Narrative Block */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '16px', marginBottom: '12px' }}>
        {/* Left Column: Current Project & Progress */}
        <div>
          <div style={{ color: '#94a3b8', fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase' }}>
            CURRENT PROJECT:
          </div>
          <div style={{ color: '#f8fafc', fontSize: '15px', fontWeight: 700, letterSpacing: '0.5px', marginTop: '2px', marginBottom: '10px' }}>
            PERSONAL PORTFOLIO
          </div>

          {/* Development Progress Bar */}
          <div style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', marginBottom: '4px' }}>
              <span style={{ color: '#38bdf8', fontWeight: 600 }}>DEVELOPMENT:</span>
              <span style={{ color: '#38bdf8', fontWeight: 800 }}>91%</span>
            </div>
            {/* Visual block progress matching user specification */}
            <div style={{ color: '#38bdf8', fontSize: '11px', letterSpacing: '1px', fontFamily: 'monospace' }}>
              ██████████████████░░ 91%
            </div>
            <div style={{ color: '#475569', fontSize: '8px', marginTop: '4px', fontStyle: 'italic' }}>
              "The engineer thinks. The AI executes."
            </div>
          </div>
        </div>

        {/* Right Column: AI Checklist */}
        <div style={{ background: '#070e1b', border: '1px solid #162438', borderRadius: '4px', padding: '10px 12px' }}>
          <div style={{ color: '#38bdf8', fontSize: '9px', fontWeight: 700, letterSpacing: '1px', marginBottom: '6px' }}>
            AI STATUS: ACTIVE
          </div>
          {[
            { label: 'Architecture', done: true },
            { label: '3D Environment', done: true },
            { label: 'Project Integration', done: true },
            { label: 'Portfolio System', done: true },
            { label: 'Optimization', done: false, pending: '...' },
          ].map(({ label, done, pending }) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '9px', marginBottom: '3.5px' }}>
              <span style={{ color: done ? '#cbd5e1' : '#64748b' }}>{label}</span>
              <span style={{ color: done ? '#22c55e' : '#fbbf24', fontWeight: 700 }}>
                {done ? '✓' : pending}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Prominent [ ENTER LAB ] and Station Navigation */}
      <div style={{ borderTop: '1px solid #1e2e46', paddingTop: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Prominent ENTER LAB button */}
        <button
          onClick={handleEnterLab}
          style={{
            background: 'linear-gradient(90deg, #0284c7 0%, #0369a1 100%)',
            border: '1px solid #38bdf8',
            color: '#f0f9ff',
            padding: '8px 16px',
            fontSize: '10px',
            fontWeight: 800,
            letterSpacing: '2px',
            cursor: 'pointer',
            borderRadius: '3px',
            fontFamily: 'inherit',
            boxShadow: '0 0 12px rgba(56,189,248,0.4)',
            whiteSpace: 'nowrap',
          }}
        >
          [ ENTER LAB ]
        </button>

        {/* Direct Station Links */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', flex: 1 }}>
          {[
            { id: 'hardware' as SectionId, label: '⬡ WORKBENCH' },
            { id: 'kotl' as SectionId, label: '◈ KOTL' },
            { id: 'journey' as SectionId, label: '▶ JOURNEY' },
            { id: 'projects' as SectionId, label: '◉ PROJECTS' },
            { id: 'contact' as SectionId, label: '✉ CONTACT' },
          ].map(({ id, label }) => {
            const isHovered = hoveredBtn === id;
            const isActive = state.currentSection === id;
            return (
              <button
                key={id}
                onClick={() => handleNavigate(id)}
                onMouseEnter={() => setHoveredBtn(id)}
                onMouseLeave={() => setHoveredBtn(null)}
                style={{
                  background: isActive ? '#0369a1' : isHovered ? '#0c4a6e' : '#081426',
                  border: `1px solid ${isActive ? '#38bdf8' : isHovered ? '#0284c7' : '#1e3a5f'}`,
                  borderRadius: '3px',
                  color: isActive || isHovered ? '#f0f9ff' : '#94a3b8',
                  padding: '6px 10px',
                  fontSize: '8.5px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.15s ease',
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function CentralMonitor() {
  return (
    <group position={[0, 1.45, -0.76]}>
      {/* Heavy-duty monitor chassis with realistic depth */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.92, 1.12, 0.05]} />
        <meshStandardMaterial
          color="#121824"
          metalness={0.88}
          roughness={0.25}
        />
      </mesh>

      {/* Screen inner bezel edge */}
      <mesh position={[0, 0, 0.026]}>
        <boxGeometry args={[1.88, 1.08, 0.005]} />
        <meshStandardMaterial color="#080c14" roughness={0.9} />
      </mesh>

      {/* Screen panel glass with subtle blue-black depth */}
      <mesh position={[0, 0, 0.029]}>
        <planeGeometry args={[1.86, 1.06]} />
        <meshStandardMaterial
          color="#030812"
          roughness={0.2}
          metalness={0.1}
          emissive="#08182b"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Power LED indicator */}
      <mesh position={[0.88, -0.525, 0.028]}>
        <sphereGeometry args={[0.006, 8, 8]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={4}
        />
      </mesh>

      {/* HTML Content Overlay */}
      <Html
        transform
        position={[0, 0.01, 0.032]}
        distanceFactor={1.38}
        occlude={false}
        style={{ pointerEvents: 'auto' }}
      >
        <MonitorDisplay />
      </Html>
    </group>
  );
}
