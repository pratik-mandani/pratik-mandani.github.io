// Realistic Electronics & Product Development Workbench
// ESD mat, PCB with ICs/traces, ESP32 board, Arduino, multimeter with test leads,
// soldering station with coiled stand, oscilloscope with active trace, and precision tools
import { useLab } from '../../context/LabContext';

const BENCH_TOP = '#161d28';
const BENCH_FRAME = '#1a2230';
const ESD_MAT = '#1d3e68';
const PCB_GREEN = '#0c4023';
const COPPER_GOLD = '#d97706';
const IC_BLACK = '#0f172a';
const SOLDER_SILVER = '#cbd5e1';

function PcbWithComponents({ position, rotation = [0, 0, 0] }: { position: [number, number, number]; rotation?: [number, number, number] }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Double-sided FR4 PCB base */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.38, 0.01, 0.28]} />
        <meshStandardMaterial color={PCB_GREEN} roughness={0.5} metalness={0.15} />
      </mesh>
      {/* Copper Ground Plane & Traces */}
      <mesh position={[0, 0.006, 0]}>
        <boxGeometry args={[0.35, 0.002, 0.25]} />
        <meshStandardMaterial color={COPPER_GOLD} metalness={0.85} roughness={0.3} />
      </mesh>
      {/* Green Solder Mask overlay with exposed pads */}
      <mesh position={[0, 0.008, 0]}>
        <boxGeometry args={[0.34, 0.002, 0.24]} />
        <meshStandardMaterial color={PCB_GREEN} roughness={0.6} />
      </mesh>
      {/* Main MCU IC Chip (QFP / SOP package) */}
      <mesh position={[0, 0.016, 0]}>
        <boxGeometry args={[0.1, 0.014, 0.1]} />
        <meshStandardMaterial color={IC_BLACK} roughness={0.8} />
      </mesh>
      {/* IC metallic lead pins */}
      {[-0.055, 0.055].map((x, i) => (
        <mesh key={i} position={[x, 0.012, 0]}>
          <boxGeometry args={[0.015, 0.004, 0.09]} />
          <meshStandardMaterial color={SOLDER_SILVER} metalness={0.9} roughness={0.2} />
        </mesh>
      ))}
      {/* Electrolytic Capacitors (cylindrical cans) */}
      {[[-0.12, 0.06], [-0.12, -0.06]].map(([x, z], i) => (
        <group key={i} position={[x, 0.04, z]}>
          <mesh>
            <cylinderGeometry args={[0.022, 0.022, 0.065, 12]} />
            <meshStandardMaterial color="#1e293b" roughness={0.4} metalness={0.3} />
          </mesh>
          {/* Silver top vent */}
          <mesh position={[0, 0.033, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.002, 12]} />
            <meshStandardMaterial color={SOLDER_SILVER} metalness={0.9} roughness={0.2} />
          </mesh>
        </group>
      ))}
      {/* Connector Header Pins */}
      {[-0.1, -0.06, -0.02, 0.02, 0.06, 0.1].map((x, i) => (
        <mesh key={i} position={[x, 0.02, 0.11]}>
          <boxGeometry args={[0.008, 0.025, 0.008]} />
          <meshStandardMaterial color={COPPER_GOLD} metalness={0.95} roughness={0.1} />
        </mesh>
      ))}
    </group>
  );
}

function Esp32Module({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Black PCB */}
      <mesh castShadow>
        <boxGeometry args={[0.16, 0.008, 0.28]} />
        <meshStandardMaterial color="#0f172a" roughness={0.8} />
      </mesh>
      {/* Metal RF Shield Can */}
      <mesh position={[0, 0.01, -0.04]}>
        <boxGeometry args={[0.13, 0.012, 0.12]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Serpentine PCB Antenna */}
      <mesh position={[0, 0.006, -0.11]}>
        <boxGeometry args={[0.11, 0.002, 0.025]} />
        <meshStandardMaterial color={COPPER_GOLD} metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Micro-USB Port */}
      <mesh position={[0, 0.01, 0.135]}>
        <boxGeometry args={[0.045, 0.015, 0.015]} />
        <meshStandardMaterial color={SOLDER_SILVER} metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Dual Row Gold Header Pins */}
      {[-0.075, 0.075].map((x, i) => (
        <mesh key={i} position={[x, 0.016, 0]}>
          <boxGeometry args={[0.008, 0.024, 0.22]} />
          <meshStandardMaterial color={COPPER_GOLD} metalness={0.9} roughness={0.1} />
        </mesh>
      ))}
      {/* Power LED Indicator */}
      <mesh position={[-0.04, 0.01, 0.08]}>
        <sphereGeometry args={[0.004, 6, 6]} />
        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={3} />
      </mesh>
    </group>
  );
}

