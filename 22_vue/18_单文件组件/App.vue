<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    import Student from "./Student.vue"
    import School from "./School.vue"

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