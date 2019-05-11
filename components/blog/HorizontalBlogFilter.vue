<template>
  <v-expansion-panel>
    <v-expansion-panel-content class="primary darken-2 title white--text">
      <template v-slot:header>
        <div>Filter</div>
      </template>
      <template v-slot:actions>
        <v-icon color="white">
          filter_list
        </v-icon>
      </template>
      <v-card>
        <v-card-text>
          <v-subheader class="secondary--text ">
            <span>Active</span>
            <v-spacer />
            <v-btn v-if="(filterParams.length > 0)" icon @click="resetFilter()">
              <v-icon>close</v-icon>
            </v-btn>
          </v-subheader>
          <v-chip
            v-for="param in filterParams"
            :key="param.slug"
            small
            class="secondary"
            text-color="secondary lighten-4"
            close
            @input="removeFilter(param)"
          >
            {{ param.name }}
          </v-chip>
          <v-subheader class="secondary--text ">
            Categories
          </v-subheader>
          <v-chip
            v-for="category in blogCategories"
            :key="category.slug"
            small
            class="secondary"
            text-color="secondary lighten-4"
            @click="onFilter(category)"
          >
            {{ category.name }}
          </v-chip>
          <v-subheader class="secondary--text ">
            Tags
          </v-subheader>
          <v-chip
            v-for="tag in blogTags"
            :key="tag.slug"
            small
            class="secondary"
            text-color="secondary lighten-4"
            @click="onFilter(tag)"
          >
            {{ tag.name }}
          </v-chip>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
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
      // eslint-disable-next-line prettier/prettier
      const filterCategories = this.$store.getters['blogFilter/getFilteredCategories']
      const filterTags = this.$store.getters['blogFilter/getFilteredTags']
      return filterTags.concat(filterCategories)
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
