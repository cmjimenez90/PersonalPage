<template>
  <v-app>
    <PageHeader />
    <v-content>
      <nuxt />
    </v-content>
    <PageFooter />
  </v-app>
</template>

<script>
import PageHeader from '~/components/core/PageHeader.vue'
import PageFooter from '~/components/core/PageFooter.vue'
export default {
  components: {
    PageHeader,
    PageFooter
  }
}
</script>
