
<template>
  <v-layout @mousemove.stop="mousemove" @mouseup.left="mouseup">
    <div id="window_1" :style="{width: currentWidth}">
      <slot class="window" name="window1">
        WINDOW 1
      </slot>
    </div>
    <div
      class="window_divider"
      @mousedown.left="mousedown"
    >
      <v-icon class="secondary--text">
        swap_horiz
      </v-icon>
    </div>
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
      isMoving: false,
      currentWidth: '400px',
      minWidth: 350
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
        if (xPos >= this.minWidth) {
          this.currentWidth = xPos + 'px'
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
#window_2
    flex: 1 1 auto
    height: 100%
.window_divider
    height: 100%
    cursor: pointer
    display: flex
    align-items: center
.window_divider:hover
      background-color: var(--v-primary-darken2)
</style>
