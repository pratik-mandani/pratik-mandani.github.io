// Career wall — back wall timeline display of engineering journey
import { Html } from '@react-three/drei';
import { useLab } from '../../context/LabContext';
import { journeyMilestones } from '../../data/portfolioData';

const CATEGORY_COLORS: Record<string, string> = {
  production: '#f59e0b',
  testing: '#60a5fa',
  hardware: '#22d3ee',
  rd: '#4ade80',
  web: '#818cf8',
  robotics: '#f472b6',
};

function CareerWallContent() {
  const { dispatch } = useLab();

  function handleOpen() {
    dispatch({ type: 'NAVIGATE', section: 'journey' });
    dispatch({ type: 'OPEN_PANEL', panel: 'journey' });
  }

  return (
    <div
      onClick={handleOpen}
      style={{
        width: '700px',
        height: '340px',
        background: 'rgba(3, 9, 18, 0.97)',
        border: '1px solid #0e3060',
        borderRadius: '4px',
        fontFamily: '"Courier New", monospace',
        color: '#7dd3fc',
        padding: '12px 14px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        cursor: 'pointer',
        userSelect: 'none',
        pointerEvents: 'auto',
      }}
    >
      {/* Header */}
      <div style={{ borderBottom: '1px solid #0e3060', paddingBottom: '8px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ color: '#38bdf8', fontSize: '11px', letterSpacing: '3px', fontWeight: 700 }}>CAREER JOURNEY // ENGINEERING TIMELINE</div>
          <div style={{ color: '#4a7a9b', fontSize: '8px', marginTop: '2px' }}>11 milestones across product development, hardware, and full-stack web</div>
        </div>
        <div style={{ color: '#4ade80', fontSize: '9px', letterSpacing: '1px' }}>[ CLICK TO EXPAND ]</div>
      </div>

      {/* Timeline items — compact grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
        {journeyMilestones.map((m) => (
          <div
            key={m.id}
            style={{
              background: '#05101e',
              border: `1px solid ${CATEGORY_COLORS[m.category] || '#0e3060'}22`,
              borderLeft: `2px solid ${CATEGORY_COLORS[m.category] || '#0e3060'}`,
              borderRadius: '3px',
              padding: '6px 8px',
            }}
          >
            <div style={{ color: CATEGORY_COLORS[m.category] || '#38bdf8', fontSize: '7px', letterSpacing: '1px', marginBottom: '2px' }}>
              {m.stepNumber.toString().padStart(2, '0')} // {m.period}
            </div>
            <div style={{ color: '#e2e8f0', fontSize: '8px', fontWeight: 600, lineHeight: 1.3 }}>
              {m.title}
            </div>
            <div style={{ color: '#4a7a9b', fontSize: '7px', marginTop: '2px' }}>{m.company}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ marginTop: '8px', borderTop: '1px solid #0a1e3a', paddingTop: '6px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
          <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ width: '8px', height: '8px', background: color, borderRadius: '1px' }} />
            <span style={{ color: '#4a7a9b', fontSize: '7px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{cat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CareerWall() {
  return (
    <group>
      {/* Back wall display panel frame */}
      <mesh position={[0, 2.8, -8.48]} castShadow>
        <boxGeometry args={[5.0, 2.6, 0.06]} />
        <meshStandardMaterial color="#0a1020" roughness={0.8} metalness={0.3} emissive="#060f1e" emissiveIntensity={0.3} />
      </mesh>

      {/* Screen surface */}
      <mesh position={[0, 2.8, -8.45]}>
        <planeGeometry args={[4.8, 2.4]} />
        <meshStandardMaterial color="#030912" emissive="#081428" emissiveIntensity={0.4} />
      </mesh>

      {/* Corner accent lights */}
      {[[-2.4, 3.9], [2.4, 3.9], [-2.4, 1.7], [2.4, 1.7]].map(([x, y], i) => (
        <mesh key={i} position={[x, y, -8.44]}>
          <sphereGeometry args={[0.025, 6, 6]} />
          <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={3} />
        </mesh>
      ))}

      {/* Side bracket accents */}
      <mesh position={[-2.42, 2.8, -8.44]}>
        <boxGeometry args={[0.02, 2.2, 0.04]} />
        <meshStandardMaterial color="#1e5a9a" emissive="#1e5a9a" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[2.42, 2.8, -8.44]}>
        <boxGeometry args={[0.02, 2.2, 0.04]} />
        <meshStandardMaterial color="#1e5a9a" emissive="#1e5a9a" emissiveIntensity={0.5} />
      </mesh>

      {/* Small side panels */}
      <mesh position={[-4.2, 2.8, -8.48]}>
        <boxGeometry args={[1.6, 2.0, 0.05]} />
        <meshStandardMaterial color="#080e1c" roughness={0.9} metalness={0.2} emissive="#04080e" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[4.2, 2.8, -8.48]}>
        <boxGeometry args={[1.6, 2.0, 0.05]} />
        <meshStandardMaterial color="#080e1c" roughness={0.9} metalness={0.2} emissive="#04080e" emissiveIntensity={0.2} />
      </mesh>

      {/* HTML timeline overlay */}
      <Html
        transform
        position={[0, 2.8, -8.42]}
        distanceFactor={2.8}
        occlude={false}
        style={{ pointerEvents: 'auto' }}
      >
        <CareerWallContent />
      </Html>

      {/* Label below panel */}
      <mesh position={[0, 1.4, -8.46]}>
        <planeGeometry args={[3, 0.18]} />
        <meshStandardMaterial color="#0a1628" emissive="#0d2040" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}
