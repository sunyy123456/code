<template>
  <div class="swiper-container" id="floor1Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    // 监听bannerList数据的变化，因为这条数据发生过变化---由空数组变为四个元素的数组
    // 如果执行handler方法，代表组件实例身上这个属性已经有了
    // 当前这个函数执行，只能保证bannerList数据已经有了，但是没办法保证v-for已经执行结束了
    // v-for执行完毕，才有结构【而在watch中是没办法保证v-for执行完毕的】
    list: {
      immediate: true,
      handler(newValue, oldValue) {
        // 当执行该回调的时候，保证服务器数据已经回来了,v-for已经执行完毕了（结构一定有了）
        this.$nextTick(() => {
          var mySwiper = new Swiper(".swiper-container", {
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              // 点击小球的也可以切换图片
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>