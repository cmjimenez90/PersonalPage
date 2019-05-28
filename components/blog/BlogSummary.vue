<template>
  <v-layout class="blog-summary" column>
    <div class="blog-heading">
      <span class="blog-category">
        {{ blogPost.categories[0].name }}
      </span>
      <h3> {{ blogPost.title }}</h3>
      <div class="blog-publish-date">
        <span>
          {{ publishDate }}
        </span>
        <br>
        <span>
          {{ publishTime }}
        </span>
      </div>
    </div>
    <p class="blog-short text-truncate">
      {{ blogPost.summary }}
    </p>
    <p class="blog-action" />
  </v-layout>
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
    },
    publishTime: function() {
      return moment(this.blogPost.published).format('hh:mm a')
    }
  }
}
</script>

<style lang="stylus" scoped>
.blog-summary
    color: var(--v-secondary-base)
    text-overflow: clip
.blog-heading
    font-size: 1.2em
    display: flex
    flex-flow: column
.blog-publish-date
    color: var(--v-accent-base)
    font-weight: 800
</style>
