// Realistic engineering workstation — desk, drawers, cables, mechanical keyboard, precision mouse, desk pad, mug, notebook, calipers, lamp, and ergonomic office chair
import * as THREE from 'three';

const DESK_TOP = '#1c2433';
const DESK_BEVEL = '#2b384d';
const METAL_LEG = '#222c3d';
const DRAWER_BODY = '#161d28';
const PAD_COLOR = '#141b27';
const PAD_STITCH = '#38bdf8';
const CHAIR_FRAME = '#243042';
const CHAIR_FABRIC = '#2d3b52';
const CHAIR_MESH = '#192230';
const METAL_ACCENT = '#94a3b8';

function DeskDrawers() {
  return (
    <group position={[0.88, 0.36, -0.7]}>
      {/* 2-drawer pedestal body under right side of desk */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.48, 0.68, 0.85]} />
        <meshStandardMaterial color={DRAWER_BODY} roughness={0.7} metalness={0.2} />
      </mesh>
      {/* Top drawer face */}
      <mesh position={[0, 0.16, 0.43]}>
        <boxGeometry args={[0.44, 0.3, 0.015]} />
        <meshStandardMaterial color="#1a2332" roughness={0.65} metalness={0.25} />
      </mesh>
      {/* Top drawer aluminum handle */}
      <mesh position={[0, 0.16, 0.445]}>
        <boxGeometry args={[0.18, 0.02, 0.015]} />
        <meshStandardMaterial color={METAL_ACCENT} metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Bottom drawer face */}
      <mesh position={[0, -0.16, 0.43]}>
        <boxGeometry args={[0.44, 0.3, 0.015]} />
        <meshStandardMaterial color="#1a2332" roughness={0.65} metalness={0.25} />
      </mesh>
      {/* Bottom drawer aluminum handle */}
      <mesh position={[0, -0.16, 0.445]}>
        <boxGeometry args={[0.18, 0.02, 0.015]} />
        <meshStandardMaterial color={METAL_ACCENT} metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}

function MonitorArmsWithCables() {
  return (
    <group position={[0, 0.78, -1.1]}>
      {/* Heavy-duty desk clamp base */}
      <mesh position={[0, 0.04, 0]}>
        <boxGeometry args={[0.24, 0.08, 0.18]} />
        <meshStandardMaterial color="#1e2636" metalness={0.85} roughness={0.25} />
      </mesh>
      {/* Main vertical riser pole */}
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.032, 0.032, 0.65, 16]} />
        <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Center arm */}
      <mesh position={[0, 0.55, 0.08]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.055, 0.055, 0.22]} />
        <meshStandardMaterial color="#1e2636" metalness={0.85} roughness={0.25} />
      </mesh>
      {/* Left arm reaching to secondary monitor */}
      <mesh position={[-0.45, 0.52, 0.1]} rotation={[0, 0.45, 0]}>
        <boxGeometry args={[0.78, 0.045, 0.045]} />
        <meshStandardMaterial color="#1e2636" metalness={0.85} roughness={0.25} />
      </mesh>
      {/* Right arm reaching to secondary monitor */}
      <mesh position={[0.45, 0.52, 0.1]} rotation={[0, -0.45, 0]}>
        <boxGeometry args={[0.78, 0.045, 0.045]} />
        <meshStandardMaterial color="#1e2636" metalness={0.85} roughness={0.25} />
      </mesh>
      {/* Cable bundle clipped behind monitor pole */}
      <mesh position={[0, 0.32, -0.04]}>
        <cylinderGeometry args={[0.012, 0.012, 0.6, 8]} />
        <meshStandardMaterial color="#0f172a" roughness={0.8} />
      </mesh>
    </group>
  );
}

function MechanicalKeyboard() {
  return (
    <group position={[0, 0.775, -0.42]}>
      {/* Keyboard CNC aluminum case */}
      <mesh>
        <boxGeometry args={[0.62, 0.022, 0.22]} />
        <meshStandardMaterial color="#232d3d" metalness={0.75} roughness={0.3} />
      </mesh>
      {/* Keycap block */}
      <mesh position={[0, 0.016, 0]}>
        <boxGeometry args={[0.59, 0.01, 0.19]} />
        <meshStandardMaterial color="#111824" roughness={0.7} />
      </mesh>
      {/* Accent keycaps (Esc, Enter, Space) */}
      <mesh position={[-0.26, 0.022, -0.07]}>
        <boxGeometry args={[0.035, 0.008, 0.035]} />
        <meshStandardMaterial color="#38bdf8" roughness={0.5} />
      </mesh>
      <mesh position={[0.25, 0.022, 0.02]}>
        <boxGeometry args={[0.06, 0.008, 0.035]} />
        <meshStandardMaterial color="#38bdf8" roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.022, 0.07]}>
        <boxGeometry args={[0.25, 0.008, 0.03]} />
        <meshStandardMaterial color="#334155" roughness={0.6} />
      </mesh>
      {/* Braided USB-C Cable running to desk grommet */}
      <mesh position={[0, 0.006, -0.18]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.004, 0.004, 0.18, 8]} />
        <meshStandardMaterial color="#0f172a" roughness={0.8} />
      </mesh>
    </group>
  );
}

