## 全局设置
```bash
#设置全局用户名 (提交代码的作者名称)
git config --global user.name "Dominick Li"
#设置全局邮箱号
git config --global user.email "dominick_li@163.com"
```

## 局部设置
只对当前git文件有效
```bash
#设置全局用户名 (提交代码的作者名称)
git config  user.name "Dominick Li"
#设置全局邮箱号
git config  user.email "dominick_li@163.com"
```

# 版本信息
## 查看最近提交的版本信息
```bash
git log
```
## 回滚版本
HEAD表示当前版本,^表示上一个版本 ^^表示上上个版本
```bash
git reset --hard HEAD^
```
或者先查到要回滚的版本id,然后回滚到指定的版本
[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-rIlLHVN7-1654135270502)(https://note.youdao.com/yws/res/16414/12DB1B52A2C64E04BA12028221E5836D)]
commit后面的就是版本的唯一id

```bash
git reset --hard 4adbbe20d31f26686b0d19dd9399650220336115 
```

# 初始化仓库
## 创建一个空的git仓库
```bash
cd d:/test
git init
```
## 与远程仓库建立关联
```bash
git remote add origin http://xxxxx:xxxx/xxx/test.git
```

# 提交代码命令

## 添加文件到临时库
```bash
git add  (文件名 | 目录名)
```

## 把临时库的文件同步到本地仓库
```bash
git commit -m '修改xxx接口'
```


## 把本地仓库代码提交到远程仓库
```bash
#第1次提交代码需要使用 -u 指定分支
git push -u origin master
# 以后提交只需下面命令即可
git push 
#查看提交记录
git log   /   git show
```

# 其它常用的命令

## 下载远程仓库代码
```bash
git clone  http://xxxxx:xxxx/xxx/test.git
```

## 下载远程仓库分支代码

```bash
git clone -b 分支名  http://xxxxx:xxxx/xxx/test.git
```

## 在已有的代码上拉取最新的代码

```bash
git pull
```
## 代码冲突导致无法拉取提交，使用组合命令
```
#先撤销提交的代码
git stath
#拉取最新代码
git pull
#回滚撤销操作
git stash pop
```

## 查看文件状态和内容
```bash
git status
cat name //查看文件内容
git diff name //查看文件提交前后的内容变化
```
[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-Plpgzbze-1654135270504)(https://note.youdao.com/yws/res/16447/95CC43567ADE403587C9F8A4775890A5)]

- 红色的代表还不是临时文件
- 绿色的代表是临时文件 (通过git add 命令添加的都是临时文件)


## 查看当前分支
```bash
git remote -v
```

## 修改远程仓库地址
```
git remote set-url origin http://222.128.10.62:6666/etoplive/financial
```

# 分支操作

## 切换分支
```bash
git checkout 分支名
```

## 查看当前是哪个分支
```bash
git branch
```

## 创建分支
```bash
git checkout -b cloud //删除本地分支
#提交分支到远程仓库
git push --set-upstream origin cloud
```

## 删除分支
```bash
#需要先切换到master分支
git checkout master

# 删除分支
git push origin --delete dev
```

## 合并分支
在主分支使用命令，如v1.0是主分支,v1.1是要被合并的分支 git 
```bash
git checkout v1.0
git merge v1.1
```

## 合并某分支的某个commit记录
例如要将A分支的一个commit合并到B分支
```bash
#1.首先切换到A分支 
git checkout A 
#2.找出要合并的commit ID :
git log 
#例如0128660c08e325d410cb845616af355c0c19c6fe 
#3.然后切换到B分支上
git checkout B 
#4.然后就将A分支的某个commit合并到了B分支了
git cherry-pick 0128660c08e325d410cb845616af355c0c19c6fe 
```

# git下载代码常见异常
## 缓存区溢出
```
git config http.postBuffer 524288000
```

## 网络下载速度慢导致超时
```
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999
```

# gitlab服务器示例代码
## 配置
```
#Git global setup
git config --global user.name "用户名"
git config --global user.email "邮箱"
```

## 创建一个新的仓库
```
#Create a new repository
git clone http://xxxx:xx/test/test.git
cd test
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```
## 提交代码到已经存在的目录
```
#Push an existing folder
cd existing_folder
git init
git remote add origin  git地址
git add .
git commit -m "Initial commit"
git push -u origin master
```

# 删除tag标签
## 删除本地tag：
git tag -d v2.0.0
## 删除远程tag：
git push origin :refs/tags/v2.0.0