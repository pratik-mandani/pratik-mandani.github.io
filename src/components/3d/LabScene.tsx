// Simple, clean, attractive 3D engineering laboratory
// Contains ONLY the 8 requested elements:
// 1. One clean lab room
// 2. One desk
// 3. One developer sitting/sleeping on the chair
// 4. One BIG computer monitor (the main attraction)
// 5. Two small side monitors
// 6. One electronics workbench with PCB/components
// 7. One KOTL robot
// 8. Simple professional lighting
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
import { useLab } from '../../context/LabContext';
import { CAMERA_POSITIONS } from '../../scenes/cameraPositions';

function SceneFallback() {
  return (
    <mesh position={[0, 1, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#161c26" />
    </mesh>
  );
}

export function LabScene() {
  const { state } = useLab();
  const cameraTarget = CAMERA_POSITIONS[state.currentSection] || CAMERA_POSITIONS.home;

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
    </Suspense>
  );
}
