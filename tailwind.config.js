/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },

      animation: {
        spinOnce: 'spin 1s ease-in-out',
        wave: 'wave 2.5s infinite',
        moveInLeft: 'moveInLeft 1s ease-in-out',
        moveInRight: 'moveInRight 1s ease-in-out',
        moveInUp: 'moveInUp 1s ease-in-out',
        moveInDown: 'moveInDown 1s ease-in-out',
      },

      keyframes: {
        wave: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '10%': {
            transform: 'rotate(14deg)'
          },
          '20%': {
            transform: 'rotate(-8deg)'
          },
          '30%': {
            transform: 'rotate(14deg)'
          },
          '40%': {
            transform: 'rotate(-4deg)'
          },
          '50%': {
            transform: 'rotate(10deg)'
          },
          '60%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(0deg)'
          },
        },

        moveInLeft: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-10rem)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },

        moveInRight: {
          '0%': {
            opacity: 0,
            transform: 'translateX(10rem)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },

        moveInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(3rem)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },

        moveInDown: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-1rem)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },

      },

      colors: {
        'day': '#F8FDCF',
        'night': '#183D3D',
        'day-txt': '#183D3D',
        'night-txt': '#F8FDCF',
        'placeholder-txt': '#C5C9A5',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

