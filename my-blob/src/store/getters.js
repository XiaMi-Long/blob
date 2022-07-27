/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-07-18 22:06:52
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-27 22:03:48
 */
const getters = {
  getIsDark: (state) => state.isDark,

  getHomePageObject: (state) => state.homePageObject,

  getHomePageNo: (state) => state.homePageObject.pageNo,

  getShowActivleArray: (state) => state.homePageObject.showActivleArray,

  /* 返回页码总数 */
  getHomePageSum: (state) => state.homePageObject.pageSum,
};

export default getters;
