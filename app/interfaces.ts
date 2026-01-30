import { StaticImageData } from "next/image";

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
}

export interface Project {
  title: string;
  description: string;
  status: string;
  tags: string[];
  link: string;
  images: StaticImageData[];
}
