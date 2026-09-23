// Purposeful secondary monitors flanking the main display
// Left: Pratik's Engineering Identity & Competencies
// Right: AI System Pipeline & Verified Systems
// No meaningless random terminal gibberish — clear, readable, narrative data
import { Html } from '@react-three/drei';

function LeftIdentityContent() {
  return (
    <div
      style={{
        width: '320px',
        height: '240px',
        background: 'linear-gradient(180deg, #040913 0%, #03070f 100%)',
        border: '1px solid #1e3a5f',
        borderRadius: '5px',
        fontFamily: '"JetBrains Mono", "Courier New", monospace',
        color: '#e2e8f0',
        padding: '14px 16px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        userSelect: 'none',
        pointerEvents: 'none',
      }}
    >
      <div style={{ borderBottom: '1px solid #1e2e46', paddingBottom: '6px', marginBottom: '10px' }}>
        <div style={{ color: '#38bdf8', fontSize: '11px', fontWeight: 800, letterSpacing: '1.5px' }}>
          PRATIK // ENGINEER
        </div>
        <div style={{ color: '#64748b', fontSize: '8px', letterSpacing: '1px' }}>
          CORE COMPETENCIES & DOMAINS
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '10px' }}>
        {[
          { label: 'Product Development', tag: '7+ Yrs' },
          { label: 'Electronics & QA/QC', tag: 'Benchtop' },
          { label: 'Embedded Systems', tag: 'ESP32/C++' },
          { label: 'Firmware Architecture', tag: 'RTOS' },
          { label: 'Full-Stack Web Dev', tag: 'Altius Infoway' },
        ].map(({ label, tag }) => (
          <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '10px' }}>
            <span style={{ color: '#f1f5f9', fontWeight: 600 }}>{label}</span>
            <span style={{ color: '#38bdf8', fontSize: '8px', background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)', padding: '1px 5px', borderRadius: '2px' }}>
              {tag}
            </span>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid #162438', paddingTop: '6px', display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: '#64748b' }}>
        <span>LOC: RAJKOT, GUJARAT</span>
        <span style={{ color: '#22c55e' }}>● STATUS: READY</span>
      </div>
    </div>
  );
}

function RightPipelineContent() {
  return (
    <div
      style={{
        width: '320px',
        height: '240px',
        background: 'linear-gradient(180deg, #040913 0%, #03070f 100%)',
        border: '1px solid #2e1e5f',
        borderRadius: '5px',
        fontFamily: '"JetBrains Mono", "Courier New", monospace',
        color: '#e2e8f0',
        padding: '14px 16px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        userSelect: 'none',
        pointerEvents: 'none',
      }}
    >
      <div style={{ borderBottom: '1px solid #2e1e5f', paddingBottom: '6px', marginBottom: '8px' }}>
        <div style={{ color: '#a78bfa', fontSize: '11px', fontWeight: 800, letterSpacing: '1.5px' }}>
          AI SYSTEM PIPELINE
        </div>
        <div style={{ color: '#64748b', fontSize: '8px', letterSpacing: '1px' }}>
          VERIFIED SUBSYSTEMS
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '8px' }}>
        {[
          { label: 'Product Development', ok: true },
          { label: 'PCB Development', ok: true },
          { label: 'Vending R&D', ok: true },
          { label: 'Laravel & SQL', ok: true },
          { label: 'Embedded Firmware', ok: true },
        ].map(({ label, ok }) => (
          <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '9.5px' }}>
            <span style={{ color: '#cbd5e1' }}>{label}</span>
            <span style={{ color: '#4ade80', fontWeight: 700 }}>✓</span>
          </div>
        ))}
      </div>

      {/* Next focus box */}
      <div style={{ background: '#09081a', border: '1px solid #3b2075', borderRadius: '3px', padding: '6px 8px' }}>
        <div style={{ color: '#fbbf24', fontSize: '8px', fontWeight: 700, letterSpacing: '1px' }}>
          NEXT OBJECTIVE:
        </div>
        <div style={{ color: '#f8fafc', fontSize: '10px', fontWeight: 700, marginTop: '1px' }}>
          KOTL ROBOT PLATFORM
        </div>
        <div style={{ color: '#94a3b8', fontSize: '7.5px' }}>
          Autonomous sensory states & FreeRTOS routines
        </div>
      </div>
    </div>
  );
}

interface MonitorFrameProps {
  position: [number, number, number];
  rotation: [number, number, number];
  accentColor: string;
  children: React.ReactNode;
}

function MonitorFrame({ position, rotation, accentColor, children }: MonitorFrameProps) {
  return (
    <group position={position} rotation={rotation}>
      {/* Sleek aluminum monitor bezel */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.98, 0.74, 0.035]} />
        <meshStandardMaterial
          color="#121824"
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>

      {/* Screen panel glass */}
      <mesh position={[0, 0, 0.018]}>
        <planeGeometry args={[0.94, 0.7]} />
        <meshStandardMaterial
          color="#030812"
          roughness={0.2}
          emissive={accentColor}
          emissiveIntensity={0.12}
        />
      </mesh>

      {/* Power LED */}
      <mesh position={[0.44, -0.34, 0.019]}>
        <sphereGeometry args={[0.005, 6, 6]} />
        <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={3} />
      </mesh>

      {/* HTML Content */}
      <Html
        transform
        position={[0, 0, 0.021]}
        distanceFactor={0.82}
        occlude={false}
        style={{ pointerEvents: 'none' }}
      >
        {children}
      </Html>
    </group>
  );
}

export function SecondaryMonitors() {
  return (
    <>
      {/* Left Screen: Pratik's Identity & Core Competencies, angled inward */}
      <MonitorFrame
        position={[-1.38, 1.45, -0.68]}
        rotation={[0, 0.38, 0]}
        accentColor="#38bdf8"
      >
        <LeftIdentityContent />
      </MonitorFrame>

      {/* Right Screen: AI Pipeline & Status, angled inward */}
      <MonitorFrame
        position={[1.38, 1.45, -0.68]}
        rotation={[0, -0.38, 0]}
        accentColor="#a78bfa"
      >
        <RightPipelineContent />
      </MonitorFrame>
    </>
  );
}
