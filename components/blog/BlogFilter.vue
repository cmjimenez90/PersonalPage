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
      <v-subheader>
        Filter
      </v-subheader>
      <v-chip v-for="param in filterParams" :key="param.slug" close small @input="removeFilter(param)">
        {{ param.name }}
      </v-chip>
      <v-list>
        <v-subheader>
          Categories
        </v-subheader>
        <v-list-tile v-for="category in blogCategories" :key="category.slug">
          <v-list-tile-content>
            <v-chip small @click="onFilter(category)">
              {{ category.name }}
            </v-chip>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider />
        <v-subheader>
          Tags
        </v-subheader>
        <v-list-tile v-for="tag in blogTags" :key="tag.slug">
          <v-list-tile-content>
            <v-chip small @click="onFilter(tag)">
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
    blogTags: function() {
      return this.$store.getters['blogFilter/getTags']
    },
    blogCategories: function() {
      return this.$store.getters['blogFilter/getCategories']
    },
    filterParams: function() {
      return this.$store.getters['blogFilter/getFilterParams']
    }
  },
  methods: {
    onFilter(param) {
      this.$store.dispatch('blogFilter/addFilterParam', param)
    },
    removeFilter(param) {
      this.$store.dispatch('blogFilter/removeFilterParam', param)
    }
  }
}
</script>

<style>
</style>
