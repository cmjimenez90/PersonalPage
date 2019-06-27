<template>
  <div>
    <v-navigation-drawer v-model="drawer" class="primary" temporary disable-resize-watcher absolute>
      <v-list>
        <v-subheader class="secondary--text">
          Categories
        </v-subheader>
        <v-list-tile
          v-for="category in blogCategories" 
          :key="category.slug"
        >
          <v-list-tile-content>
            <v-checkbox 
              v-model="selectedBlogCategories"
              :label="category.name"
              :value="category"
            />
          </v-list-tile-content>
        </v-list-tile>
        <v-subheader class="secondary--text">
          Tags
        </v-subheader>
        <v-list-tile
          v-for="tag in blogTags" 
          :key="tag.slug"
        >
          <v-list-tile-content>
            <v-checkbox
              v-model="selectedBlogTags"
              :label="tag.name"
              :value="tag"
            />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat class="secondary horizontal-filter">
      <v-btn class="primary secondary--text" flat @click="drawer = !drawer">
        Filter<v-icon>filter_list</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn class="primary secondary--text" flat @click="clearFilter()">
        Reset
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import { blogFilter } from '~/components/blog/mixins/blogFilter.js'
export default {
  mixins: [blogFilter],
  data: function() {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
