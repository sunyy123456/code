<template>
    <div>
        <!-- 不需要写this.$store.state.sum，因为模板里是可以直接看到vc所有的数据 -->
        <h1>当前求和为：{{sum}}</h1>
        <h1>当前求和放大10倍后为：{{bigSum}}</h1>
        <h1>我在{{school}}学习{{subject}}</h1>
        <!-- 
            .number强制转换为数字 
            如果不写.number，value的值就是字符串类型，相加就是字符串类型
        -->
        <select v-model.number="n"> 
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    export default {
        name:"Count",
        data() {
            return {
                n: 1, // 用户选择的数字
            }
        },
        methods: {
            increment(){
                // console.log(this);
                // 如果不需要数据处理或ajax请求，可以跳过dispatch到actions步骤，直接commit给mutations
                this.$store.commit('JIA', this.n);
            },
            decrement(){
                this.$store.commit('JIAN', this.n);
            },
            incrementOdd(){
                this.$store.dispatch('jiaOdd', this.n);
            },
            incrementWait(){
                this.$store.dispatch('jiaWait', this.n);
            },
        },  

        computed:{
            // 靠程序员自己亲自手写计算属性
            /* 
                he(){
                    return this.$store.state.sum
                },
                xuexiao(){
                    return this.$store.state.school
                },
                xueke(){
                    return this.$store.state.subject
                },
            */

            // 借助mapState生成计算属性，从state中读取数据（对象写法）

            // 这里使用了拓展运算符，也就是将mapState对象里面的每个名值对拆开放进computed这个对象中
            // ...mapState({
            //     he: 'sum',  // 变量he是this.$store.state.sum
            //     // sum不能不带引号,（因为属性值是字符串的都得带引号，不带引号的是变量sum）
            //     xuexiao: 'school',
            //     xueke: 'subject'
            // }),

            // 借助mapState生成计算属性，从state中读取数据（数组写法）
            // 要想使用数组写法,生成的计算属性名与真正读取出来的名是一致的
            ...mapState(['sum', 'school', 'subject']),
            /*
                但是注意这里面的对象不能简写
                也就是说({sum: 'sum', school: 'school', subject: 'subject'})
                    是不能简写的
                能简写的是({sum: sum, school: school, subject: subject})
                    可以简写为({sum, school, subject})  
                这里面数组的简写是vuex里的规则，并不是es6的规则  
            */

            // mapGetters与mapState用法一致
            // 借助mapState生成计算属性，从getters中读取数据（对象写法）
            // ...mapGetters({bigSum: 'bigSum'}),
            // 借助mapState生成计算属性，从getters中读取数据（数组写法）
            ...mapGetters(['bigSum']),
        }
    }
</script>

<style>
    button{
        margin-left: 5px
    }
</style>