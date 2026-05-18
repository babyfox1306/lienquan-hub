/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "light",
      {
        dark: {
          "primary": "#ef4444",
          "secondary": "#1d4ed8",
          "accent": "#f59e0b",
          "neutral": "#1f2937",
          "base-100": "#0b1220",
          "base-200": "#080d1a",
          "base-300": "#050810",
          "info": "#38bdf8",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444"
        }
      }
    ],
    darkTheme: "dark"
  }
};


