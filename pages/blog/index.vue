<template>
  <v-container />
</template>

<script>
export default {
  layout: 'blog',
  data: function() {},
  computed: {},
  async fetch({ store }) {
    await store.dispatch('blog/fetchBlogPosts')
    await store.dispatch('blog/fetchCategories')
    await store.dispatch('blog/fetchTags')
    await store.dispatch('blogFilter/initializeBlogFilter')
  }
}
</script>

<style lang="stylus" scoped>
</style>
