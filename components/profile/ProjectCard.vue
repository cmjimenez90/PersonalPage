<template>
  <v-card>
    <v-responsive class="pt-2">
      <v-img :src="project.project_image" max-height="125" contain />
    </v-responsive>
    <v-card-title>{{ project.project_title }}</v-card-title>
    <v-card-text>
      <div>{{ project.project_description }}</div>
    </v-card-text>
    <v-card-actions>
      <v-layout justify-space-around>
        <v-btn icon :href="project.project_vc_url">
          <v-avatar>
            <v-img :src="project.project_vc_icon" contain />
          </v-avatar>
        </v-btn>
        <v-btn icon :href="project.project_example_url">
          <v-avatar>
            <v-img :src="project.project_example_icon" contain />
          </v-avatar>
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
