export type WebCategory = 'all' | 'corporate' | 'ecommerce' | 'business';

export interface JourneyStage {
  stageNumber: number;
  period: string;
  title: string;
  items: string[];
}

export interface ProductDevGallerySlot {
  label: string;
  imagePath?: string;
}

export interface ProductDevProject {
  id: string;
  title: string;
  type: string;
  tools?: string;
  description: string;
  confirmedHardware?: string[];
  responsibilities: string[];
  gallerySlots?: ProductDevGallerySlot[];
  imagePath?: string;
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
  imagePath?: string;
}

export interface FeaturedWebProject {
  id: string;
  name: string;
  category: string;
  role: string;
  techStack: string[];
  description: string;
  frontendNote?: string;
  features?: string[];
  workScope?: string[];
  liveUrl: string;
  imagePath?: string;
}

export interface WebProjectItem {
  id: string;
  name: string;
  category: 'corporate' | 'ecommerce' | 'business';
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
