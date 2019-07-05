<template>
  <li>
    <v-card class="post-item primary secondary--text" nuxt :to="linkToPost">
      <v-layout column>
        <div class="post-heading secondary primary--text">
          <span class="post-category">
            {{ post.categories[0].name }}
          </span>
          <span class="post-published-date">
            {{ publishDate }}
          </span>
        </div>
        <div class="post-title">
          <h3>{{ post.title }}</h3>
        </div>
        <div class="post-body">
          <p>{{ post.summary }}</p>
        </div>
        <div class="post-tags">
          <v-chip
            v-for="tag in post.tags"
            :key="tag.slug"
            class="tag-chip secondary primary--text"
            small
            label
            disabled
          >
            {{ tag.name }}
          </v-chip>
        </div>
      </v-layout>
    </v-card>
  </li>
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
    linkToPost: function() {
      return '/blog/' + this.post.slug
    }
  }
}
</script>

<style lang="stylus" scoped>
.post-item
  font-size: 1.3em
.post-body p
  padding: 0 2rem
.post-category, .post-published-date
  display: inline-block
.post-heading
  display: flex
  justify-content: space-between
  align-items: center
  padding: 2rem 1rem
  font-weight: 600
  font-style: italic
  height: 36px
.post-title
  padding-top: .5rem
  text-align: center
  font-size: 1.4rem
.post-tags
  display: flex
  flex-wrap: wrap
  justify-content: flex-start
  padding: 0 1rem
  margin-bottom: 1rem
.tag-chip
  text-transform: uppercase
  :hover
    cursor: pointer
</style>
