<template>
    <div>
        <button @click="isShow=!isShow">显示/隐藏(过渡)</button>
        <!-- 
            transition 标签用于设置单个元素
            transition-group 标签用于设置多个元素
                - 注意transition-group里面的元素需要设置key值
        -->
        <transition-group appear>
            <h1 v-show="isShow" key="1">你好啊</h1>
            <h1 v-show="isShow" key="2">你好啊</h1>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name:"Test",
        data(){
            return{
                isShow : true
            }
        }
    }
</script>

<style>
    h1{
        background-color: #bfa;
    }
    /* 进入的起点  离开的终点*/
    .v-enter, .v-leave-to{
        transform: translateX(-100%);
    }
    .v-enter-active, .v-leave-active{
        transition: 0.5s linear;
    }

    /* 进入的终点  离开的起点*/
    .v-enter-to, .v-leave{
        transform: translateX(0);
    }
</style>