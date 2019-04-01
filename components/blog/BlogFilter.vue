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
      >
        <template v-slot:selection="data">
          <v-chip
            :selected="data.selected"
            close
            small
            @input="onRemove(data.item)"
          >
            {{ data.item.filterParameter.name }}
          </v-chip>
        </template>
      </v-combobox>
      <v-list>
        <v-subheader>
          Categories
        </v-subheader>
        <v-list-tile
          v-for="(category, index) in blogCategories"
          :key="category.slug"
        >
          <v-list-tile-content>
            <v-chip small @click="onFilter(index,'category')">
              {{ category.name }}
            </v-chip>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider />
        <v-subheader>
          Tags
        </v-subheader>
        <v-list-tile
          v-for="(tag,index) in blogTags"
          :key="tag.slug"
        >
          <v-list-tile-content>
            <v-chip
              small
              @click="onFilter(index,'tag')"
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
  data: function() {
    return {
      filter: []
    }
  },
  computed: {
    blogCategories: function() {
      return this.$store.state.blog.categories.slice()
    },
    blogTags: function() {
      return this.$store.state.blog.tags.slice()
    }
  },
  methods: {
    onFilter(index, type) {
      if (type === 'category') {
        this.filter.push({
          filterParameter: this.blogCategories[index],
          type: type
        })

        this.blogCategories.splice(index, 1)
      } else {
        this.filter.push({
          filterParameter: this.blogTags[index],
          type: type
        })
        this.blogTags.splice(index, 1)
      }
    },
    onRemove(item) {
      this.filter.splice(this.filter.indexOf(item), 1)
      if (item.type === 'category') {
        this.blogCategories.push(item.filterParameter)
      } else {
        this.blogTags.push(item.filterParameter)
      }
    },
    onReset() {
      this.filter.forEach(filterItem => {
        if (filterItem.type === 'category') {
          this.blogCategories.push(filterItem.filterParameter)
        } else {
          this.blogTags.push(filterItem.filterParameter)
        }
      })
      this.filter.splice(0, this.filter.length)
    }
  }
}
</script>

<style>
</style>
