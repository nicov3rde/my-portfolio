"use client";

import { motion } from "framer-motion";

function NavTile({
  label,
  href,
  delay,
}: {
  label: string;
  href: string;
  delay: number;
}) {
  const go = () => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={go}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex-1 flex items-end justify-between p-10 md:p-16 bg-card border border-border hover:border-green/30 transition-all duration-500 cursor-pointer overflow-hidden min-h-[220px] md:min-h-[280px]"
    >
      {/* Background hover fill */}
      <div className="absolute inset-0 bg-green/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top-left corner accent */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-green/20 group-hover:border-green/60 transition-colors duration-400" />

      {/* Label */}
      <span className="font-display text-4xl md:text-5xl lg:text-6xl text-cream uppercase leading-none group-hover:text-green transition-colors duration-300 relative z-10">
        {label}
      </span>

      {/* Arrow */}
      <span className="font-display text-3xl md:text-4xl text-green/40 group-hover:text-green group-hover:translate-x-2 transition-all duration-300 relative z-10 ml-4">
        →
      </span>
    </motion.button>
  );
}

export default function NavigationTiles() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-6 bg-bg">
      <div className="flex flex-col md:flex-row gap-px">
        <NavTile label="My Work" href="#projects" delay={0} />
        <NavTile label="Gallery" href="#gallery" delay={0.08} />
      </div>
    </section>
  );
}
