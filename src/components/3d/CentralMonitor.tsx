// Dominant Central Monitor — The Visual Hero of the Engineering Lab
// Displays a large, crystal-clear, bright AI Development Dashboard readable from initial camera
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
        width: '740px',
        height: '430px',
        background: 'linear-gradient(180deg, #071224 0%, #030814 100%)',
        border: '2px solid #0284c7',
        borderRadius: '8px',
        fontFamily: '"JetBrains Mono", "Courier New", monospace',
        color: '#f8fafc',
        padding: '20px 26px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        userSelect: 'none',
        pointerEvents: 'auto',
        position: 'relative',
        boxShadow: '0 0 45px rgba(56,189,248,0.22), inset 0 0 50px rgba(56,189,248,0.08)',
      }}
    >
      {/* Top Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #1e3a5f', paddingBottom: '12px', marginBottom: '16px' }}>
        <div>
          <div style={{ color: '#38bdf8', fontSize: '18px', fontWeight: 900, letterSpacing: '3px', textShadow: '0 0 16px rgba(56,189,248,0.6)' }}>
            PRATIK // ENGINEERING LAB
          </div>
          <div style={{ color: '#94a3b8', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', marginTop: '3px' }}>
            AI DEVELOPMENT SYSTEM
          </div>
        </div>
        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(34,197,94,0.18)', border: '1px solid #22c55e', padding: '4px 10px', borderRadius: '4px' }}>
            <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 10px #22c55e' }} />
            <span style={{ color: '#4ade80', fontSize: '11px', fontWeight: 800, letterSpacing: '1.5px' }}>AI STATUS: ACTIVE</span>
          </div>
          <div style={{ color: '#64748b', fontSize: '9px', letterSpacing: '1px' }}>CORE_V2.9 // AUTONOMOUS_MODE</div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.18fr 0.82fr', gap: '20px', marginBottom: '16px' }}>
        {/* Left Column: Project, Progress & Current Task */}
        <div>
          <div style={{ color: '#38bdf8', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            CURRENT PROJECT
          </div>
          <div style={{ color: '#ffffff', fontSize: '18px', fontWeight: 900, letterSpacing: '1px', marginTop: '2px', marginBottom: '14px', textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>
            PERSONAL PORTFOLIO
          </div>

          {/* Development Progress Bar */}
          <div style={{ marginBottom: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 800, marginBottom: '6px' }}>
              <span style={{ color: '#7dd3fc', letterSpacing: '1px' }}>DEVELOPMENT PROGRESS</span>
              <span style={{ color: '#38bdf8', fontSize: '13px' }}>91%</span>
            </div>
            {/* Visual block progress string matching exact prompt */}
            <div style={{
              background: '#040d1c',
              border: '1px solid #0284c7',
              padding: '6px 10px',
              borderRadius: '4px',
              color: '#38bdf8',
              fontSize: '14px',
              fontWeight: 800,
              letterSpacing: '2px',
              boxShadow: '0 0 15px rgba(2,132,199,0.3)',
            }}>
              ██████████████████░░ 91%
            </div>
          </div>

          {/* Current Autonomous Task */}
          <div style={{ background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.25)', borderRadius: '4px', padding: '8px 12px' }}>
            <div style={{ color: '#94a3b8', fontSize: '9px', fontWeight: 700, letterSpacing: '1.5px' }}>
              CURRENT TASK:
            </div>
            <div style={{ color: '#f0f9ff', fontSize: '12px', fontWeight: 700, marginTop: '2px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#38bdf8' }}>▶</span> Integrating engineering projects...
            </div>
          </div>
        </div>

        {/* Right Column: AI Checklist */}
        <div style={{ background: '#051020', border: '1px solid #1e3a5f', borderRadius: '6px', padding: '12px 16px' }}>
          <div style={{ color: '#38bdf8', fontSize: '11px', fontWeight: 800, letterSpacing: '1.5px', marginBottom: '10px', borderBottom: '1px solid #162a48', paddingBottom: '6px' }}>
            SUBSYSTEM CHECKLIST
          </div>
          {[
            { label: 'Architecture', done: true },
            { label: 'UI System', done: true },
            { label: '3D Environment', done: true },
            { label: 'Project Integration', done: true },
            { label: 'Portfolio Content', done: true },
            { label: 'Optimization', done: false, pending: '...' },
          ].map(({ label, done, pending }) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', marginBottom: '5px' }}>
              <span style={{ color: done ? '#e2e8f0' : '#94a3b8', fontWeight: done ? 600 : 400 }}>{label}</span>
              <span style={{ color: done ? '#22c55e' : '#fbbf24', fontWeight: 900, fontSize: done ? '13px' : '11px' }}>
                {done ? '✓' : pending}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Prominent Action Bar */}
      <div style={{ borderTop: '2px solid #1e3a5f', paddingTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Visual Hero [ ENTER LAB ] Button */}
        <button
          onClick={handleEnterLab}
          style={{
            background: 'linear-gradient(90deg, #0284c7 0%, #0369a1 100%)',
            border: '2px solid #38bdf8',
            color: '#ffffff',
            padding: '10px 22px',
            fontSize: '12px',
            fontWeight: 900,
            letterSpacing: '2.5px',
            cursor: 'pointer',
            borderRadius: '4px',
            fontFamily: 'inherit',
            boxShadow: '0 0 20px rgba(56,189,248,0.5)',
            whiteSpace: 'nowrap',
            transition: 'all 0.15s ease',
          }}
        >
          [ ENTER LAB ]
        </button>

        {/* Physical Station Quick Links */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
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
                  background: isActive ? '#0369a1' : isHovered ? '#0c4a6e' : '#08172c',
                  border: `1px solid ${isActive ? '#38bdf8' : isHovered ? '#38bdf8' : '#1e3a5f'}`,
                  borderRadius: '3px',
                  color: isActive || isHovered ? '#ffffff' : '#94a3b8',
                  padding: '7px 12px',
                  fontSize: '9.5px',
                  fontWeight: 800,
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
        <boxGeometry args={[1.98, 1.16, 0.05]} />
        <meshStandardMaterial
          color="#161e2c"
          metalness={0.88}
          roughness={0.25}
        />
      </mesh>

      {/* Screen inner bezel edge */}
      <mesh position={[0, 0, 0.026]}>
        <boxGeometry args={[1.94, 1.12, 0.005]} />
        <meshStandardMaterial color="#080e18" roughness={0.9} />
      </mesh>

      {/* Glowing monitor glass with bright cyan backlight reflection */}
      <mesh position={[0, 0, 0.029]}>
        <planeGeometry args={[1.92, 1.1]} />
        <meshStandardMaterial
          color="#061224"
          roughness={0.15}
          metalness={0.1}
          emissive="#0a2544"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Power LED indicator */}
      <mesh position={[0.91, -0.54, 0.028]}>
        <sphereGeometry args={[0.007, 8, 8]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={5}
        />
      </mesh>

      {/* HTML Content Overlay — tuned distanceFactor for maximum legibility */}
      <Html
        transform
        position={[0, 0.01, 0.033]}
        distanceFactor={1.32}
        occlude={false}
        style={{ pointerEvents: 'auto' }}
      >
        <MonitorDisplay />
      </Html>
    </group>
  );
}
