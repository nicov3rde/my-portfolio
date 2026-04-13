import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#090d09",
        "bg-card": "#0d110d",
        "bg-card-hover": "#111611",
        forest: {
          DEFAULT: "#1a5c38",
          light: "#22784a",
          bright: "#2d9a5f",
          muted: "#14472c",
          dim: "#0d2b1a",
        },
        cream: "#f2f2f0",
        stone: "#999997",
        border: "#1f261f",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(4rem, 12vw, 12rem)", { lineHeight: "0.9" }],
        "display-lg": ["clamp(3rem, 8vw, 8rem)", { lineHeight: "0.95" }],
        "display-md": ["clamp(2rem, 5vw, 5rem)", { lineHeight: "1" }],
      },
      letterSpacing: {
        superwide: "0.25em",
        ultrawide: "0.4em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
