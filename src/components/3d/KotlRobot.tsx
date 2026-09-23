// KOTL — The Smart Emotional Assistant Robot on electronics bench
import React, { useRef } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { useLab } from '../../context/LabContext';

const BODY_COLOR = '#1a1f2e';
const ACCENT = '#22d3ee';
const FACE_BG = '#030912';

function OledFace() {
  const expressions = ['( ⌒‿⌒ )', '( ^_^ )', '( ◉‿◉ )', '( -.- )', '( o_o )'];
  const [exprIdx, setExprIdx] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setExprIdx(i => (i + 1) % expressions.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        width: '64px',
        height: '48px',
        background: '#000',
        border: '1px solid #22d3ee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'monospace',
        fontSize: '10px',
        color: '#22d3ee',
        textShadow: '0 0 4px #22d3ee',
        userSelect: 'none',
        pointerEvents: 'none',
        borderRadius: '2px',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {expressions[exprIdx]}
    </div>
  );
}

export function KotlRobot() {
  const { dispatch } = useLab();
  const bodyRef = useRef<THREE.Group>(null);
  const eyeRef = useRef<THREE.Mesh>(null);
  const antRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    // Gentle hover bob
    if (bodyRef.current) {
      bodyRef.current.position.y = 1.0 + Math.sin(t * 1.1) * 0.018;
    }
    // Antenna wiggle
    if (antRef.current) {
      antRef.current.rotation.z = Math.sin(t * 2.2) * 0.12;
    }
  });

  function handleClick(e: ThreeEvent<MouseEvent>) {
    e.stopPropagation();
    dispatch({ type: 'NAVIGATE', section: 'kotl' });
    dispatch({ type: 'OPEN_PROJECT', id: 'kotl-emotional-robot' });
  }

  return (
    <group
      ref={bodyRef}
      position={[-6.5, 1.0, -3.8]}
      onClick={handleClick}
      onPointerOver={() => (document.body.style.cursor = 'pointer')}
      onPointerOut={() => (document.body.style.cursor = 'auto')}
    >
      {/* Legs */}
      <mesh position={[-0.1, -0.42, 0]}>
        <boxGeometry args={[0.1, 0.22, 0.1]} />
        <meshStandardMaterial color={BODY_COLOR} roughness={0.7} metalness={0.4} />
      </mesh>
      <mesh position={[0.1, -0.42, 0]}>
        <boxGeometry args={[0.1, 0.22, 0.1]} />
        <meshStandardMaterial color={BODY_COLOR} roughness={0.7} metalness={0.4} />
      </mesh>
      {/* Feet */}
      <mesh position={[-0.1, -0.56, 0.02]}>
        <boxGeometry args={[0.12, 0.06, 0.16]} />
        <meshStandardMaterial color="#111827" roughness={0.8} />
      </mesh>
      <mesh position={[0.1, -0.56, 0.02]}>
        <boxGeometry args={[0.12, 0.06, 0.16]} />
        <meshStandardMaterial color="#111827" roughness={0.8} />
      </mesh>

      {/* Torso */}
      <mesh position={[0, -0.12, 0]} castShadow>
        <boxGeometry args={[0.36, 0.42, 0.28]} />
        <meshStandardMaterial color={BODY_COLOR} roughness={0.6} metalness={0.5} />
      </mesh>

      {/* Torso accent lines */}
      <mesh position={[0, -0.04, 0.142]}>
        <boxGeometry args={[0.3, 0.005, 0.002]} />
        <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={1.5} />
      </mesh>
      <mesh position={[0, -0.14, 0.142]}>
        <boxGeometry args={[0.3, 0.005, 0.002]} />
        <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={1.5} />
      </mesh>

      {/* Chest panel — ESP32-style */}
      <mesh position={[0, -0.2, 0.143]}>
        <boxGeometry args={[0.22, 0.12, 0.005]} />
        <meshStandardMaterial color="#0d1a2e" roughness={0.9} />
      </mesh>
      {/* Chest LED grid */}
      {[[-0.06, -0.02], [0, -0.02], [0.06, -0.02], [-0.06, 0.04], [0, 0.04], [0.06, 0.04]].map(([x, y], i) => (
        <mesh key={i} position={[x, y - 0.2, 0.147]}>
          <sphereGeometry args={[0.008, 6, 6]} />
          <meshStandardMaterial
            color={['#4ade80', '#22d3ee', '#f59e0b', '#a78bfa', '#ef4444', '#38bdf8'][i]}
            emissive={['#4ade80', '#22d3ee', '#f59e0b', '#a78bfa', '#ef4444', '#38bdf8'][i]}
            emissiveIntensity={2.5}
          />
        </mesh>
      ))}

      {/* Arms */}
      <mesh position={[-0.24, -0.12, 0]}>
        <boxGeometry args={[0.1, 0.36, 0.1]} />
        <meshStandardMaterial color={BODY_COLOR} roughness={0.6} metalness={0.5} />
      </mesh>
      <mesh position={[0.24, -0.12, 0]}>
        <boxGeometry args={[0.1, 0.36, 0.1]} />
        <meshStandardMaterial color={BODY_COLOR} roughness={0.6} metalness={0.5} />
      </mesh>
      {/* Hands / claws */}
      <mesh position={[-0.24, -0.36, 0]}>
        <sphereGeometry args={[0.06, 10, 10]} />
        <meshStandardMaterial color={BODY_COLOR} roughness={0.5} metalness={0.6} />
      </mesh>
      <mesh position={[0.24, -0.36, 0]}>
        <sphereGeometry args={[0.06, 10, 10]} />
        <meshStandardMaterial color={BODY_COLOR} roughness={0.5} metalness={0.6} />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 0.16, 0]}>
        <cylinderGeometry args={[0.07, 0.1, 0.1, 10]} />
        <meshStandardMaterial color={BODY_COLOR} roughness={0.6} metalness={0.5} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.35, 0]} castShadow>
        <boxGeometry args={[0.32, 0.28, 0.28]} />
        <meshStandardMaterial color={BODY_COLOR} roughness={0.5} metalness={0.6} />
      </mesh>

      {/* OLED face screen */}
      <mesh position={[0, 0.35, 0.143]}>
        <boxGeometry args={[0.2, 0.15, 0.005]} />
        <meshStandardMaterial color={FACE_BG} emissive="#001820" emissiveIntensity={1} />
      </mesh>

      {/* OLED HTML content */}
      <Html transform position={[0, 0.35, 0.148]} distanceFactor={0.35} occlude={false} style={{ pointerEvents: 'none' }}>
        <OledFace />
      </Html>

      {/* Antenna */}
      <mesh position={[0, 0.56, 0]} ref={antRef}>
        <cylinderGeometry args={[0.008, 0.008, 0.18, 6]} />
        <meshStandardMaterial color={ACCENT} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.66, 0]}>
        <sphereGeometry args={[0.018, 8, 8]} />
        <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={3} />
      </mesh>

      {/* Hover glow indicator */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.42, 0.9, 0.35]} />
        <meshStandardMaterial color={ACCENT} transparent opacity={0.0} emissive={ACCENT} emissiveIntensity={0} />
      </mesh>

      {/* Name plate below */}
      <mesh position={[0, -0.72, 0.12]}>
        <planeGeometry args={[0.35, 0.08]} />
        <meshStandardMaterial color="#030912" emissive="#0a2040" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}
