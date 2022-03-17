<template>
    <div class="todo-footer" v-show="total">
		<label>
			<input type="checkbox" :checked="isAll" @change="checkAll"/>
		</label>
		<span>
			<span>已完成{{doneTotal}}</span> / 全部{{total}}
		</span>
		<button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
	</div>
</template>

<script>
    export default {
        name:"MyFooter",
		props:["todos", "checkAllTodo", "clearAllTodo"],
		computed:{
			isAll(){
				for(let x in this.todos){
					if(this.todos[x].done === false) return false;
				}
				return true;
			},
			total(){
				return this.todos.length;
			},
			doneTotal(){
				let sum = 0;
				for(let x in this.todos){
					sum += this.todos[x].done;
				}
				return sum;
			}
		},
		methods:{
			checkAll(){
				let done = !this.isAll;
				this.isAll = done;
				this.checkAllTodo(done);
			},
			clearAll(){
				this.clearAllTodo();
			}
		},

    }
</script>

<style scoped>
    .todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}

</style>