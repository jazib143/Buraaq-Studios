/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'], // 🔥 cinematic heading font
      },

      colors: {
        dark: '#0A0A0A',
        'dark-lighter': '#121212',
        'dark-accent': '#1C1A17',

        gold: '#D4AF37',
        'gold-light': '#F3E5AB',
        'gold-dark': '#AA7C11',
      },

      animation: {
        float: 'float 6s ease-in-out infinite',
        'gold-glow': 'goldGlow 3s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 1s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate', // 🎥 cinematic zoom
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },

        goldGlow: {
          from: {
            boxShadow: '0 0 10px rgba(212,175,55,0.2)',
          },
          to: {
            boxShadow:
              '0 0 30px rgba(212,175,55,0.5), 0 0 50px rgba(170,124,17,0.3)',
          },
        },

        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },

        slideUp: {
          from: {
            transform: 'translateY(60px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },

        // 🎬 subtle cinematic background zoom
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },

      backgroundImage: {
        'cinema-gradient':
          'linear-gradient(135deg, #0A0A0A 0%, #161412 100%)',

        // 🔥 overlay gradient for hero
        'hero-overlay':
          'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.6), transparent)',
      },

      letterSpacing: {
        cinematic: '0.25em', // ✨ for tagline
      },

      boxShadow: {
        gold: '0 10px 30px rgba(212, 175, 55, 0.2)',
        'gold-strong': '0 20px 50px rgba(212, 175, 55, 0.4)',
      },
    },
  },
  plugins: [],
};