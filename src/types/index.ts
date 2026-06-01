// ─── Theme ───────────────────────────────
export type Theme = "dark" | "light";

// ─── Navigation ──────────────────────────
export interface NavItem {
  label: string;
  /** Client route path (e.g. `/`, `/about`) */
  href: string;
  /** Font Awesome 4 icon class, e.g. `fa-home` */
  icon: string;
}

// ─── Hero ────────────────────────────────
export interface HeroData {
  greeting: string;
  name: string;
  roles: string[];
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  image: string;
}

// ─── About ───────────────────────────────
/** One row in the personal info columns on About / resume modal */
export interface PersonalInfoEntry {
  label: string;
  value: string;
  /** Renders value in green (e.g. “Available”) */
  emphasis?: "available";
}

export interface AboutData {
  heading: string;
  /** Large title on About page: text before the accent span */
  pageTitleLead: string;
  /** Accent span (yellow in default skin), e.g. “ME” */
  pageTitleAccent: string;
  subheading: string;
  description: string[];
  image: string;
  stats: { value: string; label: string }[];
  cvLink: string;
}

export interface Skill {
  name: string;
  percentage: number;
  category: "technical" | "design" | "soft";
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  current: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

// ─── Services ────────────────────────────
export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

// ─── Projects ────────────────────────────
export type PortfolioFilterTab =
  | "all"
  | "logo"
  | "video"
  | "graphic design"
  | "mockup";

export type PortfolioProjectType = "image" | "youtube" | "slider" | "local-video";

export interface Project {
  id: number;
  title: string;
  category: string;
  /** Used by portfolio filter bar (ALL / LOGO / VIDEO / …) */
  filterCategory: PortfolioFilterTab;
  /** Detail panel layout: image, YouTube embed, slider, or local MP4 */
  projectType?: PortfolioProjectType;
  youtubeEmbedUrl?: string;
  videoSrc?: string;
  sliderImages?: string[];
  image: string;
  slug: string;
  client: string;
  year: string;
  description: string;
  link?: string;
  tags: string[];
  featured: boolean;
}

// ─── Blog ────────────────────────────────
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  /** Shorter date line for sidebar lists (e.g. "28 Mar, 2025") */
  listDate?: string;
  category: string;
  excerpt: string;
  image: string;
  author: string;
  readTime: string;
  content: string;
  tags: string[];
}

// ─── Testimonials ────────────────────────
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
}

// ─── Contact ─────────────────────────────
export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ─── Social ──────────────────────────────
export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
  label: string;
}
