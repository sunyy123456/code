/**
 *  在node中有一个全局对象global，它的作用与网页中的window类似
 *      在全局中创建的变量都会作为global的属性保存
 *      在全局中创建的函数都会作为global的方法保存
 *      
 *  当node在执行模块中的代码时，它会首先在代码的最顶端，添加如下代码：
 *      function (exports, require, module, __filename, __dirname) {
 * 
 *  在代码的最底部，添加如下代码
 *      }
 * 
 *  实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递了5个实参
 *      exports 
 *          - 该对象用来将变量或函数暴露到外部
 *      
 *      require
 *          - 函数，用来引入外部的模块
 * 
 *      module
 *          - module代表的是当前模块本身
 *          - exports就是module的属性
 * 
 *      __filename
 *          c:\Users\26958\Desktop\前端学习\code\18_node.js\01_node\04_module.js
 *          - 当前模块的完整路径
 *      __dirname
 *          c:\Users\26958\Desktop\前端学习\code\18_node.js\01_node
 *          - 当前模块所在文件夹的完整路径
 *  
 */

console.log(global.a);

/**
 *      arguments.callee
 *          - 这个属性保存的是当前执行的函数对象
 * 
 */
// console.log(arguments.callee + '');  // 相当于将arguments.callee转换为String，以便输出

console.log(module.exports == exports);  // true

console.log(__filename);
console.log(__dirname);