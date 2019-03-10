<template>
  <v-card>
    <v-card-title
      class="primary
          darken-2
          white--text
          title
          "
      primary-title
    >
      RECENT POST
    </v-card-title>
    <v-layout v-if="!carousel">
      <v-container fluid>
        <v-layout wrap>
          <v-flex v-for="(post,index) in sortedBlogPost" :key="index">
            <BlogSummaryCard :blog-post="post" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
    <v-layout v-else>
      <v-flex>
        <v-container>
          <v-carousel hide-delimiters light>
            <v-carousel-item v-for="(post,index) in sortedBlogPost" :key="index">
              <BlogSummaryCard :blog-post="post" />
            </v-carousel-item>
          </v-carousel>
        </v-container>
      </v-flex>
    </v-layout>
  </v-card>
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
    carousel: {
      type: Boolean,
      default: false
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
