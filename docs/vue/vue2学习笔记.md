
## 常用指令

指令：是带有 v-前缀的特殊属性，通过属性来操作元素

v-for 定义：根据变量的值来循环渲染元素

v-text 定义：在元素中插入值

v-html 定义：在元素中不仅可以插入文本，还可以插入标签

v-if | v-else 定义：根据表达式的真假值来动态插入和移除元素

v-show 定义：根据表达式的真假值显示和隐藏元素

v-on 定义：监听元素事件，并执行相应的操作

v-bind 定义：绑定元素的属性并执行相应的操作

v-model 定义：把 input 的值和变量绑定，实现数据和视图的双向绑定

## 修饰符

lazy：在改变后才触发（也就是说只有光标离开 input 输入框的时候值才会改变）

```<input v-model.lazy="msg" >```

trim：自动过滤用户输入的首尾空格

```<input type="text" v-model.trim='msg'/> {{msg}}```

number：将输出字符串转为 Number 类型

```<input v-model.number='num' type="number"/> {{num}}```

## CommonJS AMD/CMD

>组件定义：组件是 vue 里面最强的功能，可以扩展 html，封装重用的代码

>动态模板：vue 中提供了一个动态模板，可以在任意模板中切换，就是用 vue 中用:is 来挂载不同的组件。

>异步组件：在大型应用中，我们可能需要将应用分割成小一些的代码块，并且只在需要的时候才从服务器加载模块。

>全局组件定义：https://blog.csdn.net/weixin_46544034/article/details/124668982

## 组件缓存

组件 testA 会缓存

```
<keep-alive include='testA'>
 <component :is="flag"></component>
</keep-alive>
```

组件 testA，testB 才会缓存

```
<keep-alive include='testA,testB'>
 <component :is="flag"></component>
</keep-alive>
```

除了组件 testA，testC 缓存

```
<keep-alive exclude='testA,testC'>
 <component :is="flag"></component>
</keep-alive>
```

```
<keep-alive>
 <!-- 这里是会被缓存的视图组件 -->
 <router-view v-if="$route.meta.keepAlive" />
</keep-alive>
```

## 路由定义

```js
const routes = [
 {
   path: '/',
   redirect:'/about'
 },
 {
   path: '/about',
   name: 'About',
   component: () => import('../views/About.vue')
 },
 {
   path: '/tab',
   name: 'tab',
   meta: {
        keepAlive: true // 需要被缓存
   },
   component: () => import('../views/Tab.vue')
 }
```

```js
<div>
  <!-- 使用 router-link 组件来导航. -->
  <!-- 通过传入 `to` 属性指定链接. -->
  <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
  <router-link to="/home">home</router-link>
  <router-link to="/news">news</router-link>
</div>
<!-- 路由出口 -->
<!-- 路由匹配到的组件将渲染在这里 -->
<router-view></router-view>
var Home = {
template: '#home'
}
var News = {
template: '#news'
}
对应的模块内容：
<template id="home">
<div>
<h3>组件home</h3>
</div>
</template>

<router-link :to="/home">
```

## 路由传参

```js
1、http://localhost:8080/user/10
传入参数的方式：
路由配置：
2、http://localhost:8080/home?id=10
 router.push('/home')
<router-link to="/home">home</router-link>
对象
<router-link :to="{path:'/home'}">home</router-link>
路由通过名称
<router-link :to="{name: 'homename'}">home</router-link>
直接路由带查询参数query，地址栏变成 /home?id=10
<router-link :to="{path: '/home', query: {id: 10 }}">home</router-link>
命名路由带查询参数query，地址栏变成/home?id=10
<router-link :to="{name: 'homename', query: {id: 10 }}">home</router-link>
```

## 路由跳转

