<template>
    <div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<MyHeader :addTodos="addTodos" :todos="todos"/>
				<MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
				<MyFooter 
					:todos="todos" 
					:checkAllTodo="checkAllTodo" 
					:clearAllTodo="clearAllTodo"
				/>
			</div>
		</div>
	</div>
</template>

<script>
    import MyList from "./components/MyList.vue"
    import MyHeader from "./components/MyHeader.vue"
    import MyFooter from './components/MyFooter.vue'

    export default {
        name:"App",  // name要记得写，而且名字一般都是文件名
        components:{
            MyList,
            MyHeader,
            MyFooter
        },
		data(){
			return{
				todos: JSON.parse(localStorage.getItem('todos')) || [],
			}
		},
		watch:{
			todos:{
				deep: true,
				handler(value){
					localStorage.setItem("todos", JSON.stringify(value));
				}
			}
		},
		methods:{
			addTodos(todoObj){
				this.todos.unshift(todoObj);
				
			},
			deleteTodo(id){
				if(confirm("确定要删除吗?")){
					this.todos = this.todos.filter((todo) => {
						return todo.id != id;
					})
				}
			},
			checkTodo(id){
				for(let x in this.todos){
					if(this.todos[x].id === id){
						this.todos[x].done = !this.todos[x].done
					}
				}
			},
			checkAllTodo(done){
				this.todos.forEach((todo) => {
					todo.done = done;
				})
			},
			clearAllTodo(){
				this.todos = this.todos.filter((todo) => {
					return !todo.done; 
				})
			}
		}
    }
</script>

<style>
    body {
		background: #fff;
	}
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}
	.btn:focus {
		outline: none;
	}
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}

</style>
