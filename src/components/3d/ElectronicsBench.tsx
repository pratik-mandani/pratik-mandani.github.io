// Recognizable Electronics & Product Development Workbench
// Realistic ESD mat, green PCB with gold traces & ICs, ESP32 SoC module,
// industrial yellow multimeter with test leads, soldering station (360°C), oscilloscope with green waveform, and jumper wires
import { useLab } from '../../context/LabContext';

const BENCH_TOP = '#1e2636';
const BENCH_FRAME = '#252f42';
const ESD_MAT = '#1a4478';
const PCB_GREEN = '#0d532b';
const COPPER_GOLD = '#f59e0b';
const IC_BLACK = '#0f172a';
const SOLDER_SILVER = '#e2e8f0';

function PcbWithComponents({ position, rotation = [0, 0, 0] }: { position: [number, number, number]; rotation?: [number, number, number] }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Double-sided FR4 PCB base */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.38, 0.012, 0.28]} />
        <meshStandardMaterial color={PCB_GREEN} roughness={0.35} metalness={0.2} />
      </mesh>
      {/* Copper Ground Plane & Traces */}
      <mesh position={[0, 0.007, 0]}>
        <boxGeometry args={[0.35, 0.002, 0.25]} />
        <meshStandardMaterial color={COPPER_GOLD} metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Green Solder Mask overlay with exposed pads */}
      <mesh position={[0, 0.009, 0]}>
        <boxGeometry args={[0.34, 0.002, 0.24]} />
        <meshStandardMaterial color={PCB_GREEN} roughness={0.45} />
      </mesh>
      {/* Main MCU IC Chip (QFP / SOP package) */}
      <mesh position={[0, 0.018, 0]}>
        <boxGeometry args={[0.11, 0.015, 0.11]} />
        <meshStandardMaterial color={IC_BLACK} roughness={0.7} />
      </mesh>
      {/* IC metallic lead pins */}
      {[-0.06, 0.06].map((x, i) => (
        <mesh key={i} position={[x, 0.013, 0]}>
          <boxGeometry args={[0.015, 0.005, 0.1]} />
          <meshStandardMaterial color={SOLDER_SILVER} metalness={0.95} roughness={0.15} />
        </mesh>
      ))}
      {/* Electrolytic Capacitors (cylindrical cans) */}
      {[[-0.12, 0.06], [-0.12, -0.06]].map(([x, z], i) => (
        <group key={i} position={[x, 0.045, z]}>
          <mesh>
            <cylinderGeometry args={[0.024, 0.024, 0.07, 14]} />
            <meshStandardMaterial color="#1e293b" roughness={0.4} metalness={0.3} />
          </mesh>
          {/* Silver top vent */}
          <mesh position={[0, 0.036, 0]}>
            <cylinderGeometry args={[0.022, 0.022, 0.003, 14]} />
            <meshStandardMaterial color={SOLDER_SILVER} metalness={0.95} roughness={0.15} />
          </mesh>
        </group>
      ))}
      {/* Connector Header Pins */}
      {[-0.11, -0.07, -0.03, 0.01, 0.05, 0.09].map((x, i) => (
        <mesh key={i} position={[x, 0.022, 0.11]}>
          <boxGeometry args={[0.009, 0.028, 0.009]} />
          <meshStandardMaterial color={COPPER_GOLD} metalness={0.95} roughness={0.1} />
        </mesh>
      ))}
    </group>
  );
}

function Esp32Module({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[0, -0.1, 0]}>
      {/* Black PCB */}
      <mesh castShadow>
        <boxGeometry args={[0.18, 0.01, 0.3]} />
        <meshStandardMaterial color="#0f172a" roughness={0.7} />
      </mesh>
      {/* Metal RF Shield Can */}
      <mesh position={[0, 0.012, -0.05]}>
        <boxGeometry args={[0.14, 0.014, 0.13]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.95} roughness={0.15} />
      </mesh>
      {/* Serpentine PCB Antenna */}
      <mesh position={[0, 0.008, -0.12]}>
        <boxGeometry args={[0.12, 0.002, 0.028]} />
        <meshStandardMaterial color={COPPER_GOLD} metalness={0.95} roughness={0.1} />
      </mesh>
      {/* Micro-USB Port */}
      <mesh position={[0, 0.012, 0.145]}>
        <boxGeometry args={[0.05, 0.016, 0.018]} />
        <meshStandardMaterial color={SOLDER_SILVER} metalness={0.95} roughness={0.15} />
      </mesh>
      {/* Dual Row Gold Header Pins */}
      {[-0.085, 0.085].map((x, i) => (
        <mesh key={i} position={[x, 0.018, 0]}>
          <boxGeometry args={[0.009, 0.026, 0.24]} />
          <meshStandardMaterial color={COPPER_GOLD} metalness={0.95} roughness={0.1} />
        </mesh>
      ))}
      {/* Power LED Indicator (Red) */}
      <mesh position={[-0.045, 0.012, 0.09]}>
        <sphereGeometry args={[0.005, 8, 8]} />
        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={4} />
      </mesh>
      {/* Status LED Indicator (Blue) */}
      <mesh position={[0.045, 0.012, 0.09]}>
        <sphereGeometry args={[0.005, 8, 8]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={4} />
      </mesh>
    </group>
  );
}