```js
字符串
router.push('/home')
对象
router.push({path:'/home'})
路由通过名称
router.push({name: 'homename'})
直接路由带查询参数query，地址栏变成 /home?id=10
router.push({path: 'home', query: {id: 10 }})
命名路由带查询参数query，地址栏变成/home?id=10
router.push({name: 'homename', query: {id: 10 }})
<router-link :to="'/user/'+id">user</router-link>
const routes = [
   {path: '/home', component: Home},
   {path: '/news', component: News},
   {path: '/user/:id', component: User},
   //路由中定义http://localhost:8080/#/user/10 需要定义ID
];
```

## 获取路由参数

```js
1.$route.path
字符串，等于当前路由对象的路径，会被解析为绝对路径，如 "/home/news" 。
2.$route.params
对象，包含路由中的动态片段和全匹配片段的键值对。3.$route.query
对象，包含路由中查询参数的键值对。例如，对于 /home/news/detail/01?favorite=yes ，会得到
$route.query.favorite == ‘yes‘ 。
4.$route.router
路由规则所属的路由器（以及其所属的组件）。
5.$route.matched
数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
6.$route.name
当前路径的名字，如果没有使用具名路径，则名字为空。
7.$route.meta
路由元信息
8.$route.fullPath
完成解析后的 URL，包含查询参数和hash的完整路径。
```

```js
<router-link :to="{path:'/home',query: {id: id}}">test</router-link>
const routes = [
   {path: '/home', component: Home},
   {path: '/news', component: News},
   {
   path: '/part1',
   name: 'part1',
   props: {   //可以自定义路由参数
    data:{
    a: 'a',
    b: 'b'
    }
   },
   component: () => import('../views/part/part1.vue')
 },
];

props:['data'], //获取到路由中的props
mounted(){
   this.title = this.data.a;
},
{{title}}
const routes = [
 {path: '/home', component: Home},
   {
path: '/news',
component: News,
children:[{ //二级路由
path:'login', ///news/login
component:Login
},{
path:'regist/:name/:pwd',   ///news/regist/abc/123
component:Regist
}]
   },
   {path: '/', redirect: '/home'}   //重定向
];
<div id="my">
 <router-link to="/home">Home</router-link>
 <router-link to="/news">News</router-link>
 <div>
<!-- 一级路由出口 -->
 <router-view></router-view>
 </div>
</div>
var Home = {
 template: '#home'
}
var News = {
 template: '#news'
}
var Login={
 template: '<h3>Login——获取参数:{{$route.query.name}}</h3>'
}
var Regist={
   template: '<h3>Regist——参数:{{$route.params.name}}</h3>'
}
对应的模块内容：
<template id="home">
 <div>
 <h3>组件home</h3>
 </div>
</template>
<template id="news">
 <div>
 <h3>组件news</h3>
 <ul>
 <li><router-link to="/news/login">用户登录</router-link></li>
 <li><router-link :to="'/news/regist/'+name+'/'+id">用户注册</routerlink></li>
</ul>
<!-- 二级路由出口 -->
<router-view></router-view>
 </div>
</template>
```
## 路由拦截  

**beforeEach函数有三个参数：**

 to:router即将进入的路由对象

 from:
 
 next:Function,进行管道中的一个钩子，如果执行完了，则导航的状态就是 confirmed （确认的）；否则为false，终止导航。

**afterEach函数不用传next()函数**
```js
router.beforeEach(function(to, from, next) {
 next()
})
router.beforeEach(function(to, from, next) {
 if (!localStorage.getItem("username")) {
if (to.path !== '/login') {
next('/login')
}
 };
 next()
})
```

## slot插槽
插槽，也就是槽，是组件的一块HTML模板，这块模板显示不显示，以及怎样显示由父组件来决定。
插槽分为：匿名插槽| 具名插槽| 作用域插槽

>匿名插槽
它不用设置名称属性，可以放置在组件的任意位置；可以理解为父传入样式及内容，子负责展示

>具名插槽
插槽加了名称属性，就变成了具名插槽。具名插槽可以在一个组件中出现Ñ次，出现在不同的位置
/*在跳转之后判断*/,会在每次路由切换成功进入激活阶段时被调用。


