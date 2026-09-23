import { SectionId, CameraPosition } from '../context/LabContext';

export const CAMERA_POSITIONS: Record<SectionId, CameraPosition> = {
  // Clear, premium shot where the BIG monitor is the main attraction, developer is relaxing, and workbench is visible
  home: {
    position: [0, 1.85, 3.4],
    lookAt: [0, 1.35, -0.6],
  },
  // Focused on journey timeline
  journey: {
    position: [0, 1.85, 2.6],
    lookAt: [0, 1.4, -0.6],
  },
  // Tight shot of the electronics workbench and instruments
  hardware: {
    position: [-1.8, 1.4, 0.4],
    lookAt: [-2.2, 0.95, -0.9],
  },
  // Intimate close-up on KOTL robot on the workbench
  kotl: {
    position: [-1.75, 1.3, 0.2],
    lookAt: [-2.15, 1.0, -0.75],
  },
  // Focused on projects system display on the right
  projects: {
    position: [0, 1.85, 2.8],
    lookAt: [0, 1.4, -0.6],
  },
  // Workstation view with experience terminal
  experience: {
    position: [-0.4, 1.85, 2.6],
    lookAt: [0, 1.4, -0.6],
  },
  // Workstation view with resume terminal
  resume: {
    position: [0, 1.85, 2.8],
    lookAt: [0, 1.4, -0.6],
  },
  // Workstation view with contact terminal
  contact: {
    position: [0.4, 1.85, 2.6],
    lookAt: [0, 1.4, -0.6],
  },
};

export const INTRO_CAMERA: CameraPosition = {
  position: [0, 1.85, 3.4],
  lookAt: [0, 1.35, -0.6],
};
