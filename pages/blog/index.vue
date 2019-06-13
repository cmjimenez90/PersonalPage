<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <BlogPostListContainer />
      </v-flex>
    </v-layout>
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
  }
}
</script>
