// 该文件是整个项目的入口文件

// 引入vue
import Vue from 'vue'

// 引入app组件，它是所有组件的父组件
import App from './App.vue'

// 关闭vue的生产提示
Vue.config.productionTip = false


// vc 和 vm 都可以看到Vue原型上的数据

// const Demo = Vue.extend({});
// const d = new Demo();
// Vue.prototype.x = d;


// 创建vue实例对象——vm
new Vue({
  // 完成了将app组件放入容器中
  render: h => h(App),  
  beforeCreate(){
    // Vue.prototype.x = this;  
    Vue.prototype.$bus = this;  // 安装全局事件总线
  }  
}).$mount('#app')
