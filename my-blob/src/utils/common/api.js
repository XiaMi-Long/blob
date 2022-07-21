/*
 * @Descripttion:提供公共的页面功能接口
 * @version:
 * @Author: wwy
 * @Date: 2022-07-18 23:03:14
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-18 23:09:54
 */
/* 黑暗模式下的md文章页面颜色配置 */
import { cssVarUtils } from "./index";

const articleSkinConfig = {
  darkBackgroundColor: "#323232",
  darkTextColor: "#ddd",
  lightBackgroudColor: "white",
  lightTextColor: "black",
};

const goDarkTheme = function (store) {
  const setCssVar = new cssVarUtils();
  // 设置md页面背景颜色
  setCssVar.setVar(
    "--article-background-color",
    articleSkinConfig.darkBackgroundColor
  );
  // 设置md页面文字颜色
  setCssVar.setVar("--article-text-color", articleSkinConfig.darkTextColor);

  // 更改是否暗黑样式的store
  store.commit("SET_THEME", true);
};

const goLight = function (store) {
  const setCssVar = new cssVarUtils();
  // 设置md页面背景颜色
  setCssVar.setVar(
    "--article-background-color",
    articleSkinConfig.lightBackgroudColor
  );
  // 设置md页面文字颜色
  setCssVar.setVar("--article-text-color", articleSkinConfig.lightTextColor);
  // 更改是否暗黑样式的store
  store.commit("SET_THEME", false);
};

export { articleSkinConfig, goDarkTheme, goLight };
