<template>
  <v-container>
    <v-layout>
      <section class="post-content">
        <h1>{{ post.title }}</h1>
        <section v-html="post.body" />
      </section>
    </v-layout>
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
