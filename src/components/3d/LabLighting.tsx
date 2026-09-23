// Cinematic lighting rig — realistic R&D engineering laboratory lighting
// Soft ambient base, warm task lights, monitor screen glows, and subtle rim separation

export function LabLighting() {
  return (
    <>
      {/* Balanced ambient base — dark and moody but all objects are clearly legible */}
      <ambientLight intensity={0.48} color="#1b2434" />

      {/* Subtle hemisphere light — cool ceiling, warm bounce */}
      <hemisphereLight
        args={['#25334a', '#101622', 0.4]}
      />

      {/* Central Workstation Task Light — warm neutral light illuminating desk, keyboard & developer */}
      <pointLight
        position={[0, 2.7, 0.4]}
        color="#fff4e6"
        intensity={2.2}
        distance={4.8}
        decay={2}
      />

      {/* Main Ultra-Wide Monitor Screen Glow — diffuse cyan/white light casting on desk & developer */}
      <pointLight
        position={[0, 1.4, -0.45]}
        color="#7dd3fc"
        intensity={2.6}
        distance={3.2}
        decay={2}
      />

      {/* Left Identity Monitor Glow */}
      <pointLight
        position={[-1.25, 1.4, -0.6]}
        color="#38bdf8"
        intensity={1.6}
        distance={2.8}
        decay={2}
      />

      {/* Right AI System Monitor Glow */}
      <pointLight
        position={[1.25, 1.4, -0.6]}
        color="#818cf8"
        intensity={1.6}
        distance={2.8}
        decay={2}
      />

      {/* Electronics Workbench Overhead Task Light — crisp neutral LED bar above PCB & oscilloscope */}
      <pointLight
        position={[-2.4, 2.1, -1.0]}
        color="#e0f2fe"
        intensity={2.8}
        distance={3.5}
        decay={2}
      />

      {/* KOTL Accent Light — subtle cyan highlight on KOTL robot */}
      <pointLight
        position={[-2.1, 1.25, -0.8]}
        color="#22d3ee"
        intensity={1.8}
        distance={2.0}
        decay={2}
      />

      {/* Architectural Slat Wall Top Wash — warm subtle accent behind monitor */}
      <pointLight
        position={[0, 3.2, -2.8]}
        color="#f97316"
        intensity={1.2}
        distance={3.5}
        decay={2}
      />

      {/* Subtle Rear Rim Light — separates developer and chair silhouette from the dark wall */}
      <pointLight
        position={[0, 2.4, -1.8]}
        color="#93c5fd"
        intensity={0.9}
        distance={3.0}
        decay={2}
      />
    </>
  );
}
