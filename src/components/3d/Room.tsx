// Lab room geometry — floor, back wall, side walls, ceiling with engineering aesthetic
import * as THREE from 'three';
import { useMemo } from 'react';

const FLOOR_COLOR = '#080c12';
const WALL_COLOR = '#090d15';
const CEILING_COLOR = '#060a10';
const GRID_COLOR = '#0d2040';
const ACCENT_LINE = '#0e3060';

function GridFloor() {
  const gridRef = useMemo(() => {
    const grid = new THREE.GridHelper(24, 48, GRID_COLOR, GRID_COLOR);
    return grid;
  }, []);

  return (
    <group position={[0, 0.001, 0]}>
      <primitive object={gridRef} />
    </group>
  );
}

export function Room() {
  return (
    <group>
      {/* Floor */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[22, 18]} />
        <meshStandardMaterial color={FLOOR_COLOR} roughness={0.95} metalness={0.05} />
      </mesh>
      <GridFloor />

      {/* Back wall */}
      <mesh position={[0, 3.5, -8.5]} receiveShadow>
        <planeGeometry args={[22, 7]} />
        <meshStandardMaterial color={WALL_COLOR} roughness={1} metalness={0} />
      </mesh>

      {/* Left wall */}
      <mesh position={[-11, 3.5, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[18, 7]} />
        <meshStandardMaterial color={WALL_COLOR} roughness={1} metalness={0} />
      </mesh>

      {/* Right wall */}
      <mesh position={[11, 3.5, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[18, 7]} />
        <meshStandardMaterial color={WALL_COLOR} roughness={1} metalness={0} />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, 7, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[22, 18]} />
        <meshStandardMaterial color={CEILING_COLOR} roughness={1} metalness={0} />
      </mesh>

      {/* Baseboard accent lines — left wall */}
      <mesh position={[-10.9, 0.04, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[18, 0.06]} />
        <meshStandardMaterial color={ACCENT_LINE} emissive={ACCENT_LINE} emissiveIntensity={0.4} />
      </mesh>

      {/* Baseboard accent lines — right wall */}
      <mesh position={[10.9, 0.04, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[18, 0.06]} />
        <meshStandardMaterial color={ACCENT_LINE} emissive={ACCENT_LINE} emissiveIntensity={0.4} />
      </mesh>

      {/* Baseboard accent lines — back wall */}
      <mesh position={[0, 0.04, -8.4]}>
        <planeGeometry args={[22, 0.06]} />
        <meshStandardMaterial color={ACCENT_LINE} emissive={ACCENT_LINE} emissiveIntensity={0.4} />
      </mesh>

      {/* Ceiling corner accent strips */}
      <mesh position={[0, 6.95, -8.4]}>
        <planeGeometry args={[22, 0.06]} />
        <meshStandardMaterial color={ACCENT_LINE} emissive={ACCENT_LINE} emissiveIntensity={0.2} />
      </mesh>

      {/* Wall-mounted ceiling rack (industrial look) */}
      <mesh position={[0, 6.4, -4]}>
        <boxGeometry args={[18, 0.06, 0.3]} />
        <meshStandardMaterial color="#111827" roughness={0.7} metalness={0.5} />
      </mesh>
    </group>
  );
}
