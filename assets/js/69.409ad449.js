(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{845:function(t,a,s){"use strict";s.r(a);var n=s(20),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue-常考基础知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-常考基础知识点"}},[t._v("#")]),t._v(" Vue 常考基础知识点")]),t._v(" "),a("p",[t._v("这一章节我们将来学习 Vue 的一些经常考到的基础知识点。")]),t._v(" "),a("h2",{attrs:{id:"生命周期钩子函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期钩子函数"}},[t._v("#")]),t._v(" 生命周期钩子函数")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("beforeCreate")]),t._v(" 钩子函数调用的时候，是获取不到 "),a("code",[t._v("props")]),t._v(" 或者 "),a("code",[t._v("data")]),t._v(" 中的数据的，因为这些数据的初始化都在 "),a("code",[t._v("initState")]),t._v(" 中。")]),t._v(" "),a("p",[t._v("然后会执行 "),a("code",[t._v("created")]),t._v(" 钩子函数，在这一步的时候已经可以访问到之前不能访问到的数据，但是这时候组件还没被挂载，所以是看不到的。")]),t._v(" "),a("p",[t._v("接下来会先执行 "),a("code",[t._v("beforeMount")]),t._v(" 钩子函数，开始创建 VDOM，最后执行 "),a("code",[t._v("mounted")]),t._v(" 钩子，并将 VDOM 渲染为真实 DOM 并且渲染数据。组件中如果有子组件的话，会递归挂载子组件，只有当所有子组件全部挂载完毕，才会执行根组件的挂载钩子。")]),t._v(" "),a("p",[t._v("接下来是数据更新时会调用的钩子函数 "),a("code",[t._v("beforeUpdate")]),t._v(" 和 "),a("code",[t._v("updated")]),t._v("，这两个钩子函数没什么好说的，就是分别在数据更新前和更新后会调用。")]),t._v(" "),a("p",[t._v("另外还有 "),a("code",[t._v("keep-alive")]),t._v(" 独有的生命周期，分别为 "),a("code",[t._v("activated")]),t._v(" 和 "),a("code",[t._v("deactivated")]),t._v(" 。用 "),a("code",[t._v("keep-alive")]),t._v(" 包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行 "),a("code",[t._v("deactivated")]),t._v(" 钩子函数，命中缓存渲染后会执行 "),a("code",[t._v("actived")]),t._v(" 钩子函数。")]),t._v(" "),a("p",[t._v("最后就是销毁组件的钩子函数 "),a("code",[t._v("beforeDestroy")]),t._v(" 和 "),a("code",[t._v("destroyed")]),t._v("。前者适合移除事件、定时器等等，否则可能会引起内存泄露的问题。然后进行一系列的销毁操作，如果有子组件的话，也会递归销毁子组件，所有子组件都销毁完毕后才会执行根组件的 "),a("code",[t._v("destroyed")]),t._v(" 钩子函数。")]),t._v(" "),a("h2",{attrs:{id:"组件通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件通信"}},[t._v("#")]),t._v(" 组件通信")]),t._v(" "),a("p",[t._v("组件通信一般分为以下几种情况：")]),t._v(" "),a("ul",[a("li",[t._v("父子组件通信")]),t._v(" "),a("li",[t._v("兄弟组件通信")]),t._v(" "),a("li",[t._v("跨多层级组件通信")]),t._v(" "),a("li",[t._v("任意组件")])]),t._v(" "),a("p",[t._v("对于以上每种情况都有多种方式去实现，接下来就来学习下如何实现。")]),t._v(" "),a("h3",{attrs:{id:"父子通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父子通信"}},[t._v("#")]),t._v(" 父子通信")]),t._v(" "),a("p",[t._v("父组件通过 "),a("code",[t._v("props")]),t._v(" 传递数据给子组件，子组件通过 "),a("code",[t._v("emit")]),t._v(" 发送事件传递数据给父组件，这两种方式是最常用的父子通信实现办法。")]),t._v(" "),a("p",[t._v("这种父子通信方式也就是典型的单向数据流，父组件通过 "),a("code",[t._v("props")]),t._v(" 传递数据，子组件不能直接修改 "),a("code",[t._v("props")]),t._v("， 而是必须通过发送事件的方式告知父组件修改数据。")]),t._v(" "),a("p",[t._v("另外这两种方式还可以使用语法糖 "),a("code",[t._v("v-model")]),t._v(" 来直接实现，因为 "),a("code",[t._v("v-model")]),t._v(" 默认会解析成名为 "),a("code",[t._v("value")]),t._v(" 的 "),a("code",[t._v("prop")]),t._v(" 和名为 "),a("code",[t._v("input")]),t._v(" 的事件。这种语法糖的方式是典型的双向绑定，常用于 UI 控件上，但是究其根本，还是通过事件的方法让父组件修改数据。")]),t._v(" "),a("p",[t._v("当然我们还可以通过访问 "),a("code",[t._v("$parent")]),t._v(" 或者 "),a("code",[t._v("$children")]),t._v(" 对象来访问组件实例中的方法和数据。")]),t._v(" "),a("p",[t._v("另外如果你使用 Vue 2.3 及以上版本的话还可以使用 "),a("code",[t._v("$listeners")]),t._v(" 和 "),a("code",[t._v(".sync")]),t._v(" 这两个属性。")]),t._v(" "),a("p",[a("code",[t._v("$listeners")]),t._v(" 属性会将父组件中的 (不含 "),a("code",[t._v(".native")]),t._v(" 修饰器的) "),a("code",[t._v("v-on")]),t._v(" 事件监听器传递给子组件，子组件可以通过访问 "),a("code",[t._v("$listeners")]),t._v(" 来自定义监听器。")]),t._v(" "),a("p",[a("code",[t._v(".sync")]),t._v(" 属性是个语法糖，可以很简单的实现子组件与父组件通信")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--父组件中--\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value.sync")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--以上写法等同于--\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("@update:")]),t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("v => value = v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("comp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--子组件中--\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update:value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"兄弟组件通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#兄弟组件通信"}},[t._v("#")]),t._v(" 兄弟组件通信")]),t._v(" "),a("p",[t._v("对于这种情况可以通过查找父组件中的子组件实现，也就是 "),a("code",[t._v("this.$parent.$children")]),t._v("，在 "),a("code",[t._v("$children")]),t._v(" 中可以通过组件 "),a("code",[t._v("name")]),t._v(" 查询到需要的组件实例，然后进行通信。")]),t._v(" "),a("h3",{attrs:{id:"跨多层次组件通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨多层次组件通信"}},[t._v("#")]),t._v(" 跨多层次组件通信")]),t._v(" "),a("p",[t._v("对于这种情况可以使用 Vue 2.2 新增的 API "),a("code",[t._v("provide / inject")]),t._v("，虽然文档中不推荐直接使用在业务中，但是如果用得好的话还是很有用的。")]),t._v(" "),a("p",[t._v("假设有父组件 A，然后有一个跨多层级的子组件 B")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父组件 A")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("provide")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子组件 B")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("inject")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 无论跨几层都能获得父组件的 data 属性")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"任意组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任意组件"}},[t._v("#")]),t._v(" 任意组件")]),t._v(" "),a("p",[t._v("这种方式可以通过 Vuex 或者 Event Bus 解决，另外如果你不怕麻烦的话，可以使用这种方式解决上述所有的通信情况")]),t._v(" "),a("h2",{attrs:{id:"extend-能做什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extend-能做什么"}},[t._v("#")]),t._v(" extend 能做什么")]),t._v(" "),a("p",[t._v("这个 API 很少用到，作用是扩展组件生成一个构造器，通常会与 "),a("code",[t._v("$mount")]),t._v(" 一起使用。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建组件构造器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" Component "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>test</div>'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 挂载到 #app 上")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 除了上面的方式，还可以用来扩展已有的组件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" SuperComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SuperComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("created")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SuperComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"mixin-和-mixins-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mixin-和-mixins-区别"}},[t._v("#")]),t._v(" mixin 和 mixins 区别")]),t._v(" "),a("p",[a("code",[t._v("mixin")]),t._v(" 用于全局混入，会影响到每个组件实例，通常插件都是这样做初始化的。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...逻辑")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这种方式会影响到每个组件的 beforeCreate 钩子函数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("虽然文档不建议我们在应用中直接使用 "),a("code",[t._v("mixin")]),t._v("，但是如果不滥用的话也是很有帮助的，比如可以全局混入封装好的 "),a("code",[t._v("ajax")]),t._v(" 或者一些工具函数等等。")]),t._v(" "),a("p",[a("code",[t._v("mixins")]),t._v(" 应该是我们最常使用的扩展组件的方式了。如果多个组件中有相同的业务逻辑，就可以将这些逻辑剥离出来，通过 "),a("code",[t._v("mixins")]),t._v(" 混入代码，比如上拉下拉加载数据这种逻辑等等。")]),t._v(" "),a("p",[t._v("另外需要注意的是 "),a("code",[t._v("mixins")]),t._v(" 混入的钩子函数会先于组件内的钩子函数执行，并且在遇到同名选项的时候也会有选择性的进行合并，具体可以阅读 "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/mixins.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"computed-和-watch-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed-和-watch-区别"}},[t._v("#")]),t._v(" computed 和 watch 区别")]),t._v(" "),a("p",[a("code",[t._v("computed")]),t._v(" 是计算属性，依赖其他属性计算值，并且 "),a("code",[t._v("computed")]),t._v(" 的值有缓存，只有当计算值变化才会返回内容。")]),t._v(" "),a("p",[a("code",[t._v("watch")]),t._v(" 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。")]),t._v(" "),a("p",[t._v("所以一般来说需要依赖别的属性来动态获得值的时候可以使用 "),a("code",[t._v("computed")]),t._v("，对于监听到值的变化需要做一些复杂业务逻辑的情况可以使用 "),a("code",[t._v("watch")]),t._v("。")]),t._v(" "),a("p",[t._v("另外 "),a("code",[t._v("computed")]),t._v(" 和 "),a("code",[t._v("watch")]),t._v(" 还都支持对象的写法，这种方式知道的人并不多。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$watch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'obj'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 深度遍历")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("deep")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 立即触发")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("immediate")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行的函数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldVal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("computed")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("aPlus")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this.aPlus 时触发")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this.aPlus = 1 时触发")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("v")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"keep-alive-组件有什么作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive-组件有什么作用"}},[t._v("#")]),t._v(" keep-alive 组件有什么作用")]),t._v(" "),a("p",[t._v("如果你需要在组件切换的时候，保存一些组件的状态防止多次渲染，就可以使用 "),a("code",[t._v("keep-alive")]),t._v(" 组件包裹需要保存的组件。")]),t._v(" "),a("p",[t._v("对于 "),a("code",[t._v("keep-alive")]),t._v(" 组件来说，它拥有两个独有的生命周期钩子函数，分别为 "),a("code",[t._v("activated")]),t._v(" 和 "),a("code",[t._v("deactivated")]),t._v(" 。用 "),a("code",[t._v("keep-alive")]),t._v(" 包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行 "),a("code",[t._v("deactivated")]),t._v(" 钩子函数，命中缓存渲染后会执行 "),a("code",[t._v("actived")]),t._v(" 钩子函数。")]),t._v(" "),a("h2",{attrs:{id:"v-show-与-v-if-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-show-与-v-if-区别"}},[t._v("#")]),t._v(" v-show 与 v-if 区别")]),t._v(" "),a("p",[a("code",[t._v("v-show")]),t._v(" 只是在 "),a("code",[t._v("display: none")]),t._v(" 和 "),a("code",[t._v("display: block")]),t._v(" 之间切换。无论初始条件是什么都会被渲染出来，后面只需要切换 CSS，DOM 还是一直保留着的。所以总的来说 "),a("code",[t._v("v-show")]),t._v(" 在初始渲染时有更高的开销，但是切换开销很小，更适合于频繁切换的场景。")]),t._v(" "),a("p",[a("code",[t._v("v-if")]),t._v(" 的话就得说到 Vue 底层的编译了。当属性初始为 "),a("code",[t._v("false")]),t._v(" 时，组件就不会被渲染，直到条件为 "),a("code",[t._v("true")]),t._v("，并且切换条件时会触发销毁/挂载组件，所以总的来说在切换时开销更高，更适合不经常切换的场景。")]),t._v(" "),a("p",[t._v("并且基于 "),a("code",[t._v("v-if")]),t._v(" 的这种惰性渲染机制，可以在必要的时候才去渲染组件，减少整个页面的初始渲染开销。")]),t._v(" "),a("h2",{attrs:{id:"组件中-data-什么时候可以使用对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件中-data-什么时候可以使用对象"}},[t._v("#")]),t._v(" 组件中 data 什么时候可以使用对象")]),t._v(" "),a("p",[t._v("这道题目其实更多考的是 JS 功底。")]),t._v(" "),a("p",[t._v("组件复用时所有组件实例都会共享 "),a("code",[t._v("data")]),t._v("，如果 "),a("code",[t._v("data")]),t._v(" 是对象的话，就会造成一个组件修改 "),a("code",[t._v("data")]),t._v(" 以后会影响到其他所有组件，所以需要将 "),a("code",[t._v("data")]),t._v(" 写成函数，每次用到就调用一次函数获得新的数据。")]),t._v(" "),a("p",[t._v("当我们使用 "),a("code",[t._v("new Vue()")]),t._v(" 的方式的时候，无论我们将 "),a("code",[t._v("data")]),t._v(" 设置为对象还是函数都是可以的，因为 "),a("code",[t._v("new Vue()")]),t._v(" 的方式是生成一个根组件，该组件不会复用，也就不存在共享 "),a("code",[t._v("data")]),t._v(" 的情况了。")]),t._v(" "),a("h1",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("总的来说这一章节的内容更多的偏向于 Vue 的基础，下一章节我们将来了解一些原理性方面的知识。")])])}),[],!1,null,null,null);a.default=e.exports}}]);