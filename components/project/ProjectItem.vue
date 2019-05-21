<template>
  <v-container fluid class="project-item">
    <v-layout column>
      <v-flex>
        <h3 class="project-title">
          {{ project.project_title }}
        </h3>
      </v-flex>
      <v-flex>
        <v-img :src="project.project_image" height="125" contain alt="reference picture of " />
      </v-flex>
      <v-flex>
        <p class="project-description">
          {{ project.project_description }}
        </p>
      </v-flex>
      <v-layout justify-center />
    </v-layout>
  </v-container>
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
    background-color : var(--v-primary-darken2)
    color: var(--v-secondary-lighten4)
</style>
