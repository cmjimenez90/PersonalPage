<template>
  <v-app>
    <Header />
    <nuxt />
    <Footer />
  </v-app>
</template>

<script>
import Header from '~/components/main/Header.vue'
import Footer from '~/components/main/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
