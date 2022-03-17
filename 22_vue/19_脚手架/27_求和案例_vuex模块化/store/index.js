// 该文件用于创建Vuex中最核心的store

// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 使用插件(插件的使用都是Vue.use())
Vue.use(Vuex)

import addOptions from './count.js'
import personOptions from './person.js'


// 创建并暴露store
export default new Vuex.Store({
    // 使用module
    modules: {
        addAbout: addOptions,
        personAbout: personOptions,
    },
})
