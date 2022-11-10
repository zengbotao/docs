## 基础配置
```javascript
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const HappyPack = require('happypack')
//https://blog.csdn.net/weixin_33734785/article/details/90587621
//https://blog.csdn.net/qq_39207948/article/details/113839532

const os = require('os')
//HappyPack创建子进程控制对象
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

const webpackConfigBase = {
  entry: {
    client: resolve("../app/client.js"),
  },
  output: {
    path: resolve("../dist"),
    filename: "[name].[hash:4].js",
    chunkFilename: "chunks/[name].[hash:4].js",
  },
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      "@app": path.join(__dirname, "../app"),
      "@actions": path.join(__dirname, "../app/redux/actions"),
      "@reducers": path.join(__dirname, "../app/redux/reducers"),
      "@apis": path.join(__dirname, "../app/apis"),
      "@components": path.join(__dirname, "../app/components"),
      "@configs": path.join(__dirname, "../app/configs"),
      "@config": path.join(__dirname, "../app/configs/config.js"),
      "@ajax": path.join(__dirname, "../app/configs/ajax.js"),
      "@reg": path.join(__dirname, "../app/configs/regular.config.js"),
      "@images": path.join(__dirname, "../app/images"),
      "@middleware": path.join(__dirname, "../app/middleware"),
      "@pages": path.join(__dirname, "../app/pages"),
      "@styles": path.join(__dirname, "../app/styles"),
      "@tableList": path.join(
        __dirname,
        "../app/components/tableList/tableList.js"
      ),
    },
  },
  resolveLoader: {
    moduleExtensions: ["-loader"],
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        include: [resolve("../app")],
        loader: "happypack/loader?id=happyBabel",
        //把对.js 的文件处理交给id为happyBabel 的HappyPack 的实例执行，注意与下面plugins中的实例对应
      },
      {
        test: /\.(css|less)$/,
        // exclude: /node_modules/,
        include: [
          resolve("../app/styles"),
          resolve("../app/components"),
          resolve("../node_modules/antd"),
          resolve("../node_modules/draft-js"),
        ], //只解析自定义的ui组件中less和css文件
        loader: ExtractTextPlugin.extract({
          fallback: "style",
          use: "happypack/loader?id=happyStyle",
        }), //把对样式文件处理交给id为happyStyle的HappyPack的实例执行，同上
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: /node_modules/, //缩小解析范围
        include: [resolve("../app/images")], //缩小解析范围
        loader: "url-loader",
        options: {
          limit: 8192,
          name: "img/[name].[hash:4].[ext]", //图片统一打包到img文件夹，名字带hash
        },
        //url-loader允许你有条件地将文件转换为内联的 base-64 URL (当文件小于给定的阈值)，
        //这会减少小文件的 HTTP 请求数。如果文件大于该阈值，会自动的交给 file-loader 处理。
        //如果图片超过设定的现在，就还是用 file-loader来处理。
        //转换成base-64会增加30%的体积，大图片还是用file-loader
        //注意：给图片配了 url-loader 在配置里面就不要再给图片配 file-loader 了 ，
        //因为 url-loader 默认会使用 file-loader 来处理图片的路径关系的，只是加了个当图片太大把路径转成了base64的功能。
      },
      {
        test: /\.(woff|eot|ttf|svg|gif)$/,
        loader: "file-loader",
        options: {
          limit: 8192, 
          //webpack 将会在打包输出中自动重写文件路径为正确的 URL，这里是压缩字体
          //字体文件字体文件转成base64是浏览器无法识别的，所以不能用url-loader
          name: "font/[name].[hash:4].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HappyPack({
      //用id来标识 happypack处理那里类文件，这里是处理js的
      id: "happyBabel",
      //如何处理  用法和loader 的配置一样
      loaders: [
        {
          loader: "babel?cacheDirectory=true", //？后面的参数相当于babel的参数cacheDirectory：true
        },
      ],

      //代表共享进程池，即多个 HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多。
      threadPool: happyThreadPool,
      //允许 HappyPack 输出日志
      verbose: true,
    }),
    new HappyPack({
      //用id来标识 happypack处理那里类文件
      id: "happyStyle",
      //如何处理  用法和loader 的配置一样
      loaders: ["css-loader?sourceMap=true", "less-loader?sourceMap=true"],
      //注意顺序https://webpack.docschina.org/loaders/css-loader/#sourceMap
      //代表共享进程池，即多个 HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多。
      threadPool: happyThreadPool,
      //允许 HappyPack 输出日志
      verbose: true,
    }),
    // 提取css
    new ExtractTextPlugin("style.[hash:4].css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common", // 入口文件名
      filename: "common.[hash:4].js", // 打包后的文件名
      minChunks: function (module, count) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(resolve("../node_modules")) === 0
        );
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      async: "async-common",
      minChunks: 3,
    }),
  ],
};

module.exports = webpackConfigBase

```
## dev配置
```javascript
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')//不同情况下合并webpack配置
const webpackConfigBase = require('./webpack.base.config')//webpack基础配置
const OpenBrowserPlugin = require('open-browser-webpack-plugin')//webpack 启动成功后会打开浏览器
const HtmlWebpackPlugin = require('html-webpack-plugin')
//webpack打包也有着不同阶段的钩子函数，也可以说是生命周期
//HtmlWebpackPlugin可以修改打包后生成的index.html，一般用于插入引用，如CDN等

const PORT = 8888
function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}
const webpackConfigDev = {
  plugins: [
    // 定义环境变量为开发环境
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
      IS_DEVELOPMETN: true,
    }),
    // 将打包后的资源注入到html文件内
    //https://github.com/jantimon/html-webpack-plugin#options
    new HtmlWebpackPlugin({
      template: resolve("../app/index.html"),
      mapConfig:
        "http://41.196.99.30/tgram-pgisbase/config/qdkjdsj_map_config.js",
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${PORT}/#/login`,
    }),
  ],
  devtool: "source-map",//便于开发时发现bug
  devServer: {
    contentBase: resolve("../app"),
    historyApiFallback: false,
    hot: false,
    host: "0.0.0.0",
    port: PORT,
  },
};

