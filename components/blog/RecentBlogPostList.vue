<template>
  <v-container>
    <v-layout
      wrap
      secondary
      lighten-2
    >
      <v-flex xs12>
        <v-toolbar
          class="primary
          darken-2
          white--text
          title"
        >
          <v-toolbar-title>RECENT POST</v-toolbar-title>
        </v-toolbar>
      </v-flex>
      <v-layout column>
        <v-flex v-for="(post,index) in sortedBlogPost" :key="index" class="pa-1">
          <BlogSummaryCard :blog-post="post" />
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>
<script>
import BlogSummaryCard from '~/components/blog/BlogSummaryCard.vue'
export default {
  components: {
    BlogSummaryCard
  },
  props: {
    blogPosts: {
      type: Array,
      default: () => {
        return []
      }
    },
    shownBlogCount: {
      type: Number,
      default: 3
    }
  },
  computed: {
    sortedBlogPost: function() {
      const sortedPost = this.blogPosts.slice(0).sort(function(a, b) {
        const currentDate = a.published
        const nextDate = b.published
        if (currentDate < nextDate) {
          return -1
        }
        if (currentDate > nextDate) {
          return 1
        }
        return 0
      })
      return sortedPost.slice(0, this.blogLimit).reverse()
    },
    blogLimit: function() {
      if (this.blogPosts.length >= this.shownBlogCount) {
        return this.shownBlogCount
      }
      return this.blogPosts.length
    }
  }
}
</script>
