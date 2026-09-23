// Low-poly developer character with breathing idle animation
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SHIRT_COLOR = '#1a2744';
const PANTS_COLOR = '#111827';
const SKIN_COLOR = '#d4956a';
const HAIR_COLOR = '#1a0a00';
const SHOE_COLOR = '#0d1117';

export function DeveloperCharacter() {
  const torsoRef = useRef<THREE.Mesh>(null);
  const headRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    // Breathing — very gentle torso scale
    if (torsoRef.current) {
      torsoRef.current.scale.y = 1 + Math.sin(t * 0.9) * 0.012;
      torsoRef.current.position.y = 1.05 + Math.sin(t * 0.9) * 0.005;
    }
    // Subtle head tilt
    if (headRef.current) {
      headRef.current.rotation.z = Math.sin(t * 0.35) * 0.025;
      headRef.current.rotation.y = Math.sin(t * 0.22) * 0.03;
    }
  });

  // Character sits at z=0.8, slightly reclined in chair
  return (
    <group position={[0, 0.68, 0.8]} rotation={[0.06, 0, 0]}>
      {/* Legs */}
      <mesh position={[-0.13, 0, 0.18]}>
        <boxGeometry args={[0.15, 0.12, 0.42]} />
        <meshStandardMaterial color={PANTS_COLOR} roughness={0.9} />
      </mesh>
      <mesh position={[0.13, 0, 0.18]}>
        <boxGeometry args={[0.15, 0.12, 0.42]} />
        <meshStandardMaterial color={PANTS_COLOR} roughness={0.9} />
      </mesh>
      {/* Lower legs — hanging */}
      <mesh position={[-0.13, -0.2, 0.45]}>
        <boxGeometry args={[0.13, 0.34, 0.13]} />
        <meshStandardMaterial color={PANTS_COLOR} roughness={0.9} />
      </mesh>
      <mesh position={[0.13, -0.2, 0.45]}>
        <boxGeometry args={[0.13, 0.34, 0.13]} />
        <meshStandardMaterial color={PANTS_COLOR} roughness={0.9} />
      </mesh>
      {/* Shoes */}
      <mesh position={[-0.13, -0.38, 0.52]}>
        <boxGeometry args={[0.14, 0.07, 0.22]} />
        <meshStandardMaterial color={SHOE_COLOR} roughness={0.8} />
      </mesh>
      <mesh position={[0.13, -0.38, 0.52]}>
        <boxGeometry args={[0.14, 0.07, 0.22]} />
        <meshStandardMaterial color={SHOE_COLOR} roughness={0.8} />
      </mesh>

      {/* Torso */}
      <mesh ref={torsoRef} position={[0, 1.05, -0.08]}>
        <boxGeometry args={[0.48, 0.52, 0.28]} />
        <meshStandardMaterial color={SHIRT_COLOR} roughness={0.8} />
      </mesh>

      {/* Collar area */}
      <mesh position={[0, 1.32, -0.06]}>
        <boxGeometry args={[0.28, 0.1, 0.25]} />
        <meshStandardMaterial color={SHIRT_COLOR} roughness={0.8} />
      </mesh>

      {/* Upper arms */}
      <mesh position={[-0.32, 1.06, -0.04]} rotation={[0.1, 0, 0.15]}>
        <boxGeometry args={[0.14, 0.38, 0.14]} />
        <meshStandardMaterial color={SHIRT_COLOR} roughness={0.8} />
      </mesh>
      <mesh position={[0.32, 1.06, -0.04]} rotation={[0.1, 0, -0.15]}>
        <boxGeometry args={[0.14, 0.38, 0.14]} />
        <meshStandardMaterial color={SHIRT_COLOR} roughness={0.8} />
      </mesh>

      {/* Forearms — resting on armrests/desk */}
      <mesh position={[-0.38, 0.9, 0.22]} rotation={[-0.5, 0, 0.05]}>
        <boxGeometry args={[0.12, 0.32, 0.12]} />
        <meshStandardMaterial color={SKIN_COLOR} roughness={0.6} />
      </mesh>
      <mesh position={[0.38, 0.9, 0.22]} rotation={[-0.5, 0, -0.05]}>
        <boxGeometry args={[0.12, 0.32, 0.12]} />
        <meshStandardMaterial color={SKIN_COLOR} roughness={0.6} />
      </mesh>

      {/* Hands */}
      <mesh position={[-0.38, 0.75, 0.4]}>
        <boxGeometry args={[0.1, 0.07, 0.13]} />
        <meshStandardMaterial color={SKIN_COLOR} roughness={0.6} />
      </mesh>
      <mesh position={[0.38, 0.75, 0.4]}>
        <boxGeometry args={[0.1, 0.07, 0.13]} />
        <meshStandardMaterial color={SKIN_COLOR} roughness={0.6} />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 1.4, -0.05]}>
        <cylinderGeometry args={[0.07, 0.08, 0.1, 10]} />
        <meshStandardMaterial color={SKIN_COLOR} roughness={0.6} />
      </mesh>

      {/* Head */}
      <group ref={headRef} position={[0, 1.63, -0.04]}>
        <mesh>
          <boxGeometry args={[0.28, 0.3, 0.26]} />
          <meshStandardMaterial color={SKIN_COLOR} roughness={0.6} />
        </mesh>
        {/* Hair */}
        <mesh position={[0, 0.14, -0.01]}>
          <boxGeometry args={[0.29, 0.1, 0.27]} />
          <meshStandardMaterial color={HAIR_COLOR} roughness={0.9} />
        </mesh>
        {/* Side hair */}
        <mesh position={[-0.145, 0.06, 0]}>
          <boxGeometry args={[0.02, 0.18, 0.24]} />
          <meshStandardMaterial color={HAIR_COLOR} roughness={0.9} />
        </mesh>
        <mesh position={[0.145, 0.06, 0]}>
          <boxGeometry args={[0.02, 0.18, 0.24]} />
          <meshStandardMaterial color={HAIR_COLOR} roughness={0.9} />
        </mesh>
        {/* Eyes */}
        <mesh position={[-0.07, 0.02, 0.134]}>
          <boxGeometry args={[0.055, 0.03, 0.01]} />
          <meshStandardMaterial color="#0a0a0a" />
        </mesh>
        <mesh position={[0.07, 0.02, 0.134]}>
          <boxGeometry args={[0.055, 0.03, 0.01]} />
          <meshStandardMaterial color="#0a0a0a" />
        </mesh>
        {/* Eye glow (screen reflection) */}
        <mesh position={[-0.07, 0.02, 0.136]}>
          <boxGeometry args={[0.02, 0.015, 0.002]} />
          <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={1.5} />
        </mesh>
        <mesh position={[0.07, 0.02, 0.136]}>
          <boxGeometry args={[0.02, 0.015, 0.002]} />
          <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={1.5} />
        </mesh>
        {/* Glasses frame */}
        <mesh position={[-0.07, 0.02, 0.135]}>
          <boxGeometry args={[0.08, 0.055, 0.005]} />
          <meshStandardMaterial color="transparent" opacity={0} transparent />
        </mesh>
      </group>
    </group>
  );
}
