const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true
  },
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
