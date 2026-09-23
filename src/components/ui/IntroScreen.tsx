// Opening cinematic intro screen — "ENTER LAB" / "Skip Intro"
import { useEffect, useState } from 'react';
import { useLab } from '../../context/LabContext';

interface Props {
  onComplete: () => void;
}

export function IntroScreen({ onComplete }: Props) {
  const { dispatch } = useLab();
  const [phase, setPhase] = useState<'loading' | 'ready' | 'fading'>('loading');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate scene load progress
    const steps = [10, 25, 42, 58, 70, 83, 92, 100];
    let i = 0;
    const id = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i]);
        i++;
      } else {
        clearInterval(id);
        setPhase('ready');
      }
    }, 200);
    return () => clearInterval(id);
  }, []);

  function handleEnter() {
    setPhase('fading');
    dispatch({ type: 'COMPLETE_INTRO' });
    setTimeout(onComplete, 700);
  }

  function handleSkip() {
    handleEnter();
  }

  const messages = [
    'Initializing lab environment...',
    'Loading 3D scene geometry...',
    'Calibrating monitor displays...',
    'Placing electronics workbench...',
    'Deploying KOTL robot...',
    'Rendering career timeline wall...',
    'Connecting portfolio systems...',
    'Lab ready.',
  ];
  const msgIndex = Math.min(Math.floor(progress / 13), messages.length - 1);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: '#020610',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Courier New", Courier, monospace',
        color: '#7dd3fc',
        transition: phase === 'fading' ? 'opacity 0.7s ease' : 'none',
        opacity: phase === 'fading' ? 0 : 1,
        pointerEvents: phase === 'fading' ? 'none' : 'auto',
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(14,48,96,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(14,48,96,0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      {/* Top scanline effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)',
        pointerEvents: 'none',
      }} />

      {/* Corner decorations */}
      {[
        { top: 24, left: 24 },
        { top: 24, right: 24 },
        { bottom: 24, left: 24 },
        { bottom: 24, right: 24 },
      ].map((style, i) => (
        <div key={i} style={{
          position: 'absolute',
          ...style,
          width: 40,
          height: 40,
          borderTop: i < 2 ? '2px solid #1e5a9a' : 'none',
          borderBottom: i >= 2 ? '2px solid #1e5a9a' : 'none',
          borderLeft: i === 0 || i === 2 ? '2px solid #1e5a9a' : 'none',
          borderRight: i === 1 || i === 3 ? '2px solid #1e5a9a' : 'none',
        }} />
      ))}

      {/* Main content */}
      <div style={{ position: 'relative', textAlign: 'center', maxWidth: 600, padding: '0 24px' }}>
        {/* System label */}
        <div style={{ color: '#1e5a9a', fontSize: 11, letterSpacing: 6, marginBottom: 16 }}>
          PRATIK MANDANI // ENGINEERING LAB
        </div>

        {/* Main title */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontSize: 'clamp(28px, 6vw, 56px)', fontWeight: 900, letterSpacing: '-1px', color: '#f0f9ff', lineHeight: 1 }}>
            THE
          </div>
          <div style={{ fontSize: 'clamp(28px, 6vw, 56px)', fontWeight: 900, letterSpacing: '4px', color: '#38bdf8', lineHeight: 1.1, textShadow: '0 0 30px rgba(56,189,248,0.4)' }}>
            ENGINEERING LAB
          </div>
        </div>

        {/* Tagline */}
        <div style={{ color: '#4a7a9b', fontSize: 12, letterSpacing: 2, marginBottom: 40 }}>
          Product Development · Embedded Systems · Full-Stack Web
        </div>

        {/* Quote */}
        <div style={{ color: '#1e5a9a', fontSize: 11, fontStyle: 'italic', marginBottom: 40, padding: '8px 20px', border: '1px solid #0e3060', borderRadius: 3, background: '#030912' }}>
          "The Engineer Thinks. The AI Executes."
        </div>

        {/* Loading progress or CTA */}
        {phase === 'loading' ? (
          <div>
            <div style={{ width: '100%', height: 2, background: '#0a1628', borderRadius: 1, marginBottom: 8, overflow: 'hidden' }}>
              <div style={{ width: `${progress}%`, height: '100%', background: '#38bdf8', transition: 'width 0.3s ease', boxShadow: '0 0 8px #38bdf8' }} />
            </div>
            <div style={{ color: '#4a7a9b', fontSize: 10, letterSpacing: 1 }}>
              {messages[msgIndex]} <span style={{ color: '#38bdf8' }}>{progress}%</span>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
            <button
              onClick={handleEnter}
              style={{
                background: 'transparent',
                border: '1px solid #38bdf8',
                color: '#38bdf8',
                padding: '12px 32px',
                fontSize: 13,
                letterSpacing: 3,
                cursor: 'pointer',
                fontFamily: '"Courier New", monospace',
                fontWeight: 700,
                transition: 'all 0.2s',
                borderRadius: 2,
              }}
              onMouseEnter={e => {
                (e.target as HTMLButtonElement).style.background = '#38bdf8';
                (e.target as HTMLButtonElement).style.color = '#030912';
              }}
              onMouseLeave={e => {
                (e.target as HTMLButtonElement).style.background = 'transparent';
                (e.target as HTMLButtonElement).style.color = '#38bdf8';
              }}
            >
              [ ENTER LAB ]
            </button>
            <button
              onClick={handleSkip}
              style={{
                background: 'transparent',
                border: '1px solid #1e5a9a',
                color: '#4a7a9b',
                padding: '12px 24px',
                fontSize: 11,
                letterSpacing: 2,
                cursor: 'pointer',
                fontFamily: '"Courier New", monospace',
                borderRadius: 2,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => (e.target as HTMLButtonElement).style.color = '#7dd3fc'}
              onMouseLeave={e => (e.target as HTMLButtonElement).style.color = '#4a7a9b'}
            >
              Skip Intro
            </button>
          </div>
        )}

        {/* Bottom credits */}
        <div style={{ marginTop: 48, color: '#1e3a5f', fontSize: 9, letterSpacing: 2 }}>
          Built with Three.js · React Three Fiber · TypeScript
        </div>
      </div>
    </div>
  );
}
