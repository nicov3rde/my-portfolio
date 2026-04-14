"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/nicov3rde",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Vimeo",
    href: "https://vimeo.com/verdehouseproductions",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 7.42c-.09 2-1.5 4.73-4.21 8.18C14.97 19.2 12.71 21 10.9 21c-1.1 0-2.04-1.03-2.82-3.08L6.3 11.5C5.8 9.45 5.27 8.42 4.7 8.42c-.13 0-.58.27-1.35.8L2 7.8c.85-.75 1.68-1.5 2.5-2.25C5.8 4.35 6.78 3.72 7.43 3.65c1.63-.16 2.64.97 3.03 3.38.4 2.6.68 4.22.83 4.84.46 2.12.97 3.18 1.52 3.18.43 0 1.08-.68 1.95-2.05.87-1.37 1.33-2.41 1.38-3.12.12-1.18-.34-1.77-1.38-1.77-.49 0-1 .11-1.51.34.99-3.3 2.9-4.9 5.71-4.8 2.08.07 3.06 1.42 2.95 4.05z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/verdehouseproductions",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      {/* Contact CTA */}
      <div className="section-pad text-center border-b border-border">
        <FadeIn direction="up">
          <p className="label-text mb-4 justify-center flex">Get In Touch</p>
          <h2 className="font-display text-display-lg text-cream uppercase mb-6">
            Ready to Create?
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <p className="text-stone font-body leading-relaxed max-w-md mx-auto mb-10 text-sm">
            Whether you have a brief, a spark of an idea, or just want to see
            if we&rsquo;re the right fit — the door is open.
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <a
            href="mailto:hello@verdehouseproductions.com"
            className="btn-green"
          >
            Say Hello
          </a>
        </FadeIn>
      </div>

      {/* Bottom */}
      <div className="py-10 px-6 flex flex-col items-center gap-5">
        {/* Studio name — centered, prominent */}
        <span className="font-display text-2xl md:text-3xl text-cream tracking-widest uppercase text-center">
          Verde House Productions
        </span>

        {/* Social icons */}
        <div className="flex gap-5 items-center">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              className="text-stone/40 hover:text-green transition-colors duration-200"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Contact email */}
        <a
          href="mailto:hello@verdehouseproductions.com"
          className="text-xs tracking-widest uppercase font-body text-stone/40 hover:text-green transition-colors duration-200"
        >
          hello@verdehouseproductions.com
        </a>

        {/* Copyright */}
        <span className="text-[10px] text-white/15 font-body tracking-wider">
          &copy; 2025 Verde House Productions. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
