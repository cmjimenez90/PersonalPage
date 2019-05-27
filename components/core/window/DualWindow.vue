
<template>
  <v-layout @mousemove="mousemove" @mouseup.left="mouseup">
    <div id="window_1">
      <slot class="window" name="window1">
        WINDOW 1
      </slot>
    </div>
    <div
      id="window_divider"  
      @mousedown.left="mousedown"
    />
    <div id="window_2">
      <slot class="window" name="window2">
        WINDOW 2
      </slot>
    </div>
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
#window_1
    width: 20%
#window_2
    flex: 1 1 auto
#window_divider
    align-self: center
    height: 90%
    width: 5px
    border-right: 1px black solid
    cursor: pointer
.window
    overflow: hidden
    text-overflow: clip
    white-space: nowrap
</style>
