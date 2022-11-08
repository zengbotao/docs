明确: defer和 async的使用,可以用于提升网页性能
script标签存在两个属性，defer和async，因此 script标签的使用分为三种情况：
1. ```<script src="example.js"></script>```
没有defer或async属性，浏览器会立即加载并执行相应的脚本。
不等待后续加载的文档元素，读到就开始加载和执行，此举会阻塞后续文档的加载
2. ```<script async src="example.js"></script>```
有了async属性，表示后续文档的加载和渲染与js脚本的加载和执行是并行进行的，即异步执行；
3. ```<script defer src="example.js"></script>```
有了defer属性，加载后续文档的过程和js脚本的加载是并行进行的(异步)，此时的js脚本仅加载不
执行, js脚本的执行需要等到文档所有元素解析完成之后，DOMContentLoaded事件触发执行之
前。
下图是使用了 defer、async、和未使用时的运行情况对比：
![在这里插入图片描述](https://img-blog.csdnimg.cn/c78314887538458496efc135123874fb.png#pic_center)
**绿线：HTML的解析时间
蓝线：JS脚本的加载时间
红色：JS脚本的执行时间**

从图中我们可以明确一下几点：
1.defer和async在网络加载过程是一致的，都是异步执行的；(放在页面顶部,也不会阻塞页面的加
载,与页面加载同时进行)
2.两者的区别,脚本加载完成之后, async是立刻执行, defer会等一等 (等前面的defer脚本执行,等dom的加载)
所以, js脚本加上 async或 defer,放在头部可以减少网页的下载加载时间,如果不考虑兼容性,可以用于优化页面加载的性能
```javascript
<script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.0/index.js"></script>
```