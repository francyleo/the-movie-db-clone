const path = require('path');

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src/'))
      .set('@assets', path.resolve(__dirname, 'src/assets'))
      .set('@components', path.resolve(__dirname, 'src/components'))
      .set('@views', path.resolve(__dirname, 'src/views'))
      .set('@store', path.resolve(__dirname, 'src/store'))
      .set('@services', path.resolve(__dirname, 'src/services'));
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/scss/main.scss";`,
      },
    },
  },
};
