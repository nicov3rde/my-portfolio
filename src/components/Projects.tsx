"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

interface Project {
  title: string;
  client: string;
  description: string;
  tags: string[];
  year: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Identity & Launch Campaign",
    client: "Fauna Studio",
    description:
      "Full brand identity overhaul and launch video series for an emerging sustainable fashion label. Concept to delivery across social, OOH, and editorial.",
    tags: ["Identity", "Video", "Social"],
    year: "2024",
    featured: true,
  },
  {
    title: "Rebrand Visual Direction",
    client: "Mesa Noir",
    description:
      "Cinematic photography and visual storytelling for a fine-dining rebrand. Shot over three days across two locations with a team of 12.",
    tags: ["Photography", "Direction", "Campaign"],
    year: "2024",
  },
  {
    title: "Summer Editorial Series",
    client: "Solstice Co.",
    description:
      "Six-part editorial series shot across Iceland and California. Full art direction, casting, and post-production under a 4-week deadline.",
    tags: ["Editorial", "Photography", "Strategy"],
    year: "2023",
  },
  {
    title: "Product Launch Reel",
    client: "Flux Labs",
    description:
      "High-concept product launch film for a hardware startup entering the consumer market. Creative direction, scripting, and motion graphics.",
    tags: ["Video", "Motion", "Social"],
    year: "2024",
  },
  {
    title: "Annual Report — Visual Narrative",
    client: "Verde Alliance",
    description:
      "Documentary-style video and photography for a sustainability non-profit's annual impact report, distributed to 40k stakeholders globally.",
    tags: ["Documentary", "Video", "Strategy"],
    year: "2023",
  },
  {
    title: "Content Series — 12 Months",
    client: "Drift Culture",
    description:
      "Ongoing creative partnership producing monthly content drops — photography, short-form video, and campaign concepting across all major platforms.",
    tags: ["Social", "Photography", "Campaign"],
    year: "2023–24",
  },
];

const tagColors: Record<string, string> = {
  Identity: "bg-forest/20 text-forest-bright border-forest/30",
  Video: "bg-forest/20 text-forest-bright border-forest/30",
  Social: "bg-stone/10 text-stone border-stone/20",
  Photography: "bg-stone/10 text-stone border-stone/20",
  Direction: "bg-forest/20 text-forest-bright border-forest/30",
  Campaign: "bg-stone/10 text-stone border-stone/20",
  Editorial: "bg-stone/10 text-stone border-stone/20",
  Strategy: "bg-stone/10 text-stone border-stone/20",
  Motion: "bg-forest/20 text-forest-bright border-forest/30",
  Documentary: "bg-stone/10 text-stone border-stone/20",
};

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-bg-card">
      <FadeIn direction="up">
        <div className="mb-12 md:mb-16">
          <p className="label-text mb-3">Selected Campaigns</p>
          <h2 className="font-display text-display-md text-cream uppercase">
            Projects
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: "easeOut" }}
            className={`
              relative flex flex-col bg-bg border border-border
              hover:border-forest/60 transition-all duration-400 group p-7 md:p-8
              ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}
            `}
          >
            {/* Featured accent */}
            {project.featured && (
              <div className="absolute top-0 left-0 w-full h-px bg-forest" />
            )}

            {/* Header */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="label-text mb-1.5">{project.client}</p>
                <h3 className="font-display text-2xl md:text-3xl text-cream uppercase tracking-wide group-hover:text-forest-bright transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              <span className="text-xs text-stone/50 font-body tabular-nums mt-1 ml-4 shrink-0">
                {project.year}
              </span>
            </div>

            {/* Description */}
            <p className="text-stone text-sm leading-relaxed font-body flex-1 mb-6">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-[10px] tracking-widest uppercase font-body px-2.5 py-1 border ${
                    tagColors[tag] ?? "bg-stone/10 text-stone border-stone/20"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Hover arrow */}
            <div className="absolute bottom-7 right-7 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="text-forest"
              >
                <path d="M2 9h14M9 2l7 7-7 7" />
              </svg>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
