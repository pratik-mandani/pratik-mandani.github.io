// Clean, simple, high-end engineering lab room
// Clean walls, polished dark floor, architectural baseboards, and ceiling — zero clutter
export function Room() {
  return (
    <group>
      {/* Polished dark slate floor — clean & realistic, NO wireframe grid */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[8.0, 7.0]} />
        <meshStandardMaterial
          color="#161c26"
          roughness={0.4}
          metalness={0.15}
        />
      </mesh>

      {/* Back architectural wall */}
      <mesh position={[0, 1.8, -2.8]} receiveShadow>
        <planeGeometry args={[8.0, 3.6]} />
        <meshStandardMaterial color="#1a2230" roughness={0.85} metalness={0.05} />
      </mesh>

      {/* Subtle architectural vertical accent panel behind the desk */}
      <mesh position={[0, 1.8, -2.78]}>
        <planeGeometry args={[3.2, 3.5]} />
        <meshStandardMaterial color="#141b26" roughness={0.9} />
      </mesh>

      {/* Subtle warm wash line at top of accent panel */}
      <mesh position={[0, 3.3, -2.76]}>
        <boxGeometry args={[3.0, 0.03, 0.02]} />
        <meshStandardMaterial
          color="#ffd599"
          emissive="#ffa84d"
          emissiveIntensity={1.2}
        />
      </mesh>

      {/* Left wall */}
      <mesh position={[-3.8, 1.8, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[7.0, 3.6]} />
        <meshStandardMaterial color="#171e2a" roughness={0.88} />
      </mesh>

      {/* Right wall */}
      <mesh position={[3.8, 1.8, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[7.0, 3.6]} />
        <meshStandardMaterial color="#171e2a" roughness={0.88} />
      </mesh>

      {/* Ceiling with soft recessed light fixture */}
      <mesh position={[0, 3.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8.0, 7.0]} />
        <meshStandardMaterial color="#0f141d" roughness={0.95} />
      </mesh>

      {/* Recessed ceiling softbox diffuser panel directly above desk */}
      <mesh position={[0, 3.48, -0.4]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.2, 1.4]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#fff8ed"
          emissiveIntensity={1.8}
        />
      </mesh>

      {/* Clean baseboard trims */}
      <mesh position={[0, 0.05, -2.78]}>
        <boxGeometry args={[8.0, 0.1, 0.04]} />
        <meshStandardMaterial color="#243042" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[-3.78, 0.05, 0]}>
        <boxGeometry args={[0.04, 0.1, 7.0]} />
        <meshStandardMaterial color="#243042" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[3.78, 0.05, 0]}>
        <boxGeometry args={[0.04, 0.1, 7.0]} />
        <meshStandardMaterial color="#243042" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  );
}
