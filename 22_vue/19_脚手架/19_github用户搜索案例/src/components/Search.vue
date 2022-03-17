<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
    /* 
        接口地址：
        https://api.github.com/search/users?q=xxx
    */
    import axios from "axios"
    export default {
        name:"Search",
        data(){
            return{
                keyWord: ''
            }
        },
        methods:{
            searchUsers(){
                // 请求前更新List的数据
                this.$bus.$emit("updateListData", {isFirst:false, isLoading: true, errMsg: '', users:[]})
                axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                    response => {
                        // 根据response输出的结果判断出，我们要用response.data.items
                        console.log("请求成功了");
                        // 请求成功时更新List的数据
                        this.$bus.$emit("updateListData", {isLoading: false, errMsg: '', users: response.data.items})
                    },
                    error => {
                        console.log("请求失败了");
                        // 请求失败时更新List的数据
                        console.log()
                        this.$bus.$emit("updateListData", {isLoading: false, errMsg: error.message, users: []})
                    }
                )
            }
        }
    }
</script>