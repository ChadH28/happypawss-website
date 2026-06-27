/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        "accent-light": "var(--accent-light)",
        "warm-cream": "var(--warm-cream)",
        "warm-tan": "var(--warm-tan)",
        "pet-orange": "var(--pet-orange)",
        "pet-teal": "var(--pet-teal)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "var(--soft-shadow)",
      },
    },
  },
  plugins: [],
};
