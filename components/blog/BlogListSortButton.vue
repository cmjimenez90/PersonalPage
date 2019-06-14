<template>
  <v-menu transition="scale-transition" left>
    <template #activator>
      <v-btn v-if="!useIcon" class="filter-button primary secondary--text">
        {{ currentSortSelection }}
      </v-btn>
      <v-btn v-else fab small class="filter-button primary secondary--text">
        <v-icon>sort</v-icon>
      </v-btn>
    </template>
    <v-card class="primary secondary--text pl-2">
      <v-radio-group v-model="currentSortSelection" background-color="primary" @change="$emit('new-sort-by',currentSortSelection)">
        <v-radio label="Recent" value="recent" />
        <v-radio label="Title" value="title" />
        <v-radio label="Category" value="category" />
      </v-radio-group>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  props: {
    useIcon: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      currentSortSelection: 'recent'
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
