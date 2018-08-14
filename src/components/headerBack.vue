<template>
    <div class="header">
      <span class="iconfont icon-fanhui myicon back" @click="$router.go(-1)"></span>
      {{title}}
    </div>

</template>

<script>
export default {
  name: 'headerBack',
  props: {
    title: {
      type: String,
      defult: '标题'
    }
  }
}
</script>

<style scoped>
.header{
  position: fixed;
  text-align: center;
  line-height: 45px;
  color: #ffffff;
  border-bottom: 1px solid #E4E4E4;
  width: 100%;
  z-index: 998;
  font-size: 19px;
  top: 0;
  left: 0;
  background: #10AEFF;
}
.back{
  position: absolute;
  left: 10px;
  line-height: 45px;
  font-size: 25px;
}
</style>
