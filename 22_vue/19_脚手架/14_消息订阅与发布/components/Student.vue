<template>
    <div class="student">
        <h2>学生名称：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName">将学生名传递给School组件</button>
    </div>
</template>

<script>
    /*
        需要数据的地方 订阅消息
        提供数据的地方 发布消息
    */


    /* 
        一个订阅消息的库 pubsub-js
            使用前先安装 npm i pubsub-js
    */


    import pubsub from "pubsub-js"
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
                // this.$bus.$emit("hello", this.name);

                /* 
                    pubsub.publish(消息名, 传递的参数)   发布消息
                
                */
                pubsub.publish("hello", 666, 888);
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
