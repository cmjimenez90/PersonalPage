<template>
  <v-layout column>
    <v-card class="checkbox-container">
      <div class="checkbox-container-header">
        <h2>Filter</h2>
        <v-spacer />
        <v-btn
          small
          fab
          absolute
          right
          color="accent"
          class="clear-button"
          @click="clearFilter()"
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
        v-model="selectedBlogCategories"
        :label="category.name"
        :value="category"
      />
      <v-subheader class="checkbox-subheader">
        <h3>Tags</h3>
      </v-subheader>
      <v-checkbox
        v-for="tag in blogTags" 
        :key="tag.slug"
        v-model="selectedBlogTags"
        :label="tag.name"
        :value="tag"
      />
    </v-card>
  </v-layout>
</template>

<script>
import { blogFilter } from '~/components/blog/mixins/blogFilter.js'
export default {
  mixins: [blogFilter]
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
