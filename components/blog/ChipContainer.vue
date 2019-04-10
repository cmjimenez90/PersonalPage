<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <span class="font-weight-medium text-uppercase">
          {{ heading }}
        </span>
        <template v-if="reduceItemsShown">
          <v-chip
            v-for="n in 3"
            :key="n"
            small
            class="secondary lighten-4"
            label
            disabled
          >
            {{ items[n].name }}
          </v-chip>
          <v-tooltip bottom>
            <span slot="activator">
              <v-icon>more_horiz</v-icon>
            </span>
            <span>
              <v-chip
                v-for="(item,index) in tooltipItems"
                :key="index"
                small
                label
                disabled
                class="secondary lighten-4"
              >
                {{ item.name }}
              </v-chip>
            </span>
          </v-tooltip>
        </template>
        <template v-else>
          <v-chip
            v-for="(item,index) in items"
            :key="index"
            small
            label
            disabled
            class="secondary lighten-4"
          >
            {{ item.name }}
          </v-chip>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      }
    },
    heading: {
      type: String,
      default: 'HEADING HERE'
    },
    displayedItems: {
      type: Number,
      default: 3
    }
  },
  computed: {
    reduceItemsShown: function() {
      return this.items.length > this.displayedItems
    },
    tooltipItems: function() {
      return this.items.slice(this.displayedItems + 1, this.items.length)
    }
  }
}
</script>

<style lang="stylus">
.v-chip__content
  color: black
</style>
