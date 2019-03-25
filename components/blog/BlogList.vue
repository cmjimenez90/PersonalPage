<template>
  <v-layout column>
    <v-flex v-for="post in blogPostList" :key="post.name">
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
