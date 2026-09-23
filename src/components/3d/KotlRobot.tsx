// KOTL — The Smart Emotional Assistant Robot Prototype
// Physically placed on the electronics workbench ESD mat
// Clicking KOTL smoothly moves camera closer, highlights the robot, and reveals interactive HUD card
import React, { useRef, useState, useEffect } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { useLab } from '../../context/LabContext';

const CHASSIS_COLOR = '#1e2838';
const ACCENT_CYAN = '#38bdf8';
const ACCENT_GOLD = '#fbbf24';

function OledEyes() {
  const expressions = ['( ⌒‿⌒ )', '( ^_^ )', '( ◉‿◉ )', '( -.- )', '( ◕‿◕ )'];
  const [exprIdx, setExprIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setExprIdx((prev) => (prev + 1) % expressions.length);
    }, 2600);
    return () => clearInterval(id);
  }, [expressions.length]);

  return (
    <div
      style={{
        width: '68px',
        height: '42px',
        background: '#020617',
        border: '1px solid #38bdf8',
        borderRadius: '2px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '11px',
        fontWeight: 700,
        color: '#38bdf8',
        textShadow: '0 0 6px #38bdf8',
        userSelect: 'none',
        pointerEvents: 'none',
        boxSizing: 'border-box',
      }}
    >
      {expressions[exprIdx]}
    </div>
  );
}

