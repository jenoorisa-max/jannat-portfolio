export type ProjectStatus =
  | "completed"
  | "in-progress"
  | "needs-confirmation";

export type ProjectCategoryId =
  | "ai-ml"
  | "computer-vision"
  | "hardware"
  | "software"
  | "cybersecurity"
  | "networking"
  | "academic";

export interface ImageAsset {
  /** Set this to the public path once the real file is added. */
  src: string | null;
  /** Suggested drop-in path so images can be added without redesign. */
  suggestedPath: string;
  alt: string;
  caption?: string;
}

export interface ProjectImplementation {
  name: string;
  summary: string;
  notes?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  categories: ProjectCategoryId[];
  tags: string[];
  status: ProjectStatus;
  statusNote?: string;
  relatedExperienceId?: string;
  implementations?: ProjectImplementation[];
  objective?: string;
  problem?: string;
  methodology?: string;
  tools: string[];
  contribution?: string;
  results?: string;
  challenges?: string;
  limitations?: string;
  sourceCodeUrl?: string | null;
  images: ImageAsset[];
  extraNotes?: string;
}

export interface Experience {
  id: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  work: string[];
  relatedProjectSlugs: string[];
  images: ImageAsset[];
  jobTitle?: string;
  supervisor?: string;
}

export interface EducationItem {
  id: string;
  program: string;
  institution: string | null;
  details: string;
  notes?: string;
}

export interface Activity {
  id: string;
  title: string;
  summary: string;
  kind:
    | "speaking"
    | "hosting"
    | "leadership"
    | "volunteering"
    | "media"
    | "photography"
    | "sports"
    | "society"
    | "workshop"
    | "other";
  period?: string | null;
  images: ImageAsset[];
  confirmed: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer?: string | null;
  year?: string | null;
  summary: string;
  confirmed: boolean;
  image: ImageAsset;
}

export interface LearningStep {
  id: string;
  title: string;
  body: string;
}

export interface ConfirmationItem {
  id: string;
  topic: string;
  detail: string;
  related?: string;
}
