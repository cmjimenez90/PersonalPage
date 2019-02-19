<template>
  <v-card>
    <v-card-title>{{ project.project_title }}</v-card-title>
    <v-responsive class="pt-2">
      <v-img :src="project.project_image" max-height="125" contain />
    </v-responsive>
    <v-card-text>
      <div>{{ project.project_description }}</div>
    </v-card-text>
    <v-card-actions>
      <v-layout justify-space-around>
        <v-btn block flat :href="project.project_vc_url">
          <v-img :src="project.project_vc_icon" contain max-height="35" />
        </v-btn>
        <v-btn block flat :href="project.project_url">
          <v-img :src="project.project_url_icon" contain max-height="35" />
        </v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>   
</template>

<script>
export default {
  props: {
    project: Object
  }
}
</script>
