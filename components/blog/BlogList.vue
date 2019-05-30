<template>
  <v-list three-line class="blog-list">
    <v-subheader class="blog-list-title">
      <h2 class="title blog-list-title">
        Blog Post
      </h2>
    </v-subheader>
    <v-divider />
    <template v-for="post in blogList">
      <BlogListItem :key="post.slug" class="blog-list-item" :blog-post="post" />
    </template>
  </v-list>
</template>

<script>
import BlogListItem from '~/components/blog/BlogListItem.vue'
export default {
  components: {
    BlogListItem
  },
  props: {
    blogList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.blog-list, .blog-list-title
    background-color: var(--v-primary-darken1)
    color: var(--v-secondary-base)
.blog-list-title
  background-color: var(--v-secondary-base)
  color: var(--v-accent-base)
  text-transform: uppercase
  font-weight: 700
</style>
