import { SectionId, CameraPosition } from '../context/LabContext';

export const CAMERA_POSITIONS: Record<SectionId, CameraPosition> = {
  // Cinematic medium-wide shot framing the developer, main monitor, secondary screens, and workbench together
  home: {
    position: [0, 2.0, 3.8],
    lookAt: [0, 1.35, -0.6],
  },
  // Focused on the back wall career installation
  journey: {
    position: [0, 2.3, 1.2],
    lookAt: [0, 2.2, -2.9],
  },
  // Tight angled shot of the electronics workbench and instruments
  hardware: {
    position: [-1.9, 1.45, 0.4],
    lookAt: [-2.4, 0.95, -1.0],
  },
  // Intimate close-up on KOTL robot on the workbench
  kotl: {
    position: [-1.8, 1.35, 0.1],
    lookAt: [-2.2, 1.05, -0.9],
  },
  // Angled view focused on projects system display on the right
  projects: {
    position: [1.4, 1.8, 0.9],
    lookAt: [2.0, 1.4, -0.8],
  },
  // Workstation view with experience terminal
  experience: {
    position: [-0.6, 1.9, 2.6],
    lookAt: [-0.3, 1.4, -0.6],
  },
  // Workstation view with resume terminal
  resume: {
    position: [0, 1.9, 2.8],
    lookAt: [0, 1.4, -0.6],
  },
  // Workstation view with contact terminal
  contact: {
    position: [0.6, 1.9, 2.6],
    lookAt: [0.3, 1.4, -0.6],
  },
};

export const INTRO_CAMERA: CameraPosition = {
  position: [0, 2.8, 6.2],
  lookAt: [0, 1.4, -0.6],
};
