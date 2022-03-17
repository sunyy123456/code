<template>
    <div>
        <button @click="isShow=!isShow">显示/隐藏(动画)</button>
        <!-- 如果transition没有设置name，则后面css样式中，动画的执行的名称就为 v-enter-active -->
        <!-- 如果设置了 name= "xxx"，则后面使用的就是 xxx-enter-active  -->
        <!-- 设置appear可以让网页一上来就执行动画 （相当于 :appear="true"） -->
        <transition appear>
            <h1 v-show="isShow">你好啊</h1>
        </transition>
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
    .v-enter-active{
        animation: syy 0.5s linear;
    }
    .v-leave-active{
        animation: syy 0.5s linear reverse;
    }


    @keyframes syy {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>