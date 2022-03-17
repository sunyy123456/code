/*
    1. 下载安装Mongoose
            npm i mongoose --save

            在控制台输入 【cd 要安装的所在位置】
            npm i mongoose --save
            例如：cd 17_Mongoose
                 npm i mongoose --save

    2. 在项目中引入mongoose
        var mongoose = require("mongoose");

    3. 连接MongoDB数据库
        mongoose.connect('mongodb://数据库的ip地址：端口号/数据库名');
            - 数据库的ip地址为 127.0.0.1 或 localhost
            - 如果端口号是默认端口号（27017）则可以省略不写
            - 数据库名可以写还没创建的，之后操作文档时就会自动创建该数据库

    4. 监听MongoDB数据库的连接状态（不是必要操作）
        - 在mongoose对象中，有一个属性叫做connection，该对象表示的就是数据库连接
            通过监听该对象的状态，可以来监听数据库的连接与断开

        数据库连接成功的事件
        mongoose.connection.once("open", function(){});

        数据库断开的事件
        mongoose.connection.once("close", function(){});

    5. 断开数据库连接（一般不需要调用）
        - MongoDB数据库中，一般情况下，只需要连接一次，连接一次以后，除非项目停止服务器关闭，否则连接一般不会断开
            mongoose.disconnect()


*/

// 引入
var mongoose = require("mongoose");

// 连接数据库
mongoose.connect("mongodb://localhost/mongoose_test");

mongoose.connection.once("open", function(){
    console.log("数据库连接成功！");
});
mongoose.connection.once("close", function(){
    console.log("数据库已断开");
});