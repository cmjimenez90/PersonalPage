<template>
  <v-container>
    <BioCard :name="name" :caption="caption" :description="description" />
    <v-layout row wrap justify-center>
      <project-highlights />
    </v-layout>
  </v-container>
</template>

<script>
import BioCard from '~/components/profile/BioCard.vue'
import ProjectHighlights from '~/components/profile/ProjectHighlights.vue'
export default {
  components: {
    BioCard,
    ProjectHighlights
  },
  data: function() {
    return {
      name: 'Carlos Jimenez',
      caption: 'Problem Solver, Developer, Computer Technician',
      description:
        'A new developer with a strong desire to take on any challenge. Carlos is currently employed as a Technical Support Technician for Rowan College at Gloucester County while also pursuing a degree in Computer Science. In the meantime, he continues to push himself by learning new technologies and creating different tools on the side; whether it is to solve a problem at work or just for fun!'
    }
  },
  async fetch({ store }) {
    await store.dispatch('projects/fetchProjects')
  }
}
</script>
