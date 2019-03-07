<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm6>
        <BlogSummaryCard v-for="post in blogPosts" :key="post.title" :blog-post="post" class="my-2" />
      </v-flex>
    </v-layout>
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
