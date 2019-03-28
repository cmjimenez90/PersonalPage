<template>
  <v-layout column>
    <v-flex xs12>
      <v-toolbar
        class="primary
          darken-2
          white--text
          title"
      >
        <v-toolbar-title>
          Blog Post
        </v-toolbar-title>
      </v-toolbar>
    </v-flex>
    <v-flex v-for="post in blogPostList" :key="post.name" class="py-2">
      <BlogSummaryCard :blog-post="post" />
    </v-flex>
  </v-layout>
</template>

<script>
import BlogSummaryCard from '~/components/blog/BlogSummaryCard.vue'
export default {
  components: {
    BlogSummaryCard
  },
  props: {
    blogList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: function() {
    return {
      blogPostList: this.blogList
    }
  }
}
</script>

<style>
</style>
