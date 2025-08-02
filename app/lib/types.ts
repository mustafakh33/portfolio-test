import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type SocialLink = {
  icon: IconType;
  href: string;
};

export type NavigationLink = {
  name: string;
  icon: IconType;
  href: string;
  id: string;
};

export type SidebarData = {
  name: string;
  logo: StaticImageData;
  socialLinks: SocialLink[];
  navigationLinks: NavigationLink[];
};

export type HeroData = {
  name: string;
  titles: string[];
  backgroundImage: StaticImageData;
};

export type PersonalDetail = {
  label: string;
  value: string;
};

export type AboutData = {
  title: string;
  intro: string;
  bio: string;
  personalDetails: PersonalDetail[];
  image: StaticImageData;
};

export type Skill = {
  name: string;
  percentage: number;
};

export type SkillsData = {
  intro: string;
  skillList: Skill[];
};

export type ResumeEntry = {
  title: string;
  date: string;
  subtitle: string;
  description?: string;
  responsibilities?: string[];
};

export interface ProjectLink {
  label: string;
  url: string;
}

export interface VideoProject {
  id: number;
  description?: string;
  videoUrl?: string;
  videoType?: "reel" | "widescreen";
  links?: ProjectLink[];
}

export interface ColorGradingProject {
  id: number;
  // title: string;
  videoBeforeUrl: string;
  videoAfterUrl: string;
  screenshots: StaticImageData[];
  // links?: ProjectLink[];
}

export interface SubCategory {
  slug: string;
  title: string;
  description: string;
  imageUrl: StaticImageData;
  projects: VideoProject[];
}

// الواجهة الرئيسية التي تصف هيكل portfolioData بالكامل
export interface PortfolioData {
  videoEditing: {
    title: string;
    description: string;
    imageUrl: StaticImageData;
    subCategories: SubCategory[];
  };
  colorGrading: {
    title: string;
    description: string;
    imageUrl: StaticImageData;
    projects: ColorGradingProject[];
  };
}

export type Service = {
  icon: IconType;
  title: string;
  description: string;
};

export type ServicesData = {
  intro: string;
  serviceList: Service[];
};

export type ContactData = {
  intro: string;
  address: string;
  phone: string;
  email: string;
};
