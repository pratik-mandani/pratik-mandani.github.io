// BIG Computer Monitor — The Main Attraction of the Engineering Lab
// Displays exact specified text:
// PRATIK MANDANI
// ENGINEERING LAB
// AI DEVELOPMENT
// Project Progress
// ██████████████████░░ 91%
// AI STATUS: WORKING
// [ ENTER PORTFOLIO ]
import { useState } from 'react';
import { Html } from '@react-three/drei';
import { useLab } from '../../context/LabContext';

function BigMonitorDisplay() {
  const { dispatch } = useLab();
  const [hovered, setHovered] = useState(false);

  function handleEnterPortfolio() {
    dispatch({ type: 'COMPLETE_INTRO' });
    dispatch({ type: 'NAVIGATE', section: 'projects' });
    dispatch({ type: 'OPEN_PANEL', panel: 'projects' });
  }

  return (
    <div
      style={{
        width: '760px',
        height: '440px',
        background: 'linear-gradient(180deg, #09152b 0%, #030814 100%)',
        border: '3px solid #0284c7',
        borderRadius: '10px',
        fontFamily: '"JetBrains Mono", "Courier New", monospace',
        color: '#ffffff',
        padding: '30px 36px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        userSelect: 'none',
        pointerEvents: 'auto',
        position: 'relative',
        boxShadow: '0 0 50px rgba(56,189,248,0.3), inset 0 0 60px rgba(56,189,248,0.12)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center',
      }}
    >
      {/* Top Identity Block */}
      <div>
        <div style={{ color: '#ffffff', fontSize: '26px', fontWeight: 900, letterSpacing: '4px', textShadow: '0 0 20px rgba(56,189,248,0.8)', lineHeight: 1.2 }}>
          PRATIK MANDANI
        </div>
        <div style={{ color: '#38bdf8', fontSize: '15px', fontWeight: 800, letterSpacing: '5px', marginTop: '6px' }}>
          ENGINEERING LAB
        </div>
        <div style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', marginTop: '8px', textTransform: 'uppercase' }}>
          AI DEVELOPMENT
        </div>
      </div>

      {/* Center Progress Block */}
      <div style={{ padding: '16px 24px', background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.25)', borderRadius: '6px', margin: '0 auto', width: '85%' }}>
        <div style={{ color: '#cbd5e1', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', marginBottom: '8px' }}>
          Project Progress
        </div>
        <div style={{ color: '#38bdf8', fontSize: '18px', fontWeight: 900, letterSpacing: '3px', textShadow: '0 0 12px rgba(56,189,248,0.6)' }}>
          ██████████████████░░ 91%
        </div>
        <div style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 8px #22c55e' }} />
          <span style={{ color: '#4ade80', fontSize: '13px', fontWeight: 800, letterSpacing: '2px' }}>
            AI STATUS: WORKING
          </span>
        </div>
      </div>

      {/* Bottom Main Action Button */}
      <div>
        <button
          onClick={handleEnterPortfolio}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            background: hovered ? '#0284c7' : 'linear-gradient(90deg, #0369a1 0%, #0284c7 100%)',
            border: '2px solid #38bdf8',
            color: '#ffffff',
            padding: '14px 42px',
            fontSize: '15px',
            fontWeight: 900,
            letterSpacing: '3px',
            cursor: 'pointer',
            borderRadius: '6px',
            fontFamily: 'inherit',
            boxShadow: hovered ? '0 0 35px rgba(56,189,248,0.8)' : '0 0 22px rgba(56,189,248,0.45)',
            transform: hovered ? 'scale(1.03)' : 'scale(1)',
            transition: 'all 0.15s ease',
          }}
        >
          [ ENTER PORTFOLIO ]
        </button>
      </div>
    </div>
  );
}

export function CentralMonitor() {
  return (
    <group position={[0, 1.5, -0.72]}>
      {/* Heavy-duty monitor chassis */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.24, 1.32, 0.05]} />
        <meshStandardMaterial
          color="#1e2738"
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>

      {/* Screen inner bezel edge */}
      <mesh position={[0, 0, 0.026]}>
        <boxGeometry args={[2.2, 1.28, 0.005]} />
        <meshStandardMaterial color="#0a101d" roughness={0.9} />
      </mesh>

      {/* Screen panel glass with bright cyan backlight reflection */}
      <mesh position={[0, 0, 0.029]}>
        <planeGeometry args={[2.18, 1.26]} />
        <meshStandardMaterial
          color="#061226"
          roughness={0.12}
          metalness={0.1}
          emissive="#0e2a4a"
          emissiveIntensity={0.65}
        />
      </mesh>

      {/* Power LED indicator */}
      <mesh position={[1.04, -0.61, 0.028]}>
        <sphereGeometry args={[0.007, 8, 8]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={5}
        />
      </mesh>

      {/* HTML Content Overlay */}
      <Html
        transform
        position={[0, 0.01, 0.033]}
        distanceFactor={1.3}
        occlude={false}
        style={{ pointerEvents: 'auto' }}
      >
        <BigMonitorDisplay />
      </Html>
    </group>
  );
}
