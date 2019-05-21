<template>
  <v-container>
    <v-layout
      wrap
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
        v-for="(project,index) in projectsList"
        :key="index"
        class="pa-1"
      >
        <v-card><project-item :project="project" /></v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProjectItem from '~/components/project/ProjectItem.vue'
export default {
  components: {
    ProjectItem
  },
  props: {
    projects: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: function() {
    return {
      projectsList: this.projects
    }
  }
}
</script>
