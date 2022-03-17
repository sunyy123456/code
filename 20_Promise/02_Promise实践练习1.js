const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

// 回调函数形式
// fs.readFile("./hello.txt", (err, data) => {
//     if(err) throw err; // 如果有错误就抛出错误， 之前是使用if(!err){}      
//     // if(!err)
//     console.log(data.toString());
// });


// 使用Promise
let p = new Promise((resolve, reject) => {
    fs.readFile("./hello.txt", (err, data) => {
        // 如果出错（就表示失败）
        if(err) reject(err);
        else resolve(data);
    });
})

p.then((value) => {
    console.log(value.toString());
}, (reason) => {
    throw reason;
})
