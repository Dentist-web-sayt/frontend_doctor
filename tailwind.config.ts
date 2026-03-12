import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
      },
      colors: {
        teal: {
          DEFAULT: "#00C9B1",
          dim: "rgba(0,201,177,0.12)",
          glow: "rgba(0,201,177,0.3)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
