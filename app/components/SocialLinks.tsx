import { Github, Twitter, Instagram, Mail } from "lucide-react";
import { Icon24LogoVk } from "@vkontakte/icons";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "github",
      url: "https://github.com/seijileroux",
      icon: Github,
      color: "text-purple-400",
    },
    {
      name: "twitter",
      url: "https://x.com/seijileroux",
      icon: Twitter,
      color: "text-cyan-400",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/echoofnova",
      icon: Instagram,
      color: "text-yellow-400",
    },
    {
      name: "vk",
      url: "https://vk.com/echoofnova",
      icon: Icon24LogoVk,
      color: "text-blue-400",
    },
    {
      name: "email",
      url: "mailto:s.leroux.dev@proton.me",
      icon: Mail,
      color: "text-green-400",
    },
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-purple-400">$</span>
        <span className="text-gray-500">ls -la ~/socials</span>
      </div>
      <div className="ml-6 grid grid-cols-1 md:grid-cols-5 gap-3">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border border-green-500/20 hover:border-green-500/50 transition-all hover:scale-105 rounded ${social.color}`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{social.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
