import { ExternalLink, Folder, FileCode } from "lucide-react";

export default function Portfolio() {
  const portfolioProjects = [
    {
      title: "sick-ecommerce-app",
      description:
        "built a full-stack shop with stripe integration. users can actually buy stuff without the site exploding 🎉",
      tags: ["react", "node", "mongodb", "stripe"],
      link: "https://github.com/yourusername/project1",
      status: "prod",
    },
    {
      title: "task-thing",
      description:
        "kanban board that doesn't suck. drag & drop, real-time updates, the whole shebang",
      tags: ["react", "firebase", "tailwind"],
      link: "https://github.com/yourusername/project2",
      status: "prod",
    },
    {
      title: "portfolio-v3",
      description:
        "this site! because every dev needs to rebuild their portfolio every 6 months lol",
      tags: ["nextjs", "typescript", "coffee"],
      link: "https://github.com/yourusername/project3",
      status: "dev",
    },
    {
      title: "weather-thingy",
      description:
        "tells you if you need a jacket. uses actual weather APIs and everything",
      tags: ["react", "openweather", "charts"],
      link: "https://github.com/yourusername/project4",
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
              view source
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
