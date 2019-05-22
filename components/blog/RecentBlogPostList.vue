<template>
  <v-layout column>
    <v-flex mb-2>
      <v-toolbar class="list-title">
        <v-toolbar-title><h3>{{ title }}</h3></v-toolbar-title>
      </v-toolbar>
    </v-flex>
    <v-flex v-for="(post,index) in sortedBlogPost" :key="index" class="mb-2">
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
    blogPosts: {
      type: Array,
      default: () => {
        return []
      }
    },
    shownBlogCount: {
      type: Number,
      default: 3
    },
    title: {
      type: String,
      required: true
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

<style lang="stylus" scoped>
.list-title
  background-color: var(--v-secondary-base)
  color: var(--v-primary-base)
</style>
