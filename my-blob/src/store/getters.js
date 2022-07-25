/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-07-18 22:06:52
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-25 22:28:56
 */
const getters = {
  getIsDark: (state) => state.isDark,

  getHomePageObject: (state) => state.homePageObject,

  getActivleArray: (state) => state.homePageObject.activleArray,

  getHomePageNo: (state) => state.homePageObject.pageNo,

  /* 返回页码总数 */
  getHomePageTotal: (state) =>
    Math.ceil(
      state.homePageObject.activleArray.length / state.homePageObject.pageTotal
    ),
};

export default getters;
