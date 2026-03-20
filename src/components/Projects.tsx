"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import projectsData from "@/data/projects.json";
import { ExternalLink, Github, Layers } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <Section id="projects" title="Featured Work" subtitle="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-3xl overflow-hidden glass-dark border-white/5 hover:border-primary/20 transition-all duration-500 premium-shadow"
          >
            {/* Project Image Placeholder (since no real images) */}
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent group-hover:scale-110 transition-transform duration-700 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-20">
                <a
                  href={project.link}
                  className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-all shadow-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                </a>
                <a
                  href={project.github}
                  className="p-3 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 hover:scale-110 transition-all shadow-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
              </div>
              <div className="p-12 text-primary/30 group-hover:scale-125 transition-transform duration-700 opacity-20 group-hover:opacity-100">
                <Layers size={80} />
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, iIndex) => (
                  <span
                    key={iIndex}
                    className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest group-hover:border-primary/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Live Project</span>
                </div>
                <div className="flex items-center gap-2">
                  <a href={project.link} className="text-xs font-bold text-primary uppercase tracking-widest hover:underline underline-offset-4">
                    Case Study
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          href="https://github.com/ronaksaini"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all group"
        >
          <Github size={20} />
          <span>View More on GitHub</span>
          <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
        </motion.a>
      </div>
    </Section>
  );
}
