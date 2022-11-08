/*
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-11-08 16:30:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-08 20:54:00
 */
/*
 * @Description:
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-11-08 16:30:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-08 20:41:04
 */
module.exports = {
  title: "曾波涛",
  base:'/docs/',
  head: [
    ["link", { rel: "icon", href: "/assets/img/favicon.ico" }],
    ["meta", { name: "keywords", content: "前端" }],
  ],
  themeConfig: {
    logo: "/assets/img/logo.png",
    lastUpdated:'更新时间',
    nav: [
      { text: "主页", link: "/" },
      { text: "导航", link: "/about/" },
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
        title: "项目经验",
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
            title: "script标签上使用 defer和 async的区别", // 必要的
            path: "/note/script.html", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          },
          {
            title: "如何提高网页加载速", // 必要的
            path: "/note/websudu.html", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          },
          {
            title: "Webpack优化", // 必要的
            path: "/note/webpack.html", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          },
          {
            title: "vue3项目的vite改造及其配置源码", // 必要的
            path: "/note/vue3vite.html", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