>作用域插槽
官方叫它作用域插槽，实际上，对比前面两种插槽，我们可以叫它带数据的插槽。
什么意思呢，就是前面两种，都是在组件的模板里面写
作用域插槽跟单个插槽和具名插槽的区别，因为单个插槽和具名插槽不绑定数据，所以父组件提供的模
板一般要既包括样式又包括内容， 而作用域插槽，父组件只需要提供一套样式（在确实用作用域插槽绑
定的数据的前提下）相当于父组件提供一套样式，数据都是子组件的。

```js
index.vue 父组件
<slot2>
   <div slot-scope="scope">
    {{scope.title}}
   </div>
</slot2>
slot2.vue   子组件
<!-- 作用域插槽 -->
<slot :title="title"></slot>
子组件中传入数组
index.vue 父组件
<slot2>
   <div slot-scope="scope">
<ul>
 <li v-for="(v,i) in scope.arr" :key="i">{{v}}</li>
</ul>
   </div>
</slot2>
```
## 生命周期
Vue实例有一个完整的生命周期，也就是说从开始创建、初始化数据、编译模板、挂在DOM、渲染-更
新-渲染、卸载等一系列过程，我们成为Vue 实例的生命周期，钩子就是在某个阶段给你一个做某些处理
的机会。

beforeCreate( 创建前 )
在实例初始化之后，数据观测和事件配置之前被调用，此时组件的选项对象还未创建，el 和 data 并未
初始化，因此无法访问methods， data， computed等上的方法和数据。

