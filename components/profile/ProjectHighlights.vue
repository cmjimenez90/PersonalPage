<template>
  <v-layout wrap justify-space-around>
    <v-flex
      v-for="(project,index) in projects"
      :key="index"
      xs12
      sm6
      lg3
      class="pa-1"
    >
      <project-card :project="project" />
    </v-flex>
  </v-layout>
</template>

<script>
import ProjectCard from '~/components/profile/ProjectCard.vue'
export default {
  components: {
    ProjectCard
  },
  props: {
    projects: Array
  }
}
</script>
