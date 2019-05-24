<template>
  <v-layout wrap>
    <v-flex mb-2>
      <v-toolbar class="most-recent-project-title" xs12>
        <v-toolbar-title><h3>Most Recent Project</h3></v-toolbar-title>
      </v-toolbar>
    </v-flex>
    <v-flex>
      <ProjectItemCard :project="projects[0]" />
    </v-flex>
  </v-layout>
</template>

<script>
import ProjectItemCard from '~/components/project/ProjectItemCard.vue'
export default {
  components: {
    ProjectItemCard
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.most-recent-project-title
    background-color: var(--v-secondary-base)
    color: var(--v-primary-base)
</style>
