<template>
  <v-app>
    <v-content>
      <Header />
      <nuxt />
      <Footer />
    </v-content>
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
