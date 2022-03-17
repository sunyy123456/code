module.exports = {
    // 关闭eslint
    lintOnSave: false,
    // 代理跨域
    devServer: {
        proxy:{
            '/api': {
                target: 'http://39.98.123.211',//代理地址，这里设置的地址会代替axios中设置的baseURL
                // pathRewrite: {'/api': ''},
            },
        }
    }
}