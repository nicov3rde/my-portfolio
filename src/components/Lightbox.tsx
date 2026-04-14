"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryItem } from "@/data/gallery";

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
        key="lb-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 md:px-10"
        onClick={onClose}
      >
        {/* Media card */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {item.type === "video" ? (
            <video
              key={item.src}
              src={item.src}
              controls
              autoPlay
              muted
              className="max-w-full max-h-[80vh] w-auto h-auto"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.src}
              alt={item.caption ?? ""}
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
            />
          )}

          {item.caption && (
            <div className="w-full py-3 px-1 mt-2">
              <p className="text-xs tracking-widest uppercase text-white/40 font-body">
                {item.caption}
              </p>
            </div>
          )}
        </motion.div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/40 transition-colors duration-200"
          aria-label="Close"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>

        {/* Prev / Next */}
        {items.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/40 transition-colors duration-200"
              aria-label="Previous"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M9 2L3 8l6 6" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/40 transition-colors duration-200"
              aria-label="Next"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 2l6 6-6 6" />
              </svg>
            </button>
          </>
        )}

        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/25 text-xs font-body tracking-widest">
          {currentIndex + 1} / {items.length}
        </span>
      </motion.div>
    </AnimatePresence>
  );
}
