"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-black/10 to-transparent" />

      {/* Centered logo + CTA */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <motion.img
          src="/verde_house_logo.png"
          alt="Verde House Productions"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-[280px] sm:w-[420px] md:w-[540px] lg:w-[620px] h-auto"
        />
        {/*
          The PNG has built-in transparent padding at the bottom.
          Negative margin pulls the CTA up to sit under the actual lettering.
        */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center gap-3 text-center px-6 -mt-14 sm:-mt-20 md:-mt-28 lg:-mt-36"
        >
          <p className="text-sm md:text-base font-body text-white/70 tracking-wide max-w-md">
            Taking 5 creators this summer in NYC. Content, edits, creative direction.
          </p>
          <p className="text-xs font-body text-white/35 tracking-wide uppercase">
            Spots fill fast. Apply before they are gone.
          </p>
          <Link
            href="/summer"
            className="mt-1 text-[11px] tracking-widest uppercase font-body px-6 py-3 border border-green text-green hover:bg-green hover:text-bg transition-all duration-200"
          >
            Claim a Spot
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
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
