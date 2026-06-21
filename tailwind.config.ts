import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fdf9e7",
          100: "#fbf0c4",
          200: "#f7e28a",
          300: "#f3d34f",
          400: "#f0c52e",
          500: "#c9a227",
          600: "#a88420",
          700: "#8c6d1b",
          800: "#735816",
          900: "#5a4411",
        },
        dark: {
          50: "#1a1a2e",
          100: "#16213e",
          200: "#0f3460",
          300: "#1a1a3e",
          400: "#0d0d1a",
          500: "#0a0a14",
          900: "#050508",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "ticker-scroll": "ticker-scroll 30s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        "ticker-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
