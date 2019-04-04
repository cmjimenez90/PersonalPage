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
      <v-combobox
        v-model="filter"
        clearable
        deleteable-chips
        chips
        multiple
        append-icon=""
        @click:clear="onReset()"
      />
      <v-list>
        <v-subheader>
          Categories
        </v-subheader>
        <v-list-tile
          v-for="category in blogCategories"
          :key="category.slug"
        >
          <v-list-tile-content>
            <v-chip small @click="onFilter(item)">
              {{ category.name }}
            </v-chip>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider />
        <v-subheader>
          Tags
        </v-subheader>
        <v-list-tile
          v-for="tag in blogTags"
          :key="tag.slug"
        >
          <v-list-tile-content>
            <v-chip
              small
              @click="onFilter(item)"
            >
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
  }
}
</script>

<style>
</style>
