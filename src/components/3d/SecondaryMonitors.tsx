// 4 secondary monitors showing profile, system status, career stats, live terminal
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

function ProfileMonitor() {
  return (
    <div style={{
      width: '240px', height: '180px',
      background: '#030912', border: '1px solid #0e3060',
      fontFamily: '"Courier New", monospace', color: '#7dd3fc',
      padding: '8px', boxSizing: 'border-box', overflow: 'hidden',
    }}>
      <div style={{ color: '#38bdf8', fontSize: '8px', letterSpacing: '2px', borderBottom: '1px solid #0e3060', paddingBottom: '4px', marginBottom: '6px' }}>
        ENGINEER_PROFILE.sys
      </div>
      <div style={{ fontSize: '11px', color: '#f0f9ff', fontWeight: 700, marginBottom: '4px' }}>Pratik Mandani</div>
      <div style={{ fontSize: '8px', color: '#60a5fa', marginBottom: '8px', letterSpacing: '0.5px' }}>
        Rajkot, Gujarat, India
      </div>
      {[
        { label: 'ROLE', value: 'Full-Stack Developer' },
        { label: 'COMPANY', value: 'Altius Infoway' },
        { label: 'WEB EXP', value: '4+ Years' },
        { label: 'INDUSTRIAL', value: '7+ Years' },
        { label: 'PLATFORMS', value: '100+ Live' },
      ].map(({ label, value }) => (
        <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', marginBottom: '3px' }}>
          <span style={{ color: '#4a7a9b' }}>{label}</span>
          <span style={{ color: '#7dd3fc' }}>{value}</span>
        </div>
      ))}
      <div style={{ marginTop: '6px', borderTop: '1px solid #0a1e3a', paddingTop: '4px' }}>
        <div style={{ fontSize: '7px', color: '#1e5a9a', letterSpacing: '1px' }}>
          github.com/pratik-mandani
        </div>
      </div>
    </div>
  );
}

