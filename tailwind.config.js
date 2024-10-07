/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-smooth": "pulseSmooth 3s ease-in-out infinite",
        "orbit-fast": "orbitFast 2s linear infinite",
        "orbit-slow": "orbitSlow 4s linear infinite",
        "orbit-reverse": "orbitReverse 5s linear infinite",
        "loading-text": "loadingText 2s steps(4, end) infinite",
      },
      keyframes: {
        pulseSmooth: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "0.5" },
        },
        orbitFast: {
          "0%": { transform: "rotate(0deg) translateX(30px)" },
          "100%": { transform: "rotate(360deg) translateX(30px)" },
        },
        orbitSlow: {
          "0%": { transform: "rotate(0deg) translateX(50px)" },
          "100%": { transform: "rotate(360deg) translateX(50px)" },
        },
        orbitReverse: {
          "0%": { transform: "rotate(0deg) translateX(-40px)" },
          "100%": { transform: "rotate(-360deg) translateX(-40px)" },
        },
        loadingText: {
          "0%, 100%": { content: '"Loading..."' },
          "25%": { content: '"Loading."' },
          "50%": { content: '"Loading.."' },
          "75%": { content: '"Loading..."' },
        },
      },
      colors: {
        "midnight-blue": "#1b1f3a",
        "neon-purple": "#d76df4",
        teal: "#5f99a5",
        "soft-lavender": "#d1bce3",
      },
    },
  },
  plugins: [],
};
