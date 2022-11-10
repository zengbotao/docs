function getList(catalog){
    //commonJs http://javascript.ruanyifeng.com/nodejs/module.html#toc13
    //es6 https://es6.ruanyifeng.com/#docs/async
    // path的常见语法 https://blog.csdn.net/weixin_43285360/article/details/121478210
    // fs https://blog.csdn.net/Piconjo/article/details/105597723
    var fs = require('fs');
    var path=require('path');
    var filePath = path.resolve(__dirname,catalog)
    let fileList=fs.readdirSync(filePath) //必须要同步读取目录
    let data=fileList.map((item)=>{
        let title=path.basename(item,'.md')
        let paths=`/${catalog}/`+title+'.html'
        return {
            title:title,
            path:paths
        }})
    // console.log(data,filePath)
    return data
}
//只能用module.exports
module.exports = getList