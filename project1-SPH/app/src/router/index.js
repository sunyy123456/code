// 配置路由的地方

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

// 使用插件
Vue.use(VueRouter);

// 先把VueRouter原型对象的push，先保存一下
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.push;

// 重写push|replace
// 第一个参数：告诉原来的push方法，往哪里跳转（传递哪些参数）
// 第二个参数：成功的回调
// 第三个参数: 失败的回调
VueRouter.prototype.push = function(location, resolve, reject){
    if(resolve && reject){
        /*
            call和apply：
                相同点：都可以调用函数一次，都可以篡改函数的上下文（this）一次
                不同点：call传递参数用逗号隔开，apply传递参数用数组
        */
        originPush.call(this, location, resolve, reject);
    }else{
        originPush.call(this, location, ()=>{}, ()=>{});
    }
}
VueRouter.prototype.replace = function(location, resolve, reject){
    if(resolve && reject){
        /*
            call和apply：
                相同点：都可以调用函数一次，都可以篡改函数的上下文（this）一次
                不同点：call传递参数用逗号隔开，apply传递参数用数组
        */
        originReplace.call(this, location, resolve, reject);
    }else{
        originReplace.call(this, location, ()=>{}, ()=>{});
    }
}

// 配置路由
const router = new VueRouter({
    // 配置路由
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        // 返回的这个y:0，代表滚动条在最上方
        return { y: 0 }
    },
})

// 全局守卫：前置守卫（在路由跳转前判断）
router.beforeEach((to, from, next) => {
    // to: 可以获取到要跳转的路由信息
    // from：可以获取到从哪个路由而来的信息
    // next：放行函数       next()直接放行  next(path)放行到指定路由    next(false)返回到from（相当于驳回）

})

export default router;


