<template>
  <v-btn :href="href" flat target="">
    <v-img :src="imgSrc" height="35" width="125" contain />
  </v-btn>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
</style>
