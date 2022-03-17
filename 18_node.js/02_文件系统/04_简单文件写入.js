/*
    简单文件写入
        fs.writeFile(file, data, [option], callback)
        fs.writeFileSync(file, data, [option])
            - file  要操作的文件的路径(可以是相对路径，也可以是绝对路径)
            - data  要写入的数据
            - option    选项，可以对写入进行一些设置
                r  只读
                w  可写
                a  追加
            - callback  当写入完成以后执行的函数
*/
let fs = require("fs");

/*
    路径也可以写绝对路径 C:\\Users\\26958\\Desktop\\前端学习\\code（字符串中\\代表一个\）
        或 C:/Users/26958/Desktop/前端学习/code
*/
fs.writeFile("hello3.txt", "这是简单写入的内容", function(err){
    if(!err){
        console.log("写入成功！！");
    }else{
        console.log(err);
    }
});