<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm6>
        <RecentBlogPost :blog-posts="blogPosts" />
      </v-flex>
    </v-layout>
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
