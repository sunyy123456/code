<template>
    <!-- 快捷键快速显示出三个部分  <v -->
    <div>
        <img src="./assets/logo.png" alt="logo">
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    import Student from "./components/School.vue"
    import School from "./components/Student.vue"

    export default {
        name:"App",  // name要记得写，而且名字一般都是文件名
        components:{
            School,
            Student
        }
    }
</script>

<style>
</style>