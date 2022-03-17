(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _m = require("./m1.js");

var m1 = _interopRequireWildcard(_m);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(m1);
// 模块引入
},{"./m1.js":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
