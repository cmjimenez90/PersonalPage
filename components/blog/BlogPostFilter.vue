<template>
  <v-layout column>
    <v-card class="checkbox-container">
      <v-subheader class="checkbox-subheader">
        <h3>Categories</h3>
      </v-subheader>
      <v-checkbox
        v-for="category in blogCategories" 
        :key="category.slug" 
        v-model="selectedCategories"
        :label="category.name"
        :value="category"
        @change="filterBlogPost"
      />
    </v-card>
    <v-card class="checkbox-container">
      <v-subheader class="checkbox-subheader">
        <h3>Tags</h3>
      </v-subheader>
      <v-checkbox 
        v-for="tag in blogTags" 
        :key="tag.slug" 
        v-model="selectedTags"
        :label="tag.name"
        :value="tag"
        @change="filterBlogPost"
      />
    </v-card>
  </v-layout>
</template>

<script>
export default {
  props: {
    blogPost: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: function() {
    return {
      selectedTags: [],
      selectedCategories: []
    }
  },
  computed: {
    blogTags: function() {
      return this.$store.state.blog.tags
    },
    blogCategories: function() {
      return this.$store.state.blog.categories
    }
  },
  methods: {
    filterBlogPost: function() {
      let filteredPost = this.blogPost.slice()
      if (
        this.selectedTags.length === 0 &&
        this.selectedCategories.length === 0
      ) {
        this.$emit('filter-change', filteredPost)
      }
      if (this.selectedCategories.length !== 0) {
        filteredPost = filteredPost.filter(post =>
          this.filterByCategories(post)
        )
      }
      if (this.selectedTags.length !== 0) {
        filteredPost = filteredPost.filter(post => this.filterByTags(post))
      }
      this.$emit('filter-change', filteredPost)
    },
    filterByCategories: function(post) {
      const filterCategories = this.selectedCategories.map(
        category => category.slug
      )
      const matchingCategories = post.categories
        .slice()
        .filter(category => filterCategories.includes(category.slug))
      return filterCategories.length === matchingCategories.length
    },
    filterByTags: function(post) {
      const filterTags = this.selectedTags.map(tag => tag.slug)
      const matchingTags = post.tags
        .slice()
        .filter(tag => filterTags.includes(tag.slug))
      return filterTags.length === matchingTags.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.checkbox-container
  background-color: var(--v-primary-base)
  color: var(--v-secondary-base)
  margin: 1rem 0
  .v-input--checkbox
    margin: 0 1.2rem
    padding: 0
    color: var(--v-secondary-base)
  .checkbox-subheader
    background-color: var(--v-secondary-base)
    color: var(--v-primary-base)
    margin-bottom: 1rem
</style>
