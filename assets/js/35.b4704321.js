(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{806:function(v,_,a){"use strict";a.r(_);var p=a(20),t=Object(p.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("List：")]),v._v(" "),_("p",[v._v("a.  Vector：底层依靠数组来存储数据，默认初始容量是10，每次扩容是增加一倍。线程安全")]),v._v(" "),_("p",[v._v("b.  Stack：遵循后进先出的原则。继承了Vector，所以在最底层依然是依靠数组来存储数据")])]),v._v(" "),_("li",[_("p",[v._v("Queue：队列。遵循先进先出的原则")])]),v._v(" "),_("li",[_("p",[v._v("Set：")]),v._v(" "),_("p",[v._v("a.  元素是唯一的。如果放入重复的元素，则会被舍弃")]),v._v(" "),_("p",[v._v("b.  HashSet：底层依靠HashMap来完成存储")]),v._v(" "),_("p",[v._v("c.  TreeSet：底层依靠二叉树结构来存储数据。要求元素之间大小可以比较，因此元素所对应的类必须实现Comparable接口")])]),v._v(" "),_("li",[_("p",[v._v("迭代器：")]),v._v(" "),_("p",[v._v("a.  在底层是依靠指针的指向和挪动来获取数据")]),v._v(" "),_("p",[v._v("b.  最早的迭代器是Enumeration，后来被Iterator取代")]),v._v(" "),_("p",[v._v("c.  增强for循环本质上是一种迭代遍历")])]),v._v(" "),_("li",[_("p",[v._v("泛型：")]),v._v(" "),_("p",[v._v("a.  参数化类型，接口是ParameterizedType")]),v._v(" "),_("p",[v._v("b.  是JDK1.5的特性之一")]),v._v(" "),_("p",[v._v("c.  泛型的擦除：用具体类型来替换泛型的过程。发生在编译期")]),v._v(" "),_("p",[v._v("d.  泛型的上限： ? extends 类/接口")])])]),v._v(" "),_("p",[v._v("泛型的下限： ? super 类/接口")]),v._v(" "),_("h1",{attrs:{id:"map-映射"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#map-映射"}},[v._v("#")]),v._v(" Map - 映射")]),v._v(" "),_("blockquote",[_("p",[v._v("一、概述")])]),v._v(" "),_("ol",[_("li",[_("p",[v._v("将键映射到值，每一个键必须对应一个值")])]),v._v(" "),_("li",[_("p",[v._v("键是唯一的")])]),v._v(" "),_("li",[_("p",[v._v("如果存放重复的键，那么对应的值会被覆盖")])]),v._v(" "),_("li",[_("p",[v._v("映射的顶级接口Map。Map就是一个存储键值对的容器")])]),v._v(" "),_("li",[_("p",[v._v("Map不是集合，但是Map是Java集合框架的成员")])]),v._v(" "),_("li",[_("p",[v._v("Java集合框架 - Java CollectionsFramework包含了数组、集合、映射相关的类以及接口：Collection、Map、Arrays、Collections、Iterator、Comparator、Comparable")])])]),v._v(" "),_("blockquote",[_("p",[v._v("二、遍历映射")])]),v._v(" "),_("ol",[_("li",[_("p",[v._v("}先获取所有的键，再根据键获取值")])]),v._v(" "),_("li",[_("p",[v._v("直接获取所有的键值对。代表键值对的接口Entry，Entry是Map的内部接口")])])]),v._v(" "),_("blockquote",[_("p",[v._v("三、实现类")])]),v._v(" "),_("ol",[_("li",[_("p",[v._v("HashMap：")]),v._v(" "),_("p",[v._v("a.  底层依靠数组+链表结构来存储数据")]),v._v(" "),_("p",[v._v("b.  默认数组的初始容量是16，默认加载因子是0.75f")]),v._v(" "),_("p",[v._v("c.  JDK1.8中，如果单个桶中的节点个数超过8个会将链表扭转成一棵红黑树；当节点个数不足7个时候，会扭转会链表")]),v._v(" "),_("p",[v._v("d.  如果指定了初始容量n，那么2x < n <= 2x+1，实际容量就是2x+1")]),v._v(" "),_("p",[v._v("e.  当已用桶的数量/桶的总数量>加载因子的时候，会进行扩容。每次增加一倍")]),v._v(" "),_("p",[v._v("f.  在扩容的时候，要将所有的元素进行重新的分布 - rehash")]),v._v(" "),_("p",[v._v("g.  HashMap在存储元素的时候，先计算键的哈希码，然后针对哈希码进行二次运算，使结果落在某个桶上")]),v._v(" "),_("p",[v._v("h.  键值对在往桶中放的时候，会先和桶中的所有的键值对的键进行比较；如果键一致，则对应的值覆盖；如果键不一致，则插入到链表的头部")]),v._v(" "),_("p",[v._v("i.  允许null键和null值")]),v._v(" "),_("p",[v._v("j.  异步式线程不安全")])]),v._v(" "),_("li",[_("p",[v._v("Hashtable - 仅作为了解：")]),v._v(" "),_("p",[v._v("a.  Hashtable是java中最早的映射")]),v._v(" "),_("p",[v._v("b.  不允许键和值为null")]),v._v(" "),_("p",[v._v("c.  底层也是依靠数组+链表结构")]),v._v(" "),_("p",[v._v("d.  默认初始容量是11，默认加载因子是0.75f")]),v._v(" "),_("p",[v._v("e.  给定的初始容量是多少，那么就是多少")]),v._v(" "),_("p",[v._v("f.  同步式线程安全")])])]),v._v(" "),_("h2",{attrs:{id:"file"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#file"}},[v._v("#")]),v._v(" File")]),v._v(" "),_("p",[v._v("一、概述")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("代表文件或者目录（文件夹）的类")])]),v._v(" "),_("li",[_("p",[v._v("在Windows中，用\\\\间隔目录；在Linux或者是Unix中，是用/间隔目录，\njava中为了屏蔽不同操作系统的差异性，所以提供了File.separator表示间隔符")])]),v._v(" "),_("li",[_("p",[v._v("在Windows中，用;间隔不同的路径；在Linux或者是Unix中，用:间隔不同的路径，java中为了屏蔽不同操作系统的差异性，所以提供了File.pathSeparator表示间隔符")])])]),v._v(" "),_("p",[v._v("二、路径")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("绝对路径：以盘符或者是/开头的路径。在计算路径的时候和当前路径没有任何关系")])]),v._v(" "),_("li",[_("p",[v._v("相对路径：不以盘符或者是/开头的路径。在计算路径的时候需要以当前路径为基准进行计算\n--- .. 表示上一层目录")])])]),v._v(" "),_("p",[v._v("三、练习")]),v._v(" "),_("ol",[_("li",[v._v("删除目录")])]),v._v(" "),_("p",[v._v("思路：写成一个方法 ---\n判断是一个文件(isFile())还是一个目录(isDirectory())；如果是文件，直接删除(delete())；如果是目录，获取这个目录中所有的子目录和子文件(listFiles())\n--- 后续的操作和当前方法的功能一致的，直接调用当前的方法形成递归")]),v._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[v._v("统计工作空间中java文件的个数")])]),v._v(" "),_("p",[v._v("思路：写成方法 ---\n判断参数是文件还是目录；如果是文件，是否是一个java文件（先获取文件名，然后根据文件名判断）；如果是目录，获取这个目录中所有的子文件和子目录，然后形成了递归")]),v._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[_("p",[v._v("扩展：模拟操作系统的文件剪切的流程")])]),v._v(" "),_("li",[_("p",[v._v("扩展：剪切目录")])])]),v._v(" "),_("h1",{attrs:{id:"io流"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#io流"}},[v._v("#")]),v._v(" IO流")]),v._v(" "),_("blockquote",[_("p",[v._v("一、概述")])]),v._v(" "),_("ol",[_("li",[_("p",[v._v("是程序中一套用于数据传输的机制")])]),v._v(" "),_("li",[_("p",[v._v("IO流 - Input/Ouput流 - 输入输出流")])]),v._v(" "),_("li",[_("p",[v._v("输入流：数据从外部流向程序。例如读取文件")])]),v._v(" "),_("li",[_("p",[v._v("输出流：数据从程序流向外部。例如向文件中写数据")])])])])}),[],!1,null,null,null);_.default=t.exports}}]);