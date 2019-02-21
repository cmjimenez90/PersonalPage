<template>
  <v-container fill-height>
    <v-layout wrap justify-space-around align-center>
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
import { butter } from '@/buttercms'
import ProjectCard from '~/components/profile/ProjectCard.vue'
export default {
  components: {
    ProjectCard
  },
  data: function() {
    return {
      projects: []
    }
  },
  created() {
    this.getProjects()
  },
  methods: {
    getProjects() {
      butter.content.retrieve(['cmjimenez_projects']).then(res => {
        this.projects = res.data.data.cmjimenez_projects
      })
    }
  }
}
</script>
