<template>
  <navigation-menu :links="links" />
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
          route: 'blog'
        }
      ]
    }
  }
}
</script>
