// home模块的小仓库 

import {reqCategoryList, reqBannerList, reqFloorList} from '@/api'
import user from '../user';


// state：仓库存储数据最多的地方
const state = {
    // state中数据默认初始值别瞎写，服务器返回对象，服务器返回数组【根据接口返回值初始化】
    categoryList: [],
    bannerList: [],
    floorList: [],
    
};
// mutations：修改state的唯一手段
const mutations = {
    CATEGORYLIST(state, categoryList){
        state.categoryList = categoryList.slice(0, 16);
    },
    GETBANNERLIST(state, bannerList){
        state.bannerList = bannerList;
    },
    REQFLOORLIST(state, floorList){
        state.floorList = floorList;
    },
   
};
// actions：处理action，可以书写自己的业务逻辑，也可以处理异步
const actions = {
    // 通过API里面的接口函数调用，向服务器发送请求，获取服务器的数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code == 200){
            commit("CATEGORYLIST", result.data);
        }
    },
    // 获取首页轮播图的数据
    async getBannerList({commit}){
        let result = await reqBannerList();
        if(result.code === 200){
            commit('GETBANNERLIST', result.data);
        }
    },
    async getFloorList({commit}){
        let result = await reqFloorList();
        if(result.code === 200){
            commit('REQFLOORLIST', result.data);
        }
    },
    
};
// getters：理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {};

// 对外暴露Store类的一个实例
export default {
    // namespaced: true,
    state,
    mutations,
    actions,
    getters,
};