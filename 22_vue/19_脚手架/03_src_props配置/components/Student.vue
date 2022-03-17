<template>
    <div>
        <h2>{{msg}}</h2>
        <h2>学生名称：{{name}}</h2>
        <h2>学生性别：{{gender}}</h2>
        <h2>学生年龄：{{myAge}}</h2>
        <button @click="updateAge">点我年龄+1</button>
    </div>
</template>

<script>
    export default {
        name:"Student",  // name要记得写，而且名字一般都是文件名
        data(){
            return{
                msg:"我是学生",
                // props 的优先级比 data 高，所以会先得到age，再赋值给myAge
                myAge: this.age
            }
        },
        
        // 简单声明接收
        // props:["name", "gender", "age"],

        // 接收的同时对数据进行类型限制
        // props:{
        //     name: String,
        //     gender: String,
        //     age: Number
        // },

        // 接收的同时对数据：进行类型限制、默认值的指定、必要性的限制
        props:{
            name:{
                type:String,  // name的类型是字符串
                required:true // name是必要的（必传的）
            },
            age:{
                type:Number,
                default: 11  // 默认值
            },
            gender:{
                type:String,
                required:true
            }
        },
        methods: {
            updateAge(){
                this.myAge++;
            }
        },
    }
</script>
