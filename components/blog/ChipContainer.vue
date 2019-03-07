<template>
  <v-container>
    <span>{{ heading }}</span>
    <template v-if="reduceItemsShown">
      <v-chip v-for="n in 3" :key="n" small label>
        {{ items[n].name }}
      </v-chip>
      <v-tooltip bottom>
        <span slot="activator">
          <v-icon>more_horiz</v-icon>
        </span>
        <span>
          <v-chip v-for="(item,index) in tooltipItems" :key="index" small label>
            {{ item.name }}
          </v-chip>
        </span>
      </v-tooltip>
    </template>
    <template v-else>
      <v-chip v-for="(item,index) in items" :key="index" small label>
        {{ item.name }}
      </v-chip>
    </template>
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
      default: 'HEAD HERE'
    }
  },
  computed: {
    reduceItemsShown: function() {
      return this.items.length > 3
    },
    tooltipItems: function() {
      return this.items.slice(4, this.items.length)
    }
  }
}
</script>

<style>
</style>
