<template>
  <v-layout column>
    <v-card class="checkbox-container">
      <div class="checkbox-container-header">
        <h2>Filter</h2>
        <v-spacer />
        <v-btn
          v-if="hasFilteredItems"
          small
          fab
          absolute
          right
          color="accent"
          class="clear-button"
          @click="clearFilters()"
        >
          <v-icon class="primary--text">
            clear
          </v-icon>
        </v-btn>
      </div>
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
    },
    hasFilteredItems: function() {
      if (this.selectedTags.length > 0 || this.selectedCategories.length > 0)
        return true
      return false
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
    },
    clearFilters: function() {
      this.selectedTags = []
      this.selectedCategories = []
      this.filterBlogPost()
    }
  }
}
</script>

<style lang="stylus" scoped>
.checkbox-container
  background-color: var(--v-primary-base)
  color: var(--v-secondary-base)
  overflow: hidden
  text-overflow: clip
  .checkbox-container-header
    padding: 1.2rem
    background-color: var(--v-secondary-base)
    color: var(--v-primary-base)
    text-transform: uppercase

  .v-input--checkbox
    margin: 0 1.2rem
    padding: 0
    color: var(--v-secondary-base)
  .checkbox-subheader
    color: var(--v-secondary-base)
    margin-bottom: 1rem
</style>