function KotlHudCard({ onClose, onOpenCaseStudy }: { onClose: () => void; onOpenCaseStudy: () => void }) {
  return (
    <div
      style={{
        width: '260px',
        background: 'rgba(3, 9, 20, 0.96)',
        border: '1px solid #38bdf8',
        borderTop: '2px solid #38bdf8',
        borderRadius: '4px',
        fontFamily: '"JetBrains Mono", "Courier New", monospace',
        padding: '12px 14px',
        boxShadow: '0 0 25px rgba(56,189,248,0.25)',
        pointerEvents: 'auto',
        userSelect: 'none',
        position: 'relative',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
        <div>
          <div style={{ color: '#38bdf8', fontSize: '11px', fontWeight: 800, letterSpacing: '1.5px' }}>
            KOTL
          </div>
          <div style={{ color: '#94a3b8', fontSize: '7.5px', letterSpacing: '1px' }}>
            SMART EMOTIONAL ASSISTANT ROBOT
          </div>
        </div>
        <button
          onClick={onClose}
          style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '11px', padding: '0 2px' }}
        >
          ✕
        </button>
      </div>

      <div style={{ background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.2)', padding: '3px 6px', borderRadius: '2px', color: '#7dd3fc', fontSize: '8px', fontWeight: 700, letterSpacing: '1px', marginBottom: '8px', textAlign: 'center' }}>
        PERSONAL EMBEDDED PROJECT
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '10px' }}>
        {['ESP32', 'OLED', 'AUDIO', 'SENSORS', 'FIRMWARE'].map((tag) => (
          <span
            key={tag}
            style={{
              background: '#071324',
              border: '1px solid #1e3a5f',
              color: '#38bdf8',
              fontSize: '7.5px',
              padding: '2px 5px',
              borderRadius: '2px',
              fontWeight: 600,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        onClick={onOpenCaseStudy}
        style={{
          width: '100%',
          background: '#0284c7',
          border: '1px solid #38bdf8',
          color: '#f0f9ff',
          padding: '6px 0',
          fontFamily: 'inherit',
          fontSize: '9px',
          fontWeight: 700,
          letterSpacing: '1.5px',
          cursor: 'pointer',
          borderRadius: '2px',
          boxShadow: '0 0 10px rgba(56,189,248,0.4)',
        }}
      >
        [ EXPLORE PROJECT ]
      </button>
    </div>
  );
}

export function KotlRobot() {
  const { state, dispatch } = useLab();
  const [hovered, setHovered] = useState(false);
  const robotRef = useRef<THREE.Group>(null);
  const antennaRef = useRef<THREE.Mesh>(null);

  const isSelected = state.currentSection === 'kotl';

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    // Gentle companion bobbing on the bench
    if (robotRef.current) {
      robotRef.current.position.y = 0.94 + Math.sin(t * 1.6) * 0.008;
    }
    // Antenna subtle oscillation
    if (antennaRef.current) {
      antennaRef.current.rotation.z = Math.sin(t * 2.5) * 0.08;
    }
  });

  function handleClick(e: ThreeEvent<MouseEvent>) {
    e.stopPropagation();
    dispatch({ type: 'NAVIGATE', section: 'kotl' });
  }

  function handleOpenCaseStudy() {
    dispatch({ type: 'OPEN_PROJECT', id: 'kotl-emotional-robot' });
  }

  return (
    <group
      ref={robotRef}
      position={[-2.15, 0.94, -0.75]}
      onClick={handleClick}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      {/* Robot Base Chassis & Legs */}
      <mesh position={[-0.06, -0.12, 0]} castShadow>
        <boxGeometry args={[0.06, 0.08, 0.06]} />
        <meshStandardMaterial color={CHASSIS_COLOR} metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0.06, -0.12, 0]} castShadow>
        <boxGeometry args={[0.06, 0.08, 0.06]} />
        <meshStandardMaterial color={CHASSIS_COLOR} metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Main Body Torso */}
      <mesh position={[0, -0.01, 0]} castShadow>
        <boxGeometry args={[0.22, 0.16, 0.16]} />
        <meshStandardMaterial
          color={CHASSIS_COLOR}
          metalness={0.7}
          roughness={0.3}
          emissive={isSelected || hovered ? ACCENT_CYAN : '#000000'}
          emissiveIntensity={isSelected ? 0.35 : hovered ? 0.2 : 0}
        />
      </mesh>

      {/* Status LEDs on Torso */}
      {[-0.05, 0, 0.05].map((x, i) => (
        <mesh key={i} position={[x, -0.02, 0.082]}>
          <sphereGeometry args={[0.005, 8, 8]} />
          <meshStandardMaterial
            color={i === 0 ? ACCENT_CYAN : i === 1 ? ACCENT_GOLD : '#22c55e'}
            emissive={i === 0 ? ACCENT_CYAN : i === 1 ? ACCENT_GOLD : '#22c55e'}
            emissiveIntensity={3}
          />
        </mesh>
      ))}

      {/* Mini Speaker Grille Ports */}
      <mesh position={[0, -0.05, 0.082]}>
        <boxGeometry args={[0.12, 0.015, 0.002]} />
        <meshStandardMaterial color="#0f172a" roughness={0.9} />
      </mesh>

      {/* Neck Joint */}
      <mesh position={[0, 0.09, 0]}>
        <cylinderGeometry args={[0.035, 0.045, 0.04, 12]} />
        <meshStandardMaterial color="#64748b" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Robot Head */}
      <mesh position={[0, 0.18, 0]} castShadow>
        <boxGeometry args={[0.24, 0.15, 0.16]} />
        <meshStandardMaterial
          color={CHASSIS_COLOR}
          metalness={0.7}
          roughness={0.3}
          emissive={isSelected || hovered ? ACCENT_CYAN : '#000000'}
          emissiveIntensity={isSelected ? 0.35 : hovered ? 0.2 : 0}
        />
      </mesh>

      {/* OLED Screen Bezel on Head */}
      <mesh position={[0, 0.18, 0.081]}>
        <planeGeometry args={[0.16, 0.1]} />
        <meshStandardMaterial color="#020617" />
      </mesh>

      {/* OLED Eyes Animated Face */}
      <Html
        transform
        position={[0, 0.18, 0.084]}
        distanceFactor={0.28}
        occlude={false}
        style={{ pointerEvents: 'none' }}
      >
        <OledEyes />
      </Html>

      {/* Antenna */}
      <group position={[0, 0.255, 0]}>
        <mesh ref={antennaRef}>
          <cylinderGeometry args={[0.004, 0.004, 0.1, 8]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Glowing tip */}
        <mesh position={[0, 0.055, 0]}>
          <sphereGeometry args={[0.012, 10, 10]} />
          <meshStandardMaterial
            color={ACCENT_CYAN}
            emissive={ACCENT_CYAN}
            emissiveIntensity={4}
          />
        </mesh>
      </group>

      {/* Interactive HUD Card appearing when KOTL is selected */}
      {isSelected && (
        <Html
          position={[0.26, 0.18, 0]}
          distanceFactor={1.8}
          occlude={false}
          style={{ pointerEvents: 'auto' }}
        >
          <KotlHudCard
            onClose={() => dispatch({ type: 'NAVIGATE', section: 'home' })}
            onOpenCaseStudy={handleOpenCaseStudy}
          />
        </Html>
      )}
    </group>
  );
}
