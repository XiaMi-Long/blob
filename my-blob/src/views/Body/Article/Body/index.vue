<!--
    * @Descripttion: 
    * @version: 
    * @Author: wwy
    * @Date: 2022-07-13 22:14:26
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-08 16:19:16
    -->
<!--
    * @Descripttion: 
    * @version: 
    * @Author: wwy
    * @Date: 2022-07-13 22:14:26
    * @LastEditors: wwy
    * @LastEditTime: 2022-07-16 20:56:40
    -->
<template>
  <div class="article-body-box fixed-header-margin">
    <div class="article-zoom-content content">
      <div id="my-toc-box"></div>
      <div v-html="demoArray" class="code-box"></div>
    </div>
  </div>
</template>

<script>
import "highlight.js/scss/dark.scss";

import { marked } from "marked";
import highlight from "highlight.js";
import { useMessage } from "naive-ui";
import { ref, onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import { asyncClipboardUtils } from "async-clipboard-utils";

export default {
  name: "ArticleBodyView",

  setup() {
    const message = useMessage();
    // md数据
    let demoArray = ref("");
    // 获取文章里面的目录a链接的id.为如果要显示目录进行存储
    const aHrefArray = ref([]);
    // 判断文章里面是否有DOC目录标签
    let isDocLabel = ref(false);
    // 目录偏移距离的配置 css:em为单位
    const tocOffsetConfig = {
      h1: 1,
      h2: 2,
      h3: 3,
      h4: 4,
      h5: 5,
      h6: 6,
    };

    // 扩展marker,使其支持目录等非自带的功能
    const useMarked = () => {
      const renderer = {
        // 截取h标签元素的处理
        heading(text, level) {
          const escapedText = text.toLowerCase();
          aHrefArray.value.push({ text: escapedText, label: level });
          return `<h${level}>
                    <a name="${escapedText}" class="anchor" href="#${escapedText}">
                      <span class="header-link"></span>
                    </a>
                    ${text}
                  </h${level}>`;
        },
        // 截取文本字段的处理
        paragraph(text) {
          // 如果第一个是目录就不渲染了
          if (text.trim().toLowerCase() === "[toc]") {
            isDocLabel.value = true;
            return "";
          }
          return `<p>
                          ${text}
                        </p>`;
        },
      };
      marked.use({ renderer });
    };
    useMarked();

    // 解析目录生成目录的函数
    const parseTocFunction = () => {
      const fragment = new DocumentFragment();
      aHrefArray.value.forEach((ele) => {
        const div = document.createElement("div");
        div.style.textIndent = tocOffsetConfig[`h${ele.label}`] + "em";
        div.innerHTML = `<h3>
                                <a class="my-toc-box-a" href="#${ele.text}">${ele.text}</a>
                              </h3>`;
        fragment.appendChild(div);
      });
      document.getElementById("my-toc-box").appendChild(fragment);
    };

    // 生成代码区域生成copy等按钮
    const createPreDocument = () => {
      const createFragment = (item) => {
        const fragment = new DocumentFragment();
        const copy = document.createElement("div");
        copy.setAttribute("class", "copy-button pre-button");
        copy.innerText = "Copy";
        // 复制代码区域的文字到剪贴板
        copy.addEventListener("click", function () {
          const code = item.querySelectorAll("code");
          if (code.length !== 1) {
            throw new Error("复制事件解析错误");
          }
          asyncClipboardUtils({
            type: "write-text",
            text: code[0].innerText,
            clipboardItem: null,
            writeSuccess: function () {
              message.success("Copy Success！");
            },
            writeError: function () {
              console.err(
                "复制失败,请检查域名是否为HTPPS/是否已经授权网页允许复制"
              );
              message.error("Copy Error！");
            },
            error: function () {
              console.err(
                "复制失败,请检查域名是否为HTPPS/是否已经授权网页允许复制"
              );
              message.error("Copy Error！");
            },
          });
        });

        const full = document.createElement("div");
        full.setAttribute("class", "full-button pre-button");
        full.innerText = "FullScreen";
        // 改变css使其全屏
        full.addEventListener("click", function () {
          const code = item.getElementsByTagName("code");
          const buttonGroup = item.getElementsByClassName("pre-button-group");
          if (code.length === 1 && buttonGroup.length === 1) {
            code[0].classList.toggle("full-screen-code");
            buttonGroup[0].classList.toggle("full-screen-button-group");
          } else {
            throw new Error("全屏事件解析错误");
          }
        });

        const div = document.createElement("div");
        div.setAttribute("class", "pre-button-group");
        div.appendChild(copy);
        div.appendChild(full);

        fragment.appendChild(div);
        return fragment;
      };

      const pre = document.querySelectorAll(".code-box pre");
      pre.forEach((item) => {
        item.appendChild(createFragment(item));
      });
    };

    // 初始化文章,并渲染代码高亮
    const initFunction = () => {
      const router = useRouter();
      fetch(
        process.env.BASE_URL + `doc/${router.currentRoute.value.params.id}.txt`
      )
        .then((res) =>
          res.text().then((res) => {
            demoArray.value = marked.parse(res);
            nextTick(() => {
              // 判断是否生成目录
              if (isDocLabel.value) {
                console.warn("create TOC");
                parseTocFunction();
              }
              console.warn("init code");
              document.querySelectorAll(".code-box pre code").forEach((el) => {
                highlight.highlightElement(el);
              });
              document.querySelectorAll("table").forEach((el) => {
                el.setAttribute("cellpadding", "0");
                el.setAttribute("cellspacing", "0");
                el.setAttribute("border-spacing", "1");
                el.setAttribute("class", "table-item");
              });

              console.warn("init Pre");
              createPreDocument();
            });
          })
        )
        .catch((err) => {
          console.log(err);
        });
    };

    onMounted(() => initFunction());

    return { demoArray };
  },
};
</script>

<style lang="scss" scoped>
.article-body-box {
  background-color: var(--article-background-color);

  padding: 0px 10% 40px 10%;
  .content {
    padding: 30px 80px;

    text-align: left;

    background-color: var(--article-background-color);

    color: var(--article-text-color);

    transition: background-color 1s, color 1s;
  }
}

// 去除内容边距
@media screen and (max-width: 600px) {
  .article-body-box {
    .content {
      padding: 0;
    }
  }
}
</style>

<!-- 因为这些元素是后期代码生成的,所以是不受scoped的影响没有data-哈希的这个标识,需要用全局的或者用内联样式 -->
<style lang="scss">
.table-item {
  border-collapse: collapse;

  width: 100%;

  thead {
    line-height: 2.5em;
  }

  tbody {
    tr {
      line-height: 2.5em;

      border-bottom: 1px solid #22863a;
    }

    td {
      padding: 0.5em;
    }
  }
}

#my-toc-box {
  max-height: 600px;

  overflow: auto;

  margin-bottom: 60px;

  .my-toc-box-a {
    text-decoration: none;

    color: var(--catalogue-text-color);

    transition: color 0.5s;
  }

  h1 {
    display: inline-block;
  }
  h2 {
    display: inline-block;
  }
  h3 {
    display: inline-block;
  }
  h4 {
    display: inline-block;
  }
  h5 {
    display: inline-block;
  }
  h6 {
    display: inline-block;
  }
}
.code-box pre {
  position: relative;

  &:hover .pre-button-group {
    opacity: 1;
  }
}

.code-box blockquote {
  border-left: 10px solid #1de9b6;

  padding: 20px;

  background-color: #f4f4f4;

  color: black;
}

.pre-button-group {
  display: inline-block;

  position: absolute;

  top: 10px;
  right: 10px;

  color: white;

  opacity: 0;

  transition: opacity 1s;

  .pre-button {
    display: inline-block;

    min-width: 60px;

    text-align: center;

    cursor: pointer;

    &:hover {
      font-weight: bold;
    }
  }
}

.full-screen-code {
  position: fixed;

  width: 100vw;
  height: 100vh;

  left: 0;
  top: 0;

  z-index: 10;
}
.full-screen-button-group {
  position: fixed;

  z-index: 10;
}
</style>
