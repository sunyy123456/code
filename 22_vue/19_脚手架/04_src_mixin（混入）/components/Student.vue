<template>
    <div>
        <h2 @click="showName">学生名称：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
    import {mixin1, mixin2} from "../mixin.js"

    export default {    
        name:"Student",  // name要记得写，而且名字一般都是文件名
        data(){
            return{
                name:"syy",
                age:20,
                x:200  // 如果和混入中的属性一致，则属性值按照data中的来
            }
        },
        mounted(){
            console.log("你好");
        },

        // 局部混入
        mixins:[mixin1, mixin2]
        
    }
</script>
