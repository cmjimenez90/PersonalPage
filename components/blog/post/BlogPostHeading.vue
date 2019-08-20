<template>
  <v-layout column secondary--text text--darken-1>
    <h1>{{ post.title }}</h1>
    <span class="publish-date pl-2">
      Published: {{ publishDate }}
    </span>
  </v-layout>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    publishDate: function() {
      return moment(this.post.published).format('LLL')
    },
    authorName: function() {
      return `${this.post.author.first_name} ${this.post.author.last_name}`
    }
  }
}
</script>

<style lang="stylus" scoped>
.publish-date
  layout: block
</style>
