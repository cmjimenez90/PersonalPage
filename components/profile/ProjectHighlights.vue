<template>
  <v-container fill-height>
    <v-layout
      wrap
      justify-space-around
      align-center
      fill-height
      secondary
      lighten-2
    >
      <v-flex xs12>
        <v-toolbar
          class="primary
          darken-2
          white--text
          title"
        >
          <v-toolbar-title>RECENT PROJECTS</v-toolbar-title>
        </v-toolbar>
      </v-flex>
      <v-flex
        v-for="(project,index) in projects"
        :key="index"
        xs12
        sm6
        lg5
        class="pa-1"
      >
        <project-card :project="project" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProjectCard from '~/components/profile/ProjectCard.vue'
export default {
  components: {
    ProjectCard
  },
  computed: {
    projects: function() {
      return this.$store.state.projects.list
    }
  }
}
</script>
