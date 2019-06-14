<template>
  <v-menu transition="scale-transition" left>
    <template #activator>
      <v-btn small class="filter-button primary secondary--text">
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
  data: function() {
    return {
      currentSortSelection: 'recent'
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
