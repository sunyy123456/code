// 该文件用于创建Vuex中最核心的store

// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 使用插件(插件的使用都是Vue.use())
Vue.use(Vuex)
// 引入插件vuex
// 准备actions——用于响应组件中的动作
const actions = {
    // jia(context, value){
    //     // context相当于一个迷你的store(里面有dispatch、commit和state)
    //     // console.log(context);
    //     context.commit('JIA', value);
    // },
    // jian(context, value){
    //     context.commit('JIAN', value);
    // },
    jiaOdd(context, value){
        if(context.state.sum % 2){
            context.commit('JIA', value);
        }
    },
    jiaWait(context, value){
        setTimeout(() => {
        context.commit('JIA', value);
        }, 500)
    },
}
// 准备mutations——用于操作数据（state）
const mutations = {
    // 一般在开发中mutation中的属性名都是大写字母
    JIA(state, value){
        // state中添加了getter和setter变成响应式的了
        // console.log(state);
        state.sum += value;
    },
    JIAN(state, value){
        state.sum -= value;
    },
}
// 准备state——用于存储数据
const state = {
    sum: 0,  // 当前的和
}

// 创建并暴露store
export default new Vuex.Store({
    // actions: actions,
    // mutations: mutations,
    // state: state,
    actions,
    mutations,
    state,
})
