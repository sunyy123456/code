<template>
    <div>
        <button @click="isShow=!isShow">显示/隐藏(集成第三方动画)</button>
        <!-- 
            enter-active-class
                设置进入时的动画的类名
            leave-active-class
                设置离开时的动画的类名
                    类名在 https://animate.style/ 找
        -->
        <transition-group 
            appear
            name="animate__animated animate__bounce" 
            enter-active-class="animate__swing"
            leave-active-class="animate__rollOut"
        >
            <h1 v-show="isShow" key="1">你好啊</h1>
            <h1 v-show="isShow" key="2">你好啊</h1>
        </transition-group>
    </div>
</template>

<script>
    /* 
        https://animate.style/      根据该网站集成动画（这仅仅是一个库，还有很多实现集成动画的库）
            首先安装  npm install animate.css --save
            之后引入  import "animate.css"
                因为引入的是css文件，所以直接 import xxx
            将template的name属性设置为 animate__animated animate__bounce
    */
    import "animate.css"
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
</style>