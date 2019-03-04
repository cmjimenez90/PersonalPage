<template>
  <v-container justify-center align-center fill-height>
    <BlogSummaryCard v-for="post in blogPosts" :key="post.title" :blog-summary="post" />
  </v-container>
</template>

<script>
import BlogSummaryCard from '~/components/blog/BlogSummaryCard'

export default {
  components: {
    BlogSummaryCard
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
