// Main App — orchestrates Canvas, UI overlays, and mobile layout
import { Canvas } from '@react-three/fiber';
import { LabProvider } from './context/LabContext';
import { LabScene } from './components/3d/LabScene';
import { NavOverlay } from './components/ui/NavOverlay';
import { SectionPanel } from './components/ui/SectionPanel';
import { CaseStudyModal } from './components/ui/CaseStudyModal';
import { MobileLabLayout } from './components/ui/MobileLabLayout';
import { useIsMobile } from './hooks/useIsMobile';

function DesktopLab() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#0e1218', position: 'relative' }}>
      {/* R3F Canvas — 3D scene immediately visible at cinematic medium-wide framing */}
      <Canvas
        camera={{ position: [0, 2.0, 3.8], fov: 48, near: 0.1, far: 50 }}
        style={{ position: 'fixed', inset: 0, zIndex: 1 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        shadows={false}
        dpr={[1, 1.5]}
      >
        <LabScene />
      </Canvas>

      {/* 2D UI overlays & panels — non-blocking, accessible */}
      <NavOverlay />
      <SectionPanel />
      <CaseStudyModal />
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
