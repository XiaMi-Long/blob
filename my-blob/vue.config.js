/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-07-11 10:44:27
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-14 23:03:19
 */
const { defineConfig } = require("@vue/cli-service");
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = defineConfig({
  transpileDependencies: true,

  productionSourceMap: !isProduction,

  publicPath: isProduction ? "/luoqixi/" : "/wwy",

  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/style/index.scss";`,
      },
      css: {
        additionalData: `@import "~@/style/index.css";`,
      },
    },
  },

  chainWebpack: (config) => {
    // config.module
    //   .rule("md")
    //   .test(/\.md$/)
    //   .use("html-loader")
    //   .loader("html-loader")
    //   .end()
    //   .use("markdown-loader")
    //   .loader("markdown-loader")
    //   .end();
    config.plugin("copy").use(CopyPlugin, [
      {
        patterns: [{ from: "src/assets/source/md", to: "doc" }],
      },
    ]);
    // 将文件作为字符串导入, 使用webpack自带的"资源模块"
    config.module.rule("txt").test(/\.txt/).use("asset/source");
  },
});
