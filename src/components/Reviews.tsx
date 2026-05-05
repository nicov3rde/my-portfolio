"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getReviews } from "@/lib/reviews";
import type { Review } from "@/lib/reviews";

// The pull quote is the most powerful sentence — shown large by default.
// Full review text expands on click.
function getPullQuote(review: Review): string {
  // Use first ~120 chars ending at a sentence boundary if possible
  const text = review.quote;
  if (text.length <= 130) return text;
  const cutoff = text.substring(0, 130).lastIndexOf(".");
  return cutoff > 60 ? text.substring(0, cutoff + 1) + ".." : text.substring(0, 120) + "...";
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const approved = getReviews().filter((r) => r.approved);
    setReviews(approved);
  }, []);

  const prev = useCallback(() => {
    setExpanded(false);
    setActiveIdx((i) => (i - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  const next = useCallback(() => {
    setExpanded(false);
    setActiveIdx((i) => (i + 1) % reviews.length);
  }, [reviews.length]);

  if (reviews.length === 0) return null;

  const review = reviews[activeIdx];
  const pullQuote = getPullQuote(review);
  const hasFull = review.quote.length > pullQuote.replace("..", "").length + 5;

  return (
    <section className="bg-card border-t border-border py-16 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Quote mark */}
        <svg width="32" height="22" viewBox="0 0 32 22" fill="none" className="text-green/30 mx-auto mb-8">
          <path d="M0 22V13.4C0 9.87 1.13 6.87 3.4 4.4 5.67 1.8 8.73 0 12.6 0L13.73 2.27C11.33 2.93 9.33 4.13 7.73 5.87 6.13 7.47 5.33 9.27 5.33 11.27H11.2V22H0ZM20.27 22V13.4C20.27 9.87 21.4 6.87 23.67 4.4 25.93 1.8 29 0 32.87 0L34 2.27C31.6 2.93 29.6 4.13 28 5.87 26.4 7.47 25.6 9.27 25.6 11.27H31.47V22H20.27Z" fill="currentColor"/>
        </svg>

        {/* Pull quote */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeIdx}-${expanded}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {expanded ? (
              <p className="font-body text-base md:text-lg text-white/70 leading-relaxed mb-6">
                {review.quote}
              </p>
            ) : (
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-cream leading-tight mb-6">
                &ldquo;{pullQuote}&rdquo;
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Expand toggle */}
        {hasFull && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-[10px] tracking-widest uppercase font-body text-green/60 hover:text-green transition-colors duration-200 mb-8 block mx-auto"
          >
            {expanded ? "Collapse ↑" : "Read full review ↓"}
          </button>
        )}

        {/* Attribution */}
        <div className="flex flex-col items-center gap-1 mb-8">
          <span className="text-cream text-sm font-body">{review.clientName}</span>
          <span className="text-white/30 text-[10px] tracking-widest uppercase font-body">{review.project}</span>
        </div>

        {/* Dots / arrows — only if multiple reviews */}
        {reviews.length > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-8 h-8 flex items-center justify-center text-white/30 hover:text-green border border-white/10 hover:border-green/30 transition-colors duration-200"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6.5 1.5L3 5l3.5 3.5" />
              </svg>
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setExpanded(false); setActiveIdx(i); }}
                  aria-label={`Review ${i + 1}`}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${i === activeIdx ? "bg-green" : "bg-white/20 hover:bg-white/40"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next review"
              className="w-8 h-8 flex items-center justify-center text-white/30 hover:text-green border border-white/10 hover:border-green/30 transition-colors duration-200"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3.5 1.5L7 5l-3.5 3.5" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
