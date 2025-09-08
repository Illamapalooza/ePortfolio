"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/constants";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { ImageSliderDialog } from "../image-slider-dialog";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<{
    images: string[];
    title: string;
  } | null>(null);

  const openImageSlider = (project: { images: string[]; title: string }) => {
    setSelectedProject(project);
  };

  const closeImageSlider = () => {
    setSelectedProject(null);
  };
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-20 bg-muted/30"
    >
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-base sm:text-lg md:text-xl">
            Here are some of the projects I&apos;ve worked on and worked with
          </p>
        </motion.div>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative space-y-4">
                <div className="overflow-hidden rounded-lg border bg-background transition-all hover:border-primary group">
                  {/* Project Image */}
                  <div
                    className="relative aspect-video overflow-hidden bg-muted cursor-pointer"
                    onClick={() =>
                      openImageSlider({
                        images: project.images,
                        title: project.title,
                      })
                    }
                  >
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white font-medium text-lg">
                        {project.title}
                      </p>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 sm:p-6 space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg sm:text-xl flex items-center gap-2">
                          {project.title}
                          {project.link && (
                            <Link href={project.link} target="_blank">
                              <ExternalLink className="size-4 text-black" />
                            </Link>
                          )}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {project.type}
                        </Badge>
                      </div>
                      {project.company && (
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          @{project.company}
                        </p>
                      )}
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.tech?.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Slider Dialog */}
        {selectedProject && (
          <ImageSliderDialog
            isOpen={!!selectedProject}
            onClose={closeImageSlider}
            images={selectedProject.images}
            projectTitle={selectedProject.title}
          />
        )}
      </div>
    </section>
  );
}
