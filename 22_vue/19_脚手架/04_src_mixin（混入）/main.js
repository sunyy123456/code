// 该文件是整个项目的入口文件

// 引入vue
import Vue from 'vue'

// 引入app组件，它是所有组件的父组件
import App from './App.vue'

// 关闭vue的生产提示
Vue.config.productionTip = false

// 全局混入
// import {mixin1, mixin2} from "./mixin"
// Vue.mixin(mixin1)
// Vue.mixin(mixin2)

/*
  功能：可以把多个组件共有的配置提取成一个混入对象
    使用方式：
        第一步定义混合，例如：
            {
              data(){......},
              methods:{....}
              ....
            }
        第二步使用混入，例如：
            (1) 全局混入：Vue.mixin(xxxx)
            (2) 局部混入：mixins:["xxx"]
*/


// 创建vue实例对象——vm
new Vue({
  // 完成了将app组件放入容器中
  render: h => h(App),    
}).$mount('#app')
