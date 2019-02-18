<template>
  <v-card>
    <v-card-media>
      <v-img :src="project.pictureUrl" max-height="125" contain/>
    </v-card-media>
    <v-card-title>{{ project.title }}</v-card-title>
    <v-card-text>{{ project.description }}</v-card-text>
  </v-card>   
</template>

<script>
export default {
  props: {
    project: Object
  }
}
</script>
