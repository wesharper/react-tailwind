/* eslint-disable no-undef */
module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      const oneOfRules = webpackConfig.module.rules.find((x) => !!x.oneOf).oneOf;
      oneOfRules.unshift({
        test: /\.mdx?$/,
        use: ['babel-loader', '@mdx-js/loader'],
      });
      webpackConfig.node.fs = 'empty';
      return webpackConfig;
    },
  },
};
