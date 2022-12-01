(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{803:function(v,_,i){"use strict";i.r(_);var t=i(20),a=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("日期类：")]),v._v(" "),_("p",[v._v("a.  Date、Calendar：经常使用的是java.util.Date")]),v._v(" "),_("p",[v._v("b.  字符串和日期之间的转换：SimpleDateFormat。在转换的时候需要指定转化格式")])]),v._v(" "),_("li",[_("p",[v._v("异常")]),v._v(" "),_("p",[v._v("a.  是java中一套用于反馈和处理问题的机制")]),v._v(" "),_("p",[v._v("b.  顶级父类是Throwable，包含两个子类：Error，Exception")]),v._v(" "),_("p",[v._v("c.  Error：表示严重的错误。出现之后不能处理，只能尽量的优化代码，减少错误出现的频率")]),v._v(" "),_("p",[v._v("d.  Exception：表示出现的可以处理的问题")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("i.  编译时异常：编译的时候就报错要求立即处理\n\nii. 运行时异常：运行的时候才报错，因此可以处理，也可以不处理\n")])])]),_("p",[v._v("e.  异常的处理方式：")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("i.  继续向上抛出：throws\n\nii. 捕获处理：try-catch\n")])])]),_("p",[v._v("f.  异常的捕获方式：")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("i.  如果每一个异常的处理方式各不一样，多个异常分别捕获\n\nii. 如果所有异常的处理方式都一样，那捕获一个父类异常\n\niii. 如果异常进行了分组处理，那同一组异常之间用 \\| 隔开\n")])])]),_("p",[v._v("g.  自定义异常")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("i.  如果代码中出现了java没有提供的异常，需要自定义异常\n\nii. 如果继承的是Exception，自定义的是一个编译时异常\n\niii. 如果继承的是RuntimeException，自定义的是一个运行时异常\n")])])]),_("p",[v._v("h.  在进行方法重写的时候，子类方法抛出的异常不能超过父类方法抛出的异常的范围。注意，指的是编译时异常")]),v._v(" "),_("p",[v._v("i.  finally：无论如何都会执行一次")])])]),v._v(" "),_("h1",{attrs:{id:"collection"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#collection"}},[v._v("#")]),v._v(" Collection")]),v._v(" "),_("blockquote",[_("p",[v._v("一、概述")])]),v._v(" "),_("ol",[_("li",[_("p",[v._v("能存多个元素的容器，大小不固定")])]),v._v(" "),_("li",[_("p",[v._v("<E> 泛型。在集合中的作用是为了限定存储的元素类型。由于泛型的限定，集合中只能存储引用类型")])]),v._v(" "),_("li",[_("p",[v._v("包含的主要的子接口：List、Set、Queue")])])]),v._v(" "),_("blockquote",[_("p",[v._v("二、List - 列表")])]),v._v(" "),_("ol",[_("li",[_("p",[v._v("存储的元素是有顺序的（按照什么顺序放入就能按照什么顺序取出）")])]),v._v(" "),_("li",[_("p",[v._v("允许存储重复的元素")])]),v._v(" "),_("li",[_("p",[v._v("在List中，元素的下标从0开始")])]),v._v(" "),_("li",[_("p",[v._v("重要的实现类：ArrayList、LinkedList、Vector、Stack")])]),v._v(" "),_("li",[_("p",[v._v("ArrayList - 顺序表")]),v._v(" "),_("p",[v._v("a.  底层是基于数组来实现的")]),v._v(" "),_("p",[v._v("b.  初始容量为10")]),v._v(" "),_("p",[v._v("c.  在扩容的时候，每次在当前容量的基础上，增加一半 --- 基于右移")]),v._v(" "),_("p",[v._v("d.  线程不安全")]),v._v(" "),_("p",[v._v("e.  插入或者删除元素相对麻烦；如果查询元素，相对简单 --- 增删难，\n> 查询易")])]),v._v(" "),_("li",[_("p",[v._v("LinkedList - 链表")])])]),v._v(" "),_("p",[v._v("a.  在底层是以节点的来存储数据。当添加数据的时候，会定义一个新的节点来存储数据")]),v._v(" "),_("p",[v._v("b.  节点之间通过地址引用的方式互相关联")]),v._v(" "),_("p",[v._v("c.  在LinkedList，相对来说增删要容易一些；查询运算相对复杂 ---\n> 增删易，查询难")]),v._v(" "),_("p",[v._v("d.  线程不安全")]),v._v(" "),_("blockquote",[_("p",[v._v("三、Comparator - 比较器")])]),v._v(" "),_("ol",[_("li",[_("p",[v._v("重写compare方法，在这个方法中指定比较规则")])]),v._v(" "),_("li",[_("p",[v._v("在排序的时候根据compare方法返回值的正负来确定排序顺序")])])])])}),[],!1,null,null,null);_.default=a.exports}}]);