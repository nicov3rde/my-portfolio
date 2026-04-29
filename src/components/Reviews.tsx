"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { getReviews } from "@/lib/reviews";
import type { Review } from "@/lib/reviews";

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setReviews(getReviews().filter((r) => r.approved));
  }, []);

  const approved = reviews.filter((r) => r.approved);
  if (approved.length === 0) return null;

  return (
    <section className="bg-card border-y border-border overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20 pt-12 pb-6">
        <FadeIn direction="up">
          <p className="label-text mb-2">What clients say</p>
        </FadeIn>
      </div>

      {/* Horizontal scroll row */}
      <div
        ref={scrollRef}
        className="flex gap-px overflow-x-auto pb-12 px-6 md:px-12 lg:px-20 scrollbar-none"
        style={{ scrollbarWidth: "none" }}
      >
        {approved.map((review, i) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="flex-shrink-0 w-[300px] md:w-[360px] bg-bg border border-border p-7 flex flex-col gap-4"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" className="text-green/40 flex-shrink-0">
              <path d="M0 14V8.4C0 6.13 0.7 4.2 2.1 2.6 3.53 0.867 5.4 0 7.7 0L8.4 1.4C7 1.8 5.83 2.53 4.9 3.6 3.97 4.67 3.5 5.83 3.5 7.1H7V14H0ZM12 14V8.4C12 6.13 12.7 4.2 14.1 2.6 15.53 0.867 17.4 0 19.7 0L20.4 1.4C19 1.8 17.83 2.53 16.9 3.6 15.97 4.67 15.5 5.83 15.5 7.1H19V14H12Z" fill="currentColor"/>
            </svg>
            <p className="text-stone font-body text-sm leading-relaxed flex-1">
              {review.quote}
            </p>
            <div className="border-t border-border pt-4">
              <p className="text-cream text-sm font-body font-medium">{review.clientName}</p>
              <p className="text-white/35 text-[10px] tracking-widest uppercase font-body mt-0.5">{review.project}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
