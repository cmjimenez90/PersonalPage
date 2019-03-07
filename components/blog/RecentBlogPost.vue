<template>
  <v-container>
    <v-layout
      wrap
      align-center
      fill-height
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
        <v-flex
          v-for="(post,index) in blogPosts"
          :key="index"
          xs12
          sm6
          lg5
          class="pa-1"
        >
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
    }
  }
}
</script>
