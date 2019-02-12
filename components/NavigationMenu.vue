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
       :key = 'index'
     >
      <v-list-tile-content>
        <v-btn block flat :to='link.route' nuxt>{{link.title}}</v-btn>
      </v-list-tile-content>
     </v-list-tile>
   </v-list>
   </v-navigation-drawer>
   <v-toolbar>
     <v-toolbar-title>{{menuTitle}}</v-toolbar-title>
     <v-spacer />
     <v-toolbar-side-icon class="hidden-md-and-up" @click='drawer = !drawer'/>
     <v-toolbar-items
       class="hidden-sm-and-down"
       v-for="(link,index) in links"
       :key = 'index'
     >
      <v-btn block flat :to='link.route' nuxt>{{link.title}}</v-btn>
     </v-toolbar-items>
   </v-toolbar>
</span>
</template>

<script>
export default {
  data: function() {
    return {
      drawer: false
    }
  },
  props: {
    menuTitle: String,
    links: Array
  }
}
</script>
