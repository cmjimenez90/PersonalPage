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
      <v-toolbar-title>{{ menuTitle }}</v-toolbar-title>
      <v-spacer />
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer" />
      <v-toolbar-items
        v-for="(link,index) in links"
        :key="index"
        class="hidden-sm-and-down"
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
    menuTitle: String,
    links: Array
  },
  data: function() {
    return {
      drawer: false
    }
  }
}
</script>
