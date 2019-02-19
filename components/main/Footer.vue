<template>
  <v-footer class='mt-2' height="auto">
      <v-layout
       wrap
       class="text-xs-center"
       justify-space-around
       align-center
      >
        <v-flex
         xs12
         md6
         class="text-md-right text-xs-center"
        >
          <div class="title">
            Made With: 
          </div>
        </v-flex>
        <v-flex
         xs12
         sm6
         md2
         v-for='tool in tools'
         :key="tool.logo"
        >
          <v-btn
           :href="tool.link"
           flat
          >
            <v-img
             :src='tool.logo'
             contain
             max-height="25"
            />
          </v-btn>
        </v-flex>
      </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: function() {
    return {
      tools: [
        {
          link: 'https://vuetifyjs.com/en/',
          logo: '/v.png'
        },
        {
          link: 'https://vuejs.org/',
          logo: '/Vue.png'
        },
        {
          link: 'https://buttercms.com/',
          logo: 'https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH'
        }
      ]
    }
  }
}
</script>
