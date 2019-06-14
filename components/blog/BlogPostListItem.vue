<template>
  <li>
    <v-card class="post-item" nuxt :to="linkToPost">
      <v-layout column>
        <div class="post-heading">
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
            class="tag-chip"
            small
            label
            @click.stop.prevent="$emit('tag-selected',tag)"
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
  background-color: var(--v-primary-base)
  color: var(--v-secondary-base)
  font-size: 1.3em
.post-body p
  padding: 0 2rem
.post-category, .post-published-date
  display: inline-block
.post-heading
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 1rem
  background-color: var(--v-secondary-base)
  color: var(--v-primary-base)
  font-weight: 600
  font-style: italic
  height: 36px
.post-title
  padding-top: .5rem
  text-align: center
  text-transform: uppercase
  font-size: 1.4rem
.post-tags
  display: flex
  flex-wrap: wrap
  justify-content: flex-start
  padding: 0 1rem
  margin-bottom: 1rem
.tag-chip
  background-color: var(--v-primary-darken1)
  color: var(--v-secondary-base)
  text-transform: uppercase
</style>