created ( 创建后 ）
实例已经创建完成之后被调用，在这一步，实例已完成以下配置：数据观测、属性和方法的运算，
watch/event事件回调，完成了data 数据的初始化，el没有。 然而，挂在阶段还没有开始, $el属性目前不可见，这是一个常用的生命周期，因为你可以调用methods中的方法，改变data中的数据，并且修改
可以通过vue的响应式绑定体现在页面上，获取computed中的计算属性等等，

beforeMount
挂在开始之前被调用，相关的render函数首次被调用（虚拟DOM），实例已完成以下的配置： 编译模
板，把data里面的数据和模板生成html，完成了el和data 初始化，注意此时还没有挂在html到页面上。

mounted
挂在完成，也就是模板中的HTML渲染到HTML页面中，此时一般可以做一些ajax操作，mounted只会执
行一次。

beforeUpdate
在数据更新之前被调用，发生在虚拟DOM重新渲染和打补丁之前，可以在该钩子中进一步地更改状态，
不会触发附加地重渲染过程

updated（更新后）
在由于数据更改导致地虚拟DOM重新渲染和打补丁只会调用，调用时，组件DOM已经更新，所以可以
执行依赖于DOM的操作，然后在大多是情况下，应该避免在此期间更改状态，因为这可能会导致更新无
限循环，该钩子在服务器端渲染期间不被调用

beforeDestroy（销毁前）
在实例销毁之前调用，实例仍然完全可用，
1. 这一步还可以用this来获取实例，
2. 一般在这一步做一些重置的操作，比如清除掉组件中的定时器 和 监听的dom事件

destroyed（销毁后）
在实例销毁之后调用，调用后，所以的事件监听器会被移出，所有的子实例也会被销毁，该钩子在服务
器端渲染期间不被调用

## 计算属性
定义：计算属性就是当其依赖属性的值发生变化时，这个属性的值会自动更新，与之相关的DOM部分也
会同步自动更新。
计算属性传参数
```js
computed:{ //计算属性
   getN:function(){
 return this.n-1;
   }
}
{{total(2)}}
```
```js
computed:{ //计算属性
 total(){
    return function(i){
        return i+1
        }
    }
```    
## watch
定义：watch的作用可以监控一个值的变换,并调用因为变化需要执行的方法
```js
watch:{
   //几种写法 example为监听的名称
   example(curVal,oldVal){
       console.log(curVal,oldVal);
   },
   'example'(curVal,oldVal){
       console.log(curVal,oldVal);
   },
   example:'a',//a表示为methods的方法名
   example:{
   //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个
数据对象
   handler(curVal,oldVal){
   console.log(curVal,oldVal)
   },
   deep:true //对象内部的属性监听，也叫深度监听
   }
}
```
## nextTick

将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
$nextTick它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。
常用的场景是在进行获取数据后，需要对新视图进行下一步操作或者其他操作时，发现获取不到dom。
因为赋值操作只完成了数据模型的改变并没有完成视图更新
     
什么时候用nextTick
Vue生命周期的created钩子函数进行的DOM操作一定要放在Vue.nextTick的回调函数中，原因是
在created钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以
此处一定要将DOM操作的js代码放进Vue.nextTick的回调函数中。与之对应的就是mounted钩子函
数，因为该钩子函数执行时所有的DOM挂载已完成。

```js
 created(){
   //由于DOM还没有生成，不通过this.$nextTick会报错
   this.$nextTick(function(){
       var span = document.createElement('span'); //1、创建元素
       span.innerHTML='span新元素';
       this.$refs.d.appendChild(span); //2、找到父在末尾添加元素
   });
 },
 methods:{
   textChange:function(){
     this.text="修改值";
     console.log(this.$refs.btn.innerText);//this.$refs.btn获取指定DOM，输出：原值
     this.$nextTick(function(){
       console.log(this.$refs.btn.innerText); //输出：修改值
     })
   
```    
Vue.nextTick(callback) 使用原理
Vue是异步执行dom更新的，一旦观察到数据变化，Vue就会开启一个队列，然后把在同一个事件循环
(event loop) 当中观察到数据变化的 watcher 推送进这个队列。如果这个watcher被触发多次，只会被推送到队列一次。这种缓冲行为可以有效的去掉重复数据造成的不必要的计算和DOm操作。而在下一个
事件循环时，Vue会清空队列，并进行必要的DOM更新。
当设置 vm.someData = 'new value'，DOM 并不会马上更新，而是在异步队列被清除，也就是下一个
事件循环开始时执行更新时才会进行必要的DOM更新。如果此时你想要根据更新的 DOM 状态去做某些
事情，就会出现问题。。为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用
Vue.nextTick(callback) 。这样回调函数在 DOM 更新完成后就会调用。

## VUEX
vuex是什么？
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。  
什么情况下我应该使用 Vuex？
Vuex 可以帮助我们管理共享状态，并附带了更多的概念和框架。这需要对短期和长期效益进行权衡。
如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简
单，您最好不要使用 Vuex。一个简单的 store模式就足够您所需了。但是，如果您需要构建一个中大型
单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。

Vuex 和单纯的全局对象有以下两点不同：
1. Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
2. 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit)
mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助
我们更好地了解我们的应用。

核心概念
State
单一状态树
Vuex 使用单一状态树——用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 而
存在。这也意味着，每个应用将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定
的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。
     
Getter
Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter
的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
Mutation
更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数，不能直接调用一个 mutation handler。这个选项更像是事件注册：“当触发一个类型为 increment 的mutation 时，调用此函数。”要唤醒一个 mutation handler，你需要以相应的 type 调用store.commit 方法

Action
Action 类似于 mutation，不同在于：
Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作。
Action 通过 store.dispatch 方法触发：
乍一眼看上去感觉多此一举，我们直接分发 mutation 岂不更方便？实际上并非如此，还记得
mutation 必须同步执行这个限制么？Action 就不受约束！我们可以在 action 内部执行异步操作
Module
由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对
象就有可能变得相当臃肿。
为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。
     
mapActions辅助函数
使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch调用
1、没有使用mapActions 辅助函数的调用方式
2、使用mapActions 辅助函数的处理
```js
import {mapGetters} from 'vuex' //辅助函数
computed:mapGetters(['showNav']),

import {mapActions} from 'vuex' //辅助函数
methods:mapActions(['ADD','DEL'])
```


