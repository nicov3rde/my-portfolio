"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const socialLinks = [
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
            if we&rsquo;re the right fit, the door is open.
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <a
            href="mailto:nicov3rde@gmail.com?subject=Booking%20Inquiry"
            className="btn-green"
          >
            Say Hello
          </a>
        </FadeIn>
      </div>

      {/* Bottom */}
      <div className="py-10 px-6 flex flex-col items-center gap-5">
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

        <a
          href="mailto:nicov3rde@gmail.com"
          className="text-xs tracking-widest uppercase font-body text-stone/40 hover:text-green transition-colors duration-200"
        >
          nicov3rde@gmail.com
        </a>

        <span className="text-[10px] text-white/15 font-body tracking-wider">
          &copy; 2026 Verde House Productions. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
