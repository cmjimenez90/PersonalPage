<template>
  <v-container :fluid="$vuetify.breakpoint.lgAndDown">
    <v-layout :column="$vuetify.breakpoint.mdAndDown" justify-center align-center mb-2>
      <v-flex :mr-3="$vuetify.breakpoint.lgAndUp" :mb-2="$vuetify.breakpoint.mdAndDown">
        <HeadshotCard />
      </v-flex>
      <v-flex>
        <MostRecentProject :project="mostRecentProject" />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <ProjectListing :projects="otherProjects" />
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
    mostRecentProject: function() {
      return this.$store.state.projects.list[0]
    },
    otherProjects: function() {
      return this.$store.state.projects.list.slice(1)
    }
  },
  async fetch({ store }) {
    await store.dispatch('projects/fetchProjects')
    await store.dispatch('blog/initializeBlogStore')
  }
}
</script>

<style lang="stylus" scoped>

</style>
