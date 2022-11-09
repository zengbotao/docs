/*
 * @Description:
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-11-08 16:30:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-09 14:42:49
 */
module.exports = {
  title: "zengbotao",
  // base: "/docs/",
  head: [
    ["link", { rel: "icon", href: "/assets/img/favicon.ico" }],
    ["meta", { name: "keywords", content: "前端" }],
    ["link", { rel: "manifest", href: "/assets/img/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "apple-touch-icon", href: "/assets/img/logo.png" }],
    [
      "link",
      { rel: "mask-icon", href: "/assets/img/favicon.ico", color: "#3eaf7c" },
    ],
    [
      "meta",
      { name: "msapplication-TileImage", content: "/assets/img/logo.png" },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh",
        },
      },
    ],
    [
      "@vssue/vuepress-plugin-vssue",
      {
        // 设置 `platform` 而不是 `api`
        platform: "github-v4",

        // 其他的 Vssue 配置
        owner: "zengbotao",
        repo: "docs",
        clientId: "ab4f92230febd748188f",
        clientSecret: "4df9463808c8b8775b3e3b6c02c9cd64503f4835",
      },
    ],
  ],

  themeConfig: {
    author: "zengbotao",
    searchPlaceholder: "Search",
    searchMaxSuggestions: 10, // Search 建议列表条目数
    logo: "/assets/img/logo.png",
    lastUpdated: "Last Updated",
    smoothScroll: true,
    nav: [
      { text: "主页", link: "/" },
      { text: "关于我", link: "/about/jianli.html" },
      { text: "项目经验", link: "https://github.com/zengbotao" },
    ],
    sidebar: [
      {
        title: "主页", // 必要的
        path: "/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      },
      {
        title: "博客搭建",
        collapsable: false,
        children: [
          {
            title: "vuepress入门", // 必要的
            path: "/about/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          },
        ],
      },
      {
        title: "项目笔记",
        children: [
          {
            title: "vue", // 必要的
            collapsable: false,
            children: [
              {
                title: "elementUI节点树添加右键菜单组件", // 必要的
                path: "/note/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              },
              {
                title: "vue2 简易的拖拽 看板源代码", // 必要的
                path: "/note/tuozhuai.html", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              },
              {
                title: "vue3项目的vite改造及其配置源码", // 必要的
                path: "/note/vue3vite.html", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              },
            ],
          },
          {
            title: "webpack", // 必要的
            collapsable: false,
            children: [
              {
                title: "Webpack打包优化", // 必要的
                path: "/note/webpack.html", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              },
            ],
          },
          {
            title: "网页优化", // 必要的
            collapsable: false,
            children: [
              {
                title: "script标签上使用 defer和 async的区别", // 必要的
                path: "/note/script.html", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              },
              {
                title: "如何提高网页加载速", // 必要的
                path: "/note/websudu.html", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              },
            ],
          },
        ],
      },
      {
        title: "学习资料",
        collapsable: false,
        children: [
          {
            title: "git常用命令", // 必要的
            path: "/learn/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          },
        ],
      },
    ],
  },
};
