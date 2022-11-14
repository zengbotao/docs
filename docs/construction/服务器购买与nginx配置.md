## [服务器购买](https://blog.csdn.net/qq_42521751/article/details/126542541)

## 工具MobaXterm
```
yum -y install lrzsz 
便于文件传输

yum install -y unzip zip
解压

wget https://nodejs.org/dist/v14.15.4/node-v14.15.4-linux-x64.tar.xz
tar -xf node-v14.15.4-linux-x64.tar.xz
mv node-v14.15.4-linux-x64 /usr/local/node
node安装/解压并放入指定目录

npm config set registry https://registry.npm.taobao.org
npm config get registry
npm install -g cnpm --registry=https://registry.npm.taobao.org
cd /usr/bin
ln -s /usr/local/node/bin/cnpm cnpm

服务器域名(云服务器ip+你网页的名称)
```
## nginx
```
wget http://nginx.org/download/nginx-1.16.1.tar.gz
# 如果之前没有安装openssl,需要在执行./configure命令之前安装
yum -y install openssl openssl-devel make zlib zlib-devel gcc gcc-c++ libtool    pcre pcre-devel
tar -zxvf nginx-1.16.1.tar.gz
cd nginx-1.16.1/
yum -y install pcre-devel
# 需要https、stream指令 
./configure  --with-http_ssl_module --with-stream
make && make install
# 不同centos 系统指令有差别
/sbin/iptables -I INPUT  -p tcp --dport 80 -j ACCEPT
# 端口被占用就干掉
fuser -k 80/tcp
# nginx配置：https://blog.csdn.net/qq_41070393/article/details/

cd /usr/local/nginx/sbin
# 默认配置文件启动
./nginx
# 如果启动后不报错也没有页面,根据修改：https://blog.csdn.net/yujing1314/article/details/105225325

# 查看nginx进程
ps -ef | grep nginx

# 指定配置文件启动
./nginx -c  /usr/local/nginx/conf/nginx.conf

cd /usr/local/nginx/sbin
# 停止指令
./nginx -s stop
```
### nginx.conf修改
```js
user  root;

.........
location / {
            root   /root/app/dist/;
            index  index.html index.htm;
        }
```

## [服务器与域名绑定](https://blog.csdn.net/Ever_____/article/details/122349721)

## [ssL证书部署](https://blog.csdn.net/qq_42059717/article/details/122704602)

## [网站备案](https://help.aliyun.com/document_detail/36924.html?spm=a2c4e.11153940.0.0.6e23171721AQdY&source=5176.11533457&userCode=2rbhf9dd&type=copy)