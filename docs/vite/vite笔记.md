## 1Vite前言
需要了解的背景知识
1. 什么是构建工具? 
2. webpack的一个缺点在哪
3. es module的规范
4. vite他到底是什么东西 
5. vite的基本安装和使用
6. vite的编译结果
7. vite编译结果的分析
8. vite的配置文件
9. vite中处理css, 静态资源怎么去做
10. vite的插件以及常用插件的使用
11. vite与ts的结合
12. vite生产打包
13. vite构建react项目, vue3项目
14. vite的一个构建原理 

## 2什么是构建工具
> 浏览器他只认识html, css, js

企业级项目里都可能会具备哪些功能
1. typescript: 如果遇到ts文件我们需要使用tsc将typescript代码转换为js代码   
2. React/Vue: 安装react-compiler / vue-complier, 将我们写的jsx文件或者.vue文件转换为render函数
3. less/sass/postcss/component-style: 我们又需要安装less-loader, sass-loader等一系列编译工具
4. 语法降级: babel ---> 将es的新语法转换旧版浏览器可以接受的语法
5. 体积优化: uglifyjs ---> 将我们的代码进行压缩变成体积更小性能更高的文件

稍微改一点点东西,需要一部一部解析，非常麻烦，如下

将App.tsx ---> tsc ---> App.jsx ---> React-complier ---> js文件

这个时候就用到了**构建工具**：帮你把tsc, react-compiler, less, babel, uglifyjs全部集成到一起

我们只需要关心我们写的代码就好了，它自动去tsc, react-compiler, less, babel, uglifyjs全部挨个走一遍 

> 打包: 将我们写的浏览器不认识的代码 交给构建工具进行编译处理的过程就叫做打包, 打包完成以后会给我们一个浏览器可以认识的文件

一个构建工具他到底承担了哪些脏活累活:
1. 模块化开发支持: 支持直接从node_modules里引入代码 + 多种模块化支持
2. 处理代码兼容性: 比如babel语法降级, less,ts 语法转换(**不是构建工具做的, 构建工具将这些语法对应的处理工具集成进来自动化处理**)
3. 提高项目性能: 压缩文件, **代码分割**
4. 优化开发体验: 
    - 构建工具会帮你自动监听文件的变化, 当文件变化以后自动帮你调用对应的集成工具进行重新打包, 然后再浏览器重新运行（整个过程叫做热更新, hot replacement
    - 开发服务器: 跨域的问题, 用react-cli create-react-element vue-cli  解决跨域的问题, 
每次改一点 ---> 这个顺序还不能错 

构建工具他让我们可以不用每次都关心我们的代码在浏览器如何运行, 我们只需要首次给构建工具提供一个配置文件(这个配置文件也不是必须的, 如果你不给他 他会有默认的帮你去处理), 有了这个集成的配置文件以后, 再结合热更新, 我们就更加不需要管任何东西。 
 **构建工具让我们不用关心生产的代码也不用关心代码如何在浏览器运行, 只需要关心我们的开发怎么写的爽怎么写就好了**

市面上主流的构建工具有哪些:

- webpack
- vite
- parcel
- esbuild
- rollup
- grunt
- gulp

## 3vite相较于webpack的优势
官方文档: https://cn.vitejs.dev/guide/why.html##the-problems

然而，当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。包含数千个模块的大型项目相当普遍。我们开始遇到性能瓶颈 —— 使用 JavaScript 开发的工具通常需要很长时间（甚至是几分钟！）才能启动开发服务器，即使使用 HMR(热更新)，文件修改后的效果也需要几秒钟才能在浏览器中反映出来。如此循环往复，迟钝的反馈会极大地影响开发者的开发效率和幸福感。
起因: 我们的项目越大 ----> 构建工具（webpack）所要处理的js代码就越多 【跟webpack的一个构建过程（工作流程）有关系】
造成的结果: 构建工具需要很长时间才能启动开发服务器 (启动开发服务器 ---> 把项目跑起来)

