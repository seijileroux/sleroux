import { personalInfo } from "@/app/data/data";

export default function InfoSection() {
  return (
    <div className="mb-12 space-y-2">
      <div className="flex items-start gap-2">
        <span className="text-purple-400">$</span>
        <div className="flex-1">
          <span className="text-gray-500">./introduce.sh</span>
          <div className="mt-2 ml-4 space-y-1">
            <p className="text-green-400">
              [INFO] name:{" "}
              <span className="text-cyan-400">{personalInfo.name}</span>
            </p>
            <p className="text-green-400">
              [INFO] role:{" "}
              <span className="text-yellow-400">{personalInfo.title}</span>
            </p>
            <p className="text-green-400">
              [INFO] location:{" "}
              <span className="text-pink-400">{personalInfo.location}</span>
            </p>
            <p className="text-gray-400 mt-3">{personalInfo.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
