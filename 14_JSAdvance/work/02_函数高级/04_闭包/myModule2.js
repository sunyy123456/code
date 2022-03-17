(function(){
    // 私有数据
    var msg = "syy";
    // 操作数据的函数
    function doSomething(){
        console.log(msg.toUpperCase());
    }
    function doOtherthing(){
        console.log(msg.toLowerCase());
    }
    // 向外暴露对象（给外部使用的方法）
    window.myModule2 = {
        doSomething: doSomething,
        doOtherthing: doOtherthing
    }

})();

/*
    (function(window){
        // 私有数据
        var msg = "syy";
        // 操作数据的函数
        function doSomething(){
            console.log(msg.toUpperCase());
        }
        function doOtherthing(){
            console.log(msg.toLowerCase());
        }
        // 向外暴露对象（给外部使用的方法）
        window.myModule2 = {
            doSomething: doSomething,
            doOtherthing: doOtherthing
        }

    })(window);

    前后加 window 是为了代码压缩时，可以将 window 压缩成一个单字母（目前还不需要）
*/ 