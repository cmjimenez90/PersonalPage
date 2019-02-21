<template>
  <span>
    <v-navigation-drawer
      v-model="drawer"
      app
      disable-resize-watcher
    >
      <v-list>
        <v-list-tile
          v-for="(link,index) in links"
          :key="index"
        >
          <v-list-tile-content>
            <v-btn block flat :to="link.route" nuxt>
              {{ link.title }}
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-spacer />
      <v-toolbar-side-icon class="hidden-sm-and-up" @click="drawer = !drawer" />
      <v-toolbar-items
        v-for="(link,index) in links"
        :key="index"
        class="hidden-xs-only"
      >
        <v-btn block flat :to="link.route" nuxt>
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: function() {
        return {
          defaultArray: []
        }
      }
    }
  },
  data: function() {
    return {
      drawer: false
    }
  }
}
</script>
