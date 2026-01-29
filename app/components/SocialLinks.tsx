import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "github",
      url: "https://github.com/yourusername",
      icon: Github,
      color: "text-purple-400",
    },
    {
      name: "linkedin",
      url: "https://linkedin.com/in/yourusername",
      icon: Linkedin,
      color: "text-blue-400",
    },
    {
      name: "twitter",
      url: "https://twitter.com/yourusername",
      icon: Twitter,
      color: "text-cyan-400",
    },
    {
      name: "email",
      url: "mailto:dev@yourdomain.com",
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
      <div className="ml-6 grid grid-cols-2 md:grid-cols-4 gap-3">
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
