// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Dark theme
        'dark-bg': '#1a1a2e',
        'dark-card': '#162447',
        'neon-blue': '#27d7fe',
        'neon-purple': '#a779e9',
        'light-text': '#e0e0e0',
        'dark-text': '#b3b3b3',
        // Light theme
        'light-bg': '#f5f5f5',
        'light-card': '#ffffff',
        'primary-text': '#1a1a2e',
        'secondary-text': '#5c5c5c',
      },
    },
  },
  plugins: [],
}