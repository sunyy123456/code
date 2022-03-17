<template>
    <div class="student">
        <h2>学生名称：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName">将学生名传递给School组件</button>
    </div>
</template>

<script>
    export default {    
        name:"Student",  // name要记得写，而且名字一般都是文件名
        data(){
            return{
                name:"syy",
                age:20,
            }
        },
        methods: {
            sendStudentName(){
                this.$bus.$emit("hello", this.name);
            }
        },

    }
</script>

<style scoped>
    .student{
        background-color: red;
        margin-top: 30px;
    }
</style>
