/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        custom: ["var(--font-monument-extended)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 15px 5px rgba(184, 155, 121, 0.3)", // Add your glow effect here
      },
      colors: {
        "gold-main": "#b89b79",
        "gold-secondary": "#E7D4BE",
      },
    },
  },
  plugins: [],
};
