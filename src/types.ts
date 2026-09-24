export type WebCategory = 'all' | 'corporate' | 'ecommerce' | 'erp';

export interface JourneyStage {
  stageNumber: number;
  period: string;
  title: string;
  items: string[];
}

export interface ProductDevProject {
  id: string;
  title: string;
  type: string;
  tools?: string;
  description: string;
  confirmedHardware?: string[];
  responsibilities: string[];
  imagePath: string;
  disclaimer?: string;
}

export interface KotlProjectDetails {
  title: string;
  subtitle: string;
  status: string;
  description: string;
  hardware: string[];
  firmware: string[];
  currentFeatures: string[];
  imagePath: string;
}

export interface WebProjectItem {
  id: string;
  name: string;
  category: 'corporate' | 'ecommerce' | 'erp';
  categoryLabel: string;
  liveUrl: string;
  techStack: string[];
  role: string;
  frontendNote?: string;
  features?: string[];
  workScope?: string[];
  description?: string;
  isPersonallyDeveloped: boolean;
}

export interface ExperienceItem {
  company: string;
  period: string;
  duration: string;
  designation?: string;
  teamSize?: string;
  careerProgression: string[];
  summary?: string;
  responsibilities: string[];
  contextNote?: string;
}

export interface SkillCategoryGroup {
  category: string;
  skills: string[];
}
