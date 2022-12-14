/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#00A3FF'
        },
        white: '#F9F9F9',
        grey: {
          200: '#BFBFBF'
        },
        dark: {
          700: '#515151',
          900: '#0B1421'
        }
      },
      fontFamily: {
        'rubik': ["Rubik", 'sans-serif']
      }
    },
  },
  plugins: [],
}
