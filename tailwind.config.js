
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
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-outfit)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        // Dark theme
        // Dark theme (Midnight Pro / Zinc)
        'dark-bg': '#09090b', // Zinc 950 (Black-ish)
        'dark-card': '#18181b', // Zinc 900
        'neon-blue': '#38bdf8', // Sky 400 (Unchanged)
        'neon-purple': '#c084fc', // Purple 400 (Unchanged)
        'light-text': '#fafafa', // Zinc 50
        'dark-text': '#a1a1aa', // Zinc 400
        // Light theme
        'light-bg': '#f8fafc', // Slate 50
        'light-card': '#ffffff',
        'primary-text': '#0f172a', // Slate 900
        'secondary-text': '#475569', // Slate 600
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(39, 215, 254, 0.5), 0 0 10px rgba(39, 215, 254, 0.3), 0 0 15px rgba(39, 215, 254, 0.2)',
          },
          '50%': { 
            boxShadow: '0 0 10px rgba(39, 215, 254, 0.8), 0 0 20px rgba(39, 215, 254, 0.5), 0 0 30px rgba(39, 215, 254, 0.3)',
          },
        },
        'glow-purple': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(167, 121, 233, 0.5), 0 0 10px rgba(167, 121, 233, 0.3), 0 0 15px rgba(167, 121, 233, 0.2)',
          },
          '50%': { 
            boxShadow: '0 0 10px rgba(167, 121, 233, 0.8), 0 0 20px rgba(167, 121, 233, 0.5), 0 0 30px rgba(167, 121, 233, 0.3)',
          },
        },
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 5px theme("colors.neon-blue"), 0 0 10px theme("colors.neon-blue")' },
          '50%': { boxShadow: '0 0 2px theme("colors.neon-blue"), 0 0 5px theme("colors.neon-blue")' },
        },
        'gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-down': 'fade-down 0.8s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
        'glow': 'glow 3s ease-in-out infinite',
        'glow-purple': 'glow-purple 3s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'scroll': 'scroll 40s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundSize: {
        '300%': '300%',
      },
      boxShadow: {
        'neon-blue': '0 0 5px rgba(39, 215, 254, 0.5), 0 0 10px rgba(39, 215, 254, 0.3), 0 0 15px rgba(39, 215, 254, 0.2)',
        'neon-purple': '0 0 5px rgba(167, 121, 233, 0.5), 0 0 10px rgba(167, 121, 233, 0.3), 0 0 15px rgba(167, 121, 233, 0.2)',
        'neon-lg': '0 0 10px rgba(39, 215, 254, 0.6), 0 0 20px rgba(39, 215, 254, 0.4), 0 0 30px rgba(39, 215, 254, 0.2)',
      },
    },
  },
  plugins: [],
}