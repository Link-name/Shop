/* const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/Shop/' : '/',
  transpileDependencies: true,

  devServer: process.env.NODE_ENV === 'development' ? {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  } : {}
});
 */
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,
});
