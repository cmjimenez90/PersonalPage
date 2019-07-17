<template>
  <v-container>
    <v-layout :column="$vuetify.breakpoint.smAndDown">
      <v-flex v-show="$vuetify.breakpoint.mdAndUp" md3>
        <BlogPostFilter />
      </v-flex>
      <v-flex v-show="$vuetify.breakpoint.smAndDown">
        <HorizontalBlogPostFilter />
      </v-flex>
      <v-flex md7 offset-md1>
        <BlogPostListContainer :blog-posts="filteredPost" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BlogPostListContainer from '~/components/blog/BlogPostListContainer.vue'
import BlogPostFilter from '~/components/blog/BlogPostFilter.vue'
import HorizontalBlogPostFilter from '~/components/blog/HorizontalBlogPostFilter.vue'
export default {
  layout: 'default',
  head() {
    return {
      title: 'Blog List',
      titleTemplate: '%s | Carlos Jimenez',
      meta: [{ hid: 'description', name: 'description', content: 'Blog List' }]
    }
  },
  components: {
    BlogPostListContainer,
    BlogPostFilter,
    HorizontalBlogPostFilter
  },
  computed: {
    filteredPost: function() {
      return this.$store.getters['blog/filteredBlogList']
    }
  },
  async fetch({ store }) {
    await store.dispatch('blog/initializeBlogStore')
  }
}
</script>

<style lang="stylus" scoped>
</style>
