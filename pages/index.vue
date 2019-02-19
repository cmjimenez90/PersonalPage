<template>
  <v-container>
    <v-layout row wrap justify-center>
      <BioCard />
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-xs-center ma-3">
        <div class="subheading">
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
  },
  data: function() {
    return {
      projects: [
        {
          project_title: 'Test Project 1',
          project_image: '/Octocat.jpg',
          project_description: 'short description about project',
          project_vc_url: 'https://www.github.com',
          project_vc_icon: '/Octocat.jpg',
          project_example_url: 'https://www.github.com',
          project_example_icon: '/Octocat.jpg'
        },
        {
          project_title: 'Test Project 2',
          project_image: '/Octocat.jpg',
          project_description: 'short description about project',
          project_vc_url: 'https://www.github.com',
          project_vc_icon: '/Octocat.jpg',
          project_example_url: 'https://www.github.com',
          project_example_icon: '/Octocat.jpg'
        },
        {
          project_title: 'Test Project 3',
          project_image: '/Octocat.jpg',
          project_description: 'short description about project',
          project_vc_url: 'https://www.github.com',
          project_vc_icon: '/Octocat.jpg',
          project_example_url: 'https://www.github.com',
          project_example_icon: '/Octocat.jpg'
        },
        {
          project_title: 'Test Project 4',
          project_image: '/Octocat.jpg',
          project_description: 'short description about project',
          project_vc_url: 'https://www.github.com',
          project_vc_icon: '/Octocat.jpg',
          project_example_url: 'https://www.github.com',
          project_example_icon: '/Octocat.jpg'
        }
      ]
    }
  }
}
</script>
