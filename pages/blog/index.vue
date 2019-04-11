<template>
  <article>
    <v-layout v-if="this.$vuetify.breakpoint.mdAndUp" justify-space-around py-2>
      <v-flex sm3>
        <BlogFilter />
      </v-flex>
      <v-flex sm8>
        <BlogList :blog-list="blogPosts" />
      </v-flex>
    </v-layout>
    <v-layout v-else wrap justify-center py-2>
      <v-flex xs12>
        <HorizontalBlogFilter />
      </v-flex>
      <v-flex xs12>
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
