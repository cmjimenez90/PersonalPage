<template>
  <v-container>
    <v-layout justify-center mb-4>
      <v-flex>
        <HeadshotCard />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HeadshotCard from '~/components/profile/HeadshotCard.vue'
export default {
  components: {
    HeadshotCard
  },
  data: function() {
    return {
      description:
        'A new developer with a strong desire to take on any challenge. Carlos is currently employed as a Technical Support Technician for Rowan College at Gloucester County while also pursuing a degree in Computer Science. In the meantime, he continues to push himself by learning new technologies and creating different tools on the side; whether it is to solve a problem at work or just for fun!'
    }
  },
  computed: {
    blogPosts: function() {
      return this.$store.state.blog.list
    },
    projects: function() {
      return this.$store.state.projects.list
    }
  },
  async fetch({ store }) {
    await store.dispatch('projects/fetchProjects')
    await store.dispatch('blog/fetchBlogPosts')
  }
}
</script>

<style lang="stylus" scoped>
</style>
