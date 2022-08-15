/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-07-18 22:06:52
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-13 17:32:52
 */
const getters = {
  getIsDark: (state) => state.isDark,

  getHomePageObject: (state) => state.homePageObject,

  getHomePageNo: (state) => state.homePageObject.pageNo,

  getShowActivleArray: (state) => state.homePageObject.showActivleArray,

  getSearchValue: (state) => state.searchParams.searchValue,

  /* 返回页码总数 */
  getHomePageSum: (state) => state.homePageObject.pageSum,

  /* 返回标签分类 */
  getTagsArray: () => window._tagsArray,

  /* 返回歌曲数据 */
  getSongArray: () => window._songArray,

  /* 返回热门文章前10条 */
  getHotBlob: (state) => {
    return state.homePageObject.activleArray
      .filter((item) => item.isHot)
      .slice(0, 10);
  },
};

export default getters;
