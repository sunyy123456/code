export default {
    install(Vue, a, b, c){
        // console.log(Vue)  // 输出的是Vue构造函数
        console.log(a, b, c)  // 所传递的参数

        // 定义全局指令 
        Vue.directive('fbind', {
            // 指令与元素成功绑定时（一上来）
            bind(element, binding){
                element.value = binding.value;
            },
            // 指令所在元素被插入到页面时
            inserted(element){
                element.focus(); //获取焦点
            },
            // 指令所在元素被重新解析时
            update(element, binding){
                element.value = binding.value;
            }
        })

        // 定义混入
        Vue.mixin({
            data(){
                return {
                    x:10,
                    y:20
                }
            }
        })

        // 给Vue原型上添加一个方法（vm和vc都可以使用）
        Vue.prototype.hello = () => (alert("hello"))
    }
}