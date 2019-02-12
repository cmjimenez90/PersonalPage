<template>
  <navigation-menu v-bind:links=links></navigation-menu>
</template>

<script>
import NavigationMenu from '~/components/NavigationMenu.vue'

export default {
  data: function() {
    return {
      links: [
        {
          title: 'HOME',
          route: '/'
        },
        {
          title: 'BLOG',
          route: 'BLOG'
        }
      ]
    }
  },
  components: {
    NavigationMenu
  }
}
</script>
