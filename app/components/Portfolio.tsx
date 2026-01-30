"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  ExternalLink,
  Folder,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { portfolioProjects } from "@/app/data/data";
import { Project } from "@/app/interfaces";

export default function Portfolio() {
  const [imageLoading, setImageLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  // Open modal with image reset
  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "auto";
  };

  // Image navigation
  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1,
      );
    }
  };

  // Keyboard navigation for images
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!selectedProject) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    },
    [selectedProject],
  );

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };

    if (selectedProject) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedProject, handleKeyDown]);

  // Pagination with touchscreen swipes
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextImage();
    }

    if (touchEnd - touchStart > 50) {
      // Swipe right
      prevImage();
    }
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
              {/* Show first image as thumbnail */}
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden border border-green-500/20">
                {imageLoading && (
                  <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                )}
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 object-top"
                  onLoad={() => setImageLoading(false)}
                />
                {/* Badge for multiple images */}
                {project.images.length > 1 && (
                  <div className="absolute top-2 right-2 bg-black/70 text-xs text-white px-2 py-1 rounded">
                    {project.images.length} images
                  </div>
                )}
              </div>

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

      {/* Modal Card with Image Pagination */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="relative w-full max-w-4xl bg-[#1a1a1a] border border-green-500/30 rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white bg-black/50 p-2 rounded-full hover:bg-black/80 transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Image Preview with Pagination */}
              <div className="lg:w-1/2 p-6 bg-black/50">
                <div className="mt-10 lg:mt-0 relative aspect-video rounded-lg overflow-hidden border border-green-500/20 group">
                  {/* Container for touchscreen swipes */}
                  <div
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    className="relative aspect-video rounded-lg overflow-hidden"
                  >
                    {/* Current Image */}
                    <Image
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-all hover:scale-110 opacity-0 group-hover:opacity-80"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-all hover:scale-110 opacity-0 group-hover:opacity-80"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-sm px-3 py-1 rounded-full  opacity-0 group-hover:opacity-80">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </div>

                {/* Thumbnail Strip */}
                {selectedProject.images.length > 1 && (
                  <div className="mt-4 flex gap-2 justify-center overflow-x-auto py-2">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-all ${
                          index === currentImageIndex
                            ? "border-green-500 ring-2 ring-green-500/50"
                            : "border-transparent hover:border-green-500/50"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Dot Indicators (alternative to thumbnails) */}
                {/* {selectedProject.images.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? "bg-green-500 scale-125"
                            : "bg-gray-600 hover:bg-gray-500"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )} */}
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
                  className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/20 text-green-400 rounded-lg border border-green-500/30 hover:bg-green-500/30 hover:text-green-300 transition-all"
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
