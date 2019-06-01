<template>
  <li @click="$emit('click')">
    <v-layout column px-2 pt-1>
      <span class="text-uppercase font-italic">
        {{ blogPost.categories[0].name }}
      </span>
      <v-layout justify-space-between>
        <h3 class="title">
          {{ blogPost.title }}
        </h3>
        <span class="subheading accent--text ">
          {{ publishDate }}
        </span>
      </v-layout>
      <p class="mb-1">
        {{ blogPost.summary }}
      </p>
    </v-layout>
  </li>
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
</style>