这是由于webpack支持多种模块化的原因，它支持commonjs和es6语法，一开始必须要统一模块化代码, 所以意味着他需要将所有的依赖全部读一遍，就非常的耗时

注: 加入你的工程可能不只是跑在浏览器端，使用vite会更快
vite是基于es modules的, 侧重点不一样, webpack更多的关注兼容性, 而vite关注浏览器端的开发体验
- vite的上手难度更低,内置了相对最优化的配置，对个人自定义开发的要求更低。而 webpack的配置是非常多的, loader, plugin

```js
// index.js
// 这一段代码最终会到浏览器里去运行
const lodash = require("lodash"); // commonjs 规范
import Vue from "vue"; // es6 module

// webpack是允许我们这么写的
```

webpack的编译原理, AST 抽象语法分析的工具 分析出你写的这个js文件有哪些导入和导出操作
构建工具是运行在服务端的 

```js
// webpack的一个转换结果
const lodash = webpack_require("lodash");
const Vue = webpack_require("vue");
```

```js
(function(modules) {
    function webpack_require() {}
    // 入口是index.js
    // 通过webpack的配置文件得来的: webpack.config.js ./src/index.js
    modules[entry](webpack_require);

}, ({
    "./src/index.js": (webpack_require) => {
        const lodash = webpack_require("lodash");
        const Vue = webpack_require("vue");
    }
}))
```

## 4vite的基本使用
### 4.1搭建vite工程
vite官网搭建工程指南: https://vitejs.dev/guide/##scaffolding-your-first-vite-project
vite对node版本有要求，部分插件也要求vue在3.2.5以上；
我之前的一个练手的项目：https://blog.csdn.net/weixin_46544034/article/details/127415269?
- 使用自选配置去构建vite项目: 
  ```
  yarn create vite
  ```

- 构建一些具备框架功能的预设模板(不需要你自选配置)
  ```
  yarn create vite my-react-ts-app --template react-ts ## 还有更多配置可以参阅官网
  ```

- vuex, vue-router, 

### 4.2vite启动项目初体验
记住，在vite项目里面，不要使用commonjs 规范语法
```js
// index.js
// 这一段代码最终会到浏览器里去运行
const lodash = require("lodash"); // commonjs 规范
import Vue from "vue"; // es6 module，这个才是vite
```

开箱即用(out of box): 你不需要做任何额外的配置就可以使用vite来帮你处理构建工作
在默认情况下, 我们的esmodule去导入资源的时候, 要么是绝对路径, 要么是相对路径
既然我们现在的最佳实践就是node_modules, 那为什么es官方在我们导入非绝对路径和非相对路径的资源的时候不默认帮我们 搜寻node_modules呢？
假设浏览器做了这个事情
vite: 代码处理

### 4.3vite的预加载

```js
import _ from "lodash"; // lodash可能也import了其他的东西
```

在处理的过程中如果说看到了有非绝对路径或者相对路径的引用, 他则会尝试开启路径补全

```js
import _ from "/node_modules/.vite/lodash"; // lodash可能也import了其他的东西

import __vite__cjsImport0_lodash from "/node_modules/.vite/deps/lodash.js?v=ebe57916";
```

找寻依赖的过程是自当前目录依次向上查找的过程, 直到搜寻到根目录或者搜寻到对应依赖为止 /user/node_modules/lodash, ../

生产 和开发 

yarn dev ---> 开发(每次依赖预构建所重新构建的相对路径都是正确的)

vite会全权交给一个叫做rollup的库去完成生产环境的打包

缓存 ---> 

实际上vite在考虑另外一个问题的时候就顺便把这个问题解决了

commonjs 规范的导出 module.exports 

有的包他是以commonjs规范的格式导出 axios 

**依赖预构建**: 首先vite会找到对应的依赖, 然后调用esbuild(对js语法进行处理的一个库), 将其他规范的代码转换成esmodule规范, 然后放到**当前目录下的node_modules/.vite/deps**, 同时对esmodule规范的各个模块进行统一集成 

