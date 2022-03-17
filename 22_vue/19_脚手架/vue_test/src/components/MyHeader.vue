<template>
    <div class="todo-header">
		<input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" v-model="keyword"/>
	</div>
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name:"MyHeader",
        data(){
            return{
                keyword:""
            }
        },
        props:["addTodos", "todos"],
        methods:{
            add(event){
                let title = event.target.value.trim();
                if(!title) return alert("请输入非空的任务名称！")
                let todoObj = {id: nanoid(), title, done: false, isShow: true};
                this.addTodos(todoObj);
                event.target.value = "";
            }
        },
        watch:{
            keyword:{
                handler(x){
                    x = x.trim();
                    if(!x) {
                        for(let i in this.todos){
                            this.todos[i].isShow = true;
                        }
                        return;
                    }
                    
                    
                    for(let i in this.todos){
                        if(this.todos[i].title.indexOf(x) === -1) {
                            this.todos[i].isShow = false;
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .todo-header input {
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
	}

	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>