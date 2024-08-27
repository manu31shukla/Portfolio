/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          DEFAULT: "#D8CBC4", 
        },
        darkBrown: {
          DEFAULT: "#B7A69E"
        },
        coffeeDark: {
          DEFAULT: "#3e2723",
        },
        coffeeLight: {
          DEFAULT: "#6d4c41",
        },
        coffee: {
          DEFAULT: "#4e342e",
        },
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235"
        },
        blue: {
          500: "#2b77e7"
        }
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"]
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      },
      keyframes: {
        'enlarge': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        unfold: {
          '0%': {
            transform: 'scaleY(0)',
            transformOrigin: 'top',
          },
          '100%': {
            transform: 'scaleY(1)',
            transformOrigin: 'top',
          },
        },
      },
      animation: {
        'enlarge': 'enlarge 1s ease-in-out',
        unfold: 'unfold 0.5s ease-out',
      }
    },
  },
  plugins: [],
}