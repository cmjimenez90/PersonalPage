<template>
  <v-card>
    <v-card-title class="primary white--text">
      <h3>{{ BlogSummary.title }}</h3>
    </v-card-title>
    <v-img :src="BlogSummary.featured_image" />
    <v-card-text>
      <v-layout column>
        <v-flex>
          <p>{{ BlogSummary.summary }}</p>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions class="secondary lighten-4">
      <v-btn nuxt :to="/blog/+BlogSummary.slug" flat>
        READ
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  components: {},
  props: {
    blogSummary: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data: function() {
    return {
      BlogSummary: this.blogSummary
    }
  }
}
</script>

<style>
</style>
