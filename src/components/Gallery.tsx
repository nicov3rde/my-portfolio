"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { galleryItems } from "@/data/gallery";
import type { GalleryItem } from "@/data/gallery";
import Lightbox from "./Lightbox";
import FadeIn from "./FadeIn";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-pad bg-bg">
      <FadeIn direction="up">
        <div className="mb-12 md:mb-16">
          <p className="label-text mb-3">Selected Work</p>
          <h2 className="font-display text-display-md text-cream uppercase">
            The Gallery
          </h2>
        </div>
      </FadeIn>

      <div className="columns-2 md:columns-3 gap-[3px] md:gap-1">
        {galleryItems.map((item: GalleryItem, i: number) => (
          <GalleryCard
            key={i}
            item={item}
            index={i}
            onClick={() => setLightboxIndex(i)}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={galleryItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((i) =>
              i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length
            )
          }
          onNext={() =>
            setLightboxIndex((i) =>
              i === null ? null : (i + 1) % galleryItems.length
            )
          }
        />
      )}
    </section>
  );
}

function GalleryCard({
  item,
  index,
  onClick,
}: {
  item: GalleryItem;
  index: number;
  onClick: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => videoRef.current?.play();
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={item.type === "video" ? handleMouseEnter : undefined}
      onMouseLeave={item.type === "video" ? handleMouseLeave : undefined}
      className="relative w-full block mb-[3px] md:mb-1 overflow-hidden group break-inside-avoid text-left"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.07 }}
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
          className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500"
          onLoadedMetadata={(e) => {
            // Seek to first frame so a thumbnail is visible before hover
            (e.currentTarget as HTMLVideoElement).currentTime = 0.01;
          }}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.src}
          alt={item.caption ?? ""}
          className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500"
        />
      )}

      {/* Caption overlay on hover */}
      {item.caption && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end p-4">
          <p
            className="text-[10px] tracking-widest uppercase text-white/70 font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {item.caption}
          </p>
        </div>
      )}
    </motion.button>
  );
}