function DigitalMultimeter({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[0, 0.22, 0]}>
      {/* Industrial Yellow protective rubber holster */}
      <mesh castShadow>
        <boxGeometry args={[0.18, 0.05, 0.3]} />
        <meshStandardMaterial color="#facc15" roughness={0.5} />
      </mesh>
      {/* Dark inner faceplate */}
      <mesh position={[0, 0.026, 0]}>
        <boxGeometry args={[0.155, 0.004, 0.275]} />
        <meshStandardMaterial color="#1e293b" roughness={0.7} />
      </mesh>
      {/* Backlit LCD screen showing 12.04 V */}
      <mesh position={[0, 0.029, -0.07]}>
        <boxGeometry args={[0.12, 0.002, 0.075]} />
        <meshStandardMaterial
          color="#064e3b"
          emissive="#22d3ee"
          emissiveIntensity={1.8}
        />
      </mesh>
      {/* Rotary selector dial */}
      <mesh position={[0, 0.034, 0.03]}>
        <cylinderGeometry args={[0.035, 0.035, 0.016, 16]} />
        <meshStandardMaterial color="#0f172a" roughness={0.6} />
      </mesh>
      {/* Test probe jacks */}
      {[-0.038, 0.038].map((x, i) => (
        <mesh key={i} position={[x, 0.03, 0.11]}>
          <cylinderGeometry args={[0.009, 0.009, 0.014, 10]} />
          <meshStandardMaterial color={i === 0 ? '#ef4444' : '#0f172a'} />
        </mesh>
      ))}
      {/* Red & Black Test Leads trailing onto the mat to PCB */}
      <mesh position={[-0.07, 0.01, 0.18]} rotation={[0, 0.45, 0]}>
        <boxGeometry args={[0.007, 0.007, 0.16]} />
        <meshStandardMaterial color="#ef4444" roughness={0.6} />
      </mesh>
      <mesh position={[0.07, 0.01, 0.18]} rotation={[0, -0.45, 0]}>
        <boxGeometry args={[0.007, 0.007, 0.16]} />
        <meshStandardMaterial color="#0f172a" roughness={0.6} />
      </mesh>
    </group>
  );
}

function SolderingStation({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Heavy station base unit */}
      <mesh castShadow>
        <boxGeometry args={[0.24, 0.15, 0.22]} />
        <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.5} />
      </mesh>
      {/* Digital 7-segment temperature display showing 360°C */}
      <mesh position={[0, 0.028, 0.112]}>
        <boxGeometry args={[0.1, 0.04, 0.002]} />
        <meshStandardMaterial
          color="#450a0a"
          emissive="#ef4444"
          emissiveIntensity={2.5}
        />
      </mesh>
      {/* Temperature control rotary knob */}
      <mesh position={[0.065, -0.028, 0.114]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.018, 0.018, 0.014, 14]} />
        <meshStandardMaterial color="#64748b" metalness={0.8} />
      </mesh>
      {/* Spring wire soldering iron stand on the side */}
      <group position={[0.17, 0.06, 0]}>
        <mesh position={[0, -0.04, 0]}>
          <boxGeometry args={[0.11, 0.04, 0.17]} />
          <meshStandardMaterial color="#334155" metalness={0.7} />
        </mesh>
        {/* Coiled metal spring holder */}
        <mesh position={[0, 0.05, 0]} rotation={[0.4, 0, 0]}>
          <cylinderGeometry args={[0.026, 0.018, 0.15, 14]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.95} roughness={0.15} />
        </mesh>
        {/* Soldering Iron handle resting in holder */}
        <mesh position={[0, 0.13, -0.03]} rotation={[0.4, 0, 0]}>
          <cylinderGeometry args={[0.013, 0.013, 0.19, 12]} />
          <meshStandardMaterial color="#0284c7" roughness={0.5} />
        </mesh>
      </group>
      {/* Solder wire spool */}
      <group position={[-0.16, -0.02, 0.05]} rotation={[0, 0, Math.PI / 2]}>
        <mesh>
          <cylinderGeometry args={[0.048, 0.048, 0.055, 16]} />
          <meshStandardMaterial color={SOLDER_SILVER} metalness={0.95} roughness={0.15} />
        </mesh>
      </group>
    </group>
  );
}

