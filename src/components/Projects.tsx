"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import WorkModal from "./WorkModal";
import { campaigns } from "@/data/projects";
import type { Campaign } from "@/data/projects";

export default function Projects() {
  const [active, setActive] = useState<Campaign | null>(null);

  return (
    <section id="projects" className="section-pad bg-card">
      <FadeIn direction="up">
        <div className="mb-12 md:mb-16">
          <p className="label-text mb-3">Selected Campaigns</p>
          <h2 className="font-display text-display-md text-cream uppercase">
            Work
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {campaigns.map((campaign, i) => (
          <WorkCard
            key={campaign.id}
            campaign={campaign}
            index={i}
            onOpen={() => setActive(campaign)}
          />
        ))}
      </div>

      <WorkModal campaign={active} onClose={() => setActive(null)} />
    </section>
  );
}

function WorkCard({
  campaign,
  index,
  onOpen,
}: {
  campaign: Campaign;
  index: number;
  onOpen: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const aspect = campaign.coverAspect ?? "9/16";

  return (
    <motion.div
      onClick={onOpen}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08 }}
      className="flex bg-bg cursor-pointer group"
    >
      {/* Cover media — preserves natural aspect ratio */}
      <div
        className="flex-shrink-0 relative overflow-hidden"
        style={{ width: "clamp(100px, 30%, 160px)" }}
      >
        <div style={{ aspectRatio: aspect.replace("/", " / ") }}>
          {campaign.coverVideo ? (
            <video
              ref={videoRef}
              src={campaign.coverVideo}
              preload="metadata"
              muted
              loop
              playsInline
              className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
              onLoadedMetadata={(e) => {
                (e.currentTarget as HTMLVideoElement).currentTime = 0.01;
              }}
            />
          ) : campaign.coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={campaign.coverImage}
              alt={campaign.title}
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>
        {/* Green accent line */}
        <div className="absolute top-0 left-0 bottom-0 w-px bg-green scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
      </div>

      {/* Text */}
      <div className="flex-1 flex flex-col justify-end p-5 md:p-6 lg:p-7 min-w-0">
        {campaign.award && (
          <span className="text-[10px] tracking-widest uppercase font-body text-green mb-2">
            {campaign.award}
          </span>
        )}
        <p className="label-text mb-1">{campaign.type}</p>
        <h3 className="font-display text-2xl md:text-3xl text-cream uppercase leading-none mb-2 group-hover:text-green transition-colors duration-300">
          {campaign.title}
        </h3>
        <p className="text-stone text-xs font-body mb-3 leading-relaxed">
          {campaign.role}
        </p>
        <p className="text-white/40 text-xs font-body leading-relaxed mb-3 line-clamp-2">
          {campaign.blurb ?? campaign.description}
        </p>
        <span className="text-white/20 text-[10px] font-body tracking-widest uppercase">
          {campaign.date}
        </span>
      </div>
    </motion.div>
  );
}
