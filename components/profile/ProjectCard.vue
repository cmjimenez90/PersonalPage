<template>
  <v-card height="100%">
    <v-card-title class="title primary lighten-1 white--text">
      {{ project.project_title }}
    </v-card-title>
    <v-responsive class="pt-2">
      <v-img :src="project.project_image" height="125" contain />
    </v-responsive>
    <v-card-text class="subheading">
      <div>{{ project.project_description }}</div>
    </v-card-text>
    <v-card-actions class="secondary lighten-4">
      <v-layout justify-space-around>
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
