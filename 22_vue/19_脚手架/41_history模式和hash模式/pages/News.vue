<template>
    <ul>
        <li :style="{opacity}">欢迎学习Vue</li>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>

<script>
    export default {
        name:'News',
        data(){
            return{
                opacity: 1,
            }
        },
        // 路由组件独有的两个钩子：activated和deactivated
        // activated路由组件被激活时触发
        activated(){
            console.log('News组件被激活了');
            this.timer = setInterval(() => {
                // console.log('@');
                this.opacity -= 0.01;
                if(this.opacity <= 0) this.opacity = 1; 
            }, 16);
        },
        // deactivated路由组件失活时触发
        deactivated(){
            console.log("News组件失活了");
            clearInterval(this.timer);
        }
    }
</script>

<style>

</style>