fs = require("fs");

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
});

ws.once("open", function(){
    console.log("可写流打开了");
});

ws.once("close", function(){
    console.log("可写流关闭了");
    
});

// pipe可以将可读流中的内容，直接输出到可写流中
rs.pipe(ws);
