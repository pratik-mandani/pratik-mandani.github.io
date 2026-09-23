// Main engineering desk, chair, and desk accessories
import { useRef } from 'react';
import * as THREE from 'three';

const DESK_COLOR = '#111827';
const DESK_EDGE = '#1e293b';
const METAL = '#374151';
const CHAIR_BODY = '#1f2937';
const CHAIR_ACCENT = '#0e3a5c';

function DeskLamp() {
  return (
    <group position={[1.6, 0.85, -1.6]}>
      {/* Base */}
      <mesh>
        <cylinderGeometry args={[0.12, 0.15, 0.04, 12]} />
        <meshStandardMaterial color={METAL} metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Arm */}
      <mesh position={[0, 0.4, 0]} rotation={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.015, 0.015, 0.8, 8]} />
        <meshStandardMaterial color={METAL} metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Head */}
      <mesh position={[0.15, 0.85, 0]}>
        <cylinderGeometry args={[0.08, 0.05, 0.14, 10]} />
        <meshStandardMaterial color={METAL} metalness={0.7} roughness={0.3} emissive="#fef3c7" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
}

function MugOrCup() {
  return (
    <group position={[-1.5, 0.85, -1.4]}>
      <mesh>
        <cylinderGeometry args={[0.065, 0.055, 0.12, 12]} />
        <meshStandardMaterial color="#1e3a5f" roughness={0.6} metalness={0.2} emissive="#0e1f3a" emissiveIntensity={0.5} />
      </mesh>
      {/* Handle */}
      <mesh position={[0.09, 0, 0]}>
        <torusGeometry args={[0.035, 0.01, 6, 10, Math.PI]} />
        <meshStandardMaterial color="#1e3a5f" roughness={0.6} />
      </mesh>
    </group>
  );
}

function Keyboard() {
  return (
    <group position={[0, 0.8, -0.5]}>
      <mesh>
        <boxGeometry args={[1.2, 0.025, 0.4]} />
        <meshStandardMaterial color="#1a2333" roughness={0.8} metalness={0.3} />
      </mesh>
      {/* Key rows — just visual blocks */}
      {[-0.15, -0.05, 0.05, 0.12].map((z, i) => (
        <mesh key={i} position={[0, 0.018, z]}>
          <boxGeometry args={[1.1, 0.008, 0.07]} />
          <meshStandardMaterial color="#0d1a2a" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function Mouse() {
  return (
    <group position={[0.85, 0.8, -0.5]}>
      <mesh>
        <boxGeometry args={[0.12, 0.025, 0.2]} />
        <meshStandardMaterial color="#1a2333" roughness={0.7} metalness={0.3} />
      </mesh>
      {/* Scroll wheel */}
      <mesh position={[0, 0.02, -0.03]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.06, 8]} />
        <meshStandardMaterial color="#374151" metalness={0.6} roughness={0.4} />
      </mesh>
    </group>
  );
}

export function Workstation() {
  return (
    <group>
      {/* Main desk surface */}
      <mesh position={[0, 0.78, -1.5]} castShadow receiveShadow>
        <boxGeometry args={[4.5, 0.06, 2.2]} />
        <meshStandardMaterial color={DESK_COLOR} roughness={0.7} metalness={0.1} />
      </mesh>

      {/* Desk front edge highlight */}
      <mesh position={[0, 0.75, -0.42]}>
        <boxGeometry args={[4.5, 0.04, 0.02]} />
        <meshStandardMaterial color={DESK_EDGE} emissive="#0a2040" emissiveIntensity={0.3} />
      </mesh>

      {/* Left desk leg */}
      <mesh position={[-2.1, 0.38, -2.2]}>
        <boxGeometry args={[0.06, 0.76, 0.06]} />
        <meshStandardMaterial color={METAL} metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Left desk leg front */}
      <mesh position={[-2.1, 0.38, -0.45]}>
        <boxGeometry args={[0.06, 0.76, 0.06]} />
        <meshStandardMaterial color={METAL} metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Right desk leg */}
      <mesh position={[2.1, 0.38, -2.2]}>
        <boxGeometry args={[0.06, 0.76, 0.06]} />
        <meshStandardMaterial color={METAL} metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Right desk leg front */}
      <mesh position={[2.1, 0.38, -0.45]}>
        <boxGeometry args={[0.06, 0.76, 0.06]} />
        <meshStandardMaterial color={METAL} metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Under-desk cable tray */}
      <mesh position={[0, 0.55, -1.5]}>
        <boxGeometry args={[3.5, 0.04, 0.15]} />
        <meshStandardMaterial color={METAL} metalness={0.7} roughness={0.5} />
      </mesh>

      {/* Chair base */}
      <mesh position={[0, 0.05, 0.8]}>
        <cylinderGeometry args={[0.55, 0.55, 0.04, 20]} />
        <meshStandardMaterial color={METAL} metalness={0.7} roughness={0.4} />
      </mesh>
      {/* Chair stem */}
      <mesh position={[0, 0.35, 0.8]}>
        <cylinderGeometry args={[0.04, 0.06, 0.6, 10]} />
        <meshStandardMaterial color={METAL} metalness={0.7} roughness={0.4} />
      </mesh>
      {/* Chair seat */}
      <mesh position={[0, 0.65, 0.8]}>
        <boxGeometry args={[0.65, 0.08, 0.65]} />
        <meshStandardMaterial color={CHAIR_BODY} roughness={0.9} metalness={0} />
      </mesh>
      {/* Chair back */}
      <mesh position={[0, 1.15, 0.48]}>
        <boxGeometry args={[0.6, 0.9, 0.06]} />
        <meshStandardMaterial color={CHAIR_BODY} roughness={0.9} metalness={0} />
      </mesh>
      {/* Chair back accent strip */}
      <mesh position={[0, 1.15, 0.45]}>
        <boxGeometry args={[0.08, 0.85, 0.02]} />
        <meshStandardMaterial color={CHAIR_ACCENT} emissive={CHAIR_ACCENT} emissiveIntensity={0.3} />
      </mesh>
      {/* Chair armrests */}
      <mesh position={[-0.38, 0.9, 0.72]}>
        <boxGeometry args={[0.06, 0.04, 0.5]} />
        <meshStandardMaterial color={METAL} metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[0.38, 0.9, 0.72]}>
        <boxGeometry args={[0.06, 0.04, 0.5]} />
        <meshStandardMaterial color={METAL} metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Accessories */}
      <DeskLamp />
      <MugOrCup />
      <Keyboard />
      <Mouse />

      {/* Small notebook */}
      <mesh position={[1.2, 0.81, -0.9]} rotation={[0, 0.15, 0]}>
        <boxGeometry args={[0.28, 0.014, 0.38]} />
        <meshStandardMaterial color="#1e3a5f" roughness={0.9} />
      </mesh>

      {/* Monitor stand riser */}
      <mesh position={[0, 0.95, -2.1]}>
        <boxGeometry args={[3.6, 0.03, 0.3]} />
        <meshStandardMaterial color={DESK_EDGE} roughness={0.8} metalness={0.2} />
      </mesh>
    </group>
  );
}
