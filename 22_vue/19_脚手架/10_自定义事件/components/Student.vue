<template>
    <div class="student">
        <h2>学生名称：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName" >将学生名传递给app组件</button>
        <button @click="unbind">解绑syy事件</button>
        <button @click="death">销毁当前Student组件的实例</button>
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
                // 触发Student组件实例对象身上的syy事件

                // $emit 用于触发事件  this.$emit(事件名，参数...)
                this.$emit("syy", this.name, 22, 11, 33);
                // this.$emit("demo");
            },
            unbind(){
                // $off 用于解绑事件   this.$off(事件名)
                this.$off("syy");  // 解绑一个自定义事件
                // this.$off(["syy", "demo"]);  //解绑多个自定义事件（把需要解绑的事件封装到一个数组中）
                // this.$off(); //解绑所有的自定义事件
            },
            death(){
                this.$destroy();  //销毁了当前Student组件的实例，销毁后Student实例的所有的自定义事件全都不奏效
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
