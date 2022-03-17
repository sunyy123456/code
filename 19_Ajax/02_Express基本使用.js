// 首先在终端窗口输入 npm init --yes    初始化
// 之后输入 npm i express


// 1. 引入express
const express = require('express');

// 2. 创建应用对象(创建网站服务器)
const app = express();

// 3. 创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/', (request, response)=>{
    // 设置响应
    // 1. send 方法内部会检测响应内容的类型
    // 2. send 方法会自动设置 http 状态码
    // 3. send 方法还会帮我们自动设置响应的内容类型以及编码
    response.send("hello express");
});

// 4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动，8000端口监听中....");
});