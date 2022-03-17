/*
    1. 同步文件读取
    2. 异步文件读取
    3. 简单文件读取
        fs.readFile(path, [options], callback)
        fs.readFileSync(path, [options])
            - path  要读取的文件的路径
            - options     读取的选项
            - callback      回调函数，通过回调函数将读取到的内容返回（err, data）
                err   错误对象
                data    读取的数据，会返回一个Buffer

    4. 流式文件读取
        也适用于大文件，可以分为多次将文件读取到内存中

*/

var fs = require("fs");
fs.readFile("hello3.txt", function(err, data){
    if(!err){
        console.log(data.toString());
    }
});

// 创建一个可读流
var rs = fs.createReadStream("hello3.txt");

// 创建一个可写流
var ws = fs.createWriteStream("hello2.txt");

// 监听流的开启和关闭
rs.once("open", function(){
    console.log("可读流打开了");
});

rs.once("close", function(){
    console.log("可读流关闭了");
    // 数据读取完毕，关闭可写流
    ws.close();
});


ws.once("open", function(){
    console.log("可写流打开了");
});

ws.once("close", function(){
    console.log("可写流关闭了");
    
});

// 如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取事件
rs.on("data", function(data){
    console.log(":" + data);

    // 将读取到的数据写入到可写流中
    ws.write(data);
});
