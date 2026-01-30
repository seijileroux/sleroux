import { PersonalInfo, Project } from "@/app/interfaces";
import Onilyr1 from "@/app/img/onilyr.vercel.app - desktop home.png";
import Onilyr2 from "@/app/img/onilyr.vercel.app - desktop lyrics.png";
import Onilyr3 from "@/app/img/onilyr.vercel.app - desktop 404.png";
import Onilyr4 from "@/app/img/onilyr.vercel.app - mobile home.png";
import Onilyr5 from "@/app/img/onilyr.vercel.app - mobile lyrics.png";
import Onilyr6 from "@/app/img/onilyr.vercel.app - mobile 404.png";
import Dotfiles1 from "@/app/img/dotfiles-1.jpg";
import Dotfiles2 from "@/app/img/dotfiles-2.jpg";
import Dotfiles3 from "@/app/img/dotfiles-3.jpg";
import Dotfiles4 from "@/app/img/dotfiles-4.jpg";
import Dotfiles5 from "@/app/img/dotfiles-5.jpg";
import Dotfiles6 from "@/app/img/dotfiles-6.jpg";
import Portfolio1 from "@/app/img/sleroux.vercel.app - desktop.jpg";
import Portfolio2 from "@/app/img/sleroux.vercel.app - mobile.jpg";
import ChocoMug1 from "@/app/img/choco-mug.vercel.app - desktop.jpg";
import ChocoMug2 from "@/app/img/choco-mug.vercel.app - mobile.jpg";
import LilithDev1 from "@/app/img/lilith-dev.vercel.app - desktop.png";
import LilithDev2 from "@/app/img/lilith-dev.vercel.app - mobile.png";
import JohnDoe1 from "@/app/img/johndoe-portfolio.vercel.app - desktop.png";
import JohnDoe2 from "@/app/img/johndoe-portfolio.vercel.app - mobile.png";

export const personalInfo: PersonalInfo = {
  name: "Seiji",
  title: "front_end_dev, linux_enthusiast",
  bio: "i write code that (mostly) works. currently working with typescript, next.js, tailwind, and way too much coffee ☕",
  email: "s.leroux.dev@proton.me",
  location: "~/internet",
};

export const portfolioProjects: Project[] = [
  {
    title: "onilyr",
    description:
      "find any song's lyrics instantly, bathed in the cool, electric hum and vivid glow of pure neon light",
    tags: ["next.js", "tailwind", "figma", "adaptive_design"],
    link: "https://onilyr.vercel.app/",
    status: "prod",
    images: [Onilyr1, Onilyr2, Onilyr3, Onilyr4, Onilyr5, Onilyr6],
  },
  {
    title: "my-hyprland-dotfiles",
    description: "A cozy home for my Linux configs ☕",
    tags: ["linux", "hyprland", "lua", "shell", "css"],
    link: "https://github.com/seijileroux/.noir-dotfiles",
    status: "dev",
    images: [Dotfiles1, Dotfiles2, Dotfiles3, Dotfiles4, Dotfiles5, Dotfiles6],
  },
  {
    title: "my-portfolio",
    description:
      "ironically, this very same site, built with next.js and much-much love",
    tags: ["nextjs", "tailwind", "figma", "adaptive_design"],
    link: "https://sleroux.vercel.app/",
    status: "prod",
    images: [Portfolio1, Portfolio2],
  },
  {
    title: "coffee-shop-landing",
    description: "a landing page for a cozy local coffee shop",
    tags: ["nextjs", "tailwind", "figma", "adaptive_design"],
    link: "https://choco-mug.vercel.app/",
    status: "prod",
    images: [ChocoMug1, ChocoMug2],
  },
  {
    title: "landing-v1",
    description: "example of an adaptive landing page/portfolio site",
    tags: ["nextjs", "tailwind", "bootstrap", "adaptive_design"],
    link: "https://lilith-dev.vercel.app/",
    status: "prod",
    images: [LilithDev1, LilithDev2],
  },
  {
    title: "landing-v2",
    description: "example of an adaptive landing page/portfolio site",
    tags: ["nextjs", "tailwind", "adaptive_design"],
    link: "https://johndoe-portfolio.vercel.app/",
    status: "prod",
    images: [JohnDoe1, JohnDoe2],
  },
];
