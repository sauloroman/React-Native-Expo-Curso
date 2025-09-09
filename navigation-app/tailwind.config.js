/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors: {
        primary: '#49129C',
        secondary: {
          DEFAULT: '#840086',
          100: '#C51297',
          200: '#831266'
        },
        tertiary: '#EF2967'
      },
      
      fontFamily: {
        'work-black': ['WorkSans-Black', 'sans-serif'],
        'work-light': ['WorkSans-Light', 'sans-serif'],
        'work-medium': ['WorkSans-Medium', 'sans-serif'],
      }

    },
  },
  plugins: [],
}

