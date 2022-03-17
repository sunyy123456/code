<template>
    <ul>
        <!-- this.$route存储着路由相关信息 -->
        <li>消息编号:{{id}}</li>
        <li>消息标题:{{title}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'Detail',
        props:['id', 'title'],
    }
</script>

<style>

</style>