<template>
  <v-container fluid>
    <v-layout>
      <v-flex shrink mr-2>
        <BlogPostFilter />
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
export default {
  layout: 'default',
  components: {
    BlogPostListContainer,
    BlogPostFilter
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
