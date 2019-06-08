<template>
  <v-layout fill-height class="togglable-sidebar" @click="processClick">
    <slot v-if="isOpen" name="content">
      TEMPORARY CONTENT
    </slot>
    <slot v-if="!isOpen" name="closed-content">
      CLOSED CONTENT
    </slot>
  </v-layout>
</template>

<script>
export default {
  props: {},
  data: function() {
    return {
      isOpen: true
    }
  },
  methods: {
    processClick: function() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        this.isOpen = true
      } else {
        this.isOpen = !this.isOpen
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.togglable-sidebar
  height: 100%
</style>
