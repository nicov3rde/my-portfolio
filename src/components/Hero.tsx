"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-black/20 to-transparent" />

      {/* Bottom-left editorial text block */}
      <div className="absolute bottom-0 left-0 px-6 md:px-12 lg:px-20 pb-12 md:pb-16 z-10 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="text-[10px] tracking-ultrawide uppercase text-white/30 font-body mb-5"
        >
          Verde House Productions
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-display-xl text-cream uppercase leading-none"
        >
          Let&rsquo;s Make
          <br />
          <span className="text-green">Something.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: "easeOut" }}
          className="mt-5 text-white/35 text-xs md:text-sm tracking-widest uppercase font-body"
        >
          Creative Direction &middot; Video &amp; Photo &middot; Campaigns
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <a
            href="mailto:hello@verdehouseproductions.com"
            className="btn-green"
          >
            Book Me
          </a>
          <button
            onClick={() =>
              document
                .querySelector("#gallery")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-outline-green"
          >
            See My Work
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator — bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 right-8 md:right-12 lg:right-20 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-green/40 to-transparent"
        />
        <span className="text-[9px] tracking-ultrawide uppercase text-white/20 font-body">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
