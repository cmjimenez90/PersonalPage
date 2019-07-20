<template>
  <v-container>
    <v-layout column>
      <PostHeading :post="post" />
      <v-divider class="mb-2 accent" />
      <PostContent :post="post" class="mb-3" />
      <PostNavigator :current-post-slug="post.slug" />
    </v-layout>
  </v-container>
</template>

<script>
import PostContent from '~/components/blog/post/BlogPostContent.vue'
import PostNavigator from '~/components/blog/post/BlogPostNavigator.vue'
import PostHeading from '~/components/blog/post/BlogPostHeading.vue'
export default {
  layout: 'default',
  head() {
    return {
      title: this.post.title,
      titleTemplate: '%s | Carlos Jimenez',
      meta: [
        { hid: 'description', name: 'description', content: this.post.summary }
      ]
    }
  },
  components: {
    PostContent,
    PostNavigator,
    PostHeading
  },
  data: function() {
    return {
      post: {}
    }
  },
  async asyncData({ params, error, store, payload }) {
    if (payload) {
      return { post: payload }
    } else {
      return { post: await store.getters['blog/blogPostBySlug'](params.slug) }
    }
  },
  async fetch({ store }) {
    await store.dispatch('blog/initializeBlogStore')
  }
}
</script>

<style lang="stylus" scoped>
.heading-divider
  width: 100%
  height: 5px
  border: 1px solid red
</style>
