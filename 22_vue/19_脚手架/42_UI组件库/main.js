// 该文件是整个项目的入口文件

// 引入vue
import Vue from 'vue'

// 引入app组件，它是所有组件的父组件
import App from './App.vue'


// 完整引入
// 引入 ElementUI 组件库
// import ElementUI from 'element-ui';
// 引入 ElementUI 全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 关闭vue的生产提示
Vue.config.productionTip = false
// 应用ElementUI
// Vue.use(ElementUI);

// 按需引入
import { Button, Row } from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);



// 创建vue实例对象——vm
new Vue({
  // 完成了将app组件放入容器中
  render: h => h(App),  
}).$mount('#app')
