/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-07-11 10:44:27
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-27 22:53:21
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
      /* 原始存储数据 */
      activleArray: deepCopy(window._activleArray),
      /* 实际展示数据 */
      showActivleArray: deepCopy(window._activleArray),
      /* 页码 */
      pageNo: 1,
      /* 每页条数 */
      pageTotal: 6,
      /* 页码总数 */
      pageSum: 0,
    },
    /* 数据搜索时的条件 */
    searchParams: {
      /* 搜索框 */
      searchValue: "",
      /* 日历值 */
      calendarValue: "",
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

    /* 设置固定菜单之后的全局样式更改 */
    SET_FIEXD_HEADER_CLASS(state, value) {
      if (value) {
        setCssVar.setVar("--fixed-header-margin", "65px");
      } else {
        setCssVar.setVar("--fixed-header-margin", "0px");
      }
    },

    /* 设置搜索参数--搜索框值 */
    SET_INPUT_VALUE(state, value) {
      state.searchParams.searchValue = value;
    },

    /* 设置搜索参数--日历值 */
    SET_CALENDAR_VALUE(state, value) {
      state.searchParams.calendarValue = value;
    },

    /* 设置页码 */
    SET_ACTIVLE_PAGE_NO(state, value) {
      state.homePageObject.pageNo = value;
    },

    /* 更新homePageObject状态 */
    SET_HOME_PAGE_OBJECT(state) {
      const { homePageObject: home, searchParams: params } = state;
      let handleArray = home.activleArray;
      let isFilter = false;

      // 对搜索词进行过滤
      if (params.searchValue !== "") {
        isFilter = true;
        handleArray = handleArray.filter((item) => {
          return item.activleTitle.includes(params.searchValue);
        });
      }

      // 对日期进行过滤
      if (params.calendarValue !== "") {
        isFilter = true;
        const time = new Date(
          params.calendarValue.replace(/-/g, "/")
        ).getTime();
        handleArray = handleArray.filter((item) => {
          return item.activleTime === time;
        });
      }

      const startSliceNumber = (home.pageNo - 1) * home.pageTotal;
      const endSliceNumber = home.pageNo * home.pageTotal;

      home.showActivleArray = handleArray.slice(
        startSliceNumber,
        endSliceNumber
      );

      // 如果是查询全部
      if (isFilter == false) {
        home.pageSum = handleArray.length / home.pageTotal;
      }

      // 如果带条件
      if (isFilter) {
        home.pageSum = home.showActivleArray.length / home.pageTotal;
      }
    },
  },
  actions: {},
  modules: {},
});
