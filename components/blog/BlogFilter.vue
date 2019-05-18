<template>
  <v-card>
    <v-toolbar
      color="primary darken-2"
      class="white--text title"
    >
      <v-toolbar-title>
        Filter
      </v-toolbar-title>
    </v-toolbar>
    <v-container fill-height>
      <v-layout column>
        <v-flex>
          <v-card flat min-height="100px">
            <v-subheader>
              <span class="secondary--text">
                Active
              </span>
              <v-spacer />
              <v-btn v-if="filteredItems.length > 0" icon small @click="resetFilter">
                <v-icon color="secondary ">
                  close
                </v-icon>
              </v-btn>
            </v-subheader>
            <v-chip
              v-for="item in filteredItems"
              :key="item.slug"
              small
              class="secondary font-weight-bold"
              text-color="secondary lighten-4"
              close
              @input="toggleChecked(item)"
            >
              {{ item.name }}
            </v-chip>
          </v-card>
          <v-list>
            <v-subheader class="secondary--text">
              Categories
            </v-subheader>
            <v-list-tile v-for="category in filterCategories" :key="category.slug">
              <v-list-tile-action>
                <v-checkbox color="secondary" :value="category.checked" :label="category.name" @change="toggleChecked(category)" />
              </v-list-tile-action>      
            </v-list-tile>
            <v-subheader class="secondary--text">
              Tags
            </v-subheader>
            <v-list-tile v-for="tag in filterTags" :key="tag.slug">
              <v-list-tile-action>
                <v-checkbox color="secondary" :value="tag.checked" :label="tag.name" @change="toggleChecked(tag)" />
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
    },
    resetFilter() {
      this.$store.dispatch('blogFilter/resetFilter')
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
