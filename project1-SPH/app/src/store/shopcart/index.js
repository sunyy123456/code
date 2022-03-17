import { reqShopcartList, reqDeleteCartById,reqUpdateChecked } from "@/api";

const state = {
    shopcartList: []
};
const mutations = {
    GETSHOPCARTLIST(state, shopcartList){
        state.shopcartList = shopcartList;
    }
};
const actions = {
    async getShopcartList({commit}){
        let result = await reqShopcartList();
        if(result.code === 200){
            commit('GETSHOPCARTLIST', result.data)
        }
    },
    async deleteCartById({commit}, skuId){
        let result = await reqDeleteCartById(skuId);
        if(result.code === 200){
            return 'ok';
        }else{
            return Promise.reject(new Error('fail'));
        }
    },
    async updateChecked({commit}, {skuId, isChecked}){
        let result = await reqUpdateChecked(skuId, isChecked);
        if(result.code === 200){
            return 'ok';
        }else{
            return Promise.reject(new Error('fail'));
        }
    },
    deleteAllCheckedCart({dispatch, getters}){
        let promiseAll = [];
        getters.shopcartList.cartInfoList.forEach((item) => {
            let promise = item.isChecked === 1 ? dispatch('deleteCartById', item.skuId) : '';
            // 将每一次返回的promise添加到数组当中
            promiseAll.push(promise);
        })

        return Promise.all(promiseAll);
    },
    updateAllCheckedCart({dispatch, state}, isChecked){
        let promiseAll = [];
        state.shopcartList[0].cartInfoList.forEach((item) => {
            let promise = dispatch('updateChecked', {skuId: item.skuId, isChecked});
            promiseAll.push(promise);
        })
        return Promise.all(promiseAll);
    }
};
const getters = {
    shopcartList(){
        return state.shopcartList[0] || {};
    },
};
export default ({
    state,
    mutations,
    actions,
    getters,
})