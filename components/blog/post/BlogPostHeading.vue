<template>
  <v-layout column secondary--text text--darken-1>
    <h1>{{ post.title }}</h1>
    <h2 class="pl-2">
      Published: <span>
        {{ publishDate }}
      </span>
    </h2>
    <h2 class="pl-2 mb-2">
      Author: {{ authorName }}
    </h2>
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
      return moment(this.post.published).format('MMM do, YYYY')
    },
    authorName: function() {
      return `${this.post.author.first_name} ${this.post.author.last_name}`
    }
  }
}
</script>

<style>
</style>
