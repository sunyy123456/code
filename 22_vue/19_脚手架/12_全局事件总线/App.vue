<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <School/>
        <Student/>
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
    }
</script>

<style>
    .app{
        background-color: blue;
        padding: 5px;
    }
</style>