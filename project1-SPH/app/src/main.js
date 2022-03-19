import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
// 第一个参数是全局组件的名字, 第二个参数是哪个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);


// 统一引入api文件里面的所有函数
import * as API from '@/api'


import {MessageBox} from 'element-ui'

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;


// 引入仓库
import store from '@/store';
// 引入路由
// 路由这里注意，在下载的时候会默认下载高版本的vue-router，下载高版本的会报错
// 所以需要下载3版本的vue-router，即npm i vue-router@3 --save
import router from '@/router'

// 引入mockServer.js --模拟数据
import '@/mock/mockServer.js';

// 引入swiper样式
import 'swiper/css/swiper.css';

// 引入插件VueLazyload
import VueLazyload from 'vue-lazyload'
import logo from  '@/assets/logo.png'
// 注册插件 VueLazyload
Vue.use(VueLazyload, {
  // 懒加载默认的图片
  // 注意:这里经过测试,直接写路径不可以,需要先引入图片
  loading: logo,  
})


// 引入表单校验插件(因为main.js内容较多,所以选择放在plungins)
import '@/plugins/validate'

new Vue({
  render: h => h(App),
  // 安装全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this;
    // 与事件总线类似，这样就不需要每个都引入api函数了，在不使用vuex的情况下使用
    Vue.prototype.$API = API;
  },
  // 注册路由，写法是kv一致省略v【注意router小写】
  router,
  // 注册仓库：组件实例的身上会多出一个属性名为$store
  store,
}).$mount('#app')
