<template>
  <v-container fluid class="page-container">
    <v-layout :column="$vuetify.breakpoint.smAndDown">
      <v-flex v-show="$vuetify.breakpoint.mdAndUp" shrink mr-2>
        <BlogPostFilter />
      </v-flex>
      <v-flex v-show="$vuetify.breakpoint.smAndDown">
        <HorizontalBlogPostFilter />
      </v-flex>
      <v-flex>
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
.page-container
  height: 100vh
  margin-bottom: 2rem
</style>
