(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{791:function(t,n,s){"use strict";s.r(n);var a=s(20),e=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"服务器购买"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务器购买"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://blog.csdn.net/qq_42521751/article/details/126542541",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务器购买"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"工具mobaxterm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工具mobaxterm"}},[t._v("#")]),t._v(" 工具MobaXterm")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("yum -y install lrzsz \n便于文件传输\n\nyum install -y unzip zip\n解压\n\nwget https://nodejs.org/dist/v14.15.4/node-v14.15.4-linux-x64.tar.xz\ntar -xf node-v14.15.4-linux-x64.tar.xz\nmv node-v14.15.4-linux-x64 /usr/local/node\nnode安装/解压并放入指定目录\n\nnpm config set registry https://registry.npm.taobao.org\nnpm config get registry\nnpm install -g cnpm --registry=https://registry.npm.taobao.org\ncd /usr/bin\nln -s /usr/local/node/bin/cnpm cnpm\n\n服务器域名(云服务器ip+你网页的名称)\n")])])]),n("h2",{attrs:{id:"nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" nginx")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("wget http://nginx.org/download/nginx-1.16.1.tar.gz\n# 如果之前没有安装openssl,需要在执行./configure命令之前安装\nyum -y install openssl openssl-devel make zlib zlib-devel gcc gcc-c++ libtool    pcre pcre-devel\ntar -zxvf nginx-1.16.1.tar.gz\ncd nginx-1.16.1/\nyum -y install pcre-devel\n# 需要https、stream指令 \n./configure  --with-http_ssl_module --with-stream\nmake && make install\n# 不同centos 系统指令有差别\n/sbin/iptables -I INPUT  -p tcp --dport 80 -j ACCEPT\n# 端口被占用就干掉\nfuser -k 80/tcp\n# nginx配置：https://blog.csdn.net/qq_41070393/article/details/\n\ncd /usr/local/nginx/sbin\n# 默认配置文件启动\n./nginx\n# 如果启动后不报错也没有页面,根据修改：https://blog.csdn.net/yujing1314/article/details/105225325\n\n# 查看nginx进程\nps -ef | grep nginx\n\n# 指定配置文件启动\n./nginx -c  /usr/local/nginx/conf/nginx.conf\n\ncd /usr/local/nginx/sbin\n# 停止指令\n./nginx -s stop\n")])])]),n("h3",{attrs:{id:"nginx-conf修改"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-conf修改"}},[t._v("#")]),t._v(" nginx.conf修改")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("user  root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\nlocation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            root   "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("root"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("app"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            index  index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"服务器与域名绑定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务器与域名绑定"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://blog.csdn.net/Ever_____/article/details/122349721",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务器与域名绑定"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"ssl证书部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ssl证书部署"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://blog.csdn.net/qq_42059717/article/details/122704602",target:"_blank",rel:"noopener noreferrer"}},[t._v("ssL证书部署"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"网站备案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网站备案"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://help.aliyun.com/document_detail/36924.html?spm=a2c4e.11153940.0.0.6e23171721AQdY&source=5176.11533457&userCode=2rbhf9dd&type=copy",target:"_blank",rel:"noopener noreferrer"}},[t._v("网站备案"),n("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);