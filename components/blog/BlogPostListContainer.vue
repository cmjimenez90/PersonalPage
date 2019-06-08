<template>
  <div class="list-container">
    <v-toolbar class="container-heading">
      <v-toolbar-title>
        <h3>Blog Post</h3>
      </v-toolbar-title>
    </v-toolbar>
    <ul>
      <BlogPostListItem v-for="(post,index) in blogPosts" :key="index" :post="post" />
    </ul>
  </div>
</template>

<script>
import BlogPostListItem from '~/components/blog/BlogPostListItem.vue'
export default {
  components: {
    BlogPostListItem
  },
  data: function() {
    return {
      drawer: true
    }
  },
  computed: {
    blogPosts: function() {
      return this.$store.state.blog.list
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-container 
  background-color: var(--v-secondary-lighten2)
  width: 100%
  height: 100%
  ul
    list-style: none
    margin: 0
    padding: 0 1rem
  li
    margin-bottom: 1rem
.container-heading
  background-color: var(--v-secondary-base)
  margin-bottom: 1rem
  h3
    text-transform: uppercase
    font-size: 2rem
    color: var(--v-primary-base)
</style>
