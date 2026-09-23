// Main App — orchestrates Canvas, UI overlays, and mobile layout
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { LabProvider } from './context/LabContext';
import { LabScene } from './components/3d/LabScene';
import { IntroScreen } from './components/ui/IntroScreen';
import { NavOverlay } from './components/ui/NavOverlay';
import { SectionPanel } from './components/ui/SectionPanel';
import { CaseStudyModal } from './components/ui/CaseStudyModal';
import { MobileLabLayout } from './components/ui/MobileLabLayout';
import { useIsMobile } from './hooks/useIsMobile';

function DesktopLab() {
  const [introVisible, setIntroVisible] = useState(true);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#020610' }}>
      {/* R3F Canvas — full screen 3D scene */}
      <Canvas
        camera={{ position: [0, 5.5, 16], fov: 55, near: 0.1, far: 100 }}
        style={{ position: 'fixed', inset: 0, zIndex: 1 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        shadows={false}
        dpr={[1, 1.5]}
      >
        <LabScene />
      </Canvas>

      {/* 2D UI overlays — rendered above Canvas */}
      {!introVisible && (
        <>
          <NavOverlay />
          <SectionPanel />
          <CaseStudyModal />
        </>
      )}

      {/* Intro — rendered above everything */}
      {introVisible && (
        <IntroScreen onComplete={() => setIntroVisible(false)} />
      )}
    </div>
  );
}

export default function App() {
  const isMobile = useIsMobile();

  return (
    <LabProvider>
      {isMobile ? <MobileLabLayout /> : <DesktopLab />}
    </LabProvider>
  );
}
