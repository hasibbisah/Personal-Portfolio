import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#0F172A",
          surface: "#141C31",
          raised: "#182238",
          border: "#25314A",
        },
        frost: {
          DEFAULT: "#FFFFFF",
          soft: "#C6CEDD",
          muted: "#8B96AC",
        },
        coral: {
          DEFAULT: "#FF6B6B",
          dim: "#FF6B6B26",
          bright: "#FF8787",
        },
      },
      fontFamily: {
        body: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        dash: {
          to: { strokeDashoffset: "0" },
        },
        pulse2: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        countUp: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        dash: "dash 2.4s ease-in-out forwards",
        pulse2: "pulse2 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
