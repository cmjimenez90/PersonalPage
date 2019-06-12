<template>
  <v-container>
    <BlogPostListContainer />
  </v-container>
</template>

<script>
import BlogPostListContainer from '~/components/blog/BlogPostListContainer.vue'
export default {
  layout: 'default',
  components: {
    BlogPostListContainer
  },
  computed: {},
  async fetch({ store }) {
    await store.dispatch('blog/fetchBlogPosts')
    await store.dispatch('blog/fetchCategories')
    await store.dispatch('blog/fetchTags')
    await store.dispatch('blogFilter/initializeBlogFilter')
  }
}
</script>
