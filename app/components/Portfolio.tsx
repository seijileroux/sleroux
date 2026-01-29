import { ExternalLink, Folder, FileCode } from "lucide-react";

export default function Portfolio() {
  const portfolioProjects = [
    {
      title: "onilyr",
      description:
        "find any song's lyrics instantly, bathed in the cool, electric hum and vivid glow of pure neon light",
      tags: ["next.js", "tailwind", "figma", "adaptive_design"],
      link: "https://onilyr.vercel.app/",
      status: "prod",
    },
    {
      title: "my-hyprland-dotfiles",
      description: "A cozy home for my Linux configs ☕",
      tags: ["linux", "hyprland", "lua", "shell", "css"],
      link: "https://github.com/seijileroux/.noir-dotfiles",
      status: "dev",
    },
    {
      title: "my-portfolio",
      description:
        "ironically, this very same site, built with next.js and much-much love",
      tags: ["nextjs", "tailwind", "figma", "adaptive_design"],
      link: "https://sleroux.vercel.app/",
      status: "prod",
    },
    {
      title: "coffee-shop-landing",
      description: "a landing page for a cozy local coffee shop",
      tags: ["nextjs", "tailwind", "figma", "adaptive_design"],
      link: "https://choco-mug.vercel.app/",
      status: "prod",
    },
    {
      title: "landing-v1",
      description: "example of an adaptive landing page/portfolio site",
      tags: ["nextjs", "tailwind", "bootstrap", "adaptive_design"],
      link: "https://lilith-dev.vercel.app/",
      status: "prod",
    },
    {
      title: "landing-v2",
      description: "example of an adaptive landing page/portfolio site",
      tags: ["nextjs", "tailwind", "adaptive_design"],
      link: "https://johndoe-portfolio.vercel.app/",
      status: "prod",
    },
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-purple-400">$</span>
        <span className="text-gray-500">cat ~/projects/*</span>
      </div>
      <div className="ml-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioProjects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] border border-green-500/20 p-6 rounded hover:border-green-500/50 transition-all group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Folder className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg text-cyan-400 group-hover:text-cyan-300">
                  {project.title}
                </h3>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  project.status === "prod"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-orange-500/20 text-orange-400"
                }`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm"
            >
              <FileCode className="w-4 h-4" />
              check it out
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
