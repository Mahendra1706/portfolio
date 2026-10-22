export type ProjectCategory = 'All' | 'Systems & CUDA' | 'ML & Research' | 'Open Source & Tools';

export interface Project {
  name: string;
  category: 'Systems & CUDA' | 'ML & Research' | 'Open Source & Tools';
  description: string;
  metrics?: string[];
  highlights?: string[];
  tags: string[];
  status?: string;
  github?: string;
  demo?: string;
  huggingface?: string;
  featured?: boolean;
}

export interface WritingEntry {
  title: string;
  description: string;
  date?: string;
  platform: string;
  url?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  focus: string;
}

export interface QuickStat {
  value: string;
  label: string;
  subtext: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  headline: string;
  subheadline: string;
  availabilityLabel?: string;
  resumeUrl: string;
  quickStats: QuickStat[];
  aboutParagraphs: string[];
  skillGroups: SkillGroup[];
  interests: string[];
  education: Education;
  projects: Project[];
  writing: WritingEntry[];
  socialLinks: SocialLink[];
  email: string;
  footerTagline: string;
}
