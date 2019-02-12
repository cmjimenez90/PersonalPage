<template>
  <span>
   <v-navigation-drawer
    v-model="drawer"
    app
    disable-resize-watcher
   >
    <v-list>
      <v-list-tile 
       v-for="(link, index) in links"
       :key = "index"
      >
       <v-list-tile-content>
          <nuxt-link v-bind:to='link.route'>
            {{link.title}}
          </nuxt-link>
       </v-list-tile-content>
      </v-list-tile>
    </v-list>
   </v-navigation-drawer>
   <v-toolbar class="indigo">
     <v-toolbar-title>Carlos M Jimenez</v-toolbar-title>
     <v-spacer></v-spacer>
     <v-toolbar-side-icon
     class="hidden-sm-and-up"
     @click="drawer = !drawer"
     >
     </v-toolbar-side-icon>
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
    links: Array
  }
}
</script>
