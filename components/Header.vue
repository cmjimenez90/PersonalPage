<template>
  <navigation-menu v-bind:links=links v-bind:menuTitle=menuTitle></navigation-menu>
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
      ],
      menuTitle: 'Carlos M Jimenez'
    }
  },
  components: {
    NavigationMenu
  }
}
</script>
