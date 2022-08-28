// const { defineConfig } = require('@vue/cli-service')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vueWeatherApp/'
    : '/',
    configureWebpack: {
      plugins: [new MiniCssExtractPlugin()],
    }
  };
  