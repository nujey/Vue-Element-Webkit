<template>
  <div>
    <input type="text" v-model="showArrayInput" placeholder="请输入内容">
    <h1 v-if="showStatus">根据输入来加载显示不同模块js的内容{{showArrayInput}}</h1>
    <p>{{showtext}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showArrayInput: '12345', // 输入的字符串
      showStatus: true,
      showtext: ''
    }
  },
  watch: {
    showArrayInput: function (val) {
      this.handleInput()
    }
  },
  methods: {
    hanldeArray: function(array) {
      return array.includes(3)
    },
    /**
     * 输入的时候
     */
    handleInput: function() {
      let arrayStatus = this.showArrayInput
      if (this.hanldeArray(arrayStatus)) {
        import('./fs.js').then(({dog}) => {
          if (dog.name === 'dog') {
            this.showStatus = true
            this.showtext = dog.name + dog.age
          }
        })
      } else {
        import('./gs.js').then(({cat}) => {
          if (cat === 'cat') {
            this.showStatus = false
            this.showtext = cat
          }
        })
      }
    }
  }
}
</script>

<style>
  input {
    width: 200px;
    height: 40px;
    border: 1px solid #f00;
  }
</style>
