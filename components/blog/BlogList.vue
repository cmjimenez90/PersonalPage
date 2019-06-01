<template>
  <v-list three-line class="blog-list pa-0">
    <v-toolbar class="blog-list-title secondary primary--text title">
      <v-toolbar-title>
        <h2 class="title blog-list-title">
          Blog Post
        </h2>
      </v-toolbar-title>
    </v-toolbar>
    <v-divider />
    <template v-for="(post,index) in blogList">
      <BlogListItem :key="post.slug" class="blog-list-item" :class="{'selected-blog': post.slug == currentPostSlug}" :blog-post="post" @click="selectItem(post.slug)" />
      <v-divider :key="index" />
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
  },
  data: function() {
    return {
      currentPostSlug: ''
    }
  },
  methods: {
    selectItem: function(slug) {
      this.currentPostSlug = slug
      this.$emit('new-blog-selected', this.currentPostSlug)
    }
  }
}
</script>

<style lang="stylus">
.blog-list-item
  background-color: var(--v-primary-base)
  color: var(--v-secondary-base)
  :hover
    background-color: var(--v-primary-darken1)
    cursor: pointer
.selected-blog
  background-color: var(--v-primary-darken2)
  color: var(--v-secondary-darken2)
</style>
