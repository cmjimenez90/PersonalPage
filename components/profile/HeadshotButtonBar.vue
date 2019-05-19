<template>
  <v-layout>
    <v-flex v-for="link in imageLinks" :key="link.href" class="text-xs-center">
      <ImageLinkButton :href="link.href" :img-src="link.imgSrc" :img-src-alternate="imgSrcAlternate" />
    </v-flex>
  </v-layout>
</template>

<script>
import ImageLinkButton from '~/components/core/ImageLinkButton.vue'
export default {
  components: {
    ImageLinkButton
  },
  props: {
    imageLinks: {
      type: Array,
      required: true,
      default: function() {
        return []
      },
      validator: function(values) {
        values.every(element => {
          if (!element.href || !element.imgSrc || !element.imgSrcAlternate) {
            return false
          }
          return true
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
