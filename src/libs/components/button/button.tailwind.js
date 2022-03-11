const baseStyle = theme => ({
  'padding': '@apply px-4 py-2',
  'background-color': theme('colors.indigo.600')
  // @apply inline-flex items-center justify-center;
  // @apply px-4 py-2;
  // @apply border border-transparent;
  // @apply rounded-md cursor-pointer;
  // @apply text-white;
  // @apply text-base;
  /* color: theme('colors.white'); */
  /* background-color: theme('colors.indigo.600'); */
});

const smallMediaStyle = {

};

const mediumdiaStyle = {

};

const largeMediaStyle = {

};

export default ({ addComponents, theme }) => {
  addComponents({
    '.button': baseStyle(theme),
  })
};
