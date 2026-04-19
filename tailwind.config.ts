import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f1f5fb",
          100: "#dee8f4",
          200: "#bcd0e8",
          300: "#8eaed6",
          400: "#5b85bf",
          500: "#3a67a8",
          600: "#2c508a",
          700: "#244170",
          800: "#1d335b",
          900: "#13203b",
          950: "#0a1428",
        },
        ice: {
          50: "#f3faff",
          100: "#e3f2fd",
          200: "#c5e3fa",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(19, 32, 59, 0.18)",
        ring: "0 0 0 1px rgba(19, 32, 59, 0.06), 0 12px 40px -16px rgba(19, 32, 59, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
