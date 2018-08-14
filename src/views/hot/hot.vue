<template>
    <div class="hot">
      <headerBack title="热点"></headerBack>
      <div class="text_center">
        <p>现在时间：{{ now }}</p>
        <p>距离2019年剩余：{{surplus}}</p>
      </div>
    </div>
</template>

<script>
import headerBack from '../../components/headerBack'
export default {
  name: 'hot',
  data () {
    return {
      now: '',
      surplus: ''
    }
  },
  components: {
    headerBack
  },
  mounted () {
    this.time()
    this.handleTime()
    this.init(0)
  },
  methods: {
    time () {
      var now = new Date()
      var yell = now.getFullYear()
      var m = now.getMonth() + 1
      var d = now.getDate()
      var h = now.getHours()
      var f = now.getMinutes()
      var s = now.getSeconds()
      if (m < 10) {
        m = '0' + m
      }
      if (d < 10) {
        d = '0' + d
      }
      if (h < 10) {
        h = '0' + h
      }
      if (f < 10) {
        f = '0' + f
      }
      if (s < 10) {
        s = '0' + s
      }
      this.now = yell + '-' + m + '-' + d + '  ' + h + ':' + f + ':' + s
      setTimeout(this.time, 1000)
    },
    handleTime () {
      var n = new Date()
      var nowTime = n.getTime()
      var d = new Date('2019.1.1')
      var endTime = d.getTime()
      var Surplus = endTime - nowTime
      var sD = Math.floor(Surplus / 1000 / 60 / 60 / 24)
      var sH = Math.floor(Surplus / 1000 / 60 / 60 / 24 % 24)
      var sF = Math.floor(Surplus / 1000 / 60 % 60)
      var sS = Math.floor(Surplus / 1000 % 60)
      this.surplus = sD + '天' + this.noOne(sH) + '时' + this.noOne(sF) + '分' + this.noOne(sS) + '秒'
      setTimeout(this.handleTime, 1000)
    },
    noOne (k) {
      if (k < 10) {
        k = '0' + k
      }
      return k
    },
    init () {
      function Person () {}
      Person.prototype.name = 'ZSH'
      Person.prototype.age = '20'
      Person.prototype.sayName = function () {
        return this.name
      }
      console.log(Object.keys(Person.prototype))
      // var person1 = new Person()
      // person1.sayName()
      ceeateFunction()
      function ceeateFunction () {
      }
    }
  }
}
</script>

<style scoped>

</style>
