<template>
  <v-layout column>
    <div v-if="!isOnlyPost">
      <h3 class="title text-xs-center secondary--text text--darken-1">
        Read Another Post
      </h3>
      <v-layout :class="linkLayout">
        <BlogPostLink v-if="previousPost" :link="/blog/+previousPost.slug" prev />
        <BlogPostLink v-if="nextPost" :link="/blog/+nextPost.slug" />
      </v-layout>
    </div>
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
    isOnlyPost: function() {
      if (!this.previousPost && !this.nextPost) return true
      return false
    },
    previousPost: function() {
      return this.$store.getters['blog/previousBlogPost'](this.currentPostSlug)
    },
    nextPost: function() {
      return this.$store.getters['blog/nextBlogPost'](this.currentPostSlug)
    },
    linkLayout: function() {
      if (this.$vuetify.breakpoint.xsOnly) {
        return {
          column: true,
          'align-center': true
        }
      }
      return {
        'justify-space-between': true,
        'align-center': true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
