/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        scissorsGradient: "hsl(39, 89%, 49%)",
        paperGradient: "hsl(230, 89%, 62%)",
        rockGradient: "hsl(349, 71%, 52%)",
        lizardGradient: "hsl(261, 73%, 60%)",
        spockGradient: "hsl(189, 59%, 53%)",
        hoverscissorsGradient: "hsl(40, 84%, 53%)",
        hoverpaperGradient: "hsl(230, 89%, 65%)",
        hoverrockGradient: "hsl(349, 70%, 56%)",
        hoverlizardGradient: "hsl(261, 72%, 63%)",
        hoverspockGradient: "hsl(189, 58%, 57%)",
        DarkText: "hsl(229, 25%, 31%)",
        ScoreText: "hsl(229, 64%, 46%)",
        HeaderOutline: "hsl(217, 16%, 45%)",
        backgroundGradient: "hsl(214, 47%, 23%)",
        LinesColor: "hsl(237, 49%, 15%)",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
      boxShadow: {
        winner:
          ("0 0 0 20px rgba(74, 144, 226, 0.5)",
          "0 0 0 40px rgba(74, 144, 226, 0.3)",
          "0 0 0 60px rgba(74, 144, 226, 0.1)"),
      },
      screens: {
        sm: "375px",
      },
    },
  },
  plugins: [],
};
