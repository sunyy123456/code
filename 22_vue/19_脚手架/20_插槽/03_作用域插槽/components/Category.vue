<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <!-- 将games数据传递给插槽的使用者即App -->
      <slot :games="games">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
      
  </div>
</template>

<script>
    export default {
        name:"Category",
        props:["listData", 'title'],
        data(){
			return{
				games:['贪吃蛇', '穿越火线', '植物大战僵尸', '王者荣耀'],
			}
		}

    }
</script>

<style>
    .category{
        background-color: skyblue;
        height: 300px;
        width: 200px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
    img, video{
        width:100%
    }
</style>