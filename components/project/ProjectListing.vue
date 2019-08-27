<template>
  <v-layout column>
    <v-flex class="component-header" pa-2>
      <h2>Other Projects</h2>
    </v-flex>
    <v-layout :column="isColumnOriented">
      <ProjectItemCard v-for="project in projects" :key="project.slug" :project="project" :class="{ 'mb-1': isColumnOriented }" />
    </v-layout>
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
  },
  data() {
    return {
      isHydrated: false
    }
  },
  computed: {
    isColumnOriented: function() {
      return this.isHydrated ? this.$vuetify.breakpoint.mdAndDown : false
    }
  },
  mounted() {
    this.isHydrated = true
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
