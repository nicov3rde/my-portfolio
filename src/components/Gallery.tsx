"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox, { GalleryItem } from "./Lightbox";
import FadeIn from "./FadeIn";

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    label: "Campaign — FW24",
    type: "video",
    bgClass: "from-[#0d2b1a] to-[#1a5c38]",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
  },
  {
    id: 2,
    label: "Portrait — N.V.",
    type: "photo",
    bgClass: "from-[#111] to-[#1e1e1e]",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
  },
  {
    id: 3,
    label: "BTS — Studio",
    type: "photo",
    bgClass: "from-[#0a1f12] to-[#14472c]",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 4,
    label: "Campaign — Spring",
    type: "photo",
    bgClass: "from-[#161616] to-[#111a11]",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 5,
    label: "Reel — Summer &rsquo;24",
    type: "video",
    bgClass: "from-[#0d2b1a] to-[#0a1a0f]",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
  },
  {
    id: 6,
    label: "Editorial — Noir",
    type: "photo",
    bgClass: "from-[#0f0f0f] to-[#1a1f1a]",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
  },
  {
    id: 7,
    label: "Product — Verde",
    type: "photo",
    bgClass: "from-[#1a5c38] to-[#0d2b1a]",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 8,
    label: "Campaign — Midnight",
    type: "video",
    bgClass: "from-[#0a0a14] to-[#0a0f0a]",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 9,
    label: "Brand — Launch &rsquo;25",
    type: "video",
    bgClass: "from-[#0d2b1a] to-[#224422]",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length
    );
  const goNext = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % galleryItems.length
    );

  return (
    <section id="work" className="section-pad bg-bg">
      <FadeIn direction="up">
        <div className="mb-12 md:mb-16">
          <p className="label-text mb-3">Selected Work</p>
          <h2 className="font-display text-display-md text-cream uppercase">
            The Work
          </h2>
        </div>
      </FadeIn>

      {/* Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3"
        style={{ gridAutoRows: "220px" }}
      >
        {galleryItems.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => openLightbox(i)}
            className={`
              relative overflow-hidden group cursor-pointer text-left
              ${item.colSpan} ${item.rowSpan}
              bg-bg-card
            `}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.01 }}
          >
            {/* Gradient background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.bgClass} transition-all duration-500 group-hover:scale-105`}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-400" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
              {/* Video badge */}
              {item.type === "video" && (
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/40 px-2.5 py-1 backdrop-blur-sm">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-forest-bright"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="text-[9px] tracking-widest uppercase text-white/60 font-body">
                    Video
                  </span>
                </div>
              )}

              <p
                className="label-text text-forest-bright opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-1"
                dangerouslySetInnerHTML={{ __html: item.label }}
              />

              {/* Hover arrow */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="text-white/60"
                >
                  <path d="M3 10h14M10 3l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Bottom label always visible */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-forest/0 group-hover:bg-forest/60 transition-all duration-400" />
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={galleryItems}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  );
}
