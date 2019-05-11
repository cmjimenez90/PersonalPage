<template>
  <article>
    <v-layout justify-space-around py-2 wrap>
      <v-flex v-if="$vuetify.breakpoint.mdAndUp" md3>
        <BlogFilter />
      </v-flex>
      <v-flex v-else xs12 pb-2>
        <HorizontalBlogFilter />
      </v-flex>
      <v-flex xs12 md8>
        <BlogList :blog-list="blogPosts" />
      </v-flex>
    </v-layout>
  </article>
</template>

<script>
import BlogList from '~/components/blog/BlogList.vue'
import BlogFilter from '~/components/blog/BlogFilter.vue'
import HorizontalBlogFilter from '~/components/blog/HorizontalBlogFilter.vue'

export default {
  components: {
    BlogList,
    BlogFilter,
    HorizontalBlogFilter
  },
  computed: {
    blogPosts: function() {
      return this.$store.getters['blogFilter/getFilteredBlogPosts']
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
