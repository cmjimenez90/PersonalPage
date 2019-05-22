<template>
  <v-layout column>
    <v-flex mb-2>
      <v-toolbar class="list-title">
        <v-toolbar-title><h3>{{ title }}</h3></v-toolbar-title>
      </v-toolbar>
    </v-flex>
    <v-flex v-for="(project,index) in projects" :key="index" mb-2>
      <slot name="project" :project="project">
        {{ project.project_title }}
      </slot>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-title
  background-color: var(--v-secondary-base)
  color: var(--v-primary-base)
</style>
