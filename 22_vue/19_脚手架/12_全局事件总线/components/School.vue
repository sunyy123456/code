<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    export default {
        name:"School",  // name要记得写，而且名字一般都是文件名
        data(){
            return{
                name:"NEAU",
                address:"harbin"
            }
        },
        mounted() {
            this.$bus.$on("hello", (data) => {
                console.log("School组件收到了 " + data);
            })
        },
        beforeDestroy() {
            // 一般使用全局事件总线时，都要写在组件销毁前销毁绑定的自定义事件
            // 但是注意一定不要写this.$bus.off() 这样会将$bus里面的所有自定义事件均销毁
            this.$bus.$off("hello");
        },
    }
</script>

<style scoped>
    .school{
        background-color: #bfa;
        padding: 5px;

    }
</style>
    