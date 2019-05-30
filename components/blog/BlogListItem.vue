<template>
  <v-list-tile @click="$emit('select-blog-item',{'slug': blogPost.slug})">
    <v-list-tile-content>
      <v-list-tile-sub-title>
        {{ blogPost.categories[0].name }}
      </v-list-tile-sub-title>
      <v-list-tile-title>
        {{ blogPost.title }}
      </v-list-tile-title>
      <v-list-tile-sub-title>
        {{ blogPost.summary }}
      </v-list-tile-sub-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-list-tile-action-text>{{ publishDate }}</v-list-tile-action-text>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    blogPost: {
      type: Object,
      required: true
    }
  },
  computed: {
    publishDate: function() {
      return moment(this.blogPost.published).format('MMM do, YYYY')
    }
  }
}
</script>

<style lang="stylus" scoped>
.blog-list-item
  color: var(--v-secondary-base)
</style>
