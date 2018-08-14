<template>
  <div class="swiper-container vue-swiper" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-on:click="imgHide" v-for="x in imgData" :key="x.index">
        <!--<p>{{x}}</p>-->
       <img :src="x" >
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" ref="pagination"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'

export default{
  props: {
    imgData: {
      type: Array
    },
    active: {
      type: Number
    }
  },
  data () {
    return {
      mySwiper: ''
    }
  },
  mounted () {
    console.log(this.active)
    this.mySwiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      centeredSlides: true,
      autoplay: 5000,
      autoplayDisableOnInteraction: false,
      observer: true,
      observeParents: true
    })
  },
  methods: {
    imgHide () {
      this.$emit('imgHide', false)
    }
  },
  watch: {
    active (newValue, oldValue) {
      this.mySwiper.slideTo(newValue, 1000)
    }
  }

}
</script>

<style type="text/css">
  .swiper-container img{
    width: 100%;
  }

  .vue-swiper .swiper-pagination-bullet{
    background-color: #fff;
  }
  .vue-swiper .swiper-pagination-white .swiper-pagination-bullet-active{
    background-color: #fff;
  }
  /*查看图片放大*/
  .look_img{
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    left: 0;
    top: 0;
    background: rgba(0,0,0,1);
    z-index: 1000;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    /*padding: 50px 0;*/
  }
  .look_img .swiper-slide{
    color: #ffffff;
    text-align: center;
    height: 100%;
    position: relative;
  }
  .look_img .swiper-slide img{
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0,-50%);
  }
</style>
