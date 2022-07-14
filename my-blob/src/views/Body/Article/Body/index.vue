<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-13 22:14:26
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-14 23:03:26
-->
<template>
  <div class="article-body-box">
    <div id="my-toc-box"></div>
    <div v-html="demoArray" class="code-box"></div>
  </div>
</template>

<script>
import { marked } from "marked";
import highlight from "highlight.js";
import "highlight.js/scss/github.scss";
import { ref, onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "ArticleBodyView",
  setup() {
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
        paragraph(text) {
          if (text.trim().toLowerCase() === "[toc]") {
            console.log(1);
            isDocLabel.value = true;
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
        console.log(ele);
        // // 如果最大的标签小于当前标签证明是父子关系,h1标签为最大
        // if (zIndex < ele.label) {

        // }
        // zIndex = ele.label;
        // 每次遍历,记录层级,记录下一级比自己大还是小,以此确定层级
        const li = document.createElement("li");
        li.style.textIndent = tocOffsetConfig[`h${ele.label}`] + "em";
        li.innerHTML = `<h${ele.label}>
                          <a class="my-toc-box-a" style="color: var(--catalogue-text-color)" href="#${ele.text}">${ele.text}</a>
                        </h${ele.label}>`;
        fragment.appendChild(li);
      });
      document.getElementById("my-toc-box").appendChild(fragment);
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
            console.log(demoArray);
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
  padding: 40px 20%;

  text-align: left;
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
  .my-toc-box-a {
    text-decoration: none;
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
</style>
