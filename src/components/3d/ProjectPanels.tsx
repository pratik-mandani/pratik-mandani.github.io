// Project display panels — right wall showing web and hardware projects
import { useState } from 'react';
import { ThreeEvent } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { useLab } from '../../context/LabContext';
import { projectCaseStudies } from '../../data/portfolioData';

const FEATURED = projectCaseStudies.filter((p) => p.isFeatured).slice(0, 6);

const CATEGORY_COLOR: Record<string, string> = {
  hardware: '#22d3ee',
  embedded: '#f472b6',
  automation: '#fbbf24',
  web: '#818cf8',
};

function ProjectCard({ project, index }: { project: typeof FEATURED[0]; index: number }) {
  const { dispatch } = useLab();
  const [hovered, setHovered] = useState(false);
  const color = CATEGORY_COLOR[project.category] || '#38bdf8';

  function handleClick() {
    dispatch({ type: 'OPEN_PROJECT', id: project.id });
  }

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#071220' : '#050d1a',
        border: `1px solid ${hovered ? color + '44' : color + '22'}`,
        borderLeft: `2px solid ${color}`,
        borderRadius: '3px',
        padding: '8px 10px',
        cursor: 'pointer',
        transition: 'all 0.15s',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
        <div style={{ color, fontSize: '7px', letterSpacing: '1.5px', fontWeight: 700 }}>
          {project.category.toUpperCase()}
        </div>
        <div style={{ color: '#2a4a6a', fontSize: '7px' }}>{project.period}</div>
      </div>
      <div style={{ color: '#e2e8f0', fontSize: '9px', fontWeight: 600, marginBottom: '3px', lineHeight: 1.3 }}>
        {project.title}
      </div>
      <div style={{ color: '#4a7a9b', fontSize: '7px', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        {project.summary}
      </div>
      {hovered && (
        <div style={{ marginTop: '5px', color, fontSize: '7px', letterSpacing: '1px' }}>
          [ OPEN CASE STUDY → ]
        </div>
      )}
    </div>
  );
}

function ProjectsContent() {
  const { dispatch } = useLab();
  return (
    <div
      style={{
        width: '380px',
        height: '420px',
        background: 'rgba(3, 9, 18, 0.96)',
        border: '1px solid #0e3060',
        borderRadius: '4px',
        fontFamily: '"Courier New", monospace',
        padding: '10px',
        boxSizing: 'border-box',
        overflowY: 'auto',
        pointerEvents: 'auto',
        userSelect: 'none',
      }}
    >
      <div style={{ borderBottom: '1px solid #0e3060', paddingBottom: '6px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ color: '#818cf8', fontSize: '9px', letterSpacing: '2px', fontWeight: 700 }}>PROJECT_ARCHIVE.sys</div>
        <button
          onClick={() => { dispatch({ type: 'NAVIGATE', section: 'projects' }); dispatch({ type: 'OPEN_PANEL', panel: 'projects' }); }}
          style={{ color: '#4ade80', fontSize: '7px', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '1px' }}
        >
          VIEW ALL →
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {FEATURED.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}

export function ProjectPanels() {
  return (
    <group>
      {/* Right wall panel mount */}
      <mesh position={[9.2, 3.2, -3]} castShadow>
        <boxGeometry args={[0.06, 3.6, 3.4]} />
        <meshStandardMaterial color="#0a1020" roughness={0.8} metalness={0.3} />
      </mesh>

      {/* Main projects board */}
      <mesh position={[9.16, 3.2, -3]}>
        <boxGeometry args={[0.02, 3.4, 3.2]} />
        <meshStandardMaterial color="#030912" emissive="#081428" emissiveIntensity={0.3} />
      </mesh>

      {/* Corner accent LEDs */}
      {[[1.6, 1.4], [1.6, -1.4], [-1.6, 1.4], [-1.6, -1.4]].map(([z, y], i) => (
        <mesh key={i} position={[9.17, 3.2 + y, -3 + z]}>
          <sphereGeometry args={[0.02, 6, 6]} />
          <meshStandardMaterial color="#818cf8" emissive="#818cf8" emissiveIntensity={3} />
        </mesh>
      ))}

      {/* Side edge lights */}
      <mesh position={[9.17, 3.2, -4.6]}>
        <boxGeometry args={[0.01, 3.0, 0.02]} />
        <meshStandardMaterial color="#818cf8" emissive="#818cf8" emissiveIntensity={1} />
      </mesh>
      <mesh position={[9.17, 3.2, -1.4]}>
        <boxGeometry args={[0.01, 3.0, 0.02]} />
        <meshStandardMaterial color="#818cf8" emissive="#818cf8" emissiveIntensity={1} />
      </mesh>

      {/* HTML Projects Content */}
      <Html
        transform
        position={[9.14, 3.2, -3]}
        rotation={[0, -Math.PI / 2, 0]}
        distanceFactor={2.2}
        occlude={false}
        style={{ pointerEvents: 'auto' }}
      >
        <ProjectsContent />
      </Html>

      {/* Small decorative panels on right wall */}
      <mesh position={[9.0, 1.2, -1]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[1.0, 0.6, 0.04]} />
        <meshStandardMaterial color="#080e1c" emissive="#04080e" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[9.0, 1.2, -5]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[1.0, 0.6, 0.04]} />
        <meshStandardMaterial color="#080e1c" emissive="#04080e" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}
