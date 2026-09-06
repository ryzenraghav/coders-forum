/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0b1a', // Dark navy / deep blue
        primary: '#b026ff', // Electric purple
        secondary: '#00f0ff', // Cyan
        tertiary: '#ff007f', // Pink
        surface: '#121433', // Lighter navy for cards
        surfaceHover: '#1a1d47',
        textMain: '#e2e4ff', // Light lavender/white
        textMuted: '#8b92d6',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(176, 38, 255, 0.2), inset 0 0 5px rgba(176, 38, 255, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(176, 38, 255, 0.6), inset 0 0 10px rgba(176, 38, 255, 0.2)' }
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      }
    },
  },
  plugins: [],
}
