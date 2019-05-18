<template>
  <v-menu :close-on-content-click="false" min-width="60vw" max-width="60vw">
    <template v-slot:activator>
      <v-btn color="secondary darken-2" class="secondary--text text--lighten-4 font-weight-bold">
        Filter
      </v-btn>
    </template>
    <BlogFilter />
  </v-menu>
</template>

<script>
import BlogFilter from '~/components/blog/BlogFilter.vue'

export default {
  components: {
    BlogFilter
  },
  data: function() {
    return {
      showMenu: false
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
