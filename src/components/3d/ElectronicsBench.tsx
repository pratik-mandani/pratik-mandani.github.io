// Electronics workbench — PCB boards, oscilloscope, multimeter, ESP32, tools
import { useState } from 'react';
import { ThreeEvent } from '@react-three/fiber';
import { useLab } from '../../context/LabContext';

const BENCH_WOOD = '#0e1a2a';
const BENCH_EDGE = '#1e3a5f';
const PCB_GREEN = '#0d3320';
const PCB_TRACE = '#b87333';
const METAL_DARK = '#1a2535';
const METAL_MID = '#2a3545';

function PCBBoard({ position, rotation = [0, 0, 0] }: { position: [number, number, number]; rotation?: [number, number, number] }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Board substrate */}
      <mesh castShadow>
        <boxGeometry args={[0.55, 0.012, 0.4]} />
        <meshStandardMaterial color={PCB_GREEN} roughness={0.8} metalness={0.1} />
      </mesh>
      {/* Copper traces (visual strips) */}
      <mesh position={[0, 0.007, 0.06]}>
        <boxGeometry args={[0.52, 0.002, 0.015]} />
        <meshStandardMaterial color={PCB_TRACE} metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.007, -0.06]}>
        <boxGeometry args={[0.52, 0.002, 0.015]} />
        <meshStandardMaterial color={PCB_TRACE} metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0.15, 0.007, 0]}>
        <boxGeometry args={[0.015, 0.002, 0.3]} />
        <meshStandardMaterial color={PCB_TRACE} metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[-0.15, 0.007, 0]}>
        <boxGeometry args={[0.015, 0.002, 0.3]} />
        <meshStandardMaterial color={PCB_TRACE} metalness={0.9} roughness={0.2} />
      </mesh>
      {/* SMD components */}
      {[[-0.1, 0.1], [0.05, -0.1], [0.2, 0.08], [-0.2, -0.05]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.012, z]}>
          <boxGeometry args={[0.03, 0.015, 0.02]} />
          <meshStandardMaterial color={i % 2 === 0 ? '#1a1a2e' : '#2a1a1a'} roughness={0.7} />
        </mesh>
      ))}
      {/* Connector pins row */}
      {[-0.22, -0.18, -0.14, -0.1, -0.06, -0.02, 0.02, 0.06].map((x, i) => (
        <mesh key={i} position={[x, 0.018, 0.18]}>
          <boxGeometry args={[0.008, 0.022, 0.008]} />
          <meshStandardMaterial color="#c0a060" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}
    </group>
  );
}

function ESP32Board({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Main board — black substrate */}
      <mesh castShadow>
        <boxGeometry args={[0.28, 0.01, 0.52]} />
        <meshStandardMaterial color="#0d1117" roughness={0.8} />
      </mesh>
      {/* WiFi module patch */}
      <mesh position={[0, 0.012, -0.16]}>
        <boxGeometry args={[0.22, 0.015, 0.18]} />
        <meshStandardMaterial color="#1a1a2a" roughness={0.7} />
      </mesh>
      {/* Antenna trace */}
      <mesh position={[0.1, 0.018, -0.18]}>
        <boxGeometry args={[0.004, 0.004, 0.12]} />
        <meshStandardMaterial color="#c0a060" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* USB port */}
      <mesh position={[0, 0.012, 0.255]}>
        <boxGeometry args={[0.06, 0.02, 0.015]} />
        <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* GPIO pins — two rows */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={i} position={[-0.145, 0.02, -0.22 + i * 0.044]}>
          <boxGeometry args={[0.006, 0.025, 0.006]} />
          <meshStandardMaterial color="#c0a060" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={i} position={[0.145, 0.02, -0.22 + i * 0.044]}>
          <boxGeometry args={[0.006, 0.025, 0.006]} />
          <meshStandardMaterial color="#c0a060" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}
      {/* Status LEDs */}
      <mesh position={[-0.08, 0.018, 0.18]}>
        <sphereGeometry args={[0.008, 6, 6]} />
        <meshStandardMaterial color="#4ade80" emissive="#4ade80" emissiveIntensity={3} />
      </mesh>
      <mesh position={[0, 0.018, 0.18]}>
        <sphereGeometry args={[0.008, 6, 6]} />
        <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={2} />
      </mesh>
    </group>
  );
}

