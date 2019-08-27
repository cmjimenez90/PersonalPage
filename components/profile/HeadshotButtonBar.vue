<template>
  <v-layout row justify-center>
    <IconLinkButton
      v-for="link in imageLinks"
      :key="link.href"
      :href="link.href"
      :img-src="link.imgSrc"
      :img-src-alternate="link.imgSrcAlternate"
    />
  </v-layout>
</template>

<script>
import IconLinkButton from '~/components/core/button/IconLinkButton.vue'

export default {
  components: {
    IconLinkButton
  },
  props: {
    imageLinks: {
      type: Array,
      required: true,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
