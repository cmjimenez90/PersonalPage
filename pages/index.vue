<template>
  <v-container>
    <v-layout row wrap justify-center>
      <BioCard />
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-xs-center ma-3">
        <div class="font-weight-bold">
          Recent Projects
        </div>
      </v-flex>
      <project-highlights :projects="projects" />
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
  }
}
</script>
