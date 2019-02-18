<template>
  <v-container>
    <v-layout row wrap justify-center>
      <BioCard />
    </v-layout>
    <v-layout row wrap justify-center class="mt-5">
      <project-highlights :projects='projects' />
    </v-layout>
  </v-container>
</template>

<script>
import BioCard from '~/components/profile/BioCard.vue'
import ProjectHighlights from '~/components/profile/ProjectHighlights.vue'
export default {
  data: function() {
    return {
      projects: [
        {
          title: 'Test Project 1',
          pictureUrl: '/Octocat.jpg',
          description: 'short description about project'
        },
        {
          title: 'Test Project 2',
          pictureUrl: '/Octocat.jpg',
          description: 'short description about project'
        }
      ]
    }
  },
  components: {
    BioCard,
    ProjectHighlights
  }
}
</script>
