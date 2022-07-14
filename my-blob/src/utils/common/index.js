/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-07-14 23:07:11
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-14 23:10:53
 */
export class cssVarUtils {
  constructor() {
    this.root = document.querySelector(":root");
  }

  getVar(ver) {
    let allStyle = getComputedStyle(this.root);
    return allStyle.getPropertyValue(ver);
  }

  setVar(ver, val) {
    this.root.style.setProperty(ver, val);
  }
}
