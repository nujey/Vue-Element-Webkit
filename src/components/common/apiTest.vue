<template>
  <div>111</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    this.apiTest()
  },
  methods: {
    apiTest() {
      // 如果是没有进行封装的axios 我们在请求的时候
      // 我们还可以这么写
      this.$axios.get('/cc').then((res) => {
        // console.log(res.data)
      })
    }
  }
}
</script>
