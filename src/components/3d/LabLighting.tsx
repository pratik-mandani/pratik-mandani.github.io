// Cinematic realistic lighting rig — dark futuristic engineering lab aesthetic
// Objects are clearly visible with rich material depth, specular highlights, and monitor illumination (NOT pitch black)

export function LabLighting() {
  return (
    <>
      {/* Rich ambient base — ensures all physical objects, materials, and silhouettes are clearly legible */}
      <ambientLight intensity={0.72} color="#243044" />

      {/* Subtle hemisphere light — cool ceiling wash, warmer floor bounce */}
      <hemisphereLight
        args={['#3a4b66', '#1a2230', 0.55]}
      />

      {/* Central Workstation Key Light — warm downlight illuminating desk, keyboard & developer */}
      <pointLight
        position={[0, 2.8, 0.5]}
        color="#fff8ed"
        intensity={3.4}
        distance={5.5}
        decay={2}
      />

      {/* Main Ultra-Wide Monitor Screen Glow — diffuse cyan/white light casting on desk, keyboard & developer */}
      <pointLight
        position={[0, 1.45, -0.45]}
        color="#7dd3fc"
        intensity={3.8}
        distance={3.8}
        decay={2}
      />

      {/* Left Secondary Monitor Glow */}
      <pointLight
        position={[-1.38, 1.45, -0.55]}
        color="#38bdf8"
        intensity={2.2}
        distance={3.0}
        decay={2}
      />

      {/* Right Secondary Monitor Glow */}
      <pointLight
        position={[1.38, 1.45, -0.55]}
        color="#c084fc"
        intensity={2.2}
        distance={3.0}
        decay={2}
      />

      {/* Electronics Workbench Overhead Task Light — crisp neutral LED bar above PCB, ESP32 & oscilloscope */}
      <pointLight
        position={[-2.35, 2.15, -0.85]}
        color="#f0f9ff"
        intensity={3.8}
        distance={4.2}
        decay={2}
      />

      {/* KOTL Accent Light — subtle cyan highlight on KOTL robot */}
      <pointLight
        position={[-2.15, 1.25, -0.65]}
        color="#38bdf8"
        intensity={2.4}
        distance={2.4}
        decay={2}
      />

      {/* Front-Left Soft Fill Light — brings out the chair, desk bevels, and workstation depth */}
      <pointLight
        position={[-2.0, 1.9, 2.2]}
        color="#cbd5e1"
        intensity={1.2}
        distance={5.0}
        decay={2}
      />

      {/* Front-Right Soft Fill Light */}
      <pointLight
        position={[2.0, 1.9, 2.2]}
        color="#e2e8f0"
        intensity={1.0}
        distance={5.0}
        decay={2}
      />

      {/* Subtle Rear Rim Light — separates developer and chair silhouette from the acoustic slat wall */}
      <pointLight
        position={[0, 2.5, -1.8]}
        color="#93c5fd"
        intensity={1.4}
        distance={3.6}
        decay={2}
      />

      {/* Architectural Slat Wall Top Wash */}
      <pointLight
        position={[0, 3.3, -2.8]}
        color="#f97316"
        intensity={1.6}
        distance={4.0}
        decay={2}
      />
    </>
  );
}
