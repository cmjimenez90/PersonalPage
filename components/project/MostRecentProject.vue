<template>
  <v-card>
    <v-flex class="component-header" pa-2>
      <h2>Most Recent Project</h2>
    </v-flex>
    <v-flex>
      <ProjectItemCard :project="projects[0]" />
    </v-flex>
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
    background-color: var(--v-secondary-base)
    color: var(--v-primary-base)
    text-transform: uppercase
    font-size: 1.3rem

</style>
