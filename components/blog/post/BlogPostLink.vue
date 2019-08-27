<template>
  <v-btn flat color="primary" class="outline-btn font-weight-bold secondary--text" nuxt :to="link">
    <template v-if="prev">
      <v-icon>navigate_before</v-icon> {{ text }}
    </template>
    <template v-else>
      {{ text }}<v-icon>navigate_next</v-icon>
    </template>
  </v-btn>
</template>

<script>
export default {
  props: {
    link: { type: String, required: true },
    text: {
      type: String,
      required: true
    },
    prev: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.outline-btn
  border-bottom: .5rem solid var(--v-accent-base)
</style>
