(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{808:function(v,_,t){"use strict";t.r(_);var a=t(20),l=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),_("blockquote",[_("p",[v._v("2019年4月30日 星期二 8:59")])]),v._v(" "),_("ol",[_("li",[_("p",[v._v("网络编程")]),v._v(" "),_("p",[v._v("a.  网络模型：在现阶段重点关注的是传输层 - UDP/TCP")]),v._v(" "),_("p",[v._v("b.  IP地址 - IPv4、IPv6；域名；DNS服务器；端口")]),v._v(" "),_("p",[v._v("c.  UDP:")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("i.  特点：基于网络的流；无连接，不可靠，传输速度较快，对数据封包\n\nii. 发送端、接收端 - DatagramSocket\n")])])]),_("p",[v._v("d.  TCP:")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("i.  特点：基于网络的流；面向连接，三次握手，可靠，传输速度 较慢\n\nii. 客户端 - Socket、服务器端 - ServerSocket\n")])])])])]),v._v(" "),_("h1",{attrs:{id:"反射"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#反射"}},[v._v("#")]),v._v(" 反射")]),v._v(" "),_("blockquote",[_("p",[v._v("2019年4月30日 星期二 9:07")])]),v._v(" "),_("p",[v._v("一、概述")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("动态加载类的过程")])]),v._v(" "),_("li",[_("p",[v._v("Class - 代表字节码的类Method - 代表方法的类Field - 代表属性的类")])])]),v._v(" "),_("p",[v._v("Constructor - 代表构造方法的类Package - 代表包的类Annotation -\n代表注解的类")]),v._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[v._v("向上造型+反射实现解耦过程")])]),v._v(" "),_("p",[v._v("二、获取Class对象")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("类名.class")])]),v._v(" "),_("li",[_("p",[v._v("对象.getClass()")])]),v._v(" "),_("li",[_("p",[v._v("Class.forName(类的全路径名)")])])]),v._v(" "),_("p",[v._v("三、产生实例对象")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("如果这个类中有无参构造，则可以利用Class类中newInstance()来产生实例对象")])]),v._v(" "),_("li",[_("p",[v._v("如果这个类中没有无参构造，则需要先获取构造方法，然后执行构造方法来获取实例对象")])])]),v._v(" "),_("p",[v._v("四、修饰符")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("修饰符                      十进制值              二进制")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("public                      1                     00000001")]),v._v(" "),_("p",[v._v("private                     2                     00000010")]),v._v(" "),_("p",[v._v("protected                   4                     00000100")]),v._v(" "),_("h2",{attrs:{id:"static-8-00001000"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#static-8-00001000"}},[v._v("#")]),v._v(" static                      8                     00001000")]),v._v(" "),_("p",[v._v("+---------------------------+--------------------+---------------------+\n| final                     | 16                 | > 00010000          |\n+===========================+====================+=====================+\n| synchronized              | 32                 | > 00100000          |\n+---------------------------+--------------------+---------------------+\n| volatile                  | 64                 | > 01000000          |\n+---------------------------+--------------------+---------------------+\n| transient                 | 128                | > 10000000          |\n+---------------------------+--------------------+---------------------+\n| abstract                  | 1024               |                     |\n+---------------------------+--------------------+---------------------+")]),v._v(" "),_("p",[v._v("四、练习")]),v._v(" "),_("p",[v._v("1. 完成clone方法")]),v._v(" "),_("h1",{attrs:{id:"jdk1-5的特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jdk1-5的特性"}},[v._v("#")]),v._v(" JDK1.5的特性")]),v._v(" "),_("blockquote",[_("p",[v._v("2019年4月30日 星期二 14:01")]),v._v(" "),_("p",[v._v("一、可变参数")])]),v._v(" "),_("ol",[_("li",[_("p",[v._v("用...定义可变参数")])]),v._v(" "),_("li",[_("p",[v._v("在使用的时候可以传入任意多个参数，也可以传递同类型数组，也可以")]),v._v(" "),_("blockquote",[_("p",[v._v("不传参数")])])]),v._v(" "),_("li",[_("p",[v._v("可变参数在底层本质上是一个数组，可以通过操作数组的方式来操作可")]),v._v(" "),_("blockquote",[_("p",[v._v("变参数")])])]),v._v(" "),_("li",[_("p",[v._v("可变参数必须定义在参数列表的末尾，而且一个方法中之能定义一个可")]),v._v(" "),_("blockquote",[_("p",[v._v("变参数")])])])]),v._v(" "),_("blockquote",[_("p",[v._v("二、枚举")])]),v._v(" "),_("ol",[_("li",[_("p",[v._v("适用于取值固定并且能够一一列举的场景：星期、月份、等级...")])]),v._v(" "),_("li",[_("p",[v._v("用enum关键字来定义枚举")])]),v._v(" "),_("li",[_("p",[v._v("枚举本质上是一个类")])]),v._v(" "),_("li",[_("p",[v._v("枚举中构造方法默认私有而且只能是私有的")])]),v._v(" "),_("li",[_("p",[v._v("枚举常量之间用 , 隔开")])]),v._v(" "),_("li",[_("p",[v._v("在枚举中，枚举常量必须放在枚举的第一行")])]),v._v(" "),_("li",[_("p",[v._v("枚举中的构造方法可以重载，可以提供含参构造")])]),v._v(" "),_("li",[_("p",[v._v("枚举中可以定义其他的属性和方法")])]),v._v(" "),_("li",[_("p",[v._v("枚举中允许定义抽象方法")])]),v._v(" "),_("li",[_("p",[v._v("在Java中，枚举的顶级父类是Enum类")])]),v._v(" "),_("li",[_("p",[v._v("switch-case需要提供选项，选项的类型是byte/short/char/int，JDK1.7开始\n支持String，JDK1.5开始支持枚举")])])]),v._v(" "),_("blockquote",[_("p",[v._v("三、注解")]),v._v(" "),_("p",[v._v("概述")])]),v._v(" "),_("ol",[_("li",[_("p",[v._v("用@Interface来定义注解")])]),v._v(" "),_("li",[_("p",[v._v("在注解中定义的属性默认是使用static final修饰")])]),v._v(" "),_("li",[_("p",[v._v("在注解中，是以定义方法的形式来定义属性的")])]),v._v(" "),_("li",[_("p",[v._v("属性的类型只能是基本类型、String、Class、其他注解、枚举或者是这个")])])]),v._v(" "),_("blockquote",[_("p",[v._v("5个类型的一维数组形式")])]),v._v(" "),_("ol",{attrs:{start:"5"}},[_("li",[_("p",[v._v("如果注解中只有1个属性，并且这唯一的一个属性的名字为value，那么")]),v._v(" "),_("blockquote",[_("p",[v._v("在使用该注解的时候可以省略属性名")])])]),v._v(" "),_("li",[_("p",[v._v("注解默认是不随着类生成到文档中")])])]),v._v(" "),_("blockquote",[_("p",[v._v("元注解")])]),v._v(" "),_("ol",[_("li",[_("p",[v._v("修饰/限制注解的注解")])]),v._v(" "),_("li",[_("p",[v._v("四大元注解：")]),v._v(" "),_("p",[v._v("a.  "),_("strong",[v._v("@Target")]),v._v("：限制注解的使用目标 - 限制注解的使用范围")]),v._v(" "),_("p",[v._v("b.  "),_("strong",[v._v("@Retention")]),v._v("：限制注解的生命周期")]),v._v(" "),_("p",[v._v("c.  @Documented：限定这个注解随着类生成到文档中")]),v._v(" "),_("p",[v._v("d.  @Inhetied：限制子类的")])])]),v._v(" "),_("h1",{attrs:{id:"jdk1-8的特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jdk1-8的特性"}},[v._v("#")]),v._v(" JDK1.8的特性")]),v._v(" "),_("blockquote",[_("p",[v._v("2019年4月30日 星期二 15:48")])]),v._v(" "),_("p",[v._v("一、接口中的默认方法")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("在JDK1.8之前，接口中只能定义抽象方法；从JDK1.8开始，接口中允许定义实体方法")])]),v._v(" "),_("li",[_("p",[v._v("实体方法必须用default/static修饰")])]),v._v(" "),_("li",[_("p",[v._v("实现类可以继承接口中的默认方法，但是不能继承静态方法")])])]),v._v(" "),_("blockquote",[_("p",[v._v("二、"),_("strong",[v._v("Lambda表达式")])])]),v._v(" "),_("ol",[_("li",[_("p",[v._v("Lambda表达式是用于重写接口中的方法")])]),v._v(" "),_("li",[_("p",[v._v("要求使用Lambda表达式的接口中只能有1个抽象方法")])]),v._v(" "),_("li",[_("p",[v._v("格式：(参数列表 ) -> {方法体}")])]),v._v(" "),_("li",[_("p",[v._v("Lambda表达式不能够进行向上造型")])]),v._v(" "),_("li",[_("p",[v._v("Lambda表达式体现的逻辑的传递 - 函数式编程")])])]),v._v(" "),_("p",[v._v("三、方法的传递")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("当Lambda表达式的方法体只有1句，并且是直接操作参数，调用了已有类/已有对象身上的方法，可以利用::进行方法的传递")])]),v._v(" "),_("li",[_("p",[v._v("方法的传递可以认为是一种特殊的Lambda表达式")])])]),v._v(" "),_("p",[v._v("四、函数式接口")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("在JDK1.8中，如果接口中只有一个抽象方法，那么可以将这个接口定义为一个函数式接口，用@FunctionalInterface来限定")])]),v._v(" "),_("li",[_("p",[v._v("Runnable/Comparator/FileFilter/FilenameFilter在JDK1.8中都被限定为了函数式接口")])]),v._v(" "),_("li",[_("p",[v._v("在JDK1.8中，新提供了四个函数式接口：")])])]),v._v(" "),_("p",[v._v("Predicate、Function、Supplier、Consumer")]),v._v(" "),_("p",[v._v("五、Stream - 并行流")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("是JDK1.8出现的一个新的接口，不是流")])]),v._v(" "),_("li",[_("p",[v._v("针对集合进行操作的并行流")])])]),v._v(" "),_("p",[v._v("六、时间包")]),v._v(" "),_("p",[v._v("1. 在JDK1.8中将时间体系进行了新的划分，形成了一个新的包 - java.time")])])}),[],!1,null,null,null);_.default=l.exports}}]);