function BenchtopOscilloscope({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[0, 0.12, 0]}>
      {/* Instrument housing */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.46, 0.3, 0.24]} />
        <meshStandardMaterial color="#1e293b" metalness={0.65} roughness={0.35} />
      </mesh>
      {/* Display screen bezel */}
      <mesh position={[-0.07, 0.02, 0.122]}>
        <boxGeometry args={[0.28, 0.2, 0.005]} />
        <meshStandardMaterial color="#020617" />
      </mesh>
      {/* Active oscilloscope screen with bright green phosphor waveform */}
      <mesh position={[-0.07, 0.02, 0.125]}>
        <planeGeometry args={[0.26, 0.18]} />
        <meshStandardMaterial
          color="#052e16"
          emissive="#22c55e"
          emissiveIntensity={2.0}
        />
      </mesh>
      {/* Rotary control knobs */}
      {[[0.13, 0.07], [0.13, -0.02], [0.18, 0.07], [0.18, -0.02]].map(([x, y], i) => (
        <mesh key={i} position={[x, y, 0.125]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.016, 0.016, 0.016, 14]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.85} roughness={0.25} />
        </mesh>
      ))}
      {/* BNC probe input ports */}
      {[-0.13, -0.02].map((x, i) => (
        <mesh key={i} position={[x, -0.1, 0.125]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.011, 0.011, 0.016, 12]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.95} roughness={0.15} />
        </mesh>
      ))}
    </group>
  );
}

function ColorfulJumperWires() {
  return (
    <group position={[-0.32, 0.775, 0.12]}>
      {/* Jumper wire ribbon arc */}
      {[-0.02, 0, 0.02, 0.04].map((offset, i) => (
        <mesh key={i} position={[0, 0.008, offset]} rotation={[0, 0.2, 0]}>
          <boxGeometry args={[0.12, 0.006, 0.006]} />
          <meshStandardMaterial
            color={['#ef4444', '#38bdf8', '#22c55e', '#f59e0b'][i]}
            roughness={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

export function ElectronicsBench() {
  const { dispatch } = useLab();

  function handleBenchClick() {
    dispatch({ type: 'NAVIGATE', section: 'hardware' });
    dispatch({ type: 'OPEN_PANEL', panel: 'hardware' });
  }

  return (
    <group
      position={[-2.35, 0, -0.85]}
      onClick={handleBenchClick}
      onPointerOver={() => (document.body.style.cursor = 'pointer')}
      onPointerOut={() => (document.body.style.cursor = 'auto')}
    >
      {/* Solid workbench top */}
      <mesh position={[0, 0.73, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.7, 0.06, 0.95]} />
        <meshStandardMaterial color={BENCH_TOP} roughness={0.75} metalness={0.2} />
      </mesh>

      {/* Heavy-duty steel workbench frame & legs */}
      {[[-0.78, -0.42], [-0.78, 0.42], [0.78, -0.42], [0.78, 0.42]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.35, z]}>
          <boxGeometry args={[0.065, 0.7, 0.065]} />
          <meshStandardMaterial color={BENCH_FRAME} metalness={0.8} roughness={0.3} />
        </mesh>
      ))}

      {/* Blue Silicone ESD Anti-Static Mat with perimeter marking */}
      <mesh position={[0, 0.765, 0.04]} receiveShadow>
        <boxGeometry args={[1.34, 0.006, 0.7]} />
        <meshStandardMaterial color={ESD_MAT} roughness={0.8} metalness={0.05} />
      </mesh>

      {/* Electronics Instruments & Hardware on Bench */}
      {/* Prototype PCB board */}
      <PcbWithComponents position={[-0.15, 0.78, 0.12]} rotation={[0, 0.1, 0]} />

      {/* ESP32 SoC Development Module */}
      <Esp32Module position={[-0.48, 0.78, 0.15]} />

      {/* Colorful Jumper Wires connecting modules */}
      <ColorfulJumperWires />

      {/* Benchtop Digital Multimeter */}
      <DigitalMultimeter position={[-0.42, 0.78, -0.16]} />

      {/* Digital Soldering Station with coiled iron holder */}
      <SolderingStation position={[0.42, 0.82, -0.18]} />

      {/* Digital Storage Oscilloscope with active green waveform */}
      <BenchtopOscilloscope position={[0.18, 0.89, -0.22]} />

      {/* Precision wire cutters on mat */}
      <group position={[0.24, 0.772, 0.22]} rotation={[0, -0.25, 0]}>
        <mesh>
          <boxGeometry args={[0.045, 0.012, 0.15]} />
          <meshStandardMaterial color="#0284c7" roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.002, -0.075]}>
          <boxGeometry args={[0.022, 0.006, 0.065]} />
          <meshStandardMaterial color={SOLDER_SILVER} metalness={0.95} roughness={0.15} />
        </mesh>
      </group>

      {/* Overhead LED Task Light Bar above workbench */}
      <group position={[0, 2.05, 0]}>
        <mesh>
          <boxGeometry args={[1.5, 0.04, 0.12]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} />
        </mesh>
        <mesh position={[0, -0.021, 0]}>
          <planeGeometry args={[1.45, 0.1]} />
          <meshStandardMaterial
            color="#f0f9ff"
            emissive="#e0f2fe"
            emissiveIntensity={3.2}
          />
        </mesh>
      </group>
    </group>
  );
}
