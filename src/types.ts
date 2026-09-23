export type ProjectCategory = 'all' | 'hardware' | 'web' | 'embedded' | 'automation';

export interface JourneyMilestone {
  id: string;
  stepNumber: number;
  title: string;
  category: 'production' | 'testing' | 'hardware' | 'rd' | 'web' | 'robotics';
  company: string;
  period: string;
  description: string;
  keyLearnings: string[];
  icon: string;
}

export interface ProjectMediaPlaceholder {
  title: string;
  path: string;
  description: string;
  placeholderType: 'schematic' | 'ui' | 'machine' | 'code' | 'circuit';
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: 'hardware' | 'web' | 'embedded' | 'automation';
  companyOrType: 'Symbian Vending Solutions' | 'Altius Infoway' | 'Personal Embedded Project';
  role: string;
  period: string;
  summary: string;
  problem: string;
  solution: string;
  hardwareSpecs?: string[];
  softwareSpecs?: string[];
  firmwareSpecs?: string[];
  pcbSpecs?: string[];
  protocols?: string[];
  testingAndDebugging: string;
  results: string[];
  media: ProjectMediaPlaceholder[];
  liveUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
  isMissingDetails?: boolean;
}

export interface TechnicalSkill {
  name: string;
  description?: string;
}

export interface SkillDomain {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  skills: TechnicalSkill[];
}

export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  progression?: string[];
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  location: string;
  details: string;
}
