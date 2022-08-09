/*
 * @Descripttion:提供工共的函数
 * @version:
 * @Author: wwy
 * @Date: 2022-07-14 23:07:11
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-08 16:03:20
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

/**
 * @name: wwy
 * @msg: 计算当前页面滚动条占页面高度的百分比
 * 因为clientHeight会一直与pageYOffset的最大值差一个innerHeight(视口固定高度)
 * @return {*} 百分比数
 */
export function scrollProgress() {
  const height = parseInt(document.body.clientHeight - window.innerHeight, 10);
  const scrollY = parseInt(window.pageYOffset, 10);
  return parseInt((scrollY / height) * 100, 10);
}
