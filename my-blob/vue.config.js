/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-07-11 10:44:27
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-11 17:33:45
 */
const { defineConfig } = require("@vue/cli-service");
const isProduction = process.env.NODE_ENV === "production";

module.exports = defineConfig({
  transpileDependencies: true,

  productionSourceMap: !isProduction,

  publicPath: isProduction ? "/luoqixi/" : "/",

  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/style/index.scss";`,
      },
    },
  },
});
