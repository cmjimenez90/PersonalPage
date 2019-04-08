<template>
  <v-layout column>
    <v-flex xs12>
      <v-toolbar
        class="primary
          darken-2
          white--text
          title"
      >
        <v-toolbar-title>
          Blog Post
        </v-toolbar-title>
      </v-toolbar>
    </v-flex>
    <v-flex v-for="post in filteredBlogs" :key="post.slug" class="py-2">
      <BlogSummaryCard :blog-post="post" />
    </v-flex>
  </v-layout>
</template>

<script>
import BlogSummaryCard from '~/components/blog/BlogSummaryCard.vue'
export default {
  components: {
    BlogSummaryCard
  },
  props: {
    blogList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    filteredBlogs: function() {
      const filterCategories = []
      const filterTags = []
      this.$store.getters['blogFilter/getFilterParams'].forEach(filter => {
        if (filter.type === 'category') {
          filterCategories.push(filter.name)
        } else {
          filterTags.push(filter.name)
        }
      })
      if (filterCategories.length < 1 && filterTags.length < 1) {
        return this.blogList
      } else {
        return this.blogList.filter(blog => {
          let matchesFilter = true
          if (filterCategories.length >= 1) {
            const categories = blog.categories.map(category => {
              return category.name
            })
            for (let index = 0; index < filterCategories.length; index++) {
              if (!categories.includes(filterCategories[index])) {
                matchesFilter = false
                break
              }
            }
          }
          if (filterTags.length >= 1 && matchesFilter === true) {
            const tags = blog.tags.map(tag => {
              return tag.name
            })
            for (let index = 0; index < filterTags.length; index++) {
              if (!tags.includes(filterTags[index])) {
                matchesFilter = false
                break
              }
            }
          }
          return matchesFilter
        })
      }
    }
  }
}
</script>

<style>
</style>
