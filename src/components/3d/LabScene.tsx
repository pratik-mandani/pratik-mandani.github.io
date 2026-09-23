// Main 3D scene orchestrator — all geometry lives here inside the R3F Canvas
import { Suspense } from 'react';
import { Room } from './Room';
import { LabLighting } from './LabLighting';
import { CameraRig } from './CameraRig';
import { Workstation } from './Workstation';
import { DeveloperCharacter } from './DeveloperCharacter';
import { CentralMonitor } from './CentralMonitor';
import { SecondaryMonitors } from './SecondaryMonitors';
import { ElectronicsBench } from './ElectronicsBench';
import { KotlRobot } from './KotlRobot';
import { CareerWall } from './CareerWall';
import { ProjectPanels } from './ProjectPanels';
import { useLab } from '../../context/LabContext';
import { CAMERA_POSITIONS, INTRO_CAMERA } from '../../scenes/cameraPositions';

function SceneFallback() {
  return (
    <mesh position={[0, 1, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0a1628" />
    </mesh>
  );
}

export function LabScene() {
  const { state } = useLab();
  const cameraTarget = state.introComplete
    ? CAMERA_POSITIONS[state.currentSection]
    : INTRO_CAMERA;

  return (
    <Suspense fallback={<SceneFallback />}>
      <CameraRig target={cameraTarget} reducedMotion={state.reducedMotion} />
      <LabLighting />
      <Room />
      <Workstation />
      <DeveloperCharacter />
      <CentralMonitor />
      <SecondaryMonitors />
      <ElectronicsBench />
      <KotlRobot />
      <CareerWall />
      <ProjectPanels />
    </Suspense>
  );
}
