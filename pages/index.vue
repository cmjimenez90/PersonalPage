<template>
  <v-container>
    <BioCard :name="name" :caption="caption" :description="description" />
    <v-layout row wrap justify-center>
      <v-flex xs12 sm6>
        <ProjectHighlights />
      </v-flex>
      <v-flex xs12 sm6>
        <RecentBlogPost :blog-posts="blogPosts" carousel />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BioCard from '~/components/profile/BioCard.vue'
import ProjectHighlights from '~/components/profile/ProjectHighlights.vue'
import RecentBlogPost from '~/components/blog/RecentBlogPost.vue'
export default {
  components: {
    BioCard,
    ProjectHighlights,
    RecentBlogPost
  },
  data: function() {
    return {
      name: 'Carlos Jimenez',
      caption: 'Problem Solver, Developer, Computer Technician',
      description:
        'A new developer with a strong desire to take on any challenge. Carlos is currently employed as a Technical Support Technician for Rowan College at Gloucester County while also pursuing a degree in Computer Science. In the meantime, he continues to push himself by learning new technologies and creating different tools on the side; whether it is to solve a problem at work or just for fun!'
    }
  },
  computed: {
    blogPosts: function() {
      return this.$store.state.blog.list
    }
  },
  async fetch({ store }) {
    await store.dispatch('projects/fetchProjects')
    await store.dispatch('blog/fetchBlogPosts')
  }
}
</script>
