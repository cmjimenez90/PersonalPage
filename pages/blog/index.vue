<template>
  <v-container>
    <v-layout>
      <v-flex sm4>
        <BlogPostFilter :blog-post="blogPost" @filter-change="updateBlogPostListContainer($event)" />
      </v-flex>
      <v-flex xs12 sm6>
        <BlogPostListContainer :blog-posts="filteredPost" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BlogPostListContainer from '~/components/blog/BlogPostListContainer.vue'
import BlogPostFilter from '~/components/blog/BlogPostFilter.vue'
export default {
  layout: 'default',
  components: {
    BlogPostListContainer,
    BlogPostFilter
  },
  data: function() {
    return {
      blogPost: this.$store.state.blog.list,
      filteredPost: this.$store.state.blog.list
    }
  },
  methods: {
    updateBlogPostListContainer(filteredPost) {
      this.filteredPost = filteredPost
    }
  },
  async fetch({ store }) {
    await store.dispatch('blog/fetchBlogPosts')
    await store.dispatch('blog/fetchCategories')
    await store.dispatch('blog/fetchTags')
  }
}
</script>
