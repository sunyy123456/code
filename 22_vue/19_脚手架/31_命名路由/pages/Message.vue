<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 路由的query参数与ajax中的query一样,?连接参数,参数与参数之间用&连接 -->
                <!-- 跳转路由并携带query参数,to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

                <!-- 跳转路由并携带query参数,to的对象写法 -->
                <router-link :to="{
                    //path: '/home/message/detail',
                    // 可以使用name代替路径前往所对应的路由
                    name: 'detail',
                    query: {
                        id: m.id,
                        title: m.title
                    }
                }">
                    {{m.title}}
                </router-link>&nbsp;&nbsp;
            </li>
            <router-view></router-view>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'Message',
        data(){
            return{
                messageList:[
                    {id:'001', title:'消息001'},
                    {id:'002', title:'消息002'},
                    {id:'003', title:'消息003'},
                ]
            }
        }
    }
</script>

<style>

</style>