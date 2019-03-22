<template>
  <v-container />
</template>

<script>
export default {
  components: {},
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
