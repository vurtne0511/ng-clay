const plugin = require('tailwindcss/plugin');

const button = require('./libs/components/button/button.tailwind');

module.exports = {
  prefix: 'nc-',
  plugins: [
    plugin(button),
  ]
};