function SystemsMonitor() {
  const systems = [
    { name: 'PHP/Laravel', val: 90, color: '#818cf8' },
    { name: 'MySQL', val: 85, color: '#60a5fa' },
    { name: 'JavaScript', val: 82, color: '#fbbf24' },
    { name: 'ESP32/C++', val: 75, color: '#4ade80' },
    { name: 'PCB Design', val: 70, color: '#22d3ee' },
    { name: 'HTML5/CSS3', val: 92, color: '#f472b6' },
  ];
  return (
    <div style={{
      width: '240px', height: '180px',
      background: '#030912', border: '1px solid #0e2860',
      fontFamily: '"Courier New", monospace', color: '#7dd3fc',
      padding: '8px', boxSizing: 'border-box', overflow: 'hidden',
    }}>
      <div style={{ color: '#818cf8', fontSize: '8px', letterSpacing: '2px', borderBottom: '1px solid #0e2060', paddingBottom: '4px', marginBottom: '6px' }}>
        SKILLS_MATRIX.sys
      </div>
      {systems.map(({ name, val, color }) => (
        <div key={name} style={{ marginBottom: '5px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '7px', marginBottom: '2px' }}>
            <span style={{ color: '#94a3b8' }}>{name}</span>
            <span style={{ color }}>{val}%</span>
          </div>
          <div style={{ background: '#050f1f', height: '4px', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ width: `${val}%`, height: '100%', background: color, borderRadius: '2px', transition: 'width 0.3s' }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function TerminalMonitor() {
  const lines = [
    '> BOOTING engineering_lab_v2.0',
    '> Loading career_data.json ... OK',
    '> Initializing 3D_scene.tsx ... OK',
    '> Connecting to portfolio_api ... OK',
    '',
    '> STATS:',
    '  ◈ Web Platforms : 100+',
    '  ◈ Vending Units : 200+ QA',
    '  ◈ Years Exp     : 7+ industrial',
    '  ◈ ESP32 Projs   : 2+ firmware',
    '',
    '> STATUS: ENGINEER_ONLINE ✓',
    '> Ready. Enter lab to explore._',
  ];
  const [visibleLines, setVisibleLines] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setVisibleLines(v => (v < lines.length ? v + 1 : v));
    }, 350);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{
      width: '240px', height: '180px',
      background: '#030912', border: '1px solid #0e4020',
      fontFamily: '"Courier New", monospace', color: '#4ade80',
      padding: '8px', boxSizing: 'border-box', overflow: 'hidden',
      fontSize: '8px', lineHeight: '1.6',
    }}>
      <div style={{ color: '#22d3ee', fontSize: '8px', letterSpacing: '2px', borderBottom: '1px solid #0a3020', paddingBottom: '4px', marginBottom: '6px' }}>
        SYSTEM_TERMINAL.sh
      </div>
      {lines.slice(0, visibleLines).map((line, i) => (
        <div key={i} style={{ color: line.startsWith('> STATUS') ? '#4ade80' : line.startsWith('  ◈') ? '#7dd3fc' : line.startsWith('> STATS') ? '#fbbf24' : '#4ade80' }}>
          {line || '\u00A0'}
        </div>
      ))}
    </div>
  );
}

function CareerStatMonitor() {
  const stats = [
    { label: 'Current Role', val: 'Full-Stack Dev', sub: 'Altius Infoway' },
    { label: 'Prev. Domain', val: 'Product/Embedded', sub: 'Symbian Vending' },
    { label: 'Education', val: 'Diploma ECE', sub: 'GTU — 2018' },
    { label: 'Location', val: 'Rajkot, GJ, IN', sub: 'India' },
  ];
  return (
    <div style={{
      width: '240px', height: '180px',
      background: '#030912', border: '1px solid #2a1a5e',
      fontFamily: '"Courier New", monospace', color: '#7dd3fc',
      padding: '8px', boxSizing: 'border-box', overflow: 'hidden',
    }}>
      <div style={{ color: '#a78bfa', fontSize: '8px', letterSpacing: '2px', borderBottom: '1px solid #1a1040', paddingBottom: '4px', marginBottom: '6px' }}>
        CAREER_LOG.dat
      </div>
      {stats.map(({ label, val, sub }) => (
        <div key={label} style={{ marginBottom: '10px' }}>
          <div style={{ color: '#64748b', fontSize: '7px', letterSpacing: '1px' }}>{label.toUpperCase()}</div>
          <div style={{ color: '#e2e8f0', fontSize: '9px', fontWeight: 600, marginTop: '1px' }}>{val}</div>
          <div style={{ color: '#4a7a9b', fontSize: '7px' }}>{sub}</div>
        </div>
      ))}
      <div style={{ borderTop: '1px solid #1a1040', paddingTop: '4px', fontSize: '7px', color: '#4a1d96' }}>
        TOTAL_EXP // 7+ YRS TOTAL
      </div>
    </div>
  );
}

interface SmallMonitorProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  children: React.ReactNode;
  color: string;
}

function SmallMonitor({ position, rotation = [0, 0, 0], children, color }: SmallMonitorProps) {
  const frameRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (frameRef.current) {
      const mat = frameRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.1 + Math.sin(clock.elapsedTime * 1.2 + position[0]) * 0.04;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Frame */}
      <mesh ref={frameRef} castShadow>
        <boxGeometry args={[1.58, 1.18, 0.05]} />
        <meshStandardMaterial color="#0d1527" metalness={0.6} roughness={0.4} emissive={color} emissiveIntensity={0.1} />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 0, 0.026]}>
        <planeGeometry args={[1.46, 1.06]} />
        <meshStandardMaterial color="#030912" emissive={color} emissiveIntensity={0.12} />
      </mesh>
      {/* Stand */}
      <mesh position={[0, -0.65, 0.01]}>
        <boxGeometry args={[0.06, 0.1, 0.04]} />
        <meshStandardMaterial color="#1e293b" metalness={0.6} />
      </mesh>
      <mesh position={[0, -0.72, 0.05]}>
        <boxGeometry args={[0.35, 0.03, 0.22]} />
        <meshStandardMaterial color="#1e293b" metalness={0.6} />
      </mesh>
      {/* Power LED */}
      <mesh position={[0.7, -0.53, 0.03]}>
        <sphereGeometry args={[0.01, 6, 6]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={4} />
      </mesh>
      {/* HTML Content */}
      <Html transform position={[0, 0, 0.03]} distanceFactor={1.2} occlude={false} style={{ pointerEvents: 'none' }}>
        {children}
      </Html>
    </group>
  );
}

export function SecondaryMonitors() {
  return (
    <>
      {/* Left monitor — Profile */}
      <SmallMonitor position={[-3.05, 1.78, -2.22]} color="#38bdf8">
        <ProfileMonitor />
      </SmallMonitor>

      {/* Right monitor — Skills matrix */}
      <SmallMonitor position={[3.05, 1.78, -2.22]} color="#818cf8">
        <SystemsMonitor />
      </SmallMonitor>

      {/* Upper left — Terminal */}
      <SmallMonitor position={[-1.55, 2.65, -2.3]} rotation={[0.08, 0.05, 0]} color="#4ade80">
        <TerminalMonitor />
      </SmallMonitor>

      {/* Upper right — Career log */}
      <SmallMonitor position={[1.55, 2.65, -2.3]} rotation={[0.08, -0.05, 0]} color="#a78bfa">
        <CareerStatMonitor />
      </SmallMonitor>
    </>
  );
}
