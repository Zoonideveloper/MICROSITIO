/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'xxs': '320px',
      // => @media (min-width: 320px) { ... }

      'xs': '390px',
      // => @media (min-width: 390px) { ... }

      'sm': '576px',
      // => @media (min-width: 575px mobile end ) { ... }

      'md': '768px',
      // => @media (min-width: 768px tab end ) { ... }

      'lg': '992px',
      // => @media (min-width: 992px laptop starts) { ... } 

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1366px',
      // => @media (min-width: 1440px) { ... }

      '3xl': '1600px',
      // => @media (min-width: 1600px) { ... }
      '4xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      colors: {
        'fill': '#FFF',
        'fill1': '#FFFFFF',
        'fill2' : '#3737F9 13.31%',
        'fill3' : '#EC268F 66.1%',
        'fill4' : '#3737F9',
        'fill5' : '#363760',
        'fill6': '#ECF4FA',
        'fill7' : '#3B69FA99',
      },
    },
  },
  plugins: [],
}