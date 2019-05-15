<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-title>Filter</v-toolbar-title>
    </v-toolbar>
    <v-container fill-height>
      <v-layout column>
        <v-flex>
          <v-card flat min-height="100px">
            <v-subheader>Active</v-subheader>
            <v-chip
              v-for="item in filteredItems"
              :key="item.slug"
              small
              color="secondary lighten-2"
              text-color="white"
              close
              @input="toggleChecked(item)"
            >
              {{ item.name }}
            </v-chip>
          </v-card>
          <v-list>
            <v-subheader>Categories</v-subheader>
            <v-list-tile v-for="category in filterCategories" :key="category.slug">
              <v-list-tile-action>
                <v-checkbox color="secondary lighten-2" :label="category.name" @change="toggleChecked(category)" />
              </v-list-tile-action>      
            </v-list-tile>
            <v-subheader>Tags</v-subheader>
            <v-list-tile v-for="tag in filterTags" :key="tag.slug">
              <v-list-tile-action>
                <v-checkbox color="secondary lighten-2" :label="tag.name" @change="toggleChecked(tag)" />
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
    },
    filteredItems: function() {
      return this.$store.getters['blogFilter/getFilteredItems']
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
  .v-checkbox
    color: red
</style>
