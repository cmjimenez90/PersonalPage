<template>
  <v-card>
    <v-card-title>
      <span>FILTER</span>
    </v-card-title>
    <v-list>
      <v-list-tile v-for="tag in blogTags" :key="tag.slug">
        {{ tag.name }}
      </v-list-tile>
    </v-list>
    <v-list>
      <v-list-tile v-for="category in blogCategories" :key="category.slug">
        {{ category.name }}
      </v-list-tile>
    </v-list>
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
      return this.$store.getters['blogFilter/getFilteredCategories']
    }
  },
  methods: {
    onFilter(param) {
      this.$store.dispatch('blogFilter/addFilter', param)
    },
    removeFilter(param) {
      this.$store.dispatch('blogFilter/removeFilter', param)
    },
    resetFilter() {
      this.$store.dispatch('blogFilter/resetFilter')
    }
  }
}
</script>

<style>
</style>
