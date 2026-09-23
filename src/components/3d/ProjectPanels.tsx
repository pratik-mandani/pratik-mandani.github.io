// Project display panels mounted on the right architectural wall of the compact lab
import { useState } from 'react';
import { Html } from '@react-three/drei';
import { useLab } from '../../context/LabContext';
import { projectCaseStudies } from '../../data/portfolioData';

const FEATURED = projectCaseStudies.filter((p) => p.isFeatured).slice(0, 5);

const CATEGORY_COLOR: Record<string, string> = {
  hardware: '#22d3ee',
  embedded: '#f472b6',
  automation: '#fbbf24',
  web: '#818cf8',
};

function ProjectCard({ project }: { project: typeof FEATURED[0] }) {
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
        background: hovered ? '#091528' : '#060e1a',
        border: `1px solid ${hovered ? color + '55' : '#1e293b'}`,
        borderLeft: `3px solid ${color}`,
        borderRadius: '3px',
        padding: '7px 10px',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
        <span style={{ color, fontSize: '7.5px', letterSpacing: '1px', fontWeight: 700 }}>
          {project.category.toUpperCase()}
        </span>
        <span style={{ color: '#64748b', fontSize: '7.5px' }}>{project.period}</span>
      </div>
      <div style={{ color: '#f8fafc', fontSize: '9.5px', fontWeight: 600, marginBottom: '2px', lineHeight: 1.3 }}>
        {project.title}
      </div>
      <div style={{ color: '#94a3b8', fontSize: '7.5px', lineHeight: 1.35, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        {project.summary}
      </div>
      {hovered && (
        <div style={{ marginTop: '4px', color, fontSize: '7.5px', fontWeight: 700, letterSpacing: '1px' }}>
          [ VIEW FULL CASE STUDY → ]
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
        width: '320px',
        background: 'rgba(4, 9, 18, 0.95)',
        border: '1px solid #1e3a5f',
        borderTop: '2px solid #818cf8',
        borderRadius: '5px',
        fontFamily: '"JetBrains Mono", "Courier New", monospace',
        padding: '12px',
        boxSizing: 'border-box',
        pointerEvents: 'auto',
        userSelect: 'none',
        boxShadow: '0 0 30px rgba(0,0,0,0.8)',
      }}
    >
      <div style={{ borderBottom: '1px solid #1e2e46', paddingBottom: '6px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ color: '#818cf8', fontSize: '10px', letterSpacing: '1.5px', fontWeight: 800 }}>
          PROJECT_ARCHIVE
        </div>
        <button
          onClick={() => {
            dispatch({ type: 'NAVIGATE', section: 'projects' });
            dispatch({ type: 'OPEN_PANEL', panel: 'projects' });
          }}
          style={{ color: '#4ade80', fontSize: '8px', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '1px', fontWeight: 700 }}
        >
          VIEW ALL →
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {FEATURED.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}

export function ProjectPanels() {
  return (
    <group position={[4.16, 1.8, -0.8]} rotation={[0, -Math.PI / 2, 0]}>
      {/* Wall display chassis */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.6, 2.2, 0.03]} />
        <meshStandardMaterial
          color="#0b1019"
          metalness={0.7}
          roughness={0.3}
          emissive="#121826"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Frame border */}
      <mesh position={[0, 0, 0.016]}>
        <boxGeometry args={[1.62, 2.22, 0.01]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* HTML Content */}
      <Html
        transform
        position={[0, 0, 0.022]}
        distanceFactor={1.35}
        occlude={false}
        style={{ pointerEvents: 'auto' }}
      >
        <ProjectsContent />
      </Html>
    </group>
  );
}
