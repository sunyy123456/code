/* 
    通过npm下载的包都放到node_modules文件夹中
        可以通过npm下载的包，直接通过包名引入即可

    node在使用模块名字来引入模块时，它会首先在当前目录的node_modules中寻找是否含有该模块
        如果有则直接使用，如果没有则取上一级目录的node_modules中寻找
        如果有就直接使用，如果没有则再去上一级目录的node_modules中寻找，直到找到为止
        若没有找到则报错
*/
var math = require("math");
console.log(math.add(1, 2));