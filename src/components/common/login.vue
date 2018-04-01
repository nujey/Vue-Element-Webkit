<template>
  <div class="login">
    <h3 class="welcome" @click="handleClick">欢迎来到闪电的世界</h3>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: 'login'
    }
  },
  methods: {
    handleClick() {
      axios.get('/cc').then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .login {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url('../../assets/images/panda-bg1.png') no-repeat 0 0;
    background-size: cover;
    .welcome {
      margin: 50px 0 0 0;
      font-size: 30px;
    }
  }
</style>
