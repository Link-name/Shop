const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  publicPath: `/Shop/`,
  transpileDependencies: true,

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Замените порт на тот, на котором запущен ваш Node.js сервер
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
});
