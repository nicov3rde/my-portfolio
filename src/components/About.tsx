"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const stats = [
  { value: "10M+", label: "Views" },
  { value: "10+", label: "Years Creating" },
  { value: "1st Place", label: "HackLanta 2026" },
  { value: "507%", label: "Submission Growth" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/nicov3rde/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@nico.v3rde",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@nicov3rde",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicocrowell",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad pb-10 md:pb-12 bg-bg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left — headshot */}
        <FadeIn direction="up">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gallery/1.png"
              alt="Nico Verde"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 w-10 h-10 border-t border-r border-green/30 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-10 h-10 border-b border-l border-green/30 pointer-events-none" />
          </div>
        </FadeIn>

        {/* Right — bio */}
        <div className="flex flex-col gap-8">
          <FadeIn direction="up" delay={0.1}>
            <p className="label-text mb-3">About</p>
            <h2 className="font-display text-display-sm text-cream uppercase leading-tight mb-6">
              Creative Director. Filmmaker. Marketer. Based in Atlanta and New York.
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <div className="space-y-4 font-body leading-relaxed">
              <p className="text-cream text-base md:text-lg leading-relaxed">
                I&rsquo;m Nico Verde, the founder of Verde House Productions and a senior at Georgia State University studying Marketing with a minor in Art and Design (3.8 GPA).
              </p>
              <p className="text-stone text-sm md:text-base">
                I&rsquo;ve been making content for over 10 years. I direct, shoot, edit, and market, end to end. Whether it&rsquo;s a brand campaign, an event promo, or a short film, I bring the full creative vision and the strategy to back it up.
              </p>
              <p className="text-stone text-sm md:text-base">
                I&rsquo;ve generated 10M+ views as an independent creator, led a marketing team that grew submissions 507% as Director of External Affairs for The Underground Journal, and built and pitched an AI app that won 1st place at HackLanta 2026. I write for Signal, GSU&rsquo;s student newspaper, and I shoot for brands, artists, and events across Atlanta and New York.
              </p>
              <p className="text-stone text-sm md:text-base">
                Verde House Productions is the umbrella for all of it, video, photo, short form, AI content, and campaigns. If you need it made and marketed, this is the house.
              </p>
            </div>
          </FadeIn>

          {/* Stats row */}
          <FadeIn direction="up" delay={0.2}>
            <div className="grid grid-cols-2 gap-px bg-border">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card px-5 py-4 flex flex-col gap-1">
                  <span className="font-display text-2xl md:text-3xl text-green leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase font-body text-white/40">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Available badge */}
          <FadeIn direction="up" delay={0.25}>
            <div className="inline-flex items-center gap-2.5 border border-green/40 px-4 py-2.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              <span className="text-xs tracking-widest uppercase font-body text-green/90">
                Currently available for projects
              </span>
            </div>
          </FadeIn>

          {/* Social icons */}
          <FadeIn direction="up" delay={0.3}>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15 }}
                  className="text-white/30 hover:text-green transition-colors duration-200"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
