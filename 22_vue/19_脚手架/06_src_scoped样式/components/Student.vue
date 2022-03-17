<template>
    <div class="demo">
        <h2 class="name">学生名称：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
    export default {    
        name:"Student",  // name要记得写，而且名字一般都是文件名
        data(){
            return{
                name:"syy",
                age:20,
            }
        },

    }
</script>

<!--
    <style lang="less" scoped>
        // 如果没有less-loader是不能解析less的
        // npm view less-loader versions 查看less-loader有什么版本的
        // 因为脚手架安装的webpack版本不是最新，所以安装最新的less-loader是会出问题的
        // 建议安装7或8版本的less-loader
        // npm i less-loader@7   安装7版本的less-loader
        .demo{
            background-color: red;
            .name{
                font-size: 40px;
            }
        }
    </style>
-->
<style scoped>
    .demo{
        background-color: red;
    }
</style>
