<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link class="list-group-item " active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link class="list-group-item " active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>

            <!--  
                keep-alive让不展示的路由组件保持挂载，不被销毁
                    include里面写保持挂载的组件名（注意是组件名！！！）,多个组件用逗号连接
                    如果不写include，默认是里面的组件均保持挂载
                记得keep-alive要包裹在展示组件的router-view外面，不是包裹在整个组件外面
            -->
            <!-- 缓存多个 -->
            <!-- <keep-alive :include="['News', 'Message']"> -->
            <!-- 缓存一个 -->
            <keep-alive include="News">
                <router-view></router-view>
            </keep-alive>
        </div> 
    </div>
</template>

<script>
    
    export default {
        name: 'Home',
    }
</script>

<style>

</style>