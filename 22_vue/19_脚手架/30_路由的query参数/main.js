// 该文件是整个项目的入口文件

// 引入vue
import Vue from 'vue'

// 引入app组件，它是所有组件的父组件
import App from './App.vue'

// 引入vue-router
import VueRouter from 'vue-router'
// 引入路由器
import router from './router/index.js'

// 关闭vue的生产提示
Vue.config.productionTip = false

// 应用插件
Vue.use(VueRouter)

// 创建vue实例对象——vm
new Vue({
  // 完成了将app组件放入容器中
  render: h => h(App),  
  router
}).$mount('#app')
