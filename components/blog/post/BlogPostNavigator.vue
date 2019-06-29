<template>
  <v-layout column>
    <h3 class="title text-xs-center secondary--text text--darken-1">
      More Post
    </h3>
    <v-layout justify-space-between wrap align-center>
      <BlogPostLink v-if="previousPost" :link="/blog/+previousPost.slug" :text="previousPost.title" prev />
      <BlogPostLink v-if="nextPost" :link="/blog/+nextPost.slug" :text="nextPost.title" />
    </v-layout>
  </v-layout>
</template>

<script>
import BlogPostLink from '~/components/blog/post/BlogPostLink.vue'
export default {
  components: { BlogPostLink },
  props: {
    currentPostSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    previousPost: function() {
      return this.$store.getters['blog/previousBlogPost'](this.currentPostSlug)
    },
    nextPost: function() {
      return this.$store.getters['blog/nextBlogPost'](this.currentPostSlug)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
