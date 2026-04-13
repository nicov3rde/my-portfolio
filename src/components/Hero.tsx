"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background video — swap src="/hero-reel.mp4" with your footage */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-reel.mp4"
      />

      {/* Dark cinematic overlay — gradient + solid */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-black/30" />

      {/* Thin green accent line — left edge */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-forest/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="label-text mb-6 tracking-ultrawide"
        >
          Verde House Productions
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-display-xl text-cream uppercase leading-none tracking-wide"
        >
          Let&rsquo;s Make
          <br />
          <span className="text-forest-bright">Something.</span>
        </motion.h1>

        {/* Sub-line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7, ease: "easeOut" }}
          className="mt-6 text-stone text-sm md:text-base tracking-widest uppercase font-body max-w-md"
        >
          Creative Direction &middot; Video &amp; Photo &middot; Campaigns
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="mailto:hello@verdehouseproductions.com"
            className="btn-primary min-w-[160px] justify-center"
          >
            Book Me
          </a>
          <button onClick={scrollToWork} className="btn-outline min-w-[160px] justify-center">
            See My Work
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-[10px] tracking-ultrawide uppercase font-body">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-forest/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
