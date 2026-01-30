"use client";

import { ExternalLink, Folder, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { portfolioProjects } from "@/app/data/data";
import { PersonalInfo, Project } from "@/app/interfaces";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-purple-400">$</span>
          <span className="text-gray-500">cat ~/projects/*</span>
        </div>
        <div className="ml-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => openModal(project)}
              className="bg-[#1a1a1a] border border-green-500/20 p-6 rounded hover:border-green-500/50 transition-all group cursor-pointer hover:shadow-lg hover:shadow-green-500/10"
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
              <p className="text-gray-400 mb-4 text-sm">
                {project.description}
              </p>
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
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
                visit project
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Modal/Popup */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl bg-[#1a1a1a] border border-green-500/30 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white bg-black/50 p-2 rounded-full hover:bg-black/80 transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Image Preview */}
              <div className="lg:w-1/2 p-6 bg-black/50">
                <div className="mt-10 lg:mt-0 relative aspect-video rounded-lg overflow-hidden border border-green-500/20">
                  <Image
                    src={selectedProject.images[0]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 p-6 lg:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Folder className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-2xl font-bold text-cyan-400">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <span
                    className={`lg:mr-10 text-sm px-3 py-1 rounded ${
                      selectedProject.status === "prod"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-orange-500/20 text-orange-400"
                    }`}
                  >
                    {selectedProject.status}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm text-gray-400 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-sm text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/20 text-green-400 rounded-lg border border-green-500/30 hover:bg-green-500/30 hover:text-green-300 transition-all group"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="font-medium">Visit Project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
