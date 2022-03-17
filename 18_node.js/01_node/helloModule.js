/* 
    exports 与 module.exports
        - 通过exports只能用.的形式来向外暴露内部变量
            exports.xxx = xxx

        - 而module.exports既可以通过.的方式，又可以直接赋值
            module.exports.xxx = xxx
            module.exports = {}


    原理：  （obj就是mudule，a就是exports） 
        var obj = {a:{}};
        var a = obj.a;
        a.xxx = yyy;  // 这样obj.a.xxx = yyy是成立的
        a = {xxx:yyy};  // 此时obj.a.xxx不是yyy，相当于a指向一个新的对象了
*/


// exports = {   // 这种就不能向外暴露变量
//     name:"syy",
//     age:20,
//     gender:"female"
// };
module.exports = {
    name:"syy",
    age:20,
    gender:"female"
};