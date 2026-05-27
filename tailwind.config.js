module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-outfit)', 'sans-serif'],
      },
      colors: {
        /* Backgrounds */
        'dark-bg': '#0d1117',
        'dark-card': '#161b22',
        'dark-surface': '#1c2333',
        'light-bg': '#f0f4ff',
        'light-card': '#ffffff',
        'light-surface': '#eef2ff',

        /* Texto */
        'light-text': '#e2e8f0',
        'dark-text': '#94a3b8',
        'primary-text': '#0f172a',
        'secondary-text': '#475569',

        /* Bordas */
        'border-light': '#e2e8f0',
        'border-dark': '#21262d',

        /* Accent — Indigo */
        accent: {
          DEFAULT: '#6366f1',
          hover: '#4f46e5',
          light: '#818cf8',
          'light-hover': '#a5b4fc',
          subtle: '#eef2ff',
          'subtle-dark': 'rgba(99,102,241,0.15)',
          border: '#c7d2fe',
          'border-dark': '#3730a3',
        },
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
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-x-in': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        ping: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        'stagger-in': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-down': 'fade-down 0.5s ease-out forwards',
        'scale-x-in': 'scale-x-in 0.6s ease-out 0.5s both',
        ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'stagger-in': 'stagger-in 0.5s ease-out forwards',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
