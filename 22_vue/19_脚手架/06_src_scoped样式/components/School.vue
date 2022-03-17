<template>
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    export default {
        name:"School",  // name要记得写，而且名字一般都是文件名
        data(){
            return{
                name:"NEAU",
                address:"harbin"
            }
        },
    }
</script>

<!--
    作用：让样式在局部生效，防止冲突
    写法：<style scoped>
-->
<style scoped>
    .demo{
        background-color: #bfa;
    }
</style>
    