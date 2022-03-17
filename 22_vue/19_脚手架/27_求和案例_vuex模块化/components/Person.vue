<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color: red">上方组件的求和为：{{sum}}</h3>
        <h3>获取列表第一个人的姓名：{{personsFirstName}}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <button @click="addPersonWang">添加一个姓王的人</button>
        <button @click="addPersonServer">添加一个人，名字随机</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
    
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name: 'Person',
        data(){
            return{
                name: '',
            }
        },
        computed:{
            // ！！一定不要忘记在模块中添加namespace : true

            // 使用手写的代码读取state中的数据时，是state下面的模块，之后再是相应的数据
            personList(){
                return this.$store.state.personAbout.personList
            },
            sum(){
                return this.$store.state.addAbout.sum;
            },

            // 因为需要向其他服务器请求得到value，所以dispatch里面不用写value这个参数了 
            personsFirstName(){
                // 使用手写的代码读取getters中的数据时，是在$store.getters下的[模块名/函数名]
                return this.$store.getters['personAbout/personsFirstName'];
            }

        },
        methods:{
            add(){
                const personObj = {id: nanoid(), name: this.name};
                // 在使用手写的commit代码时，函数名的前面应添加响应的模块名，并用/连接
                this.$store.commit("personAbout/ADD_PERSON", personObj);
                this.name = '';
            },
            addPersonWang(){
                const personObj = {id: nanoid(), name: this.name};
                this.$store.dispatch('personAbout/addWang', personObj);
                this.name = '';
            },
            addPersonServer(){
                this.$store.dispatch('personAbout/addPersonServer');
            }
        }
    }
</script>

<style>

</style>