"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Gallery", href: "#gallery" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const go = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-bg/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 h-16 md:h-20">
          {/* Nico Verde script logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              go("#hero");
            }}
            className="flex items-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/verde_house_logo.png"
              alt="Verde House Productions"
              className="h-14 md:h-20 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(link.href);
                }}
                className="text-[11px] tracking-widest uppercase text-white/50 hover:text-white font-body transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hello@verdehouseproductions.com"
              className="text-[11px] tracking-widest uppercase font-body px-5 py-2 border border-green text-green hover:bg-green hover:text-bg transition-all duration-200"
            >
              Book Me
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col justify-center gap-[7px] items-end"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 5.5, width: "100%" }
                  : { rotate: 0, y: 0, width: "100%" }
              }
              className="block h-px bg-cream w-full origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px bg-cream w-5/6"
            />
            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -5.5, width: "100%" }
                  : { rotate: 0, y: 0, width: "100%" }
              }
              className="block h-px bg-cream w-full origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 + 0.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  go(link.href);
                }}
                className="font-display text-5xl text-cream hover:text-green transition-colors duration-200"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="mailto:hello@verdehouseproductions.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.07 + 0.1 }}
              className="font-display text-4xl text-green"
            >
              Book Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
