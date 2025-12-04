import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Partner {
  name: string;
  type: string;
}

export interface ContactInfo {
  address: string;
  phone: string[];
  email: string;
  whatsapp: string;
}

export interface ContentData {
  nav: {
    links: NavLink[];
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    badges: string[];
  };
  stats: StatItem[];
  services: {
    categories: ServiceCategory[];
  };
  process: {
    title: string;
    steps: ProcessStep[];
  };
  partners: {
    title: string;
    list: Partner[];
  };
  contact: ContactInfo;
}