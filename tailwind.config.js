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
        'dark-bg': '#0b1114',
        'dark-card': '#111a1e',
        'dark-surface': '#172329',
        'light-bg': '#f5f7f6',
        'light-card': '#ffffff',
        'light-surface': '#edf3f1',

        /* Texto */
        'light-text': '#edf6f3',
        'dark-text': '#9fb2ae',
        'primary-text': '#12201f',
        'secondary-text': '#52615f',

        /* Bordas */
        'border-light': '#dce5e2',
        'border-dark': '#263438',

        /* Accent — teal */
        accent: {
          DEFAULT: '#0f766e',
          hover: '#115e59',
          light: '#5eead4',
          'light-hover': '#99f6e4',
          subtle: '#e6f4f1',
          'subtle-dark': 'rgba(45,212,191,0.12)',
          border: '#99d5cb',
          'border-dark': '#2dd4bf',
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
        'reveal-up': {
          '0%': { clipPath: 'inset(0 0 96% 0)' },
          '100%': { clipPath: 'inset(0 0 0% 0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-down': 'fade-down 0.5s ease-out forwards',
        'scale-x-in': 'scale-x-in 0.6s ease-out 0.5s both',
        ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'stagger-in': 'stagger-in 0.5s ease-out forwards',
        'reveal-up': 'reveal-up 0.44s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
