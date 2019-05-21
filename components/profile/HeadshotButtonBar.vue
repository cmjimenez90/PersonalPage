<template>
  <v-layout row>
    <v-flex v-for="link in imageLinks" :key="link.href" class="text-xs-center" py-2>
      <ImageLinkButton :href="link.href" :img-src="link.imgSrc" :img-src-alternate="link.imgSrcAlternate" />
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
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
