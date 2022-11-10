<!--
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-11-08 20:51:06
 * @LastEditors: 
 * @LastEditTime: 2022-11-08 20:52:07
-->

# vite与vue-cli自带的带包比较
vite：启动速度只有1.6s，打包后700k不到。
vue-cli：启动要10s，打包后3.5k。
用了以后，真心觉得vite是真的快，体验也是极佳，以后都不太想用webpack和vue-cli了

## 项目代码和注意事项
**原有的vue3项目是开源的商城前端：**
git@github.com:newbee-ltd/newbee-mall-vue3-app.git

**使用vite改装后的源代码：**
git@github.com:zengbotao/vue3-vite.git

**注意事项：**
1、项目都是利用的开源项目，可以利用git直接克隆到本地，第二个是改造第一个，可自己对着配置代码和官方文档学习，自己一定要比较区别；
2、vite对node版本有要求，本项目内地插件也要求vue在3.2.5以上；
3、插件下载后一定要注入plugins；
4、记得配置extends,使的vite识别vue模块


## 项目改造
1、根据两个package.json安装vite及其插件，提升vue版本；
2、package.json要改成vite的脚本，vite还支持预览；
3、更改index.html（不同于webpack，是vite的默认入口）的内容，记得将main.js引入进去。同时将文件位置转移到根目录；
4、配置就是参考第二个项目的配置。

** 主要配置文件展示
```javascript
import { defineConfig } from "vite"; //记得修改package.json的运行脚本，比对差别
import path from "path";
import vue from "@vitejs/plugin-vue"; //下载，导入扩展，并配置插件，vue要3.2.5版本以上才支持。一定要配置在插件中！！！
export default defineConfig({
  base: "./", //记得修改index.heml,路径设置为当前路径
  plugins: [vue()],
  resolve: {
    alias: {
      // 打包相关能尽量给绝对路径,就给绝对
      // 程序运行的目录  相对下面的src => 的绝对路径
      "@": path.resolve(__dirname, "..", "./src"),
      "~": path.resolve(__dirname, "..", "./"), // 项目根目录
    },
    extensions: [".mjs", ".js", ".css", ".json", ".vue"], //记得添加.vue,否则vite会识别不了
  },
  preview: {
    //预览，也可使使用代理，模仿打包后的生产环境，配置见官网
    port: 8080, //npx vite preview
    open: true,
  },
  build: {
    // 构建生产包时的一些配置策略,
    //开发环境时利用的esbuild
    rollupOptions: {
      // 配置rollup的一些构建策略
      output: {
        // 控制输出
        // 在rollup里面, hash代表将你的文件名和文件内容进行组合计算得来的结果
        assetFileNames: "[hash].[name].[ext]",
      },
    },
    assetsInlineLimit: 4096000, // 4000kb
    outDir: "dist", // 配置输出目录
    assetsDir: "static", // 配置输出目录中的静态资源目录
    emptyOutDir: true, // 清除输出目录中的所有文件
  },
});
console.log(
  path.resolve(__dirname, "..", "./src"),
  "fddddddddddddddddddddddddd"
); //node环境下输出，即命令行输出

```