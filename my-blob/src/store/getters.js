/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-07-18 22:06:52
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-26 20:38:59
 */
const getters = {
  getIsDark: (state) => state.isDark,

  getHomePageObject: (state) => state.homePageObject,

  getHomePageNo: (state) => state.homePageObject.pageNo,

  getShowActivleArray: (state) => state.homePageObject.showActivleArray,

  /* 返回页码总数 */
  getHomePageTotal: (state) => {
    return Math.ceil(
      state.homePageObject.activleArray.length / state.homePageObject.pageTotal
    );
  },
};

export default getters;
