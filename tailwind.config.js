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
      boxShadow: {
        glow: "0 0 15px 5px rgba(184, 155, 121, 0.3)",
      },
      colors: {
        "gold-main": "#b89b79",
        "gold-secondary": "#E7D4BE",
        "grey-footer": "#797979",
      },
      textUnderlineOffset: {
        4: "4px",
        8: "8px",
      },
      fontFamily: {
        // Adding custom fonts
        monumentExtended: ["var(--font-monument-extended)", "sans-serif"],
        monumentExtendedRegular: [
          "var(--font-pp-monument-extended-regular)",
          "sans-serif",
        ],
        monumentExtendedLight: [
          "var(--font-pp-monument-extended-light)",
          "sans-serif",
        ],
        monumentExtendedBlack: [
          "var(--font-pp-monument-extended-black)",
          "sans-serif",
        ],
        monumentExtendedItalic: [
          "var(--font-pp-monument-extended-italic)",
          "sans-serif",
        ],
        geistSans: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
        custom: ["var(--font-monument-extended)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
