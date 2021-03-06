module.exports = {
  mode: 'jit',
  purge: [
    './*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}