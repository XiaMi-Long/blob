/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-07-11 10:44:27
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-25 22:49:10
 */
import { createStore } from "vuex";
import { cssVarUtils, deepCopy } from "@/utils/common/index";
import getters from "./getters.js";

const setCssVar = new cssVarUtils();

export default createStore({
  state: {
    /* 主题 */
    isDark: false,
    /* Home页面数据对象 */
    homePageObject: {
      /* 数据 */
      activleArray: deepCopy(window._activleArray),
      /* 页码 */
      pageNo: 1,
      /* 每页条数 */
      pageTotal: 6,
    },
  },
  getters,
  mutations: {
    /* 设置主题 */
    SET_THEME(state, value) {
      state.isDark = value;
      // 更次更改主题的时候,要把那些网页上自己写的全局元素进行样式更改
      if (value) {
        setCssVar.setVar("--header-search-input-background-color", "#18181c");
        setCssVar.setVar("--header-search-input-text-color", "white");
      } else {
        setCssVar.setVar("--header-search-input-background-color", "white");
        setCssVar.setVar("--header-search-input-text-color", "black");
      }
    },

    /* 设置页码 */
    SET_ACTIVLE_PAGE_NO(state, value) {
      state.homePageObject.pageNo = value;
    },
  },
  actions: {},
  modules: {},
});