```js
// a 
export default function a() {}

```

```js
export { default as a  } from "./a.js"
```

vite重写以后
```js
function a() {}
```

他解决了3个问题: 
1. 不同的第三方包会有不同的导出格式(这个是vite没法约束人家的事情)
2. 对路径的处理上可以直接使用.vite/deps, 方便路径重写，
3. 叫做网络多包传输的性能问题(也是原生esmodule规范不敢支持node_modules的原因之一), 有了依赖预构建以后无论他有多少的额外export 和import, vite都会尽可能的将他们进行集成最后只生成一个或者几个模块

vite.config.js === webpack.config.js，是vite的配置文件

### 4.4vite为什么可以实现按需加载
在 vite 官网上给的答案是，为了解决开发服务器启动缓慢和热更新缓慢的问题，提升开发效率和开发幸福感！拿 webpack 来说，开发服务器启动时，webpack 会通过入口文件，解析出所有依赖的资源，并执行这些资源的转义操作，构建出整个应用后才能提供服务。当一个项目包含上千个模块时，一次构建出整个应用的模式就遇到性能瓶颈了。vite 的做法是抛弃打包过程，按需构建，前端请求到哪个模块，再去构建这个模块。并且 vite 还使用了 esbuild 和预构建第三方库的优化手段，进一步提升按需构建的速度。


### 4.5vite和ts的结合

> vite他天生就对ts支持非常良好, 因为vite在开发时态是基于esbuild, 而esbuild是天生支持对ts文件的转换的

那么对ts的校验呢？

> vite只对ts文件进行转换, 并不会对ts文件进行类型检查

1. 安装一个插件: vite-plugin-eslint
    我们的这个插件只会在开发时态帮助我们校验ts语法

为什么我们在vite.config.js里可以使用esmodule: 主要是因为vite在读取配置文件并执行的前一刻会进行替换

## 5在vite中处理css

### 5.1vite天生就支持对css文件的直接处理

1. vite在读取到main.js中引用到了Index.css
2. 直接去使用fs模块去读取index.css中文件内容
3. 直接创建一个style标签, 将index.css中文件内容直接copy进style标签里
4. 将style标签插入到index.html的head中
5. 将该css文件中的内容直接替换为js脚本(方便热更新或者css模块化), 同时设置Content-Type为js 从而让浏览器以JS脚本的形式来执行该css后缀的文件

场景:

- 一个组件最外层的元素类名一般取名 : wrapper
- 一个组件最底层的元素我们一般取名: .footer

你取了footer这个名字, 别人因为没有看过你这个组件的源代码, 也可能去取名footer这个类名

最终可能会导致样式被覆盖（因为类名重复）, 这就是我们在协同开发的时候很容易出现的问题

cssmodule就是来解决这个问题的

大概说一下原理: 

全部都是基于node

1. module.css (module是一种约定, 表示需要开启css模块化)
2. 他会将你的所有类名进行一定规则的替换（将footer 替换成 _footer_i22st_1）
3. 同时创建一个映射对象{ footer: "_footer_i22st_1" }
4. 将替换过后的内容塞进style标签里然后放入到head标签中 (能够读到index.html的文件内容)
5. 将componentA.module.css内容进行全部抹除, 替换成JS脚本
6. 将创建的映射对象在脚本中进行默认导出

less(预处理器): less给我们提供了一些方便且非常实用的方法

### 5.2css配置（modules篇）

