<template>
    <div>
        <!-- 不需要写this.$store.state.sum，因为模板里是可以直接看到vc所有的数据 -->
        <h1>当前求和为：{{$store.state.sum}}</h1>
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
    }
</script>

<style>
    button{
        margin-left: 5px
    }
</style>