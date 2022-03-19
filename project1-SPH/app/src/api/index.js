// 当前这个模块，API进行统一管理
import requests from "./request";
import mockRequests from "./mockRequest";

// 三级联动接口
// /api/product/getBaseCategoryList   get  无参数

// 发送请求：axios发送请求并返回结果Promise对象
export const reqCategoryList = ()=>{
    return requests({url: '/product/getBaseCategoryList', method: 'get'}); 
}

// 获取banner（Home首页轮播图接口）
export const reqBannerList = ()=>{
    return mockRequests({url: '/banner', method: 'get'}); 
}

// 获取floor数据
export const reqFloorList = ()=>{
    return mockRequests({url: '/floor', method: 'get'}); 
}

// 获取搜索模块数据  接口地址：/api/list    请求方式：POST  需要带参数

// 当前这个接口(获取搜索模块的数据),给服务器传递一个默认参数[至少是一个空对象,不能不传递该参数]
export const reqGetSearchInfo = (params) => {
    return requests({url: '/list', method: 'post', data: params})
}

export const reqGoodInfo = (skuId) => {
    return requests({url: `/item/${skuId}`, method: 'get'})
}

// 将产品添加到购物车中（获取更新某一产品的个数）
export const reqAddOrUpdateShotCart = (skuId, skuNum) => {
    return requests({url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post'})
}

export const reqShopcartList = () => {
    return requests({url: `/cart/cartList`, method: 'get'})
}

export const reqDeleteCartById = (skuId) => {
    return requests({url: `/cart/deleteCart/${skuId}`, method: 'delete'})
}

export const reqUpdateChecked = (skuId, isChecked) => {
    return requests({url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get'})
}

export const reqGetCode = (phone) => {
    return requests({url: `/user/passport/sendCode/${phone}`, method: 'get'})
}

export const reqUserRegister = (data) => {
    return requests({url: `/user/passport/register`, method: 'post', data})
}

export const reqUserLogin = (data) => {
    return requests({url: `/user/passport/login`, method: 'post', data})
}

export const reqGetUserInfo = () => {
    return requests({url: `/user/passport/auth/getUserInfo`, method: 'get'})
}

export const reqUserLayout = () => {
    return requests({url: `/user/passport/logout`, method: 'get'})
}

export const reqUserAddress = () => {
    return requests({url: `/user/userAddress/auth/findUserAddressList`, method: 'get'})
}

export const reqUserOrder = () => {
    return requests({url: `/order/auth/trade`, method: 'get'})
}

export const reqSubmitOrder = (tradeNo, data) => {
    return requests({url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, method: 'post', data})
}

export const reqOrderInfo = (orderId) => {
    return requests({url: `/payment/weixin/createNative/${orderId}`, method: 'get'})
}

export const reqOrderStatus = (orderId) => {
    return requests({url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get'})
}

export const reqGetOrderInfo = (page, limit) => {
    return requests({url: `/order/auth/${page}/${limit}`, method: 'get'})
}

