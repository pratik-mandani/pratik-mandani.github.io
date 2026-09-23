// Purposeful secondary monitors flanking the main display
// Left: PRATIK // ENGINEER (Product Development, Electronics, Embedded, Firmware, Full-Stack, 7+ Years, 100+ Web Projects)
// Right: AI SYSTEM // ACTIVE (Product Development ✓, PCB Development ✓, Vending R&D ✓, Laravel ✓, Embedded ✓, CURRENT TASK: KOTL PROJECT)
import { Html } from '@react-three/drei';

function LeftIdentityContent() {
  return (
    <div
      style={{
        width: '340px',
        height: '255px',
        background: 'linear-gradient(180deg, #071224 0%, #030814 100%)',
        border: '2px solid #0284c7',
        borderRadius: '6px',
        fontFamily: '"JetBrains Mono", "Courier New", monospace',
        color: '#f8fafc',
        padding: '16px 18px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        userSelect: 'none',
        pointerEvents: 'none',
        boxShadow: '0 0 25px rgba(56,189,248,0.18)',
      }}
    >
      <div style={{ borderBottom: '2px solid #1e3a5f', paddingBottom: '8px', marginBottom: '12px' }}>
        <div style={{ color: '#38bdf8', fontSize: '14px', fontWeight: 900, letterSpacing: '2px' }}>
          PRATIK // ENGINEER
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '14px' }}>
        {[
          'Product Development',
          'Electronics',
          'Embedded',
          'Firmware',
          'Full-Stack',
        ].map((domain) => (
          <div key={domain} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 700, color: '#e2e8f0' }}>
            <span style={{ color: '#38bdf8' }}>◈</span>
            <span>{domain}</span>
          </div>
        ))}
      </div>

      {/* Verified Experience Badges */}
      <div style={{ borderTop: '1px solid #1e2e46', paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ color: '#38bdf8', fontSize: '11px', fontWeight: 900, letterSpacing: '1px' }}>
          7+ YEARS EXPERIENCE
        </div>
        <div style={{ color: '#4ade80', fontSize: '10px', fontWeight: 800, letterSpacing: '1px' }}>
          100+ WEB PROJECTS
        </div>
      </div>
    </div>
  );
}

function RightPipelineContent() {
  return (
    <div
      style={{
        width: '340px',
        height: '255px',
        background: 'linear-gradient(180deg, #09091f 0%, #040412 100%)',
        border: '2px solid #7c3aed',
        borderRadius: '6px',
        fontFamily: '"JetBrains Mono", "Courier New", monospace',
        color: '#f8fafc',
        padding: '16px 18px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        userSelect: 'none',
        pointerEvents: 'none',
        boxShadow: '0 0 25px rgba(167,139,250,0.22)',
      }}
    >
      <div style={{ borderBottom: '2px solid #3b2075', paddingBottom: '8px', marginBottom: '12px' }}>
        <div style={{ color: '#c084fc', fontSize: '14px', fontWeight: 900, letterSpacing: '2px' }}>
          AI SYSTEM // ACTIVE
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '14px' }}>
        {[
          'Product Development',
          'PCB Development',
          'Vending R&D',
          'Laravel',
          'Embedded',
        ].map((subsystem) => (
          <div key={subsystem} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', fontWeight: 700 }}>
            <span style={{ color: '#e2e8f0' }}>{subsystem}</span>
            <span style={{ color: '#4ade80', fontWeight: 900, fontSize: '13px' }}>✓</span>
          </div>
        ))}
      </div>

      {/* Current Task Box */}
      <div style={{ background: 'rgba(192,132,252,0.1)', border: '1px solid rgba(192,132,252,0.35)', borderRadius: '4px', padding: '6px 10px' }}>
        <div style={{ color: '#fbbf24', fontSize: '9px', fontWeight: 800, letterSpacing: '1.5px' }}>
          CURRENT TASK:
        </div>
        <div style={{ color: '#ffffff', fontSize: '12px', fontWeight: 900, letterSpacing: '1px', marginTop: '1px' }}>
          KOTL PROJECT
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
        <boxGeometry args={[1.05, 0.8, 0.04]} />
        <meshStandardMaterial
          color="#161e2c"
          metalness={0.88}
          roughness={0.25}
        />
      </mesh>

      {/* Screen panel glass */}
      <mesh position={[0, 0, 0.021]}>
        <planeGeometry args={[1.01, 0.76]} />
        <meshStandardMaterial
          color="#040814"
          roughness={0.2}
          emissive={accentColor}
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Power LED */}
      <mesh position={[0.47, -0.37, 0.022]}>
        <sphereGeometry args={[0.006, 6, 6]} />
        <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={4} />
      </mesh>

      {/* HTML Content Overlay */}
      <Html
        transform
        position={[0, 0, 0.024]}
        distanceFactor={0.78}
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
      {/* Left Screen: PRATIK // ENGINEER, angled inward */}
      <MonitorFrame
        position={[-1.42, 1.45, -0.66]}
        rotation={[0, 0.38, 0]}
        accentColor="#38bdf8"
      >
        <LeftIdentityContent />
      </MonitorFrame>

      {/* Right Screen: AI SYSTEM // ACTIVE, angled inward */}
      <MonitorFrame
        position={[1.42, 1.45, -0.66]}
        rotation={[0, -0.38, 0]}
        accentColor="#c084fc"
      >
        <RightPipelineContent />
      </MonitorFrame>
    </>
  );
}
