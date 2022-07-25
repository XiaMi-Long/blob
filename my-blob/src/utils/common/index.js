/*
 * @Descripttion:提供工共的函数
 * @version:
 * @Author: wwy
 * @Date: 2022-07-14 23:07:11
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-25 21:22:14
 */

/**
 * @name: wwy
 * @msg: 全局的设置html下的css变量
 * @return {*}
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

/**
 * @name: wwy
 * @msg: 隐藏顶部导航的API
 * @return {*}
 */
export function hideHeader() {
  const dom = document.querySelector('#home-header[data-id="home"]');
  dom.style.display = "none";
}

/**
 * @name: wwy
 * @msg: 显示顶部导航的API
 * @return {*}
 */
export function showHeader() {
  const dom = document.querySelector('#home-header[data-id="home"]');
  dom.style.display = "block";
}

/**
 * @name: wwy
 * @msg: 深拷贝
 * @param {*} obj 要被拷贝的对象
 * @return {*}
 */
export function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
