// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
// 当请求行的url路径中是/server，就会执行回调函数，并由response做出响应
app.get('/server', (request, response)=>{
    // 设置响应头，设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    // 设置响应体
    response.send("hello Ajax");
});

// 可以接收任意类型的请求 
app.all('/server', (request, response)=>{
    // 设置响应头，设置允许跨域
    // 后面的 * 表示适配所有的网页，如果设置特定网页，代表只有这个网页可以向服务端发送请求
    // response.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5500");
    response.setHeader("Access-Control-Allow-Origin","*");
    // 设置允许自定义请求头
    response.setHeader("Access-Control-Allow-Headers","*")
    // 设置响应体
    response.send("hello Ajax POST");
});

app.all('/json-server', (request, response)=>{
    // 设置响应头，设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    // 设置允许自定义请求头
    response.setHeader("Access-Control-Allow-Headers","*")
    // 响应一个数据
    const data = {name:"syy"};
    // 设置响应体
    // send()里只能接收String和Buffer
    // 对对象进行字符串转换
    let str = JSON.stringify(data);
    response.send(data.name);
});

// 延时响应
app.get('/delay', (request, response)=>{
    // 设置响应头，设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    setTimeout(()=>{
        response.send("延迟响应");
    }, 3000)

});

// JQuery 服务
app.all('/jquery-server', (request, response)=>{
    // 设置响应头，设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    // 设置允许自定义请求头
    response.setHeader("Access-Control-Allow-Headers","*")
    // response.send("Hello JQuery AJAX");
    const data = {name:"syy"};
    response.send(JSON.stringify(data));
    
});

app.all('/axios-server', (request, response)=>{
    // 设置响应头，设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    // 设置允许自定义请求头
    response.setHeader("Access-Control-Allow-Headers","*")
    const data = {name:"syy"};
    response.send(JSON.stringify(data));
    
});

app.all('/fetch-server', (request, response)=>{
    // 设置响应头，设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    // 设置允许自定义请求头
    response.setHeader("Access-Control-Allow-Headers","*")
    const data = {name:"syy"};
    response.send(JSON.stringify(data));
    
});


app.all('/jsonp-server', (request, response)=>{
    // response.send("console.log('hello jsonp');");
    const data = {
        name :"syy"
    }
    // 将数据转化成为字符串
    let str = JSON.stringify(data);
    // 返回结果
    response.end(`handle(${str})`);
    
});

// 检查用户名是否存在
app.all('/check-username', (request, response)=>{
    // response.send("console.log('hello jsonp');");
    const data = {
        exist: 1,
        msg:'用户名已存在'
    }
    // 将数据转化成为字符串
    let str = JSON.stringify(data);
    // 返回结果
    response.end(`handle(${str})`);
    
});


app.all('/jquery-jsonp-server', (request, response)=>{
    // response.send("console.log('hello jsonp');");
    const data = {
        name:"syy",
        city:"harbin"
    }
    // 接收callback这个参数
    let cb = request.query.callback;
    // 将数据转化成为字符串
    let str = JSON.stringify(data);
    // 返回结果
    response.end(`${cb}(${str})`);
    
});


app.all('/cors-server', (request, response)=>{
    // 这样跨域请求时，不论时什么网页，不论是什么头信息，不论是什么请求方法，都可以向服务器发送请求
    response.setHeader("Access-Control-Allow-Origin","*");
    response.setHeader("Access-Control-Allow-Headers","*");
    response.setHeader("Access-Control-Allow-Method","*");
    response.send("Hello CORS");
});



// 4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动，8000端口监听中....");
});