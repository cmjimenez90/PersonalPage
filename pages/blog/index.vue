<template>
  <v-container fluid>
    <v-layout wrap>
      <v-flex md4>
        <BlogFilter />
      </v-flex>
      <v-flex xs12 offset-md2 md4>
        <BlogList :blog-list="filteredBlogs" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BlogList from '~/components/blog/BlogList.vue'
import BlogFilter from '~/components/blog/BlogFilter.vue'

export default {
  components: {
    BlogList,
    BlogFilter
  },
  computed: {
    filteredBlogs: function() {
      return this.$store.getters['blogFilter/getFilteredBlogs']
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
