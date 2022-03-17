<template>
	<div class="container">
		<Category title="美食" :listData="foods"> 
			<img src="http://5b0988e595225.cdn.sohucs.com/images/20190516/fbc0079220e0494d9bd23037500e0baf.jpg" alt="">
		</Category>
		<Category title="游戏" :listData="games">
			<ul>
				<li v-for="(g, index) in games" :key="index">{{g}}</li>
			</ul>	
		</Category>
		<Category title="电影" :listData="films">
			<!-- video标签里添加controls就可以播放了 -->
			<video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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
		data(){
			return{
				foods:['薯片', '火锅', '烧烤', '炸串'],
				games:['贪吃蛇', '穿越火线', '植物大战僵尸', '王者荣耀'],
				films:['《夏洛特烦恼》', '《你好，李焕英》', '《肖申克的救赎》', '《幸福来敲门》'],
			}
		}
    }
</script>

<style>
	.container{
		display: flex;
		justify-content: space-around;
	}

</style>

