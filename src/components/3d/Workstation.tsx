// Clean, premium engineering desk and ergonomic chair
// One desk, keyboard, mouse, desk pad, ceramic coffee mug, and comfortable developer chair
const DESK_TOP = '#1e2636';
const DESK_BEVEL = '#2b364c';
const METAL_LEG = '#222c3d';
const PAD_COLOR = '#141b27';
const PAD_STITCH = '#38bdf8';
const CHAIR_FRAME = '#243042';
const CHAIR_FABRIC = '#2d3b52';
const CHAIR_MESH = '#192230';
const METAL_ACCENT = '#94a3b8';

function MechanicalKeyboard() {
  return (
    <group position={[0, 0.775, -0.42]}>
      {/* Keyboard CNC aluminum case */}
      <mesh>
        <boxGeometry args={[0.6, 0.022, 0.2]} />
        <meshStandardMaterial color="#232d3d" metalness={0.75} roughness={0.3} />
      </mesh>
      {/* Keycap block */}
      <mesh position={[0, 0.016, 0]}>
        <boxGeometry args={[0.57, 0.01, 0.17]} />
        <meshStandardMaterial color="#111824" roughness={0.7} />
      </mesh>
      {/* Accent cyan keycaps */}
      <mesh position={[-0.25, 0.022, -0.06]}>
        <boxGeometry args={[0.035, 0.008, 0.035]} />
        <meshStandardMaterial color="#38bdf8" roughness={0.5} />
      </mesh>
      <mesh position={[0.24, 0.022, 0.02]}>
        <boxGeometry args={[0.06, 0.008, 0.035]} />
        <meshStandardMaterial color="#38bdf8" roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.022, 0.06]}>
        <boxGeometry args={[0.24, 0.008, 0.03]} />
        <meshStandardMaterial color="#334155" roughness={0.6} />
      </mesh>
    </group>
  );
}

function PrecisionMouse() {
  return (
    <group position={[0.48, 0.775, -0.42]}>
      <mesh>
        <boxGeometry args={[0.11, 0.035, 0.18]} />
        <meshStandardMaterial color="#192230" metalness={0.4} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.02, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 0.03, 12]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}

