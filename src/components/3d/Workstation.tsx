// Realistic engineering workstation — desk, ergonomic office chair, monitor mount arms, and accessories
import * as THREE from 'three';

const DESK_TOP = '#181e28';
const DESK_BEVEL = '#222b3a';
const METAL_LEG = '#1b2230';
const PAD_COLOR = '#121722';
const PAD_STITCH = '#38bdf8';
const CHAIR_FRAME = '#1f2736';
const CHAIR_FABRIC = '#263145';
const CHAIR_MESH = '#161c28';
const METAL_ACCENT = '#64748b';

function MonitorArms() {
  return (
    <group position={[0, 0.78, -1.1]}>
      {/* Heavy-duty desk clamp base */}
      <mesh position={[0, 0.04, 0]}>
        <boxGeometry args={[0.22, 0.08, 0.16]} />
        <meshStandardMaterial color="#1a202c" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Main vertical riser pole */}
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.65, 16]} />
        <meshStandardMaterial color="#2d3748" metalness={0.85} roughness={0.25} />
      </mesh>
      {/* Articulated center arm */}
      <mesh position={[0, 0.55, 0.08]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.05, 0.05, 0.2]} />
        <meshStandardMaterial color="#1a202c" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Left arm reaching to secondary monitor */}
      <mesh position={[-0.45, 0.52, 0.1]} rotation={[0, 0.45, 0]}>
        <boxGeometry args={[0.75, 0.04, 0.04]} />
        <meshStandardMaterial color="#1a202c" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Right arm reaching to secondary monitor */}
      <mesh position={[0.45, 0.52, 0.1]} rotation={[0, -0.45, 0]}>
        <boxGeometry args={[0.75, 0.04, 0.04]} />
        <meshStandardMaterial color="#1a202c" metalness={0.8} roughness={0.3} />
      </mesh>
    </group>
  );
}

function MechanicalKeyboard() {
  return (
    <group position={[0, 0.775, -0.35]}>
      {/* Keyboard CNC aluminum case */}
      <mesh>
        <boxGeometry args={[0.62, 0.022, 0.22]} />
        <meshStandardMaterial color="#1e2636" metalness={0.7} roughness={0.35} />
      </mesh>
      {/* Keycap block */}
      <mesh position={[0, 0.016, 0]}>
        <boxGeometry args={[0.59, 0.01, 0.19]} />
        <meshStandardMaterial color="#0f1520" roughness={0.8} />
      </mesh>
      {/* Accent keycaps (Esc, Enter, Space) */}
      <mesh position={[-0.26, 0.022, -0.07]}>
        <boxGeometry args={[0.035, 0.008, 0.035]} />
        <meshStandardMaterial color="#38bdf8" roughness={0.6} />
      </mesh>
      <mesh position={[0.25, 0.022, 0.02]}>
        <boxGeometry args={[0.06, 0.008, 0.035]} />
        <meshStandardMaterial color="#38bdf8" roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.022, 0.07]}>
        <boxGeometry args={[0.25, 0.008, 0.03]} />
        <meshStandardMaterial color="#2d3748" roughness={0.7} />
      </mesh>
    </group>
  );
}

