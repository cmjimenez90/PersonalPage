<template>
  <navigation-menu :links="links" :menu-title="menuTitle" />
</template>

<script>
import NavigationMenu from '~/components/main/NavigationMenu.vue'

export default {
  components: {
    NavigationMenu
  },
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
  }
}
</script>
