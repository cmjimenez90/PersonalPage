<template>
  <v-card>
    <v-card-title>
      {{ BlogSummary.title }}
    </v-card-title>
    <v-img :src="BlogSummary.featured_image" />
    <v-card-text>
      {{ BlogSummary.summary }}
    </v-card-text>
    <v-card-actions>
      <v-btn nuxt :to="/blog/+BlogSummary.slug" flat>
        READ MORE
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
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
