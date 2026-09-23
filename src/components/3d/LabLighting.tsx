// Lab lighting rig — ambient base + monitor glows + desk lamp + overhead industrial
export function LabLighting() {
  return (
    <>
      {/* Very dim ambient — dark lab base */}
      <ambientLight intensity={0.12} color="#1a2a4a" />

      {/* Hemisphere — slight sky/ground gradient */}
      <hemisphereLight
        args={['#0a1428', '#050810', 0.15]}
      />

      {/* Central monitor glow — blue-white */}
      <pointLight
        position={[0, 2.2, -0.8]}
        color="#60a5fa"
        intensity={3.5}
        distance={6}
        decay={2}
      />

      {/* Left secondary monitor glow */}
      <pointLight
        position={[-3, 2.2, -1.2]}
        color="#38bdf8"
        intensity={1.8}
        distance={4}
        decay={2}
      />

      {/* Right secondary monitor glow */}
      <pointLight
        position={[3, 2.2, -1.2]}
        color="#38bdf8"
        intensity={1.8}
        distance={4}
        decay={2}
      />

      {/* Desk lamp — warm overhead */}
      <pointLight
        position={[0, 3.8, 0.5]}
        color="#e8f4ff"
        intensity={1.2}
        distance={5}
        decay={2}
      />

      {/* Electronics bench — cyan glow */}
      <pointLight
        position={[-7, 2, -3]}
        color="#22d3ee"
        intensity={2.2}
        distance={5}
        decay={2}
      />

      {/* Career wall — warm display glow */}
      <pointLight
        position={[0, 3, -7]}
        color="#818cf8"
        intensity={1.5}
        distance={5}
        decay={2}
      />

      {/* Project panels — right wall */}
      <pointLight
        position={[8, 2.5, -3]}
        color="#4ade80"
        intensity={1.8}
        distance={5}
        decay={2}
      />

      {/* Overhead industrial strips (dim fill) */}
      <pointLight position={[-5, 5.5, -2]} color="#d1e8ff" intensity={0.5} distance={8} decay={2} />
      <pointLight position={[5, 5.5, -2]} color="#d1e8ff" intensity={0.5} distance={8} decay={2} />
      <pointLight position={[0, 5.5, 3]} color="#d1e8ff" intensity={0.4} distance={8} decay={2} />
    </>
  );
}
