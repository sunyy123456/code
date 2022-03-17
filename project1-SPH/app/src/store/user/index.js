// 登录与注册的仓库
import { reqGetCode,reqUserRegister, reqUserLogin, reqGetUserInfo,reqUserLayout } from "@/api";
import { setToken, getToken, removeToken } from "@/utils/token";
const state = {
    code: '',
    token: getToken(),
    userInfo: {},
};
const mutations = {
    GETCODE(state, code){
        state.code = code;
    },
    USERLOGIN(state, token){
        state.token = token;
    },
    GETUSERINFO(state, userInfo){
        state.userInfo = userInfo;
    },
    USERLAYOUT(state){
        state.userInfo = {},
        state.token = '';
        removeToken();
    }
};
const actions = {
    async getCode({commit}, phone){
        let result = await reqGetCode(phone);
        if(result.code === 200){
            commit('GETCODE', result.data);
            return 'ok';
        }else{
            return Promise.reject(new Error('fail'));
        }
    },
    async userRegister({commit}, data){
        let result = await reqUserRegister(data);
        if(result.code === 200){
            return 'ok';
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    async userLogin({commit}, data){
        let result = await reqUserLogin(data);
        // 服务器下发token,用户的唯一标识符
        // 将来经常通过带token找服务器用户信息进行展示
        if(result.code === 200){
            commit('USERLOGIN', result.data.token);
            setToken(result.data.token);
            return 'ok';
        }else{
            return Promise.reject(new Error('fail'));
        }
    },
    async getUserInfo({commit}){
        let result = await reqGetUserInfo();
        if(result.code === 200){
            commit('GETUSERINFO', result.data);
            // return 'ok';
        }
        // else{
        //     return Promise.reject(new Error('fail'));
        // }
    },
    async userLayout({commit}){
        let result = await reqUserLayout();
        if(result.code === 200){
            commit('USERLAYOUT');
            return 'ok';
        }else{
            return Promise.reject(new Error('fail'));
        }

    }
    
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
}