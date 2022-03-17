<template>
    <div>
        <h2 ref="title">Hello</h2>
        <button @click="showDOM" ref="btn">获取上方的DOM元素</button>
        <School ref="sch"/>
    </div>
</template>

<script>
    /*
        1. 被用来给元素或子组件注册引用信息（id的替代者）
        2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上的是组件实例对象（vc）
        3. 使用方式：
            打标识：<h1 ref="xxx">......</h1> 或 <School ref="xxx"></School>
            获取：this.$refs.xxx
    */
    import School from "./components/School.vue"

    export default {
        name:"App",  // name要记得写，而且名字一般都是文件名
        components:{
            School,
        },
        methods: {
            showDOM(){
                console.log(this.$refs.title); // 真实DOM元素
                console.log(this.$refs.btn); // 真实DOM元素
                console.log(this.$refs.sch); // School组件的实例对象（vc）
            }
        },
    }
</script>

<style>
</style>