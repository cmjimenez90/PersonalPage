<template>
  <v-container fluid fill-height>
    <DualWindow>
      <template #window1>
        <BlogList :blog-list="blogPosts" />
      </template>
      <template #window2>
        <IFrameSection src="blog/copy-example-post" />
      </template>
    </DualWindow>
  </v-container>
</template>

<script>
import DualWindow from '~/components/core/window/DualWindow.vue'
import BlogList from '~/components/blog/BlogList.vue'
import IFrameSection from '~/components/core/IFrameSection.vue'
export default {
  components: {
    DualWindow,
    BlogList,
    IFrameSection
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
