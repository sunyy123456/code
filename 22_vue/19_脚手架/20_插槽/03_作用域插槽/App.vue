<template>
	<div class="container">
		<Category title="游戏">
			<!-- 
				作用域插槽：插槽的使用者没有所要使用数据，需要定义插槽的地方传递数据给使用者
				scope写入的是一个对象，对象中包含着传递的数据（不一定要使用传递的数据名称，可以随意取名）
			-->
			<template scope="syy">
				<ul>
					<li v-for="(g, index) in syy.games" :key="index">{{g}}</li>
				</ul>	
			</template>
		</Category>
		<Category title="游戏">
			<!-- es6中的解构赋值  {games}={games:games} -->
			<template scope="{games}">
				<ol>
					<li v-for="(g, index) in games" :key="index">{{g}}</li>
				</ol>	
			</template>
		</Category>
		<Category title="游戏">
			<!-- es6中的解构赋值  {games}={games:games} -->
			<template scope="{games}">
				<h4 v-for="(g, index) in games" :key="index">{{g}}</h4>
			</template>
		</Category>
	</div>
</template>

<script>
	// import axios from "axios"
	import Category from './components/Category.vue'
    export default {
        name:"App",  // name要记得写，而且名字一般都是文件名
		components:{
			Category,
		},
		
    }
</script>

<style>
	.container, .foot, h4{
		display: flex;
		justify-content: space-around;
	}

</style>

