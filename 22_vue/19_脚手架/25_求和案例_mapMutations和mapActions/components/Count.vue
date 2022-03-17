<template>
    <div>
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
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
    export default {
        name:"Count",
        data() {
            return {
                n: 1, // 用户选择的数字
            }
        },
        computed:{
            // 借助mapState生成计算属性，从state中读取数据（数组写法）
            ...mapState(['sum', 'school', 'subject']),

            // 借助mapState生成计算属性，从getters中读取数据（数组写法）
            ...mapGetters(['bigSum']),
        },
        methods: {
            /*
                当使用mapMutations和mapActions时，需要在调用函数的时候传参，不然vuex分不清哪个是需要使用的value
                    当不传参时，函数调用的时候会自动传递一个event参数，则vuex会将event当成参数进行计算
            */


            // 程序员亲自手写方法
            // increment(){
            //     this.$store.commit('JIA', this.n);
            // },
            // decrement(){
            //     this.$store.commit('JIAN', this.n);
            // },

            // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
            ...mapMutations({increment: 'JIA', decrement: 'JIAN'}),
            // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
            // ...mapMuitations(['JIA', 'JIAN']), 

            // incrementOdd(){
            //     this.$store.dispatch('jiaOdd', this.n);
            // },
            // incrementWait(){
            //     this.$store.dispatch('jiaWait', this.n);
            // },

            // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
            ...mapActions({incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'}),
            // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（数组写法）
            // ...mapActions(['jiaOdd', 'jiaWait']),
        },  

    }
</script>

<style>
    button{
        margin-left: 5px
    }
</style>