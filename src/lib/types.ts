import { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

export type ProjectImage = string | StaticImageData;

export type Project = {
  slug: string;
  number: number;
  title: string;
  location: string;
  landArea?: string;
  totalFloors: number;
  numberOfApartments: number;
  completionYear: number;
  summary: string;
  thumbnail: ProjectImage;
  gallery: ProjectImage[];
  coordinates: { lat: number; lng: number };
};

export type Service = {
  slug: string;
  title: string;
  icon: keyof typeof import("lucide-react");
  description: string;
  deliverables: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  avatar: string | StaticImageData;
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
  thumbnail: ProjectImage;
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
  avatar: ProjectImage;
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
  variant?: "light" | "dark";
};

export type NavLink = {
  label: string;
  href: string;
};

export type IconMap = Record<string, LucideIcon>;
