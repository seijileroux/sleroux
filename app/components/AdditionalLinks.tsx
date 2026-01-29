import { ExternalLink } from "lucide-react";

export default function AdditionalLinks() {
  const additionalLinks = [
    {
      title: "blog.md",
      url: "https://example.com",
      description: "random thoughts on code",
    },
    {
      title: "resume.pdf",
      url: "/resume.pdf",
      description: "the formal stuff",
    },
    {
      title: "codepen/",
      url: "https://codepen.io/username",
      description: "weird experiments",
    },
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-purple-400">$</span>
        <span className="text-gray-500">ls ~/links</span>
      </div>
      <div className="ml-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {additionalLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a1a1a] border border-green-500/20 p-4 rounded hover:border-green-500/50 transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-yellow-400 group-hover:text-yellow-300">
                {link.title}
              </span>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-green-400 transition-colors" />
            </div>
            <p className="text-gray-500 text-sm">{link.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
