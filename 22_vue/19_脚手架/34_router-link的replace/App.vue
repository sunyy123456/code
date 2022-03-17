<template>
	<div>
    <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--  
            replace:
              控制路由跳转时操作浏览器历史记录的模式
              浏览器的历史记录有两种写入方式：
                - push是追加历史记录, 路由跳转时候默认为push
                - replace是替换当前记录.
            完整开启replace是
              :replace="true",
            可以简写为 replace
          -->
          <router-link replace class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	// 安装router  npm i router
  import Banner from './components/Banner.vue'
	export default {
		name:"App",
		components: {
      Banner,
		}
	}
</script>

<style>

</style>