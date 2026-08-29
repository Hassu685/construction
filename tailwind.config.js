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
        gold: {
          DEFAULT: "#F59E0B",
          50: "#FFF8EB",
          100: "#FEECC7",
          200: "#FDD98A",
          300: "#FCC24D",
          400: "#FAAB24",
          500: "#F59E0B",
          600: "#D17E06",
          700: "#A85E08",
          800: "#894A0D",
          900: "#723D0F",
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
          "linear-gradient(rgba(245,158,11,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.06) 1px, transparent 1px)",
        "noise": "url('/images/noise.png')",
      },
      backgroundSize: {
        grid: "40px 40px",
        "grid-sm": "20px 20px",
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(15,23,42,0.35)",
        gold: "0 10px 40px -10px rgba(245,158,11,0.45)",
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
