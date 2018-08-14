<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    <ul class="footer">
      <li >
        <router-link to="/home" :class="{active : isActive('home')}">
          <i class="iconfont icon-shouye"></i>
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/hot" :class="{active : isActive('hot') }">
          <i class="iconfont icon-xihuan1"></i>
          <span>热点</span>
        </router-link>
      </li>
      <li>
        <router-link to="/info" :class="{active : isActive('info') }">
          <i class="iconfont icon-icon--"></i>
          <span>消息</span>
        </router-link>
      </li>
      <li>
        <router-link to="/user" :class="{active : isActive('user') }">
          <i class="iconfont icon-wode"></i>
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    isActive (name) {
      if (name === 'home') {
        return this.$route.path.indexOf(name) !== -1 || this.$route.path === '/'
      } else {
        return this.$route.path.indexOf(name) !== -1
      }
    }
  }
}
</script>
<style>
</style>
