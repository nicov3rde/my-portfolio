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
        bg: "#080808",
        card: "#0f0f0f",
        green: "#00cc00",
        cream: "#f2f2f0",
        stone: "#888886",
        border: "#1e1e1e",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(4rem, 12vw, 12rem)", { lineHeight: "0.88" }],
        "display-lg": ["clamp(3rem, 8vw, 8rem)", { lineHeight: "0.92" }],
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
