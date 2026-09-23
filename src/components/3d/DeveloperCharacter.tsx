// Symbolic developer character sitting relaxed / sleeping in the chair
// Visual Joke: "The engineer thinks. The AI executes."
// Recognizable human posture, distinct clothing materials, relaxed arms on armrests, subtle breathing animation
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const HOODIE_COLOR = '#242e3d';
const HOODIE_SHADOW = '#1c2430';
const PANTS_COLOR = '#191f2b';
const SNEAKER_BASE = '#e2e8f0';
const SNEAKER_ACCENT = '#38bdf8';
const SKIN_TONE = '#c28862';
const HAIR_COLOR = '#181311';

export function DeveloperCharacter() {
  const chestRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    // Rhythmic, peaceful breathing animation
    if (chestRef.current) {
      chestRef.current.scale.y = 1 + Math.sin(t * 1.0) * 0.015;
      chestRef.current.position.y = 0.9 + Math.sin(t * 1.0) * 0.006;
    }
    // Subtle sleeping/thinking head nod
    if (headRef.current) {
      headRef.current.rotation.x = -0.16 + Math.sin(t * 0.5) * 0.02;
      headRef.current.rotation.z = Math.sin(t * 0.35) * 0.015;
    }
  });

  return (
    <group position={[0, 0, 0.44]}>
      {/* Lower Body: Legs & Sneakers */}
      {/* Thighs resting on seat cushion */}
      <mesh position={[-0.13, 0.55, -0.06]}>
        <boxGeometry args={[0.16, 0.12, 0.44]} />
        <meshStandardMaterial color={PANTS_COLOR} roughness={0.88} />
      </mesh>
      <mesh position={[0.13, 0.55, -0.06]}>
        <boxGeometry args={[0.16, 0.12, 0.44]} />
        <meshStandardMaterial color={PANTS_COLOR} roughness={0.88} />
      </mesh>

      {/* Calves angled down toward floor */}
      <mesh position={[-0.14, 0.28, 0.16]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[0.13, 0.46, 0.13]} />
        <meshStandardMaterial color={PANTS_COLOR} roughness={0.88} />
      </mesh>
      <mesh position={[0.14, 0.28, 0.16]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[0.13, 0.46, 0.13]} />
        <meshStandardMaterial color={PANTS_COLOR} roughness={0.88} />
      </mesh>

      {/* Sneakers resting on floor */}
      <group position={[-0.14, 0.05, 0.22]}>
        <mesh position={[0, 0.02, 0.04]}>
          <boxGeometry args={[0.12, 0.07, 0.24]} />
          <meshStandardMaterial color={HOODIE_SHADOW} roughness={0.7} />
        </mesh>
        {/* White sneaker sole */}
        <mesh position={[0, -0.015, 0.04]}>
          <boxGeometry args={[0.125, 0.03, 0.25]} />
          <meshStandardMaterial color={SNEAKER_BASE} roughness={0.6} />
        </mesh>
        {/* Cyan sneaker accent stripe */}
        <mesh position={[0, 0.015, 0.04]}>
          <boxGeometry args={[0.13, 0.015, 0.12]} />
          <meshStandardMaterial color={SNEAKER_ACCENT} roughness={0.5} />
        </mesh>
      </group>

      <group position={[0.14, 0.05, 0.22]}>
        <mesh position={[0, 0.02, 0.04]}>
          <boxGeometry args={[0.12, 0.07, 0.24]} />
          <meshStandardMaterial color={HOODIE_SHADOW} roughness={0.7} />
        </mesh>
        {/* White sneaker sole */}
        <mesh position={[0, -0.015, 0.04]}>
          <boxGeometry args={[0.125, 0.03, 0.25]} />
          <meshStandardMaterial color={SNEAKER_BASE} roughness={0.6} />
        </mesh>
        {/* Cyan sneaker accent stripe */}
        <mesh position={[0, 0.015, 0.04]}>
          <boxGeometry args={[0.13, 0.015, 0.12]} />
          <meshStandardMaterial color={SNEAKER_ACCENT} roughness={0.5} />
        </mesh>
      </group>

      {/* Pelvis / Waist */}
      <mesh position={[0, 0.62, -0.2]}>
        <boxGeometry args={[0.42, 0.16, 0.28]} />
        <meshStandardMaterial color={PANTS_COLOR} roughness={0.88} />
      </mesh>

      {/* Upper Body (Chest & Torso) - Reclined gently in chair */}
      <group ref={chestRef} position={[0, 0.9, -0.22]} rotation={[-0.1, 0, 0]}>
        {/* Main hoodie torso */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.46, 0.46, 0.28]} />
          <meshStandardMaterial color={HOODIE_COLOR} roughness={0.85} />
        </mesh>
        {/* Front kangaroo pocket pouch */}
        <mesh position={[0, -0.1, 0.145]}>
          <boxGeometry args={[0.28, 0.16, 0.04]} />
          <meshStandardMaterial color={HOODIE_SHADOW} roughness={0.9} />
        </mesh>
        {/* Hoodie collar / cowl */}
        <mesh position={[0, 0.23, 0.02]}>
          <boxGeometry args={[0.3, 0.1, 0.22]} />
          <meshStandardMaterial color={HOODIE_COLOR} roughness={0.85} />
        </mesh>
      </group>

      {/* Relaxed Arms resting on Chair Armrests */}
      {/* Left Shoulder & Upper Arm */}
      <mesh position={[-0.29, 0.88, -0.19]} rotation={[0.25, 0, 0.18]}>
        <boxGeometry args={[0.12, 0.34, 0.14]} />
        <meshStandardMaterial color={HOODIE_COLOR} roughness={0.85} />
      </mesh>
      {/* Left Forearm resting horizontally on left armrest */}
      <mesh position={[-0.32, 0.74, -0.04]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[0.1, 0.1, 0.26]} />
        <meshStandardMaterial color={HOODIE_COLOR} roughness={0.85} />
      </mesh>
      {/* Left Hand resting relaxed on armrest pad */}
      <mesh position={[-0.32, 0.73, 0.1]}>
        <boxGeometry args={[0.08, 0.06, 0.1]} />
        <meshStandardMaterial color={SKIN_TONE} roughness={0.65} />
      </mesh>

      {/* Right Shoulder & Upper Arm */}
      <mesh position={[0.29, 0.88, -0.19]} rotation={[0.25, 0, -0.18]}>
        <boxGeometry args={[0.12, 0.34, 0.14]} />
        <meshStandardMaterial color={HOODIE_COLOR} roughness={0.85} />
      </mesh>
      {/* Right Forearm resting on right armrest */}
      <mesh position={[0.32, 0.74, -0.04]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[0.1, 0.1, 0.26]} />
        <meshStandardMaterial color={HOODIE_COLOR} roughness={0.85} />
      </mesh>
      {/* Right Hand resting relaxed */}
      <mesh position={[0.32, 0.73, 0.1]}>
        <boxGeometry args={[0.08, 0.06, 0.1]} />
        <meshStandardMaterial color={SKIN_TONE} roughness={0.65} />
      </mesh>

      {/* Neck & Head - Resting slightly tilted back against headrest */}
      <group ref={headRef} position={[0, 1.25, -0.26]}>
        {/* Neck */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.065, 0.075, 0.1, 12]} />
          <meshStandardMaterial color={SKIN_TONE} roughness={0.65} />
        </mesh>
        {/* Head */}
        <mesh position={[0, 0.15, 0.02]}>
          <boxGeometry args={[0.23, 0.26, 0.22]} />
          <meshStandardMaterial color={SKIN_TONE} roughness={0.65} />
        </mesh>
        {/* Hair - neat developer haircut */}
        <mesh position={[0, 0.26, 0.01]}>
          <boxGeometry args={[0.24, 0.09, 0.23]} />
          <meshStandardMaterial color={HAIR_COLOR} roughness={0.95} />
        </mesh>
        <mesh position={[0, 0.2, -0.09]}>
          <boxGeometry args={[0.24, 0.18, 0.05]} />
          <meshStandardMaterial color={HAIR_COLOR} roughness={0.95} />
        </mesh>
        {/* Closed / sleeping eyes indication */}
        <mesh position={[-0.06, 0.14, 0.125]}>
          <boxGeometry args={[0.045, 0.008, 0.01]} />
          <meshStandardMaterial color="#2d221e" />
        </mesh>
        <mesh position={[0.06, 0.14, 0.125]}>
          <boxGeometry args={[0.045, 0.008, 0.01]} />
          <meshStandardMaterial color="#2d221e" />
        </mesh>
        {/* Hoodie hood folded back behind neck */}
        <mesh position={[0, 0.02, -0.11]} rotation={[-0.2, 0, 0]}>
          <boxGeometry args={[0.28, 0.16, 0.09]} />
          <meshStandardMaterial color={HOODIE_SHADOW} roughness={0.9} />
        </mesh>
      </group>
    </group>
  );
}
