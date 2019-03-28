<template>
  <v-card>
    <v-toolbar
      class="primary
          darken-2
          white--text
          title"
    >
      <v-toolbar-title>Filter</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-list subheader>
        <v-subheader inset>
          Categories
        </v-subheader>
        <v-list-tile
          v-for="category in blogCategories"
          :key="category.slug"
        >
          <v-list-tile-content>
            <v-chip small>
              {{ category.name }}
            </v-chip>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider />
        <v-subheader inset>
          Tags
        </v-subheader>
        <v-list-tile
          v-for="tag in blogTags"
          :key="tag.slug"
        >
          <v-list-tile-content>
            <v-chip small>
              {{ tag.name }}
            </v-chip>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {
    blogCategories: function() {
      return this.$store.state.blog.categories
    },
    blogTags: function() {
      return this.$store.state.blog.tags
    }
  }
}
</script>

<style>
</style>
