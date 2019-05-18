<template>
  <v-container fluid>
    <v-layout wrap>
      <v-flex v-if="$vuetify.breakpoint.mdAndUp" md4>
        <BlogFilter />
      </v-flex>
      <v-flex v-else xs12>
        <ExpandingBlogFilter />
      </v-flex>
      <v-flex xs12 offset-md1 md6>
        <BlogList :blog-list="filteredBlogs" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BlogList from '~/components/blog/BlogList.vue'
import BlogFilter from '~/components/blog/BlogFilter.vue'
import ExpandingBlogFilter from '~/components/blog/ExpandingBlogFilter.vue'

export default {
  components: {
    BlogList,
    BlogFilter,
    ExpandingBlogFilter
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
