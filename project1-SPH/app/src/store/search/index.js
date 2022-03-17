// search模块的小仓库 
import { reqGetSearchInfo } from "@/api";

// state：仓库存储数据最多的地方
const state = {
    searchList: {},
};
// mutations：修改state的唯一手段
const mutations = {
    GETSEARCHLIST(state, searchList){
        state.searchList = searchList;
    }
};
// actions：处理action，可以书写自己的业务逻辑，也可以处理异步
const actions = {
    async getSearchList({commit}, params={}){
        let result = await reqGetSearchInfo(params);
        if(result.code === 200){
            commit('GETSEARCHLIST', result.data);
        }
    }
};
// getters：理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
// 项目中getters主要作用是: 简化仓库中的数据
// 所以可以把将来在组件中需要的数据简化一下【将来组件再获取数据的时候就方便了】
const getters = {
    // 当前形参state是当前仓库中的state，不是大仓库的state
    goodsList(state){
        return state.searchList.goodsList || [];
    },
    attrsList(state){
        return state.searchList.attrsList || [];
    },
    trademarkList(state){
        return state.searchList.trademarkList || [];
    },
    
};

// 对外暴露Store类的一个实例
export default {
    state,
    mutations,
    actions,
    getters,
};