function DigitalMultimeter({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[0, 0.2, 0]}>
      {/* Yellow protective rubber holster */}
      <mesh castShadow>
        <boxGeometry args={[0.16, 0.045, 0.28]} />
        <meshStandardMaterial color="#eab308" roughness={0.6} />
      </mesh>
      {/* Dark inner faceplate */}
      <mesh position={[0, 0.024, 0]}>
        <boxGeometry args={[0.14, 0.004, 0.26]} />
        <meshStandardMaterial color="#1e293b" roughness={0.8} />
      </mesh>
      {/* Backlit LCD screen showing 12.04 V */}
      <mesh position={[0, 0.027, -0.06]}>
        <boxGeometry args={[0.11, 0.002, 0.07]} />
        <meshStandardMaterial
          color="#064e3b"
          emissive="#22d3ee"
          emissiveIntensity={1.2}
        />
      </mesh>
      {/* Rotary selector dial */}
      <mesh position={[0, 0.032, 0.03]}>
        <cylinderGeometry args={[0.032, 0.032, 0.014, 16]} />
        <meshStandardMaterial color="#0f172a" roughness={0.7} />
      </mesh>
      {/* Test probe jacks */}
      {[-0.035, 0.035].map((x, i) => (
        <mesh key={i} position={[x, 0.028, 0.1]}>
          <cylinderGeometry args={[0.008, 0.008, 0.012, 10]} />
          <meshStandardMaterial color={i === 0 ? '#ef4444' : '#0f172a'} />
        </mesh>
      ))}
      {/* Red & Black Test Leads trailing onto the mat */}
      <mesh position={[-0.06, 0.008, 0.16]} rotation={[0, 0.4, 0]}>
        <boxGeometry args={[0.006, 0.006, 0.14]} />
        <meshStandardMaterial color="#ef4444" roughness={0.7} />
      </mesh>
      <mesh position={[0.06, 0.008, 0.16]} rotation={[0, -0.4, 0]}>
        <boxGeometry args={[0.006, 0.006, 0.14]} />
        <meshStandardMaterial color="#0f172a" roughness={0.7} />
      </mesh>
    </group>
  );
}

function SolderingStation({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Heavy base unit */}
      <mesh castShadow>
        <boxGeometry args={[0.22, 0.14, 0.2]} />
        <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.5} />
      </mesh>
      {/* Digital 7-segment temperature display showing 360°C */}
      <mesh position={[0, 0.025, 0.102]}>
        <boxGeometry args={[0.09, 0.035, 0.002]} />
        <meshStandardMaterial
          color="#450a0a"
          emissive="#ef4444"
          emissiveIntensity={1.8}
        />
      </mesh>
      {/* Temperature control rotary knob */}
      <mesh position={[0.06, -0.025, 0.104]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.016, 0.016, 0.012, 12]} />
        <meshStandardMaterial color="#64748b" metalness={0.8} />
      </mesh>
      {/* Spring wire soldering iron stand on the side */}
      <group position={[0.16, 0.06, 0]}>
        <mesh position={[0, -0.04, 0]}>
          <boxGeometry args={[0.1, 0.04, 0.16]} />
          <meshStandardMaterial color="#334155" metalness={0.7} />
        </mesh>
        {/* Coiled metal spring holder */}
        <mesh position={[0, 0.05, 0]} rotation={[0.4, 0, 0]}>
          <cylinderGeometry args={[0.024, 0.016, 0.14, 12]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Soldering Iron handle resting in holder */}
        <mesh position={[0, 0.12, -0.03]} rotation={[0.4, 0, 0]}>
          <cylinderGeometry args={[0.012, 0.012, 0.18, 12]} />
          <meshStandardMaterial color="#0284c7" roughness={0.6} />
        </mesh>
      </group>
      {/* Solder wire spool */}
      <group position={[-0.15, -0.02, 0.05]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.045, 0.045, 0.05, 16]} />
          <meshStandardMaterial color={SOLDER_SILVER} metalness={0.9} roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
}

