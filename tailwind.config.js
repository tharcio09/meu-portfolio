
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
          '0%, 100%': { 
            opacity: '1',
            textShadow: '0 0 10px rgba(39, 215, 254, 0.8), 0 0 20px rgba(39, 215, 254, 0.6), 0 0 30px rgba(39, 215, 254, 0.4)',
          },
          '50%': { 
            opacity: '0.8',
            textShadow: '0 0 5px rgba(39, 215, 254, 0.5), 0 0 10px rgba(39, 215, 254, 0.3)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-up': 'fade-up 0.5s ease-out',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'glow-purple': 'glow-purple 2s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
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