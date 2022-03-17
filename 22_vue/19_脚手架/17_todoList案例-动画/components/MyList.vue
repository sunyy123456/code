<template>
    <ul class="todo-main">
		<!--  
			如果是想在添加和删除todo时有动画效果，有两种添加方法
				- 可以在MyItem中添加，将li及其里面元素都包裹在 transition 中
					因为MyItem中li只有一个元素，所以直接使用transition即可
				- 也可以在MyList中添加，将MyItem插件包裹在 transition 中
					因为是v-for遍历MyItem，所以不只有一个元素，需要使用 transition-group
		-->

		<!-- 注意因为是list，即不只有一个item，所以应该使用 transition-group -->
		<transition-group name="todo" appear>
			<MyItem 
				v-for="todoObj in todos" 
				:key="todoObj.id" 
				:todo="todoObj" 
			/>
		</transition-group>
	</ul>
</template>

<script>
    import MyItem from "./MyItem.vue"
    export default {
        name:"MyList",
        components:{
            MyItem
        },
        props:["todos"],
    }
</script>

<style scoped>
    .todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}

	.todo-enter-active{
        animation: syy 0.3s linear;
    }
    .todo-leave-active{
        animation: syy 0.3s linear reverse;
    }


    @keyframes syy {
        from{
            /* transform: translateX(100%); */
			opacity: 0%
        }
        to{
            /* transform: translateX(0px); */
			opacity: 100%;
        }
    }
</style>