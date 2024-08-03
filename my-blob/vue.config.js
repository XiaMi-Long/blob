/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-07-11 10:44:27
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-10 01:41:58
 */
const { defineConfig } = require("@vue/cli-service");
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = defineConfig({
  transpileDependencies: false,

  productionSourceMap: !isProduction,

  publicPath: isProduction ? "/luoqixi/" : "/wwy",

  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/style/index.scss";`,
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
        patterns: [
          { from: "src/assets/source/md", to: "doc" },
          { from: "src/assets/source/mp3", to: "music" },
          {
            from: "src/assets/images/activle-images",
            to: "img/activle-images",
          },
          { from: "src/assets/images/user-images", to: "img/user-images" },
          { from: "src/assets/images/system-images", to: "img/system-images" },
          { from: "src/assets/images/song-images", to: "img/song-images" },
          { from: "public/config.js", to: "" },
          { from: "public/favicon.ico", to: "" },
          { from: "public/robots.txt", to: "" },
          { from: "public/sitemap.xml", to: "" },
          { from: "public/manifest.json", to: "" },
        ],
      },
    ]);

    // 将文件作为字符串导入, 使用webpack自带的"资源模块"
    config.module.rule("txt").test(/\.txt/).use("asset/source");
  },
});
