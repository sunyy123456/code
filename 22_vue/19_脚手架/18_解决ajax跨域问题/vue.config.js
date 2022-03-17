module.exports = {
    pages:{
        index:{
            // 入口
            entry:"src/main.js",
        },
    },
    lintOnSave: false, //关闭语法检查
    // 开启代理服务器（方式一）
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // },

    // 开启代理服务器（方式二）
    devServer: {
        proxy: {
            //代表请求地址中包含前缀/api的就请求代理服务器 
          '/api': {
            target: 'http://localhost:5000', // 代理目标的基础路径（只写到端口号）
            pathRewrite:{'^/api': ''}, // 为了防止将/api传给5000端口的服务器，需要将路径重写
            ws: true,  // 用于支持websocket 
            changeOrigin: true  // 用于控制请求头中的host值
          },
          '/demo': {
            target: 'http://localhost:5001',
            pathRewrite:{'^/demo': ''}, // 为了防止将/api传给5000端口的服务器，需要将路径重写
            ws: true,  // 用于支持websocket 
            changeOrigin: true  // 用于控制请求头中的host值
          },
        }
      }
}