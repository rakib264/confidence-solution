import { LucideIcon } from "lucide-react";

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Industrial"
  | "Renovation"
  | "Infrastructure";

export type Service = {
  slug: string;
  title: string;
  icon: keyof typeof import("lucide-react");
  description: string;
  deliverables: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  coordinates: { lat: number; lng: number };
  description: string[];
  challenges: string[];
  solutions: string[];
  thumbnail: string;
  gallery: string[];
  client: string;
  areaSqFt: string;
  duration: string;
  completionDate: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    linkedin: string;
    twitter: string;
  };
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  thumbnail: string;
  content: string[];
  tags: string[];
};

export type Client = {
  name: string;
  industry: string;
  testimonial: string;
  logoText: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
};

export type ThemeState = {
  primary: string;
  accent: string;
  radius: number;
  fontPreference: "sans" | "serif";
  backgroundLightness: number;
};

export type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export type NavLink = {
  label: string;
  href: string;
};

export type IconMap = Record<string, LucideIcon>;
