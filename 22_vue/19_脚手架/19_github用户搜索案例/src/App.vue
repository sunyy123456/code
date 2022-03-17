<template>
	<div class="container">
		<Search/>
		<List/>
	</div>
</template>

<script>
	// import axios from "axios"
	import Search from "./components/Search.vue"
	import List from "./components/List.vue"
    export default {
        name:"App",  // name要记得写，而且名字一般都是文件名
		components:{
			Search,
			List
		},
    }
</script>

