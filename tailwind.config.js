/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F172A",
          50: "#F4F6FA",
          100: "#E4E9F2",
          200: "#C3CEE0",
          300: "#94A6C4",
          400: "#5D719D",
          500: "#3A4D74",
          600: "#26385A",
          700: "#1A2842",
          800: "#12192E",
          900: "#0F172A",
          950: "#080C17",
        },
        slate2: {
          DEFAULT: "#1E293B",
        },
        // NOTE: key kept as "gold" for backwards compatibility with existing
        // class names (bg-gold-500, text-gold-400, shadow-gold, etc.) across
        // the codebase — values below are the Sigma Estimations brand blue.
        gold: {
          DEFAULT: "#2F66DE",
          50: "#EEF3FE",
          100: "#D6E4FC",
          200: "#AECAF9",
          300: "#7FA8F3",
          400: "#5286EA",
          500: "#2F66DE",
          600: "#234FBA",
          700: "#1C3E93",
          800: "#17316F",
          900: "#142A5C",
        },
        surface: "#F8FAFC",
        success: {
          DEFAULT: "#10B981",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(47,102,222,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,102,222,0.06) 1px, transparent 1px)",
        "noise": "url('/images/noise.png')",
      },
      backgroundSize: {
        grid: "40px 40px",
        "grid-sm": "20px 20px",
      },
      boxShadow: {
        premium: "0 20px 50px -20px rgba(15,23,42,0.28)",
        gold: "0 10px 30px -12px rgba(47,102,222,0.35)",
        "gold-hover": "0 14px 36px -14px rgba(47,102,222,0.45)",
        glass: "0 8px 32px 0 rgba(15,23,42,0.12)",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        marquee: "marquee 32s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "draw-line": "draw-line 1.6s ease forwards",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "draw-line": {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
