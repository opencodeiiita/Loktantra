/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1',
          hover: '#4F46E5',
          50: '#EEF2FF',
          100: '#E0E7FF',
          600: '#6366F1',
          700: '#4F46E5',
        },
        accent: {
          green: '#10B981',
          orange: '#F59E0B',
          red: '#EF4444',
          yellow: '#FBBF24',
          purple: '#A855F7',
        },
      },
      animation: {
        'in': 'fadeIn 0.2s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
