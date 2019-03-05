<template>
  <v-container>
    <body>
      <h1>{{ post.title }}</h1>
      <section v-html="post.body" />
    </body>
  </v-container>
</template>

<script>
export default {
  computed: {
    post() {
      const postBySlug = this.$store.getters['blog/blogPostBySlug']
      return postBySlug(this.$route.params.title)
    }
  },
  async fetch({ store }) {
    await store.dispatch('blog/fetchBlogPosts')
  }
}
</script>

<style>
</style>
