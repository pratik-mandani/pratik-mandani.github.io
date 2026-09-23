// Two small side monitors flanking the BIG central monitor
// Left: PROFILE (Product Development, Embedded, Electronics, Full-Stack)
// Right: AI SYSTEM (Projects, KOTL, Web Development, PCB)
import { Html } from '@react-three/drei';

function LeftProfileContent() {
  return (
    <div
      style={{
        width: '260px',
        height: '210px',
        background: 'linear-gradient(180deg, #09152b 0%, #030814 100%)',
        border: '2px solid #0284c7',
        borderRadius: '6px',
        fontFamily: '"JetBrains Mono", "Courier New", monospace',
        color: '#f8fafc',
        padding: '16px 20px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        userSelect: 'none',
        pointerEvents: 'none',
        boxShadow: '0 0 25px rgba(56,189,248,0.2)',
      }}
    >
      <div style={{ color: '#38bdf8', fontSize: '15px', fontWeight: 900, letterSpacing: '2px', borderBottom: '2px solid #1e3a5f', paddingBottom: '8px', marginBottom: '14px' }}>
        PROFILE
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {[
          'Product Development',
          'Embedded',
          'Electronics',
          'Full-Stack',
        ].map((item) => (
          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11.5px', fontWeight: 700, color: '#e2e8f0' }}>
            <span style={{ color: '#38bdf8' }}>◈</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RightAiContent() {
  return (
    <div
      style={{
        width: '260px',
        height: '210px',
        background: 'linear-gradient(180deg, #0f0a24 0%, #050312 100%)',
        border: '2px solid #7c3aed',
        borderRadius: '6px',
        fontFamily: '"JetBrains Mono", "Courier New", monospace',
        color: '#f8fafc',
        padding: '16px 20px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        userSelect: 'none',
        pointerEvents: 'none',
        boxShadow: '0 0 25px rgba(167,139,250,0.2)',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 900, letterSpacing: '2px', borderBottom: '2px solid #3b2075', paddingBottom: '8px', marginBottom: '14px' }}>
        AI SYSTEM
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {[
          'Projects',
          'KOTL',
          'Web Development',
          'PCB',
        ].map((item) => (
          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11.5px', fontWeight: 700, color: '#e2e8f0' }}>
            <span style={{ color: '#c084fc' }}>✓</span>
            <span>{item}</span>
          </div>
        ))}
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
      {/* Aluminum monitor bezel */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.92, 0.74, 0.04]} />
        <meshStandardMaterial
          color="#1e2738"
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>

      {/* Screen panel glass */}
      <mesh position={[0, 0, 0.021]}>
        <planeGeometry args={[0.88, 0.7]} />
        <meshStandardMaterial
          color="#060c18"
          roughness={0.2}
          emissive={accentColor}
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Power LED */}
      <mesh position={[0.41, -0.34, 0.022]}>
        <sphereGeometry args={[0.005, 6, 6]} />
        <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={4} />
      </mesh>

      {/* HTML Content Overlay */}
      <Html
        transform
        position={[0, 0, 0.024]}
        distanceFactor={0.76}
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
      {/* Left Screen: PROFILE, angled inward */}
      <MonitorFrame
        position={[-1.48, 1.48, -0.62]}
        rotation={[0, 0.38, 0]}
        accentColor="#38bdf8"
      >
        <LeftProfileContent />
      </MonitorFrame>

      {/* Right Screen: AI SYSTEM, angled inward */}
      <MonitorFrame
        position={[1.48, 1.48, -0.62]}
        rotation={[0, -0.38, 0]}
        accentColor="#c084fc"
      >
        <RightAiContent />
      </MonitorFrame>
    </>
  );
}
