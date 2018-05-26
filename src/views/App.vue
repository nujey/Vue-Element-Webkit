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
    this.$router.push({
      name: 'module'
    })
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
  color: #333;
}
</style>
