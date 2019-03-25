<template>
  <v-container>
    <BlogList :blog-list="blogPosts" />
  </v-container>
</template>

<script>
import BlogList from '~/components/blog/BlogList.vue'
export default {
  components: {
    BlogList
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
