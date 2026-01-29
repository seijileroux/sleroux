import { Terminal } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-[#1a1a1a] border-b-2 border-green-500/30 sticky top-0 z-10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
        <Terminal className="w-5 h-5 text-green-400" />
        <span className="text-green-400">guest@portfolio:~$</span>
        <span className="text-gray-500">cat portfolio.sh</span>
        <div className="ml-auto flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
    </div>
  );
}
