"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface GalleryItem {
  id: number;
  label: string;
  type: "photo" | "video";
  bgClass: string;
  colSpan: string;
  rowSpan: string;
}

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (currentIndex === null) return null;
  const item = items[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92"
        onClick={onClose}
      >
        {/* Card */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.93 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-5xl mx-6 md:mx-12"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Media placeholder */}
          <div
            className={`w-full aspect-video bg-gradient-to-br ${item.bgClass} flex flex-col items-start justify-end p-8`}
          >
            {/* Video icon */}
            {item.type === "video" && (
              <div className="absolute top-8 left-8 flex items-center gap-2 text-white/40">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="text-xs tracking-widest uppercase font-body">Video</span>
              </div>
            )}
            <span className="label-text text-forest-bright">{item.label}</span>
            <p className="text-white/30 text-xs font-body mt-1 tracking-wider uppercase">
              Placeholder — swap in your media
            </p>
          </div>
        </motion.div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/40 transition-colors duration-200"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>

        {/* Prev */}
        {items.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/40 transition-colors duration-200"
            aria-label="Previous"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 2L4 8l6 6" />
            </svg>
          </button>
        )}

        {/* Next */}
        {items.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/40 transition-colors duration-200"
            aria-label="Next"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2l6 6-6 6" />
            </svg>
          </button>
        )}

        {/* Counter */}
        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 text-xs font-body tracking-widest uppercase">
          {currentIndex + 1} / {items.length}
        </span>
      </motion.div>
    </AnimatePresence>
  );
}
