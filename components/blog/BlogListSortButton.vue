<template>
  <v-menu>
    <template #activator>
      <v-btn class="filter-button primary secondary--text">
        {{ sortBy }}
      </v-btn>
    </template>
    <v-card>
      <v-radio-group v-model="sortBy" @change="$emit('new-sort-by',sortBy)">
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
      sortBy: 'recent'
    }
  }
}
</script>

<style lang="stylus" scoped>
.filter-button
  width: 150px
</style>
