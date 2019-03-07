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
          <ChipContainer :items="BlogPost.tags" heading="Tags:" />
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions class="secondary lighten-4">
      <v-btn nuxt :to="/blog/+BlogPost.slug" flat>
        READ
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import ChipContainer from '~/components/blog/ChipContainer.vue'
export default {
  components: {
    ChipContainer
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