```js
export default defineConfig({
css: {
    // 对css的行为进行配置
    // modules配置最终会丢给postcss modules
    modules: {
      // 是对css模块化的默认行为进行覆盖
      localsConvention: "camelCaseOnly", // 修改生成的配置对象的key的展示形式(驼峰还是中划线形式)
      scopeBehaviour: "local", // 配置当前的模块化行为是模块化还是全局化 (有hash就是开启了模块化的一个标志, 因为他可以保证产生不同的hash值来控制我们的样式类名不被覆盖)
      // generateScopedName: "[name]_[local]_[hash:5]" // https://github.com/webpack/loader-utils##interpolatename
      // generateScopedName: (name, filename, css) => {
      //     // name -> 代表的是你此刻css文件中的类名
      //     // filename -> 是你当前css文件的绝对路径
      //     // css -> 给的就是你当前样式
      //     console.log("name", name, "filename", filename, "css", css); // 这一行会输出在哪？？？ 输出在node
      //     // 配置成函数以后, 返回值就决定了他最终显示的类型
      //     return `${name}_${Math.random().toString(36).substr(3, 8) }`;
      // }
      hashPrefix: "hello", // 生成hash会根据你的类名 + 一些其他的字符串(文件名 + 他内部随机生成一个字符串)去进行生成, 如果你想要你生成hash更加的独特一点, 你可以配置hashPrefix, 你配置的这个字符串会参与到最终的hash生成, （hash: 只要你的字符串有一个字不一样, 那么生成的hash就完全不一样, 但是只要你的字符串完全一样, 生成的hash就会一样）
      globalModulePaths: ["./componentB.module.css"], // 代表你不想参与到css模块化的路径，要定义全局模块的路径，请使用globalModulePaths选项。
    },}
```
css.modules的配置信息：https://cn.vitejs.dev/config/shared-options.html##css-modules
配置 CSS modules 的行为，选项将被传递给 postcss-modules：https://github.com/madyankin/postcss-modules
- localConvention: 修改生成的配置对象的key的展示形式(驼峰还是中划线形式)
- scopeBehaviour: 配置当前的模块化行为是模块化还是全局化 (有hash就是开启了模块化的一个标志, 因为他可以保证产生不同的hash值来控制我们的样式类名不被覆盖)
- generateScopedName: 生成的类名的规则(可以配置为函数, 也可以配置成字符串规则: https://github.com/webpack/loader-utils##interpolatename)
- hashPrefix: 生成hash会根据你的类名 + 一些其他的字符串(文件名 + 他内部随机生成一个字符串)去进行生成, 如果你想要你生成hash更加的独特一点, 你可以配置hashPrefix, 你配置的这个字符串会参与到最终的hash生成, （hash: 只要你的字符串有一个字不一样, 那么生成的hash就完全不一样, 但是只要你的字符串完全一样, 生成的hash就会一样）
- globalModulePaths: 代表你不想参与到css模块化的路径

### 5.3vite与postcss

vite天生对postcss有非常良好的支持，
注意！！！：**直接在css.postcss中进行配置, 该属性直接配置的就是postcss的配置**

**都对postcss有一个误区: 他们认为postcss和less sass是差不多级别**

我们写的css代码(怎么爽怎么来) --> postcss ---> less --> 再次对未来的高级css语法进行降级 --> 前缀补全 --> 浏览器客户端 

目前来说 less和sass等一系列预处理器的postcss插件已经停止维护了 less插件 你自己去用less和sass编译完了, 然后你把编译结果给我

**所以业内就产生了一个新的说法: postcss是后处理器** less的postcss的插件就ok了 

我们写的js代码(怎么爽怎么来) --> babel --> 将最新的ts语法进行转换js语法 --> 做一次语法降级  --> 浏览器客户端去执行

babel --> 帮助我们让js执行起来万无一失 

```js
class App {} // es6的写法

function App() {} // es3的语法
```

浏览器的兼容性你能考虑到吗, 预处理器并不能够解决这些问题:
1. 对未来css属性的一些使用降级问题
2. 前缀补全: Google非常卷 --webkit 

## 6vite在生产环境对静态资源的处理

当我们将工程进行打包以后, 会发现找不到原来的资源

baseUrl: "/"，这个很重要

打包后的静态资源为什么要有hash

浏览器是有一个缓存机制 静态资源名字只要不改, 那么他就会直接用缓存的

刷新页面: 请求的名字是不是同一个 读取缓存 

所以我们要尽量去避免名字一致

hash算法: 将一串字符串经过运算得到一个新的乱码字符串 全世界独一无二(uuid才是独一无二的 )

利用好hash算法 可以让我们更好的去控制浏览器的缓存机制

base64图片 

## 7vite.config.js
### 7.1 vite.base.config.js
```js
// vite.base.config.js
import { defineConfig } from "vite";
import { ViteAliases } from "vite-aliases";
import viteCompression from "vite-plugin-compression";

import MyViteAliases from "./plugins/ViteAliases";
import { createHtmlPlugin } from "vite-plugin-html";
import CreateHtmlPlugin from "./plugins/CreateHtmlPlugin";
import { viteMockServe } from "vite-plugin-mock";
import VitePluginMock from "./plugins/VitePluginMock";

export default defineConfig({
  base: "./",
  optimizeDeps: {
    exclude: [], // 将指定数组中的依赖不进行依赖预构建
  },
  server: {
    port: 5333,
    open: true,
  },
  envPrefix: "ENV_",
  css: {
    // 对css的行为进行配置
    // modules配置最终会丢给postcss modules
    modules: {
      // 是对css模块化的默认行为进行覆盖
      localsConvention: "camelCaseOnly", // 修改生成的配置对象的key的展示形式(驼峰还是中划线形式)
      scopeBehaviour: "local", // 配置当前的模块化行为是模块化还是全局化 (有hash就是开启了模块化的一个标志, 因为他可以保证产生不同的hash值来控制我们的样式类名不被覆盖)
      // generateScopedName: "[name]_[local]_[hash:5]" // https://github.com/webpack/loader-utils##interpolatename
      // generateScopedName: (name, filename, css) => {
      //     // name -> 代表的是你此刻css文件中的类名
      //     // filename -> 是你当前css文件的绝对路径
      //     // css -> 给的就是你当前样式
      //     console.log("name", name, "filename", filename, "css", css); // 这一行会输出在哪？？？ 输出在node
      //     // 配置成函数以后, 返回值就决定了他最终显示的类型
      //     return `${name}_${Math.random().toString(36).substr(3, 8) }`;
      // }
      hashPrefix: "hello", // 生成hash会根据你的类名 + 一些其他的字符串(文件名 + 他内部随机生成一个字符串)去进行生成, 如果你想要你生成hash更加的独特一点, 你可以配置hashPrefix, 你配置的这个字符串会参与到最终的hash生成, （hash: 只要你的字符串有一个字不一样, 那么生成的hash就完全不一样, 但是只要你的字符串完全一样, 生成的hash就会一样）
      globalModulePaths: ["./componentB.module.css"], // 代表你不想参与到css模块化的路径
    },
    preprocessorOptions: {
      // key + config key代表预处理器的名
      less: {
        // 整个的配置对象都会最终给到less的执行参数（全局参数）中去
        // 在webpack里就给less-loader去配置就好了
        math: "always",
        globalVars: {
          // 全局变量
          mainColor: "red",
        },
      },
    },
    devSourcemap: true,
  },
  build: {
    // reportCompressedSize: false,
    rollupOptions: {
      // 配置rollup的一些构建策略
      output: {
        // 控制输出
        // 在rollup里面, hash代表将你的文件名和文件内容进行组合计算得来的结果
        assetFileNames: "[hash].[name].[ext]",
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
      },
    },
    assetsInlineLimit: 4096000, // 4000kb
    outDir: "demo",
    assetsDir: "static",
    // sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    MyViteAliases(),
    viteCompression(),
    // ViteAliases()
    // createHtmlPlugin({
    //     inject: {
    //         data: {
    //             title: "主页"
    //         }
    //     }
    // })
    CreateHtmlPlugin({
      inject: {
        data: {
          title: "主页2",
        },
      },
    }), // serve === 开启开发服务器
    viteMockServe(),
    // VitePluginMock()
  ],
});
```
#### 7.2 vite识别vue文件
vite识别vue文件需要引入插件，有时还需要修改alias
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
```








