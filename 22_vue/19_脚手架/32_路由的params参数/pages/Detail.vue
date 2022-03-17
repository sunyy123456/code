<template>
    <ul>
        <!-- this.$route存储着路由相关信息 -->
        <li>消息编号:{{$route.params.id}}</li>
        <li>消息标题:{{$route.params.title}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'Detail',
    }
</script>

<style>

</style>