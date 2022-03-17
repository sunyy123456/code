// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建一个路由器
const router =  new VueRouter({
    routes:[
        {
            name:'about',
            // 一级路由的路径有 /
            path: '/about',
            component: About,
            meta:{title: '关于'},
        },
        {
            name: 'home',
            path: '/home',
            meta:{title: '主页'},
            component: Home,
            // 二级路由
            children:[
                {
                    name: 'news',
                    path: 'news',
                    meta:{isAuth: true, title: '新闻'},
                    component: News
                },
                {
                    name: 'message',
                    path: 'message',
                    meta:{isAuth: true, title: '消息'},
                    component: Message,
                    children:[
                        {
                            name:'detail',
                            // 使用占位符声明接收params参数
                            path:'detail/:id/:title',
                            component: Detail,
                            meta:{title: '详情'},
                            

                            // props的第一种写法,值为对象,该对象中的所有key-value都会以props的形式传递给Detail组件
                            // props:{a:1, b:2},

                            // props的第二种写法,值为布尔值,若布尔值为真,就会把该路由组件收到的所有params参数,以props的形式传递给Detail组件
                            props: true,

                            // props的第三种写法,值为函数,该函数返回的对象中每一组key-value都会以props的形式传递给Detail组件
                            // props($route){
                            //     return {
                            //         id: $route.query.id,
                            //         title: $route.query.title,
                            //     }
                            // }
                        }
                    ]
                },
            ]
        },
    ]
});

// 全局路由守卫:beforeEach(前置) 和 afterEach(后置)

// 全局前置路由守卫——初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    // if(to.path === '/home/message' || to.path === '/home/news'){
    // if(to.name === 'message' || to.name === 'news'){
    if(to.meta.isAuth){ // 判断是否需要鉴权    
        if(localStorage.getItem('name') === 'syy'){
            // 放行
            next();
        }else{
            alert("无权限查看！！");
        }
    }else{
        next();
    }
})


// 全局后置路由守卫——初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
    document.title = to.meta.title || 'syy'
})

export default router