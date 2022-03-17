<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"/>

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法：使用@或v-on） -->
        <Student v-on:syy="getStudentName" @demo="m" @click.native="m2"/>

        <!-- 当给组件绑定原生事件时，需要添加native，否则会被当做自定义事件处理-->

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法：使用ref） -->
        <!-- <Student ref="student" @click.native="m2"/> -->

    </div>
</template>

<script>
    import Student from "./components/Student.vue"
    import School from "./components/School.vue"

    export default {
        name:"App",  // name要记得写，而且名字一般都是文件名
        components:{
            Student,
            School
        },
        data(){
            return{
                msg:"hello"
            }
        },
        methods: {
            getSchoolName(name){
                console.log("app组件收到了学校名称：", name);
            },
            getStudentName(name, ...params){
                console.log("app组件收到了学生名称：", name, params);
            },
            m(){
                console.log("demo事件被触发！！");
            },
            m2(){
                alert(1);
            }
        },
        mounted() {
            // $on: 当...时，即绑定事件
            // 使用ref方法可以延时绑定事件
            // this.$refs.student.$on("syy", this.getStudentName);
        },
    }
</script>

<style>
    .app{
        background-color: blue;
        padding: 5px;
    }
</style>