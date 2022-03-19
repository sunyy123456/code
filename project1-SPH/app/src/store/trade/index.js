import {reqUserAddress, reqUserOrder} from '@/api'

const state = {
    userAddressList: [],
    userOrder: {},
};
const mutations = {
    GETUSERADDRESS(state, userAddressList){
        state.userAddressList = userAddressList;
    },
    GETUSERORDER(state, userOrder){
        state.userOrder = userOrder;
    }
};
const actions = {
    async getUserAddress({commit}){
        let result = await reqUserAddress();
        if(result.code === 200){
            commit('GETUSERADDRESS', result.data);
        }
    },
    async getUserOrder({commit}){
        let result = await reqUserOrder();
        if(result.code === 200){
            commit('GETUSERORDER', result.data);
        }
    },
};
const getters = {};
export default{
    state,
    mutations,
    actions,
    getters,
}