function Oscilloscope({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Body */}
      <mesh castShadow>
        <boxGeometry args={[0.45, 0.32, 0.28]} />
        <meshStandardMaterial color={METAL_DARK} roughness={0.7} metalness={0.4} />
      </mesh>
      {/* Screen */}
      <mesh position={[-0.05, 0.04, 0.142]}>
        <boxGeometry args={[0.28, 0.2, 0.005]} />
        <meshStandardMaterial color="#030d18" emissive="#00ff88" emissiveIntensity={0.4} />
      </mesh>
      {/* Wave line on screen */}
      <mesh position={[-0.05, 0.04, 0.145]}>
        <boxGeometry args={[0.25, 0.004, 0.002]} />
        <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={3} />
      </mesh>
      {/* Knobs */}
      {[0.15, 0.15].map((x, i) => (
        <mesh key={i} position={[x, [0.06, -0.04][i], 0.142]}>
          <cylinderGeometry args={[0.022, 0.022, 0.025, 12]} />
          <meshStandardMaterial color={METAL_MID} metalness={0.7} roughness={0.3} />
        </mesh>
      ))}
      {/* BNC probe ports */}
      {[-0.12, 0.0].map((x, i) => (
        <mesh key={i} position={[x, -0.1, 0.142]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 0.02, 8]} />
          <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function Multimeter({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh castShadow>
        <boxGeometry args={[0.14, 0.28, 0.04]} />
        <meshStandardMaterial color="#111827" roughness={0.8} />
      </mesh>
      {/* LCD display */}
      <mesh position={[0, 0.06, 0.022]}>
        <boxGeometry args={[0.1, 0.08, 0.002]} />
        <meshStandardMaterial color="#0a2a1a" emissive="#22d3ee" emissiveIntensity={0.5} />
      </mesh>
      {/* Reading display */}
      <mesh position={[0, 0.06, 0.024]}>
        <boxGeometry args={[0.085, 0.025, 0.001]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} />
      </mesh>
      {/* Dial */}
      <mesh position={[0, -0.04, 0.022]}>
        <cylinderGeometry args={[0.042, 0.042, 0.015, 18]} />
        <meshStandardMaterial color="#1e293b" roughness={0.7} metalness={0.5} />
      </mesh>
      {/* Probe jacks */}
      <mesh position={[-0.03, -0.11, 0.022]}>
        <cylinderGeometry args={[0.01, 0.01, 0.015, 8]} />
        <meshStandardMaterial color="#ef4444" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.03, -0.11, 0.022]}>
        <cylinderGeometry args={[0.01, 0.01, 0.015, 8]} />
        <meshStandardMaterial color="#1c1c1c" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

function SolderingStation({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Base unit */}
      <mesh castShadow>
        <boxGeometry args={[0.18, 0.09, 0.16]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.8} metalness={0.3} />
      </mesh>
      {/* Display */}
      <mesh position={[0, 0.03, 0.082]}>
        <boxGeometry args={[0.08, 0.04, 0.002]} />
        <meshStandardMaterial color="#0a0a1a" emissive="#f59e0b" emissiveIntensity={0.6} />
      </mesh>
      {/* Iron holder arm */}
      <mesh position={[0.08, 0.1, 0]}>
        <boxGeometry args={[0.02, 0.15, 0.02]} />
        <meshStandardMaterial color={METAL_MID} metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Iron */}
      <mesh position={[0.1, 0.17, -0.03]} rotation={[0.3, 0, 0.3]}>
        <cylinderGeometry args={[0.01, 0.015, 0.18, 8]} />
        <meshStandardMaterial color="#2a2a3a" roughness={0.6} metalness={0.5} />
      </mesh>
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
      onClick={handleBenchClick}
      onPointerOver={() => (document.body.style.cursor = 'pointer')}
      onPointerOut={() => (document.body.style.cursor = 'auto')}
    >
      {/* Bench surface */}
      <mesh position={[-7, 0.78, -3]} castShadow receiveShadow>
        <boxGeometry args={[4.2, 0.06, 2.0]} />
        <meshStandardMaterial color={BENCH_WOOD} roughness={0.85} metalness={0.05} />
      </mesh>
      {/* Bench front edge */}
      <mesh position={[-7, 0.75, -2.02]}>
        <boxGeometry args={[4.2, 0.04, 0.02]} />
        <meshStandardMaterial color={BENCH_EDGE} emissive="#0a2040" emissiveIntensity={0.3} />
      </mesh>

      {/* Bench legs */}
      {[[-5.1, -4.9], [-5.1, -1.1], [-8.9, -4.9], [-8.9, -1.1]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.38, z]}>
          <boxGeometry args={[0.07, 0.76, 0.07]} />
          <meshStandardMaterial color={METAL_MID} metalness={0.6} roughness={0.4} />
        </mesh>
      ))}

      {/* Back shelf on wall */}
      <mesh position={[-7, 2.2, -4.5]}>
        <boxGeometry args={[4.2, 0.04, 0.4]} />
        <meshStandardMaterial color={METAL_DARK} roughness={0.7} metalness={0.4} />
      </mesh>

      {/* Components on bench */}
      <PCBBoard position={[-8.0, 0.85, -3.4]} />
      <PCBBoard position={[-6.5, 0.85, -3.8]} rotation={[0, 0.3, 0]} />
      <ESP32Board position={[-7.4, 0.83, -2.6]} />
      <Oscilloscope position={[-5.4, 1.0, -3.5]} />
      <Multimeter position={[-8.6, 0.87, -2.5]} />
      <SolderingStation position={[-6.0, 0.87, -2.3]} />

      {/* Wire coils */}
      {[[-7.8, -2.2], [-6.2, -2.0]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.86, z]}>
          <torusGeometry args={[0.055, 0.018, 6, 12]} />
          <meshStandardMaterial color={i === 0 ? '#ef4444' : '#1c1c1c'} roughness={0.8} />
        </mesh>
      ))}

      {/* Bench label hover indicator */}
      <mesh position={[-7, 1.0, -2.0]}>
        <boxGeometry args={[4.0, 0.002, 1.8]} />
        <meshStandardMaterial color="#22d3ee" transparent opacity={0.04} emissive="#22d3ee" emissiveIntensity={0.5} />
      </mesh>

      {/* Overhead light strip */}
      <mesh position={[-7, 2.6, -3.5]}>
        <boxGeometry args={[3.5, 0.03, 0.1]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.8} transparent opacity={0.7} />
      </mesh>

      {/* Section label on wall behind bench */}
      <mesh position={[-7, 2.85, -4.45]}>
        <planeGeometry args={[3, 0.3]} />
        <meshStandardMaterial color="#0a1628" emissive="#0d2040" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}