function PrecisionMouse() {
  return (
    <group position={[0.48, 0.775, -0.35]}>
      {/* Ergonomic mouse body */}
      <mesh>
        <boxGeometry args={[0.11, 0.035, 0.18]} />
        <meshStandardMaterial color="#161d28" metalness={0.4} roughness={0.5} />
      </mesh>
      {/* Metallic scroll wheel */}
      <mesh position={[0, 0.02, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 0.03, 12]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}

function DeskPad() {
  return (
    <group position={[0, 0.765, -0.4]}>
      {/* Textured desk mat */}
      <mesh>
        <boxGeometry args={[1.4, 0.006, 0.65]} />
        <meshStandardMaterial color={PAD_COLOR} roughness={0.92} metalness={0.05} />
      </mesh>
      {/* Cyan perimeter stitching line */}
      <mesh position={[0, 0.004, 0]}>
        <planeGeometry args={[1.38, 0.63]} />
        <meshStandardMaterial
          color={PAD_STITCH}
          emissive={PAD_STITCH}
          emissiveIntensity={0.15}
          transparent
          opacity={0.15}
        />
      </mesh>
    </group>
  );
}

function DeskAccessories() {
  return (
    <group>
      {/* Ceramic coffee mug on left */}
      <group position={[-0.78, 0.77, -0.45]}>
        <mesh position={[0, 0.07, 0]}>
          <cylinderGeometry args={[0.065, 0.055, 0.14, 16]} />
          <meshStandardMaterial color="#273244" roughness={0.4} metalness={0.1} />
        </mesh>
        {/* Coffee surface */}
        <mesh position={[0, 0.125, 0]}>
          <cylinderGeometry args={[0.058, 0.058, 0.01, 16]} />
          <meshStandardMaterial color="#1c100a" roughness={0.2} />
        </mesh>
        {/* Mug handle */}
        <mesh position={[0.08, 0.07, 0]}>
          <torusGeometry args={[0.035, 0.01, 8, 12, Math.PI]} />
          <meshStandardMaterial color="#273244" roughness={0.4} />
        </mesh>
      </group>

      {/* Engineering notebook with technical sketches */}
      <group position={[0.82, 0.77, -0.5]} rotation={[0, -0.15, 0]}>
        <mesh>
          <boxGeometry args={[0.3, 0.016, 0.42]} />
          <meshStandardMaterial color="#1e2736" roughness={0.8} />
        </mesh>
        {/* Graph paper page */}
        <mesh position={[0, 0.009, 0]}>
          <planeGeometry args={[0.27, 0.38]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.95} />
        </mesh>
        {/* Metal engineering pen resting on notebook */}
        <mesh position={[0.11, 0.018, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.007, 0.007, 0.22, 10]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>

      {/* Modern angled desk lamp */}
      <group position={[-0.95, 0.77, -0.95]}>
        <mesh position={[0, 0.02, 0]}>
          <cylinderGeometry args={[0.11, 0.13, 0.04, 16]} />
          <meshStandardMaterial color="#1b2230" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Sleek angled arm */}
        <mesh position={[0.08, 0.35, 0.1]} rotation={[-0.3, 0, -0.1]}>
          <boxGeometry args={[0.025, 0.75, 0.025]} />
          <meshStandardMaterial color="#252f40" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Lamp head with warm downlight */}
        <mesh position={[0.22, 0.68, 0.25]} rotation={[0.4, 0, 0]}>
          <boxGeometry args={[0.28, 0.03, 0.08]} />
          <meshStandardMaterial
            color="#252f40"
            emissive="#ffedd5"
            emissiveIntensity={1.2}
          />
        </mesh>
      </group>
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
            {/* Caster wheel */}
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
        <meshStandardMaterial color={CHAIR_FABRIC} roughness={0.85} metalness={0.1} />
      </mesh>

      {/* Ergonomic curved mesh backrest */}
      <group position={[0, 0.95, -0.28]} rotation={[-0.12, 0, 0]}>
        {/* Frame spine */}
        <mesh position={[0, 0, -0.02]}>
          <boxGeometry args={[0.48, 0.78, 0.04]} />
          <meshStandardMaterial color={CHAIR_FRAME} metalness={0.6} roughness={0.4} />
        </mesh>
        {/* Breathable mesh center */}
        <mesh position={[0, 0, 0.005]}>
          <boxGeometry args={[0.42, 0.72, 0.015]} />
          <meshStandardMaterial color={CHAIR_MESH} roughness={0.95} />
        </mesh>
        {/* Lumbar support bar */}
        <mesh position={[0, -0.15, -0.035]}>
          <boxGeometry args={[0.44, 0.1, 0.03]} />
          <meshStandardMaterial color={METAL_ACCENT} metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Headrest */}
        <mesh position={[0, 0.44, 0.01]}>
          <boxGeometry args={[0.26, 0.14, 0.06]} />
          <meshStandardMaterial color={CHAIR_FABRIC} roughness={0.85} />
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
        <boxGeometry args={[2.5, 0.05, 1.1]} />
        <meshStandardMaterial color={DESK_TOP} roughness={0.7} metalness={0.15} />
      </mesh>

      {/* Desk front chamfered edge */}
      <mesh position={[0, 0.72, -0.14]}>
        <boxGeometry args={[2.5, 0.03, 0.02]} />
        <meshStandardMaterial color={DESK_BEVEL} metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Sturdy steel desk legs */}
      {[[-1.15, -1.18], [-1.15, -0.22], [1.15, -1.18], [1.15, -0.22]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.36, z]}>
          <boxGeometry args={[0.07, 0.72, 0.07]} />
          <meshStandardMaterial color={METAL_LEG} metalness={0.8} roughness={0.3} />
        </mesh>
      ))}

      {/* Cable management tray under desk */}
      <mesh position={[0, 0.62, -0.9]}>
        <boxGeometry args={[1.8, 0.06, 0.2]} />
        <meshStandardMaterial color="#1e2636" metalness={0.7} roughness={0.4} />
      </mesh>

      {/* Monitor mounting arms */}
      <MonitorArms />

      {/* Desk Mat */}
      <DeskPad />

      {/* Mechanical Keyboard & Mouse */}
      <MechanicalKeyboard />
      <PrecisionMouse />

      {/* Desk accessories: Mug, notebook, lamp */}
      <DeskAccessories />

      {/* Ergonomic Office Chair */}
      <ErgonomicChair />
    </group>
  );
}
