module.exports = ({ env }) => ({
  plugins:
    env !== 'test' ? [require('tailwindcss'), require('autoprefixer')] : [],
});