function PrecisionMouse() {
  return (
    <group position={[0.48, 0.775, -0.42]}>
      {/* Ergonomic mouse body */}
      <mesh>
        <boxGeometry args={[0.11, 0.035, 0.18]} />
        <meshStandardMaterial color="#192230" metalness={0.4} roughness={0.5} />
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
    <group position={[0, 0.765, -0.48]}>
      {/* Textured desk mat */}
      <mesh receiveShadow>
        <boxGeometry args={[1.42, 0.006, 0.68]} />
        <meshStandardMaterial color={PAD_COLOR} roughness={0.85} metalness={0.05} />
      </mesh>
      {/* Cyan perimeter stitching line */}
      <mesh position={[0, 0.004, 0]}>
        <planeGeometry args={[1.4, 0.66]} />
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

function DeskAccessories() {
  return (
    <group>
      {/* Ceramic coffee mug on left */}
      <group position={[-0.82, 0.77, -0.52]}>
        <mesh position={[0, 0.07, 0]}>
          <cylinderGeometry args={[0.068, 0.058, 0.14, 16]} />
          <meshStandardMaterial color="#2d3a4e" roughness={0.35} metalness={0.15} />
        </mesh>
        {/* Coffee surface */}
        <mesh position={[0, 0.125, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.01, 16]} />
          <meshStandardMaterial color="#1a0f08" roughness={0.15} />
        </mesh>
        {/* Mug handle */}
        <mesh position={[0.082, 0.07, 0]}>
          <torusGeometry args={[0.038, 0.011, 8, 12, Math.PI]} />
          <meshStandardMaterial color="#2d3a4e" roughness={0.35} />
        </mesh>
      </group>

      {/* Engineering notebook with technical notes */}
      <group position={[0.82, 0.77, -0.52]} rotation={[0, -0.15, 0]}>
        <mesh>
          <boxGeometry args={[0.3, 0.016, 0.42]} />
          <meshStandardMaterial color="#1e2736" roughness={0.75} />
        </mesh>
        {/* Technical paper page */}
        <mesh position={[0, 0.009, 0]}>
          <planeGeometry args={[0.27, 0.38]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.9} />
        </mesh>
        {/* Metal engineering pen resting on notebook */}
        <mesh position={[0.11, 0.018, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.007, 0.007, 0.22, 10]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>

      {/* Precision Digital Calipers on right desk edge */}
      <group position={[0.68, 0.772, -0.22]} rotation={[0, 0.3, 0]}>
        <mesh>
          <boxGeometry args={[0.03, 0.006, 0.24]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.15} />
        </mesh>
        <mesh position={[0, 0.005, -0.02]}>
          <boxGeometry args={[0.045, 0.01, 0.05]} />
          <meshStandardMaterial color="#0284c7" roughness={0.5} />
        </mesh>
      </group>

      {/* Modern angled desk lamp */}
      <group position={[-0.98, 0.77, -0.98]}>
        <mesh position={[0, 0.02, 0]}>
          <cylinderGeometry args={[0.11, 0.13, 0.04, 16]} />
          <meshStandardMaterial color="#222c3d" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Sleek angled arm */}
        <mesh position={[0.08, 0.35, 0.1]} rotation={[-0.3, 0, -0.1]}>
          <boxGeometry args={[0.025, 0.75, 0.025]} />
          <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Lamp head with warm downlight */}
        <mesh position={[0.22, 0.68, 0.25]} rotation={[0.4, 0, 0]}>
          <boxGeometry args={[0.28, 0.03, 0.08]} />
          <meshStandardMaterial
            color="#2d3748"
            emissive="#ffedd5"
            emissiveIntensity={1.5}
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
        <boxGeometry args={[2.5, 0.05, 1.1]} />
        <meshStandardMaterial color={DESK_TOP} roughness={0.65} metalness={0.2} />
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

      {/* Desk drawers pedestal under right side of desk */}
      <DeskDrawers />

      {/* Cable management tray under desk */}
      <mesh position={[0, 0.62, -0.9]}>
        <boxGeometry args={[1.8, 0.06, 0.2]} />
        <meshStandardMaterial color="#222c3d" metalness={0.7} roughness={0.4} />
      </mesh>

      {/* Monitor mounting arms with cable clips */}
      <MonitorArmsWithCables />

      {/* Desk Mat */}
      <DeskPad />

      {/* Mechanical Keyboard & Mouse with braided cable */}
      <MechanicalKeyboard />
      <PrecisionMouse />

      {/* Desk accessories: Mug, notebook, calipers, lamp */}
      <DeskAccessories />

      {/* Ergonomic Office Chair */}
      <ErgonomicChair />
    </group>
  );
}
