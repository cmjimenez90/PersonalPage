<template>
  <nav class="navigation-menu">
    <v-navigation-drawer
      v-model="drawer"
      app
      disable-resize-watcher
      class="secondary"
    >
      <v-list>
        <v-list-tile
          v-for="(link,index) in links"
          :key="index"
        >
          <v-list-tile-content>
            <v-btn class="primary--text" block flat :to="link.route" nuxt>
              {{ link.title }}
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="secondary primary--text" dark>
      <v-toolbar-side-icon class="hidden-md-and-up primary--text" @click="drawer = !drawer" />
      <v-spacer />
      <v-toolbar-items
        v-for="(link,index) in links"
        :key="index"
        class="hidden-sm-and-down"
      >
        <v-btn class="primary--text" block flat :to="link.route" nuxt>
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
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

<style lang="stylus" scoped>
</style>
