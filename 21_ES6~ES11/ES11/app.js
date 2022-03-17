let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    // 动态import
    // import(地址)  返回的是一个Promise
    import("./hello").then(module => {
        // 导入文件中的那个函数就在module
        // module.hello();
        console.log(module);
    });
});