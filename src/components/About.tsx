"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const stats = [
  { value: "10+", label: "Years Directing" },
  { value: "50+", label: "Brand Partners" },
  { value: "3", label: "Continents" },
  { value: "∞", label: "Frames Shot" },
];

const skills = [
  "Art Direction",
  "Cinematography",
  "Brand Photography",
  "Campaign Strategy",
  "Color Grading",
  "Post-Production",
  "Casting & Talent",
  "Visual Identity",
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-bg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left — bio */}
        <div>
          <FadeIn direction="up">
            <p className="label-text mb-4">About</p>
            <h2 className="font-display text-display-md text-cream uppercase mb-8">
              The Director
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            {/* Headshot placeholder */}
            <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-[#0d2b1a] to-[#1a5c38] mb-8 overflow-hidden group">
              <div className="absolute inset-0 flex items-end p-6">
                <p className="label-text text-forest-bright">
                  Headshot — swap with your photo
                </p>
              </div>
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-forest/40" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-forest/40" />
            </div>
          </FadeIn>
        </div>

        {/* Right — text + stats + skills */}
        <div className="flex flex-col gap-10">
          <FadeIn direction="up" delay={0.15}>
            <div className="space-y-5 text-stone leading-relaxed font-body">
              <p className="text-cream text-lg leading-relaxed">
                Verde House Productions is the creative studio of a director and
                photographer with over a decade crafting visual narratives for
                brands that want to mean something.
              </p>
              <p>
                From intimate editorial shoots to multi-city campaign launches,
                the work spans fashion, lifestyle, technology, and culture. Every
                frame is built on a simple belief: the best creative work doesn&rsquo;t
                just look good — it makes people feel something they can&rsquo;t quite
                explain.
              </p>
              <p>
                Based between New York and wherever the work takes us. Available
                for brand campaigns, editorial commissions, and long-term creative
                partnerships.
              </p>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn direction="up" delay={0.2}>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-px bg-border">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.5 }}
                  className="bg-bg p-5 flex flex-col gap-1"
                >
                  <span className="font-display text-4xl text-forest-bright">
                    {stat.value}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-stone font-body">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Skills */}
          <FadeIn direction="up" delay={0.25}>
            <div>
              <p className="label-text mb-4">Capabilities</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                    className="text-xs tracking-wider uppercase font-body text-stone border border-border px-3 py-1.5 hover:border-forest/60 hover:text-cream transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