function DeskPad() {
  return (
    <group position={[0, 0.765, -0.46]}>
      <mesh receiveShadow>
        <boxGeometry args={[1.4, 0.006, 0.65]} />
        <meshStandardMaterial color={PAD_COLOR} roughness={0.85} metalness={0.05} />
      </mesh>
      {/* Cyan perimeter stitching line */}
      <mesh position={[0, 0.004, 0]}>
        <planeGeometry args={[1.38, 0.63]} />
        <meshStandardMaterial
          color={PAD_STITCH}
          emissive={PAD_STITCH}
          emissiveIntensity={0.2}
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
}

function CoffeeMug() {
  return (
    <group position={[-0.78, 0.77, -0.48]}>
      <mesh position={[0, 0.07, 0]}>
        <cylinderGeometry args={[0.065, 0.055, 0.14, 16]} />
        <meshStandardMaterial color="#2d3a4e" roughness={0.35} metalness={0.15} />
      </mesh>
      {/* Coffee surface */}
      <mesh position={[0, 0.125, 0]}>
        <cylinderGeometry args={[0.058, 0.058, 0.01, 16]} />
        <meshStandardMaterial color="#1a0f08" roughness={0.15} />
      </mesh>
      {/* Handle */}
      <mesh position={[0.08, 0.07, 0]}>
        <torusGeometry args={[0.036, 0.01, 8, 12, Math.PI]} />
        <meshStandardMaterial color="#2d3a4e" roughness={0.35} />
      </mesh>
    </group>
  );
}

export function ErgonomicChair() {
  return (
    <group position={[0, 0, 0.45]}>
      {/* 5-star wheeled base on floor */}
      {[0, 72, 144, 216, 288].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <group key={i} rotation={[0, rad, 0]}>
            <mesh position={[0.22, 0.06, 0]} rotation={[0, 0, -0.05]}>
              <boxGeometry args={[0.42, 0.03, 0.04]} />
              <meshStandardMaterial color={CHAIR_FRAME} metalness={0.8} roughness={0.3} />
            </mesh>
            <mesh position={[0.42, 0.03, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.028, 0.028, 0.03, 10]} />
              <meshStandardMaterial color="#0f172a" roughness={0.8} />
            </mesh>
          </group>
        );
      })}

      {/* Hydraulic stem */}
      <mesh position={[0, 0.26, 0]}>
        <cylinderGeometry args={[0.035, 0.04, 0.38, 16]} />
        <meshStandardMaterial color={METAL_ACCENT} metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Seat base mechanism */}
      <mesh position={[0, 0.46, 0]}>
        <boxGeometry args={[0.3, 0.05, 0.3]} />
        <meshStandardMaterial color={CHAIR_FRAME} metalness={0.7} roughness={0.4} />
      </mesh>

      {/* Contoured padded seat cushion */}
      <mesh position={[0, 0.52, -0.02]}>
        <boxGeometry args={[0.56, 0.09, 0.54]} />
        <meshStandardMaterial color={CHAIR_FABRIC} roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Ergonomic curved mesh backrest */}
      <group position={[0, 0.95, -0.28]} rotation={[-0.14, 0, 0]}>
        {/* Frame spine */}
        <mesh position={[0, 0, -0.02]}>
          <boxGeometry args={[0.48, 0.78, 0.04]} />
          <meshStandardMaterial color={CHAIR_FRAME} metalness={0.6} roughness={0.4} />
        </mesh>
        {/* Breathable mesh center */}
        <mesh position={[0, 0, 0.005]}>
          <boxGeometry args={[0.42, 0.72, 0.015]} />
          <meshStandardMaterial color={CHAIR_MESH} roughness={0.92} />
        </mesh>
        {/* Lumbar support bar */}
        <mesh position={[0, -0.15, -0.035]}>
          <boxGeometry args={[0.44, 0.1, 0.03]} />
          <meshStandardMaterial color={METAL_ACCENT} metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Headrest */}
        <mesh position={[0, 0.44, 0.01]}>
          <boxGeometry args={[0.26, 0.14, 0.06]} />
          <meshStandardMaterial color={CHAIR_FABRIC} roughness={0.8} />
        </mesh>
      </group>

      {/* Left armrest */}
      <group position={[-0.32, 0.72, -0.04]}>
        <mesh position={[0, -0.12, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.24, 10]} />
          <meshStandardMaterial color={CHAIR_FRAME} metalness={0.7} />
        </mesh>
        <mesh position={[0, 0, 0.02]}>
          <boxGeometry args={[0.075, 0.035, 0.28]} />
          <meshStandardMaterial color="#1e293b" roughness={0.7} />
        </mesh>
      </group>

      {/* Right armrest */}
      <group position={[0.32, 0.72, -0.04]}>
        <mesh position={[0, -0.12, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.24, 10]} />
          <meshStandardMaterial color={CHAIR_FRAME} metalness={0.7} />
        </mesh>
        <mesh position={[0, 0, 0.02]}>
          <boxGeometry args={[0.075, 0.035, 0.28]} />
          <meshStandardMaterial color="#1e293b" roughness={0.7} />
        </mesh>
      </group>
    </group>
  );
}

export function Workstation() {
  return (
    <group>
      {/* Main Engineering Desk Top */}
      <mesh position={[0, 0.74, -0.7]} castShadow receiveShadow>
        <boxGeometry args={[2.3, 0.05, 1.05]} />
        <meshStandardMaterial color={DESK_TOP} roughness={0.65} metalness={0.2} />
      </mesh>

      {/* Desk front chamfered edge */}
      <mesh position={[0, 0.72, -0.17]}>
        <boxGeometry args={[2.3, 0.03, 0.02]} />
        <meshStandardMaterial color={DESK_BEVEL} metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Sturdy steel desk legs */}
      {[[-1.08, -1.15], [-1.08, -0.22], [1.08, -1.15], [1.08, -0.22]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.36, z]}>
          <boxGeometry args={[0.065, 0.72, 0.065]} />
          <meshStandardMaterial color={METAL_LEG} metalness={0.8} roughness={0.3} />
        </mesh>
      ))}

      {/* Desk Mat */}
      <DeskPad />

      {/* Mechanical Keyboard & Precision Mouse */}
      <MechanicalKeyboard />
      <PrecisionMouse />

      {/* Coffee Mug */}
      <CoffeeMug />

      {/* Ergonomic Office Chair */}
      <ErgonomicChair />
    </group>
  );
}
