<template>
    <div id="root">
		<button @click="getStudents">获取学生信息</button>
		<button @click="getCars">获取汽车信息</button>
	</div>
</template>

<script>
	/*
		安装axios    npm i axios
		引入axios
	*/ 
	import axios from "axios"
    export default {
        name:"App",  // name要记得写，而且名字一般都是文件名
		methods: {
			getStudents(){
				// public文件夹中所含有的均为本服务器8080所拥有的资源，只有当要所访问的资源在本服务器中没有时，才会访问代理服务器
				// 使用方法二的时候，所设置的前缀应该放在端口号后面
				axios.get("http://localhost:8080/api/students").then(
					response => {
						console.log(response.data);
					},
					error => {
						console.warn(error.message);
					}
				)
			},
			getCars(){
				// public文件夹中所含有的均为本服务器8080所拥有的资源，只有当要所访问的资源在本服务器中没有时，才会访问代理服务器
				// 使用方法二的时候，所设置的前缀应该放在端口号后面
				axios.get("http://localhost:8080/demo/cars").then(
					response => {
						console.log(response.data);
					},
					error => {
						console.warn(error.message);
					}
				)
			},
		},
    }
</script>
