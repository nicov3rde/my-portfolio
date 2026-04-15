"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "@/data/gallery";
import type { GalleryItem } from "@/data/gallery";
import Lightbox from "./Lightbox";
import FadeIn from "./FadeIn";

type Filter = "all" | "media" | "writing";

const mediaItems = galleryItems.filter(
  (item): item is Extract<GalleryItem, { type: "photo" | "video" }> =>
    item.type === "photo" || item.type === "video"
);

const writingItems = galleryItems.filter(
  (item): item is Extract<GalleryItem, { type: "writing" }> =>
    item.type === "writing"
);

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const showMedia = filter === "all" || filter === "media";
  const showWriting = filter === "all" || filter === "writing";

  const tabs: { label: string; value: Filter }[] = [
    { label: "All", value: "all" },
    { label: "Photo / Video", value: "media" },
    { label: "Writing", value: "writing" },
  ];

  return (
    <section id="gallery" className="section-pad bg-bg">
      <FadeIn direction="up">
        <div className="mb-8 md:mb-10">
          <p className="label-text mb-3">Selected Work</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-display-md text-cream uppercase">
              Gallery
            </h2>

            {/* Filter tabs */}
            <div className="flex items-center gap-0 border border-border">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setFilter(tab.value)}
                  className={`px-4 py-2 text-[10px] tracking-widest uppercase font-body transition-all duration-200 border-r border-border last:border-r-0 ${
                    filter === tab.value
                      ? "bg-green text-bg"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* Photo/Video masonry */}
          {showMedia && mediaItems.length > 0 && (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-0">
              {mediaItems.map((item, i) => (
                <MediaCard
                  key={i}
                  item={item}
                  index={i}
                  onClick={() => setLightboxIndex(i)}
                />
              ))}
            </div>
          )}

          {/* Writing cards */}
          {showWriting && writingItems.length > 0 && (
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-px bg-border ${showMedia && mediaItems.length > 0 ? "mt-px" : ""}`}>
              {writingItems.map((item, i) => (
                <WritingCard key={i} item={item} />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {lightboxIndex !== null && (
        <Lightbox
          items={mediaItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((i) =>
              i === null ? null : (i - 1 + mediaItems.length) % mediaItems.length
            )
          }
          onNext={() =>
            setLightboxIndex((i) =>
              i === null ? null : (i + 1) % mediaItems.length
            )
          }
        />
      )}
    </section>
  );
}

/* ─── Media card (photo / video) ──────────────────────────────────────────── */
function MediaCard({
  item,
  index,
  onClick,
}: {
  item: Extract<GalleryItem, { type: "photo" | "video" }>;
  index: number;
  onClick: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={item.type === "video" ? () => videoRef.current?.play() : undefined}
      onMouseLeave={
        item.type === "video"
          ? () => {
              if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
              }
            }
          : undefined
      }
      className="relative w-full block overflow-hidden group break-inside-avoid text-left mb-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 5) * 0.05 }}
    >
      {item.type === "video" ? (
        <video
          ref={videoRef}
          src={item.src}
          poster={item.poster}
          preload="metadata"
          muted
          loop
          playsInline
          className="w-full h-auto block"
          onLoadedMetadata={(e) => {
            (e.currentTarget as HTMLVideoElement).currentTime = 0.01;
          }}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.src}
          alt={item.caption ?? ""}
          className="w-full h-auto block"
        />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-3">
        {item.caption && (
          <p className="text-[9px] tracking-widest uppercase text-white/80 font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.caption}
          </p>
        )}
      </div>
    </motion.button>
  );
}

/* ─── Writing card ─────────────────────────────────────────────────────────── */
function WritingCard({
  item,
}: {
  item: Extract<GalleryItem, { type: "writing" }>;
}) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (item.link) {
      window.open(item.link, "_blank", "noopener,noreferrer");
    } else {
      setExpanded((v) => !v);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="bg-card p-8 md:p-10 flex flex-col gap-4 group cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-wrap gap-1.5">
        {(item.tags ?? ["Writing"]).map((tag) => (
          <span key={tag} className="text-[9px] tracking-widest uppercase font-body px-2 py-0.5 border border-green/20 text-green/50">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-display text-2xl md:text-3xl text-cream uppercase leading-tight group-hover:text-green transition-colors duration-300">
        {item.title}
      </h3>

      <AnimatePresence initial={false}>
        {expanded && item.fullText ? (
          <motion.div
            key="full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            {item.fullText.split("\n\n").map((para, i) => (
              <p key={i} className="text-stone font-body text-sm leading-relaxed mb-4 last:mb-0">
                {para}
              </p>
            ))}
          </motion.div>
        ) : (
          <motion.p
            key="excerpt"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-stone font-body text-sm leading-relaxed line-clamp-3"
          >
            {item.excerpt}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2 mt-auto pt-2">
        {item.link ? (
          <span className="text-[10px] tracking-widest uppercase font-body text-green/60 group-hover:text-green transition-colors duration-200">
            Read →
          </span>
        ) : (
          <span className="text-[10px] tracking-widest uppercase font-body text-white/30 group-hover:text-green/60 transition-colors duration-200">
            {expanded ? "Collapse ↑" : "Read more ↓"}
          </span>
        )}
      </div>
    </motion.div>
  );
}
