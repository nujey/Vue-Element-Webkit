<template>
  <div></div>  
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
      this.$ajax({
        url: '/cc',
        method: 'GET'
      }).then((res) => {
        // console.log(res.data)
      })
      // 我们还可以这么写
      this.$ajax.get('/cc').then((res) => {
        console.log(res.data)
      })
    }
  }
}
</script>

