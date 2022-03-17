<template>
    <div>
        <h2 class="demo">学生名称：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
    export default {
        name:"Student",  // name要记得写，而且名字一般都是文件名
        data(){
            return{
                name:"张三",
                age:18
            }
        },
    }
</script>

<style>
    .demo{
        background-color: #bfa;
    }
</style>