module.exports = merge(webpackConfigBase, webpackConfigDev)//合并配置，并输出

```
## prod配置
```javascript
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')
const Copy = require('copy-webpack-plugin')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 构建前删除dist目录
const CleanWebpackPlugin = require('clean-webpack-plugin')
// 多核压缩代码插件
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

const webpackConfigProd = {
  plugins: [
    // 定义环境变量为开发环境
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
      IS_DEVELOPMETN: false,
    }),
    // 将打包后的资源注入到html文件内
    //如果想要修改title等，需要修改模板
    //     <html>
    //   <head>
    //     <%= htmlWebpackPlugin.tags.headTags %>//这种语法
    //   </head>
    //   <body>
    //     <%= htmlWebpackPlugin.tags.bodyTags %>
    //   </body>
    // </html>
    new HtmlWebpackPlugin({
      template: resolve("../app/index.html"),
      mapConfig: "http://56.32.3.21/config/qdkjdsj_map_config.js",
    }),
    /* webpack自带压缩代码*/
    // new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    //https://webpack.docschina.org/migrate/3/#uglifyjsplugin-sourcemap

    /* 多核压缩代码 */
    //https://blog.csdn.net/qq_39207948/article/details/113839532
    //https://blog.csdn.net/hbiao68/article/details/104282547
    new ParallelUglifyPlugin({
      cacheDir: ".cache/", //用于配置缓存存放的目录路径。默认不会缓存，想开启缓存请设置一个目录路径。
      uglifyJS: {
        output: {
          comments: false,
        },
        compress: {
          warnings: false,
        },
      },
    }),
    // 分析代码
    // https://www.jianshu.com/p/efa98b3e1464    
    new BundleAnalyzerPlugin({ analyzerPort: 3011 }),
    //直接将项目的图片，复制到打包好的image文件夹
    new Copy([{ from: "./app/images", to: "./images" }]),
    //每次清理打包后的文件
    new CleanWebpackPlugin(["dist"], {
      root: path.join(__dirname, "../"),
      verbose: false,
      // exclude:['img']//不删除img静态资源
    }),
  ],
};

module.exports = merge(webpackConfigBase, webpackConfigProd)

```