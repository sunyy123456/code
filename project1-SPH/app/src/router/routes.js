// 配置路由

// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'



export default [
    {
        path: '/home',
        component: Home,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            showFooter: false
        }
    },
    {
        // path: '/search/:keyword',
        path: '/search/:keyword?',
        component: Search,
        name: 'search',
        meta: {
            showFooter: true
        },

        // 路由组件传递props数据的三种方法
        // 1. 布尔值写法: 只能传递params数据
        // props: true,
        // 2. 对象写法: 额外的给路由组件传递一些props
        // props: {a:1,b:2},
        // 3. 函数写法: 可以传递params参数和query参数给路由组件
        props:($router) => {
            return {keyword:$router.params.keyword, k: $router.query.k};
        },

    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta: {
            showFooter: false
        }
    },
    {
        path: '/detail/:skuId',
        component: Detail,
        name: 'detail',
        meta: {
            showFooter: false
        }
    },
    {
        path: '/addcartsuccess',
        component: AddCartSuccess,
        name: 'addcartsuccess',
        meta: {
            showFooter: false
        }
    },
    {
        path: '/shopcart',
        component: ShopCart,
        name: 'shopcart',
        meta: {
            showFooter: false
        }
    },
    // 重定向：在项目跑起来的时候，访问/，立马让它定向到首页
    {
        path: '*',
        redirect: '/home' 
    },
]


