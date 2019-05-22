<template>
  <v-btn icon :href="href" target="_blank">
    <v-avatar tile>
      <v-img :src="imgSrc" contain :alt="imgSrcAlternate" />
    </v-avatar>
  </v-btn>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: false,
      default: ''
    },
    imgSrc: {
      type: String,
      required: false,
      default: ''
    },
    imgSrcAlternate: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
