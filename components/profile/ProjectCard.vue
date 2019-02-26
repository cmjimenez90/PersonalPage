<template>
  <v-card>
    <v-card-title class="subheading primary white--text">
      {{ project.project_title }}
    </v-card-title>
    <v-responsive class="pt-2">
      <v-img :src="project.project_image" height="125" contain />
    </v-responsive>
    <v-card-text class="body-2">
      <div>{{ project.project_description }}</div>
    </v-card-text>
    <v-card-actions class="secondary lighten-4">
      <v-layout>
        <v-btn v-if="project.project_vc_url !== ''" block flat round :href="project.project_vc_url">
          <v-img :src="project.project_vc_icon" contain height="35" />
        </v-btn>
        <v-btn v-if="project.project_url !== ''" block round flat :href="project.project_url">
          <v-img :src="project.project_url_icon" contain height="35" />
        </v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>   
</template>

<script>
export default {
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
