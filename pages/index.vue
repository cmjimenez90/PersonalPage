<template>
  <v-container>
    <v-layout row justify-center align-center mb-2>
      <v-flex mr-3>
        <HeadshotCard />
      </v-flex>
      <v-flex>
        <MostRecentProject :projects="projects" />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <ProjectListing :projects="projects.slice(1)" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HeadshotCard from '~/components/profile/HeadshotCard.vue'
import MostRecentProject from '~/components/project/MostRecentProject.vue'
import ProjectListing from '~/components/project/ProjectListing.vue'
export default {
  components: {
    HeadshotCard,
    MostRecentProject,
    ProjectListing
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
