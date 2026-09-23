// Lab state context — drives camera transitions, section navigation, modal state
import { createContext, useContext, useReducer, ReactNode } from 'react';

export type SectionId =
  | 'home'
  | 'journey'
  | 'hardware'
  | 'kotl'
  | 'projects'
  | 'experience'
  | 'resume'
  | 'contact';

export interface CameraPosition {
  position: [number, number, number];
  lookAt: [number, number, number];
}

export interface LabState {
  introComplete: boolean;
  currentSection: SectionId;
  openProjectId: string | null;
  openPanel: SectionId | null;
  reducedMotion: boolean;
}

type LabAction =
  | { type: 'COMPLETE_INTRO' }
  | { type: 'NAVIGATE'; section: SectionId }
  | { type: 'OPEN_PROJECT'; id: string }
  | { type: 'CLOSE_PROJECT' }
  | { type: 'OPEN_PANEL'; panel: SectionId }
  | { type: 'CLOSE_PANEL' }
  | { type: 'SET_REDUCED_MOTION'; value: boolean };

const initial: LabState = {
  introComplete: false,
  currentSection: 'home',
  openProjectId: null,
  openPanel: null,
  reducedMotion: false,
};

function reducer(state: LabState, action: LabAction): LabState {
  switch (action.type) {
    case 'COMPLETE_INTRO':
      return { ...state, introComplete: true };
    case 'NAVIGATE':
      return { ...state, currentSection: action.section, openPanel: null };
    case 'OPEN_PROJECT':
      return { ...state, openProjectId: action.id };
    case 'CLOSE_PROJECT':
      return { ...state, openProjectId: null };
    case 'OPEN_PANEL':
      return { ...state, openPanel: action.panel };
    case 'CLOSE_PANEL':
      return { ...state, openPanel: null };
    case 'SET_REDUCED_MOTION':
      return { ...state, reducedMotion: action.value };
    default:
      return state;
  }
}

interface LabContextType {
  state: LabState;
  dispatch: React.Dispatch<LabAction>;
}

const LabContext = createContext<LabContextType | null>(null);

export function LabProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <LabContext.Provider value={{ state, dispatch }}>
      {children}
    </LabContext.Provider>
  );
}

export function useLab() {
  const ctx = useContext(LabContext);
  if (!ctx) throw new Error('useLab must be inside LabProvider');
  return ctx;
}
