<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <!-- 在Home、Search显示的，在登录、注册时隐藏 -->
    <Footer v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Footer,
    Header
  },
  mounted() {
    // 派发一个action，获取商品分类的三级列表的数据 
    // 通知vuex发请求，获取数据，存储于仓库之中
    
    this.$store.dispatch('categoryList');
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
