<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    /* 
        一个订阅消息的库 pubsub-js
            使用前先安装 npm i pubsub-js
    */

    import pubsub from "pubsub-js"

    export default {
        name:"School",  // name要记得写，而且名字一般都是文件名
        data(){
            return{
                name:"NEAU",
                address:"harbin"
            }
        },
        mounted() {
            // this.$bus.$on("hello", (data) => {
            //     console.log("School组件收到了 " + data);
            // })

            /* 
                pubsub.subscribe(消息名, 回调函数)  订阅消息
                    回调函数里有两个参数，一个是消息名，一个是传递的参数
            */
            this.pubId = pubsub.subscribe("hello", (msgName, data) => {
                console.log("有人发布了hello消息，消息的回调函数执行了", msgName, data);

                // 注意这里的this是undefined，因为是从外面调进来的库，所以this不指向vc
                // 所以如果要是直接写回调函数，应写成箭头函数
            })
        },
        beforeDestroy() {
            // this.$bus.$off("hello");

            // 一般在销毁前都会取消订阅
            // pubsub.unsubscribe(pubId)   与定时器的写法类似   
            pubsub.unsubscribe(this.pubId);
        },
    }
</script>

<style scoped>
    .school{
        background-color: #bfa;
        padding: 5px;

    }
</style>
    