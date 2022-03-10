const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: {
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
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
