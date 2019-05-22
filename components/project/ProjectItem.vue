<template>
  <v-card class="project-item">
    <v-layout column>
      <v-flex class="project-title" py-2>
        <h3 class="text-xs-center">
          {{ project.project_title }}
        </h3>
      </v-flex>
      <v-flex py-1>
        <v-img :src="project.project_image" height="125" contain alt="reference picture of " />
      </v-flex>
      <v-flex class="project-description" px-3>
        <p>
          {{ project.project_description }}
        </p>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  components: {},
  props: {
    project: {
      type: Object,
      default: function() {
        return {
          project_title: 'MISSING TITLE',
          project_description: 'MISSING DESCRIPTION'
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.project-item
    background-color : var(--v-primary-base)
    color: var(--v-secondary-base)
    font-size: 1.1em
.project-title
  background-color: var(--v-secondary-base)
  color: var(--v-primary-base)
</style>
