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
        spinOnce: 'spin 1s ease-in-out'
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

