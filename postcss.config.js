module.exports = ({ env }) => ({
  plugins:
    env !== 'test'
      ? [
          require('tailwindcss'),
          require('autoprefixer'),
          env === 'production'
            ? require('postcss-url')([
                {
                  url: asset => asset.url.replace('../public/', ''),
                },
              ])
            : false,
        ]
      : [],
});
