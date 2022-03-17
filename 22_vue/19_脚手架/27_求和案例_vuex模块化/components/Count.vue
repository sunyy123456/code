<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h1>当前求和放大10倍后为：{{bigSum}}</h1>
        <h1>我在{{school}}学习{{subject}}</h1>
        <h3 style="color: red">下方组件的总人数是：{{personList.length}}</h3>
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
            // 在使用mapState和mapGetters时，可以在数组或对象前面写上是哪个模块的
            ...mapState('addAbout' ,['sum', 'school', 'subject']),
            ...mapState('personAbout' ,['personList']),

            ...mapGetters("addAbout", ['bigSum']),
        },
        methods: {
            // 在使用mapMutations和mapActions时，可以在数组或对象前面写上是哪个模块的
            ...mapMutations('addAbout',{increment: 'JIA', decrement: 'JIAN'}),

            ...mapActions('addAbout', {incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'}),
        },  
        // mounted(){
        //     console.log(this.$store);
        // }

    }
</script>

<style>
    button{
        margin-left: 5px
    }
</style>