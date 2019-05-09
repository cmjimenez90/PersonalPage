<template>
  <v-card>
  </v-card>
</template>

<script>
export default {
  computed: {
    filterParams: function() {
      return this.$store.getters['blogFilter/getTags'].concat(
        this.$store.getters['blogFilter/getCategories']
      )
    },
    activeFilterParams: function() {
      return this.$store.getters['blogFilter/getFilterParams']
    }
  },
  methods: {
    onFilter(param) {
      this.$store.dispatch('blogFilter/addFilterParam', param)
    },
    removeFilter(param) {
      this.$store.dispatch('blogFilter/removeFilterParam', param)
    },
    resetFilter() {
      this.$store.dispatch('blogFilter/resetFilterParams')
    }
  }
}
</script>

<style>
</style>
