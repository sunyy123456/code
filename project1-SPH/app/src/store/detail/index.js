import {reqGoodInfo, reqAddOrUpdateShotCart} from '@/api'
// 封装游客身份模块uuid ---> 生成一个随机字符串（不能再变的）
import {getUUID} from '@/utils/uuid_token'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    goodInfo: {},
    uuid_token:getUUID(),
};
const mutations = {
    GETGOODINFO(state, goodInfo){
        state.goodInfo = goodInfo;
    },
};
const actions = {
    async getGoodInfo({commit}, skuId){
        let result = await reqGoodInfo(skuId);
        if(result.code === 200){
            commit('GETGOODINFO', result.data)
        }
    },
    // 将产品添加到购物车中
    async addOrUpdateShopCart({commit}, {skuId, skuNum}){
        // 加入购物车以后发请求，前台将请求参数嗲给服务器
        // 服务器写入数据成功，并没有返回其他的数据，只是返回code=200，代表这次操作成功
        // 因为服务器没有返回其余数据，因此不需要三连环存储数据
        let result = await reqAddOrUpdateShotCart(skuId, skuNum);
        // 当前的这个函数，返回值是一个Promise 

        // 代表服务器加入购物车成功
        if(result.code === 200){
            // 返回的只要是非空的字符串就是成功
            return 'ok'
        }else{
            // 代表加入购物车失败
            return Promise.reject(new Error('fail'));
        }
    }
};
const getters = {
    // 注意：state.goodInfo初始状态是空对象，空对象的categoryView是undefined
    // 将当前计算得出的categoryView属性值设置成至少是一个空对象，这样就不会有一个报错了
    categoryView(){
        return state.goodInfo.categoryView || {};
    },
    skuInfo(){
        return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(){
        return state.goodInfo.spuSaleAttrList || {};
    },
};
export default {
    state,
    mutations,
    actions,
    getters,
}