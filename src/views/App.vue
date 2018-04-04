<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    // 暂时跳转到首页吧
    const isLogin = true
    if (isLogin) {
      this.$router.push({
        name: 'timi-home'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
#app {
  width: 100%;
  height: 100%;
  position relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
