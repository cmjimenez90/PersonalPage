<template>
  <v-app>
    <Header />
    <nuxt />
  </v-app>
</template>

<script>
import Header from '~/components/main/Header.vue'
export default {
  components: {
    Header
  }
}
</script>
