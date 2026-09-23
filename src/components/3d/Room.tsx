// Compact, believable modern R&D engineering laboratory architecture
// No giant wireframe grid; realistic materials, polished slate/epoxy floor, and architectural feature wall
import { useMemo } from 'react';

const FLOOR_COLOR = '#0e1218';
const WALL_BASE = '#111620';
const WALL_PANEL = '#161c28';
const SLAT_COLOR = '#1c2230';
const SLAT_WOOD = '#28201a';
const TRIM_COLOR = '#1f2736';
const CEILING_COLOR = '#0a0d13';

function AcousticSlatWall() {
  // Architectural vertical acoustic slats behind the workstation
  const slats = useMemo(() => {
    const list = [];
    const count = 38;
    const spacing = 0.11;
    const startX = -((count * spacing) / 2);
    for (let i = 0; i < count; i++) {
      list.push(startX + i * spacing);
    }
    return list;
  }, []);

  return (
    <group position={[0, 1.8, -3.15]}>
      {/* Slat backing acoustic felt */}
      <mesh position={[0, 0, -0.015]}>
        <planeGeometry args={[4.4, 3.6]} />
        <meshStandardMaterial color="#080b10" roughness={0.95} />
      </mesh>
      {/* Vertical slats with subtle dark walnut / smoked oak warmth */}
      {slats.map((x, i) => (
        <mesh key={i} position={[x, 0, 0]}>
          <boxGeometry args={[0.045, 3.5, 0.025]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? SLAT_WOOD : SLAT_COLOR}
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
      ))}
      {/* Subtle warm wash behind top of slat panel */}
      <mesh position={[0, 1.76, 0.02]}>
        <boxGeometry args={[4.3, 0.025, 0.04]} />
        <meshStandardMaterial
          color="#ffd599"
          emissive="#ffa84d"
          emissiveIntensity={0.8}
        />
      </mesh>
    </group>
  );
}

function CeilingConduits() {
  return (
    <group position={[0, 3.45, -1]}>
      {/* Industrial cable tray / ladder rack running across the room */}
      <mesh position={[0, 0, -1.2]}>
        <boxGeometry args={[8.0, 0.05, 0.35]} />
        <meshStandardMaterial color="#1a202c" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Longitudinal cable conduit pipes */}
      {[-0.08, 0, 0.08].map((offset, i) => (
        <mesh key={i} position={[0, 0.035, -1.2 + offset]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.015, 0.015, 8.0, 8]} />
          <meshStandardMaterial color="#2d3748" metalness={0.7} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function WorkbenchPegboard() {
  // Tool board mounted on left wall above the electronics workbench
  return (
    <group position={[-4.18, 1.85, -1.2]} rotation={[0, Math.PI / 2, 0]}>
      {/* Pegboard base */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.4, 1.4, 0.03]} />
        <meshStandardMaterial color="#171d28" roughness={0.85} metalness={0.2} />
      </mesh>
      {/* Metal frame */}
      <mesh position={[0, 0, -0.01]}>
        <boxGeometry args={[2.44, 1.44, 0.02]} />
        <meshStandardMaterial color="#252f40" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Tool hanging silhouette details: wire spools, pliers, calipers */}
      <mesh position={[-0.8, 0.3, 0.035]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.06, 16]} />
        <meshStandardMaterial color="#3b82f6" roughness={0.6} />
      </mesh>
      <mesh position={[-0.6, 0.3, 0.035]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.06, 16]} />
        <meshStandardMaterial color="#ef4444" roughness={0.6} />
      </mesh>
      {/* Small parts bin rack */}
      {[-0.4, 0, 0.4, 0.8].map((x, i) => (
        <mesh key={i} position={[x, -0.35, 0.05]}>
          <boxGeometry args={[0.26, 0.16, 0.12]} />
          <meshStandardMaterial color="#1e293b" roughness={0.7} metalness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

export function Room() {
  return (
    <group>
      {/* Polished dark slate/epoxy floor with subtle specular sheen (NO wireframe grid!) */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[9.0, 8.0]} />
        <meshStandardMaterial
          color={FLOOR_COLOR}
          roughness={0.38}
          metalness={0.15}
        />
      </mesh>

      {/* Back architectural wall */}
      <mesh position={[0, 1.8, -3.2]} receiveShadow>
        <planeGeometry args={[9.0, 3.6]} />
        <meshStandardMaterial color={WALL_BASE} roughness={0.9} metalness={0.05} />
      </mesh>

      {/* Slat feature panel directly behind desk */}
      <AcousticSlatWall />

      {/* Left wall */}
      <mesh position={[-4.2, 1.8, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[8.0, 3.6]} />
        <meshStandardMaterial color={WALL_PANEL} roughness={0.9} metalness={0.05} />
      </mesh>

      {/* Left workbench tool pegboard */}
      <WorkbenchPegboard />

      {/* Right wall */}
      <mesh position={[4.2, 1.8, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[8.0, 3.6]} />
        <meshStandardMaterial color={WALL_PANEL} roughness={0.9} metalness={0.05} />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, 3.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[9.0, 8.0]} />
        <meshStandardMaterial color={CEILING_COLOR} roughness={0.95} metalness={0.05} />
      </mesh>

      {/* Architectural baseboards with subtle dark anodized aluminum finish */}
      {/* Back wall baseboard */}
      <mesh position={[0, 0.05, -3.18]}>
        <boxGeometry args={[9.0, 0.1, 0.04]} />
        <meshStandardMaterial color={TRIM_COLOR} metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Left wall baseboard */}
      <mesh position={[-4.18, 0.05, 0]}>
        <boxGeometry args={[0.04, 0.1, 8.0]} />
        <meshStandardMaterial color={TRIM_COLOR} metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Right wall baseboard */}
      <mesh position={[4.18, 0.05, 0]}>
        <boxGeometry args={[0.04, 0.1, 8.0]} />
        <meshStandardMaterial color={TRIM_COLOR} metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Overhead industrial cable trays */}
      <CeilingConduits />
    </group>
  );
}
