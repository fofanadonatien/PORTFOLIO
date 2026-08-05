import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        "ink-3": "var(--ink-3)",
        line: "var(--line)",
        "line-soft": "var(--line-soft)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        "accent-wash": "var(--accent-wash)",
        ok: "var(--ok)",
        warn: "var(--warn)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: { content: "1120px" },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,.04), 0 8px 24px -12px rgba(15,23,42,.10)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16,1,0.3,1)",
      },
    },
  },
  plugins: [],
};
export default config;
