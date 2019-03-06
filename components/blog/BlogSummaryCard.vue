<template>
  <v-card>
    <v-card-title class="primary white--text">
      <h3>{{ BlogPost.title }}</h3>
    </v-card-title>
    <v-img v-if=" BlogPost.featured_image" :src=" BlogPost.featured_image" max-height="150" contain />
    <v-card-text>
      <v-layout column>
        <v-flex>
          <p>
            {{ BlogPost.summary }}
          </p>
        </v-flex>
        <v-flex>
          <BlogSummaryChipContainer :items=" BlogPost.tags" />
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import BlogSummaryChipContainer from '~/components/blog/BlogSummaryChipContainer.vue'
export default {
  components: {
    BlogSummaryChipContainer
  },
  props: {
    blogPost: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data: function() {
    return {
      BlogPost: this.blogPost
    }
  }
}
</script>

<style>
</style>
