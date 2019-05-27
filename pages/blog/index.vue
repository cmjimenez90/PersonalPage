<template>
  <v-container fluid fill-height>
    <DualWindow />
  </v-container>
</template>

<script>
import DualWindow from '~/components/core/window/DualWindow.vue'
export default {
  components: {
    DualWindow
  },
  async fetch({ store }) {
    await store.dispatch('blog/fetchBlogPosts')
    await store.dispatch('blog/fetchCategories')
    await store.dispatch('blog/fetchTags')
    await store.dispatch('blogFilter/initializeBlogFilter')
  }
}
</script>
