<template>
  <v-card>
    <v-flex class="component-header" pa-2>
      <h2>Other Projects</h2>
    </v-flex>
    <v-layout>
      <v-flex v-for="project in projects" :key="project.slug" mr-2>
        <ProjectItemCard :project="project" />
      </v-flex>
    </v-layout>
  </v-card>
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
.component-header
    background-color: var(--v-accent-base)
    color: var(--v-primary-base)

</style>
