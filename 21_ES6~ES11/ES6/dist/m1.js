"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.school = school;
// 分别暴露

var name = exports.name = "syy";
function school() {
    console.log("NEAU");
}

// 统一暴露

// let name = "syy";
// function school(){
//     console.log("NEAU");
// }
// // export{} 里面写下要暴露的属性和方法
// export{name, school};


// 默认暴露

// export default{} 里面写下要暴露的属性和方法

// export default{
//     name:"syy",
//     school:function(){
//         console.log("NEAU");
//     }
// }