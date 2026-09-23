// Architectural Career Wall Installation
// Displays the exact requested engineering progression on the back feature wall
// Clicking smoothly glides the camera toward the wall and opens the detailed journey breakdown
import { Html } from '@react-three/drei';
import { useLab } from '../../context/LabContext';

const JOURNEY_STEPS = [
  'Production Assembly',
  'Team Lead (200+ Units Sprint)',
  'Machine Testing & QA/QC',
  'PCB Prototyping & Rework',
  'Vending R&D Integration',
  'Frontend Development',
  'PHP & Database Systems',
  'Laravel & Full-Stack (100+ Platforms)',
  'Embedded Projects (KOTL)',
];

function CareerWallDisplay() {
  const { dispatch } = useLab();

  function handleClick() {
    dispatch({ type: 'NAVIGATE', section: 'journey' });
    dispatch({ type: 'OPEN_PANEL', panel: 'journey' });
  }

  return (
    <div
      onClick={handleClick}
      style={{
        width: '460px',
        background: 'rgba(5, 10, 18, 0.94)',
        border: '1px solid #1e3a5f',
        borderTop: '2px solid #38bdf8',
        borderRadius: '6px',
        fontFamily: '"JetBrains Mono", "Courier New", monospace',
        color: '#e2e8f0',
        padding: '16px 20px',
        boxSizing: 'border-box',
        cursor: 'pointer',
        userSelect: 'none',
        pointerEvents: 'auto',
        boxShadow: '0 0 35px rgba(0,0,0,0.8), 0 0 15px rgba(56,189,248,0.1)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e2e46', paddingBottom: '8px', marginBottom: '10px' }}>
        <div>
          <div style={{ color: '#38bdf8', fontSize: '11px', fontWeight: 800, letterSpacing: '2px' }}>
            MY ENGINEERING JOURNEY
          </div>
          <div style={{ color: '#64748b', fontSize: '8px', letterSpacing: '1px' }}>
            FROM FACTORY FLOOR TO FULL-STACK & EMBEDDED
          </div>
        </div>
        <div style={{ color: '#4ade80', fontSize: '8px', fontWeight: 700, letterSpacing: '1px' }}>
          [ CLICK TO EXPAND ]
        </div>
      </div>

      {/* Vertical progression flow */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
        {JOURNEY_STEPS.map((step, i) => (
          <div key={step}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '3px 8px',
              borderRadius: '3px',
              background: i === JOURNEY_STEPS.length - 1 ? 'rgba(56,189,248,0.12)' : 'rgba(255,255,255,0.02)',
              border: i === JOURNEY_STEPS.length - 1 ? '1px solid rgba(56,189,248,0.3)' : '1px solid transparent',
            }}>
              <span style={{ color: '#38bdf8', fontSize: '8px', fontWeight: 800, minWidth: '16px' }}>
                0{i + 1}
              </span>
              <span style={{ color: i === JOURNEY_STEPS.length - 1 ? '#38bdf8' : '#cbd5e1', fontSize: '9px', fontWeight: i === JOURNEY_STEPS.length - 1 ? 700 : 500 }}>
                {step}
              </span>
            </div>
            {i < JOURNEY_STEPS.length - 1 && (
              <div style={{ color: '#1e3a5f', fontSize: '8px', paddingLeft: '24px', lineHeight: '1' }}>
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CareerWall() {
  return (
    <group position={[0, 2.35, -3.05]}>
      {/* Wall mounting plate with subtle architectural halo */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.4, 2.0, 0.03]} />
        <meshStandardMaterial
          color="#0b1019"
          metalness={0.7}
          roughness={0.3}
          emissive="#0a1a30"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Thin anodized aluminum frame */}
      <mesh position={[0, 0, 0.018]}>
        <boxGeometry args={[2.42, 2.02, 0.01]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* HTML Overlay with clickable journey timeline */}
      <Html
        transform
        position={[0, 0, 0.022]}
        distanceFactor={1.75}
        occlude={false}
        style={{ pointerEvents: 'auto' }}
      >
        <CareerWallDisplay />
      </Html>
    </group>
  );
}
