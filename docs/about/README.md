## 1 初体验 vuepress

1、在 github 上创建一个空仓库；拷贝到本地
2、依次输入代码，运行 npx vuepress dev . ，即可看到最简易的 blog。
参考链接：https://vuepress.vuejs.org/zh/

```javascript
# 全局安装
npm install -g vuepress
npm init
# 创建一个 markdown 文件
echo '# Hello VuePress' > README.md
```

3、根目录下创建 docs 目录，写一个 md 文档，修改 package.json 的 scripts 脚本，npm run docs:dev

```javascript
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

## 2、导航栏设置

1、了解它的目录结构，https://vuepress.vuejs.org/zh/guide/directory-structure.html，要理解路由的规则，它是创建导航的关键
2、创建.vuepress/config.js 和 public/assets/img/logo.png
在 config.js 中创建参数

```javascript
module.exports = {
  themeConfig: {
    logo: "/assets/img/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "https://google.com" },
      { text: "External", link: "https://google.com" },
    ]
  },
};
```

##  3、侧边栏设置
1、后面的大家参考官网吧，太简单就不一一赘述了。
https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%E4%BE%A7%E6%A0%8F
