const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./sources/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        rancho: ['Rancho', 'serif'],
      },
      'colors': {
        'purple': '#5F0766',
        'orange': '#FFC200',
        'purple-2': '#3A003F',
        'black-2': '#2F2E41'
      },
      screens: {
        'xxs': '350px',
        'xs': '520px',
        ...defaultTheme.screens,
      }
    },
  },
  plugins: [],
}
