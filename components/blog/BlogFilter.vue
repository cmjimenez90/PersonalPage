<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-title>Filter</v-toolbar-title>
    </v-toolbar>
    <v-container fill-height>
      <v-layout column>
        <v-flex />
        <v-flex>
          <v-list>
            <v-subheader>Categories</v-subheader>
            <v-list-tile v-for="category in filterCategories" :key="category.slug">
              <v-list-tile-action>
                <v-checkbox :label="category.name" @change="toggleChecked(category)" />
              </v-list-tile-action>      
            </v-list-tile>
            <v-subheader>Tags</v-subheader>
            <v-list-tile v-for="tag in filterTags" :key="tag.slug">
              <v-list-tile-action>
                <v-checkbox :label="tag.name" @change="toggleChecked(tag)" />
              </v-list-tile-action>           
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  computed: {
    filterTags: function() {
      return this.$store.getters['blogFilter/getFilterTags']
    },
    filterCategories: function() {
      return this.$store.getters['blogFilter/getFilterCategories']
    }
  },
  methods: {
    toggleChecked(item) {
      this.$store.dispatch('blogFilter/toggleChecked', item)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
