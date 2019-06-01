<template>
  <iframe class="frame-style" :src="src" :height="height" :width="width" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: false,
      default: 'about:blank'
    },
    height: {
      type: String,
      required: false,
      default: '100%'
    },
    width: {
      type: String,
      required: false,
      default: '100%'
    }
  }
}
</script>

<style lang="stylus" scoped>
.frame-style
  border: none
</style>