function BenchtopOscilloscope({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[0, 0.1, 0]}>
      {/* Instrument housing */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.44, 0.28, 0.22]} />
        <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Display screen bezel */}
      <mesh position={[-0.06, 0.02, 0.112]}>
        <boxGeometry args={[0.26, 0.18, 0.005]} />
        <meshStandardMaterial color="#020617" />
      </mesh>
      {/* Active oscilloscope screen with green phosphor wave */}
      <mesh position={[-0.06, 0.02, 0.115]}>
        <planeGeometry args={[0.24, 0.16]} />
        <meshStandardMaterial
          color="#052e16"
          emissive="#22c55e"
          emissiveIntensity={1.4}
        />
      </mesh>
      {/* Rotary control knobs */}
      {[[0.12, 0.06], [0.12, -0.02], [0.17, 0.06], [0.17, -0.02]].map(([x, y], i) => (
        <mesh key={i} position={[x, y, 0.115]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 0.015, 12]} />
          <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.3} />
        </mesh>
      ))}
      {/* BNC probe input ports */}
      {[-0.12, -0.02].map((x, i) => (
        <mesh key={i} position={[x, -0.09, 0.115]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.01, 0.01, 0.015, 10]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
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
        <meshStandardMaterial color={BENCH_TOP} roughness={0.8} metalness={0.15} />
      </mesh>

      {/* Heavy-duty steel workbench frame & legs */}
      {[[-0.78, -0.42], [-0.78, 0.42], [0.78, -0.42], [0.78, 0.42]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.35, z]}>
          <boxGeometry args={[0.06, 0.7, 0.06]} />
          <meshStandardMaterial color={BENCH_FRAME} metalness={0.8} roughness={0.3} />
        </mesh>
      ))}

      {/* Blue Silicone ESD Anti-Static Mat */}
      <mesh position={[0, 0.765, 0.04]} receiveShadow>
        <boxGeometry args={[1.3, 0.006, 0.68]} />
        <meshStandardMaterial color={ESD_MAT} roughness={0.85} metalness={0.05} />
      </mesh>

      {/* Electronics Instruments & Hardware on Bench */}
      {/* Prototype PCB board */}
      <PcbWithComponents position={[-0.15, 0.78, 0.12]} rotation={[0, 0.1, 0]} />

      {/* ESP32 SoC Development Module */}
      <Esp32Module position={[-0.48, 0.78, 0.15]} />

      {/* Benchtop Digital Multimeter */}
      <DigitalMultimeter position={[-0.42, 0.78, -0.16]} />

      {/* Digital Soldering Station with coiled iron holder */}
      <SolderingStation position={[0.42, 0.82, -0.18]} />

      {/* Digital Storage Oscilloscope with live waveform */}
      <BenchtopOscilloscope position={[0.18, 0.89, -0.22]} />

      {/* Wire cutters & precision tweezers on mat */}
      <group position={[0.22, 0.772, 0.22]} rotation={[0, -0.25, 0]}>
        <mesh>
          <boxGeometry args={[0.04, 0.01, 0.14]} />
          <meshStandardMaterial color="#0284c7" roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.002, -0.07]}>
          <boxGeometry args={[0.02, 0.006, 0.06]} />
          <meshStandardMaterial color={SOLDER_SILVER} metalness={0.9} roughness={0.2} />
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
            emissiveIntensity={2.5}
          />
        </mesh>
      </group>
    </group>
  );
}
