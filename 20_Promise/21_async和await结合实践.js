const fs = require("fs");
const { resolve } = require("path");

// 方法一：使用回调函数
// fs.readFile('./resource/1.txt', (err, data1) => {
//     if(err) throw err;
//     fs.readFile('./resource/2.txt', (err, data2) => {
//         if(err) throw err;
//         fs.readFile('./resource/3.txt', (err, data3) => {
//             if(err) throw err;
//             console.log(data1 + data2 + data3);
//         })
//     })
// })

// 方法二：使用Promise
// let p = new Promise((resolve, reject) => {
//     fs.readFile("./resource/1.txt", (err, data) => {
//         if(err){
//             reject(err);
//         }else{
//             resolve(data);
//         }
//     })
// });
// let result = p.then(value => {
//     return new Promise((resolve, reject) => {
//         fs.readFile("./resource/2.txt", (err, data) => {
//             resolve([value, data]);
//         })
//     })
// }, reason => {
//     console.log(reason);
// })

// result.then(value => {
//     return new Promise((resolve, reject) => {
//         fs.readFile("./resource/3.txt", (err, data) => {
//             value.push(data);
//             resolve(value);
//         })
//     });
// }, reason => {
//     console.log(reason);
// }).then(value => {
//     console.log(value.join("\n"));
// }, reason => {
//     console.warn(reason);
// });





// 方法三：使用async和await
// const util = require("util");
// const minReadFile = util.promisify(fs.readFile);
// async function main(){
//     try {
//         // 读取第一个文件的内容
//         let data1 = await minReadFile('./resource/1.txt');
//         let data2 = await minReadFile('./resource/2.txt');
//         let data3 = await minReadFile('./resource/3.txt');
//         console.log(data1 + data2 + data3);
//     } catch (error) {
//         console.log(error);
//     }
// }

// main();