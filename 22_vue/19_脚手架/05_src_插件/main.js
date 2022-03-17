// 该文件是整个项目的入口文件

// 引入vue
import Vue from 'vue'

// 引入app组件，它是所有组件的父组件
import App from './App.vue'

// 引入插件
import plugins from './plugins'

// 关闭vue的生产提示
Vue.config.productionTip = false

// 应用(使用)插件
Vue.use(plugins, 1, 2, 3)


/*
  功能：用于增强Vue
  本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据
  定义插件：
    对象.install = function(Vue, options){
      // 1. 添加全局过滤
      Vue.filter(...)

      // 2. 添加全局指令
      Vue.directive(...)

      // 3. 配置全局混入（混合）
      Vue.mixin(...)

      // 4. 添加实例方法
      Vue.prototype.$method = function(){...}
    }
  使用插件：Vue.use()

*/

// 创建vue实例对象——vm
new Vue({
  // 完成了将app组件放入容器中
  render: h => h(App),    
}).$mount('#app')
