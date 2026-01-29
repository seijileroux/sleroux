import { personalInfo } from "@/app/data/data";

export default function Footer() {
  return (
    <div className="border-t border-green-500/20 pt-8 mt-12">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-purple-400">$</span>
        <span className="text-gray-500">echo "thanks for visiting!"</span>
      </div>
      <div className="ml-6 space-y-1">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Seiji Leroux | built with next.js + too
          much caffeine
        </p>
        <p className="text-gray-600 text-sm">
          &gt;{" "}
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-green-500 hover:text-green-400 transition-colors"
          >
            {personalInfo.email}
          </a>
        </p>
        <p className="text-gray-700 text-xs mt-4">
          hint: try pressing Ctrl+C (just kidding, won't do anything 😄)
        </p>
      </div>
    </div>
  );
}
