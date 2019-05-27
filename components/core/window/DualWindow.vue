
<template>
  <v-layout @mousemove="mousemove" @mouseup.left="mouseup">
    <div id="window_1" />
    <div
      id="window_divider"  
      @mousedown.left="mousedown"
    />
    <div id="window_2" />
  </v-layout>
</template>

<script>
export default {
  data: function() {
    return {
      isMoving: false
    }
  },
  methods: {
    mousedown(event) {
      this.isMoving = true
    },
    mouseup(event) {
      this.isMoving = false
    },
    mousemove(event) {
      if (this.isMoving) {
        const xPos = event.clientX
        const window1 = document.getElementById('window_1')
        window1.style.width = xPos - 5 + 'px'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
#window_1, #window_2
    border: 1px red dotted
#window_1
    width: 20%
#window_2
    flex: 1 1 auto
#window_divider
    align-self: center
    height: 20%
    width: 5px
    background-color: black
    cursor: pointer
</style>
