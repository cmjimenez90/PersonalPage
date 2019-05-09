<template>
  <article>
    <v-layout justify-space-around py-2>
      <v-flex sm3>
        <BlogFilter />
      </v-flex>
      <v-flex sm8>
        <BlogList :blog-list="blogPosts" />
      </v-flex>
    </v-layout>
  </article>
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
    blogPosts: function() {
      return this.$store.getters['blogList/getBlogPosts']
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
