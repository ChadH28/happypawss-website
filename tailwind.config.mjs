/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html", // optional
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tertiary: "var(--tertiary)",
        secondary: "var(--secondary)",
        primary: "var(--primary)",
        primarycolorgradient: "var(--primarycolorgradient)",
        blacktransgradient: "var(--blacktransgradient)",
        primaryred: "var(--primaryred)",
        primaryblue: "var(--primaryblue)",
      },
    },
  },
  plugins: [],
};
