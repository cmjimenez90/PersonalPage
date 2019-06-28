<template>
  <v-layout column>
    <v-layout secondary--text text--darken-1 justify-space-between wrap>
      <v-layout column>
        <h1>{{ post.title }}</h1>
        <h2 class="ml-2">
          Author: {{ authorName }}
        </h2>
      </v-layout>
      <v-layout justify-end>
        <h3>
          Published: <span>
            {{ publishDate }}
          </span>
        </h3>
      </v-layout>
    </v-layout>
    <v-divider />
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
