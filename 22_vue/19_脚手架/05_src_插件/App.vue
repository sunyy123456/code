<template>
    <div>
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
    }
</script>

<style>
</style>