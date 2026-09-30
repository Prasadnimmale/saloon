import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F2",
        cream: "#F5EFE6",
        beige: "#EDE4D3",
        champagne: "#E8DCC8",
        charcoal: "#2B2622",
        "deep-charcoal": "#1C1815",
        brown: "#6B5D4F",
        "muted-brown": "#8A7B6C",
        gold: "#C6A87C",
        "gold-light": "#D9C2A0",
        "gold-dark": "#A8895F",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
