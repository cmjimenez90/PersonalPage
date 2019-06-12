<template>
  <v-app class="primary darken-1">
    <PageHeader />
    <v-content>
      <v-container fluid fill-height>
        <nuxt />
      </v-container>
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

<style lang="stylus" scoped>
.closed-heading
  display: flex
  flex: columns
  background-color: var(--v-secondary-base)
  writing-mode: vertical-lr
  text-orientation: upright
  cursor: pointer
  text-transform: uppercase
  text-align: center
.heading-text, .heading-icon
  font-size: 2rem
  font-weight: 900
  color: var(--v-primary-base)
.heading-icon
  padding-top: 2rem
  margin-bottom: auto
.heading-text
  margin-bottom: auto
</style>
