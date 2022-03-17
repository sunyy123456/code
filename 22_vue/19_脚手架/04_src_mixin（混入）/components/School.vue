<template>
    <div>
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    import {mixin1, mixin2} from "../mixin.js"

    export default {
        name:"School",  // name要记得写，而且名字一般都是文件名
        data(){
            return{
                name:"NEAU",
                address:"harbin"
            }
        },
        // 局部混入
        mixins:[mixin1, mixin2]
    }
</script>
