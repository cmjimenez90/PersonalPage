<template>
  <v-container fluid fill-height>
    <DualWindow>
      <template #window1>
        <BlogSummary v-for="post in blogPosts" :key="post.slug" :blog-post="post" />
      </template>
    </DualWindow>
  </v-container>
</template>

<script>
import DualWindow from '~/components/core/window/DualWindow.vue'
import BlogSummary from '~/components/blog/BlogSummary.vue'
export default {
  components: {
    DualWindow,
    BlogSummary
  },
  computed: {
    blogPosts: function() {
      return this.$store.state.blog.list
    }
  },
  async fetch({ store }) {
    await store.dispatch('blog/fetchBlogPosts')
    await store.dispatch('blog/fetchCategories')
    await store.dispatch('blog/fetchTags')
    await store.dispatch('blogFilter/initializeBlogFilter')
  }
}
</script>
