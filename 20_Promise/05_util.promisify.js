/*
    util.promisify
    采用遵循常见的错误优先的回调风格的函数（也就是将 (err, value) => ... 回调作为最后一个参数），
    并返回一个返回 promise 的版本。

*/ 

// 相当于是将原来的function转变成promise的方式

// 引入util模块
let util = require("util");

// 引入fs模块
const fs = require("fs");
// 返回一个新的函数
let mineReadFile = util.promisify(fs.readFile); 
// 原本fs.readFile是一个函数，经过util.promisify，他将返回的是一个Promise，也就是mineReadFile是一个Pormise

mineReadFile('./hello.txt').then((value) => {
    console.log(value.toString());
});