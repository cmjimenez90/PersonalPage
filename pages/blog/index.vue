<template>
  <v-container fluid>
    <RecentBlogPost :blog-posts="blogPosts" /> 
  </v-container>
</template>

<script>
import RecentBlogPost from '~/components/blog/RecentBlogPost.vue'

export default {
  components: {
    RecentBlogPost
  },
  computed: {
    blogPosts: function() {
      return this.$store.state.blog.list
    }
  },
  async fetch({ store }) {
    await store.dispatch('blog/fetchBlogPosts')
  }
}
</script>
