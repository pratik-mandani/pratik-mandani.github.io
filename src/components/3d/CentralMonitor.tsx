// Central monitor — main navigation hub with interactive menu
import { useRef, useState } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { useLab, SectionId } from '../../context/LabContext';

interface NavItem {
  id: SectionId;
  label: string;
  icon: string;
  desc: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'journey', label: 'CAREER JOURNEY', icon: '▶', desc: 'Engineering timeline & milestones' },
  { id: 'hardware', label: 'HARDWARE & ELECTRONICS', icon: '⬡', desc: 'PCB design, embedded systems' },
  { id: 'kotl', label: 'KOTL ROBOT', icon: '◈', desc: 'Personal embedded robotics project' },
  { id: 'projects', label: 'WEB PROJECTS', icon: '◉', desc: '100+ production platforms' },
  { id: 'experience', label: 'EXPERIENCE', icon: '◇', desc: 'Work history & education' },
  { id: 'resume', label: 'RESUME', icon: '↓', desc: 'Download CV / Resume' },
  { id: 'contact', label: 'CONTACT', icon: '✉', desc: 'Get in touch' },
];

function MonitorContent() {
  const { state, dispatch } = useLab();
  const [hovered, setHovered] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  // Simulated system clock
  useState(() => {
    const id = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(id);
  });

  const time = new Date().toLocaleTimeString('en-IN', { hour12: false });

  function handleNav(id: SectionId) {
    dispatch({ type: 'NAVIGATE', section: id });
    if (id === 'resume') dispatch({ type: 'OPEN_PANEL', panel: 'resume' });
    else if (id === 'contact') dispatch({ type: 'OPEN_PANEL', panel: 'contact' });
    else if (id === 'experience') dispatch({ type: 'OPEN_PANEL', panel: 'experience' });
  }

  return (
    <div
      style={{
        width: '480px',
        height: '300px',
        background: '#030912',
        border: '1px solid #0e3060',
        borderRadius: '4px',
        fontFamily: '"Courier New", Courier, monospace',
        color: '#7dd3fc',
        overflow: 'hidden',
        userSelect: 'none',
        pointerEvents: 'auto',
        boxSizing: 'border-box',
      }}
    >
      {/* Header bar */}
      <div style={{ background: '#050f1f', borderBottom: '1px solid #0e3060', padding: '5px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ color: '#38bdf8', fontSize: '10px', letterSpacing: '2px', fontWeight: 700 }}>
          ENGINEERING LAB // NAVIGATION_CORE
        </div>
        <div style={{ color: '#4ade80', fontSize: '9px' }}>{time} IST ▌</div>
      </div>

      {/* Identity banner */}
      <div style={{ padding: '8px 12px 4px', borderBottom: '1px solid #0a1e3a' }}>
        <div style={{ color: '#f0f9ff', fontSize: '14px', fontWeight: 700, letterSpacing: '1px' }}>PRATIK MANDANI</div>
        <div style={{ color: '#64748b', fontSize: '9px', letterSpacing: '1.5px', marginTop: '2px' }}>
          EMBEDDED ENGINEER  ·  FIRMWARE  ·  FULL-STACK WEB
        </div>
      </div>

      {/* Nav items */}
      <div style={{ padding: '6px 8px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNav(item.id)}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === item.id ? '#0a2040' : state.currentSection === item.id ? '#061828' : 'transparent',
              border: hovered === item.id ? '1px solid #1e5a9a' : state.currentSection === item.id ? '1px solid #0e3060' : '1px solid transparent',
              borderRadius: '3px',
              padding: '5px 10px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              color: hovered === item.id ? '#7dd3fc' : state.currentSection === item.id ? '#38bdf8' : '#4a7a9b',
              fontSize: '10px',
              letterSpacing: '1.5px',
              textAlign: 'left',
              width: '100%',
              transition: 'all 0.15s ease',
            }}
          >
            <span style={{ color: hovered === item.id ? '#38bdf8' : '#1e5a9a', fontSize: '12px', minWidth: '16px' }}>{item.icon}</span>
            <span style={{ flex: 1, fontWeight: 600 }}>{item.label}</span>
            <span style={{ color: '#2a4a6a', fontSize: '9px', fontStyle: 'italic' }}>{item.desc}</span>
          </button>
        ))}
      </div>

      {/* Bottom status */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, borderTop: '1px solid #0a1e3a', padding: '3px 12px', background: '#030912', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ color: '#1e5a9a', fontSize: '8px' }}>SYS:ONLINE // ALL_MODULES_READY</div>
        <div style={{ color: '#4ade80', fontSize: '8px' }}>● CONNECTED</div>
      </div>
    </div>
  );
}

export function CentralMonitor() {
  const [hovered, setHovered] = useState(false);
  const frameRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (frameRef.current) {
      const mat = frameRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.15 + Math.sin(clock.elapsedTime * 1.5) * 0.05;
    }
  });

  // Monitor: central at position [0, 1.72, -2.2], screen faces +Z
  return (
    <group position={[0, 1.72, -2.2]}>
      {/* Monitor frame */}
      <mesh
        ref={frameRef}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        castShadow
      >
        <boxGeometry args={[2.6, 1.62, 0.06]} />
        <meshStandardMaterial
          color="#111827"
          metalness={0.7}
          roughness={0.3}
          emissive="#0a1628"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Screen bezel inner */}
      <mesh position={[0, 0, 0.031]}>
        <boxGeometry args={[2.44, 1.46, 0.005]} />
        <meshStandardMaterial color="#030912" />
      </mesh>

      {/* Screen glow plane */}
      <mesh position={[0, 0, 0.035]}>
        <planeGeometry args={[2.42, 1.44]} />
        <meshStandardMaterial
          color="#060f20"
          emissive="#0a2040"
          emissiveIntensity={hovered ? 1.2 : 0.8}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Monitor stand neck */}
      <mesh position={[0, -0.88, 0]}>
        <boxGeometry args={[0.08, 0.14, 0.06]} />
        <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0, -0.98, 0.04]}>
        <boxGeometry args={[0.5, 0.04, 0.3]} />
        <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Power LED */}
      <mesh position={[1.15, -0.72, 0.04]}>
        <sphereGeometry args={[0.015, 8, 8]} />
        <meshStandardMaterial color="#4ade80" emissive="#4ade80" emissiveIntensity={3} />
      </mesh>

      {/* HTML Content */}
      <Html
        transform
        position={[0, 0, 0.04]}
        distanceFactor={1.8}
        style={{ pointerEvents: 'auto' }}
        occlude={false}
      >
        <MonitorContent />
      </Html>
    </group>
  );
}
