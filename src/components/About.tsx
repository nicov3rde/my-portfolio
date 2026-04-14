"use client";

import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="section-pad bg-bg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left — headshot */}
        <FadeIn direction="up">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/headshot.jpg"
              alt="Nico Verde"
              className="w-full h-full object-cover"
            />
            {/* Corner accents */}
            <div className="absolute top-4 right-4 w-10 h-10 border-t border-r border-green/30 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-10 h-10 border-b border-l border-green/30 pointer-events-none" />
          </div>
        </FadeIn>

        {/* Right — bio + badge + VHP logo */}
        <div className="flex flex-col gap-8">
          <FadeIn direction="up" delay={0.1}>
            <p className="label-text mb-2">About</p>
            <h2 className="font-display text-display-md text-cream uppercase mb-6">
              The Director
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <div className="space-y-4 text-stone leading-relaxed font-body">
              <p className="text-cream text-base md:text-lg leading-relaxed">
                Verde House Productions is the creative studio of Nico Verde — a
                director and photographer with over a decade crafting visual
                narratives for brands that want to mean something.
              </p>
              <p className="text-sm md:text-base">
                From intimate editorial shoots to multi-city campaign launches,
                the work spans fashion, lifestyle, technology, and culture.
                Every frame is built on a simple belief: the best creative work
                doesn&rsquo;t just look good — it makes people feel something
                they can&rsquo;t quite explain.
              </p>
              <p className="text-sm md:text-base">
                Based between New York and wherever the work takes us. Available
                for brand campaigns, editorial commissions, and long-term
                creative partnerships.
              </p>
            </div>
          </FadeIn>

          {/* Available badge */}
          <FadeIn direction="up" delay={0.2}>
            <div className="inline-flex items-center gap-2.5 border border-green/40 px-4 py-2.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              <span className="text-xs tracking-widest uppercase font-body text-green/90">
                Currently available for projects
              </span>
            </div>
          </FadeIn>

          {/* Verde House Productions logo */}
          <FadeIn direction="up" delay={0.25}>
            <div className="pt-6 border-t border-white/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/verde_house_logo.png"
                alt="Verde House Productions"
                className="h-12 md:h-14 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
