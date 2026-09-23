// Believable developer character sitting relaxed / sleeping in the chair
// Visual Story: "The Engineer Thinks. The AI Executes."
// Leaning back slightly, hands resting near keyboard, head resting on headrest, subtle breathing, catching monitor light
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const HOODIE_COLOR = '#2e3a4e';
const HOODIE_SHADOW = '#202937';
const PANTS_COLOR = '#1f2736';
const SNEAKER_BASE = '#f1f5f9';
const SNEAKER_ACCENT = '#38bdf8';
const SKIN_TONE = '#d29672';
const HAIR_COLOR = '#1e1614';

export function DeveloperCharacter() {
  const chestRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    // Rhythmic, peaceful breathing animation
    if (chestRef.current) {
      chestRef.current.scale.y = 1 + Math.sin(t * 1.1) * 0.016;
      chestRef.current.position.y = 0.9 + Math.sin(t * 1.1) * 0.007;
    }
    // Sleeping / thinking micro-movement
    if (headRef.current) {
      headRef.current.rotation.x = -0.2 + Math.sin(t * 0.5) * 0.018;
      headRef.current.rotation.z = Math.sin(t * 0.35) * 0.012;
    }
  });

  return (
    <group position={[0, 0, 0.4]}>
      {/* Lower Body: Legs extending toward desk foot space */}
      {/* Thighs resting on seat cushion */}
      <mesh position={[-0.14, 0.55, -0.1]}>
        <boxGeometry args={[0.17, 0.13, 0.46]} />
        <meshStandardMaterial color={PANTS_COLOR} roughness={0.82} />
      </mesh>
      <mesh position={[0.14, 0.55, -0.1]}>
        <boxGeometry args={[0.17, 0.13, 0.46]} />
        <meshStandardMaterial color={PANTS_COLOR} roughness={0.82} />
      </mesh>

      {/* Calves angled down toward floor under desk */}
      <mesh position={[-0.15, 0.28, 0.12]} rotation={[-0.15, 0, 0]}>
        <boxGeometry args={[0.14, 0.46, 0.14]} />
        <meshStandardMaterial color={PANTS_COLOR} roughness={0.82} />
      </mesh>
      <mesh position={[0.15, 0.28, 0.12]} rotation={[-0.15, 0, 0]}>
        <boxGeometry args={[0.14, 0.46, 0.14]} />
        <meshStandardMaterial color={PANTS_COLOR} roughness={0.82} />
      </mesh>

      {/* Sneakers resting on floor */}
      <group position={[-0.15, 0.05, 0.18]}>
        <mesh position={[0, 0.02, 0.04]}>
          <boxGeometry args={[0.13, 0.07, 0.25]} />
          <meshStandardMaterial color={HOODIE_SHADOW} roughness={0.7} />
        </mesh>
        <mesh position={[0, -0.015, 0.04]}>
          <boxGeometry args={[0.135, 0.03, 0.26]} />
          <meshStandardMaterial color={SNEAKER_BASE} roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.015, 0.04]}>
          <boxGeometry args={[0.14, 0.015, 0.13]} />
          <meshStandardMaterial color={SNEAKER_ACCENT} roughness={0.5} />
        </mesh>
      </group>

      <group position={[0.15, 0.05, 0.18]}>
        <mesh position={[0, 0.02, 0.04]}>
          <boxGeometry args={[0.13, 0.07, 0.25]} />
          <meshStandardMaterial color={HOODIE_SHADOW} roughness={0.7} />
        </mesh>
        <mesh position={[0, -0.015, 0.04]}>
          <boxGeometry args={[0.135, 0.03, 0.26]} />
          <meshStandardMaterial color={SNEAKER_BASE} roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.015, 0.04]}>
          <boxGeometry args={[0.14, 0.015, 0.13]} />
          <meshStandardMaterial color={SNEAKER_ACCENT} roughness={0.5} />
        </mesh>
      </group>

      {/* Pelvis / Waist */}
      <mesh position={[0, 0.62, -0.22]}>
        <boxGeometry args={[0.44, 0.17, 0.29]} />
        <meshStandardMaterial color={PANTS_COLOR} roughness={0.82} />
      </mesh>

      {/* Upper Body (Chest & Torso) - Reclined comfortably back */}
      <group ref={chestRef} position={[0, 0.9, -0.24]} rotation={[-0.14, 0, 0]}>
        {/* Main hoodie torso with fabric texture catching monitor emission */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.48, 0.48, 0.29]} />
          <meshStandardMaterial
            color={HOODIE_COLOR}
            roughness={0.78}
            emissive="#0e2238"
            emissiveIntensity={0.2}
          />
        </mesh>
        {/* Kangaroo front pouch pocket */}
        <mesh position={[0, -0.1, 0.15]}>
          <boxGeometry args={[0.3, 0.17, 0.04]} />
          <meshStandardMaterial color={HOODIE_SHADOW} roughness={0.85} />
        </mesh>
        {/* Hoodie collar cowl */}
        <mesh position={[0, 0.24, 0.02]}>
          <boxGeometry args={[0.32, 0.11, 0.23]} />
          <meshStandardMaterial color={HOODIE_COLOR} roughness={0.78} />
        </mesh>
      </group>

      {/* Arms & Hands - Reclined posture with forearms forward toward keyboard */}
      {/* Left Shoulder & Upper Arm */}
      <mesh position={[-0.3, 0.88, -0.2]} rotation={[0.4, 0, 0.12]}>
        <boxGeometry args={[0.13, 0.35, 0.14]} />
        <meshStandardMaterial color={HOODIE_COLOR} roughness={0.78} />
      </mesh>
      {/* Left Forearm angled forward toward desk pad */}
      <mesh position={[-0.24, 0.77, -0.42]} rotation={[0.12, 0.15, 0]}>
        <boxGeometry args={[0.11, 0.09, 0.36]} />
        <meshStandardMaterial color={HOODIE_COLOR} roughness={0.78} />
      </mesh>
      {/* Left Hand resting relaxed on the desk pad right beside keyboard */}
      <mesh position={[-0.22, 0.775, -0.62]} rotation={[0, 0.2, 0]}>
        <boxGeometry args={[0.085, 0.045, 0.12]} />
        <meshStandardMaterial
          color={SKIN_TONE}
          roughness={0.6}
          emissive="#38bdf8"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Right Shoulder & Upper Arm */}
      <mesh position={[0.3, 0.88, -0.2]} rotation={[0.4, 0, -0.12]}>
        <boxGeometry args={[0.13, 0.35, 0.14]} />
        <meshStandardMaterial color={HOODIE_COLOR} roughness={0.78} />
      </mesh>
      {/* Right Forearm angled forward toward mouse/desk pad */}
      <mesh position={[0.26, 0.77, -0.42]} rotation={[0.12, -0.15, 0]}>
        <boxGeometry args={[0.11, 0.09, 0.36]} />
        <meshStandardMaterial color={HOODIE_COLOR} roughness={0.78} />
      </mesh>
      {/* Right Hand resting relaxed near mouse/keyboard */}
      <mesh position={[0.26, 0.775, -0.62]} rotation={[0, -0.15, 0]}>
        <boxGeometry args={[0.085, 0.045, 0.12]} />
        <meshStandardMaterial
          color={SKIN_TONE}
          roughness={0.6}
          emissive="#38bdf8"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Neck & Head - Resting back peacefully against the chair headrest */}
      <group ref={headRef} position={[0, 1.25, -0.28]}>
        {/* Neck */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.07, 0.08, 0.1, 12]} />
          <meshStandardMaterial color={SKIN_TONE} roughness={0.6} />
        </mesh>
        {/* Head */}
        <mesh position={[0, 0.15, 0.02]}>
          <boxGeometry args={[0.24, 0.27, 0.23]} />
          <meshStandardMaterial
            color={SKIN_TONE}
            roughness={0.6}
            emissive="#38bdf8"
            emissiveIntensity={0.12}
          />
        </mesh>
        {/* Hair */}
        <mesh position={[0, 0.27, 0.01]}>
          <boxGeometry args={[0.25, 0.09, 0.24]} />
          <meshStandardMaterial color={HAIR_COLOR} roughness={0.95} />
        </mesh>
        <mesh position={[0, 0.21, -0.1]}>
          <boxGeometry args={[0.25, 0.19, 0.05]} />
          <meshStandardMaterial color={HAIR_COLOR} roughness={0.95} />
        </mesh>
        {/* Closed / sleeping eyes indication */}
        <mesh position={[-0.065, 0.14, 0.136]}>
          <boxGeometry args={[0.048, 0.007, 0.005]} />
          <meshStandardMaterial color="#2a1d18" />
        </mesh>
        <mesh position={[0.065, 0.14, 0.136]}>
          <boxGeometry args={[0.048, 0.007, 0.005]} />
          <meshStandardMaterial color="#2a1d18" />
        </mesh>
        {/* Hoodie hood folded back behind neck */}
        <mesh position={[0, 0.02, -0.12]} rotation={[-0.2, 0, 0]}>
          <boxGeometry args={[0.3, 0.17, 0.1]} />
          <meshStandardMaterial color={HOODIE_SHADOW} roughness={0.88} />
        </mesh>
      </group>
    </group>
  );
}
