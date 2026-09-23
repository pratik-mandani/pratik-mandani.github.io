import { SectionId, CameraPosition } from '../context/LabContext';

export const CAMERA_POSITIONS: Record<SectionId, CameraPosition> = {
  home: {
    position: [0, 3.2, 9],
    lookAt: [0, 1.6, -1],
  },
  journey: {
    position: [0, 3.5, 3],
    lookAt: [0, 2.5, -8],
  },
  hardware: {
    position: [-5.5, 2.8, 0],
    lookAt: [-7, 1.2, -3],
  },
  kotl: {
    position: [-5, 2.2, -1.5],
    lookAt: [-6.5, 1.0, -3.8],
  },
  projects: {
    position: [5.5, 3, 0],
    lookAt: [8, 2, -3],
  },
  experience: {
    position: [-2, 3, 7],
    lookAt: [0, 1.8, -1],
  },
  resume: {
    position: [0, 3.2, 9],
    lookAt: [0, 1.6, -1],
  },
  contact: {
    position: [2, 3.2, 9],
    lookAt: [0, 1.6, -1],
  },
};

export const INTRO_CAMERA: CameraPosition = {
  position: [0, 5.5, 16],
  lookAt: [0, 2, 0],
};
