<template>
  <v-container>
    <BioCard :name="name" :caption="caption" :description="description" />
    <v-layout row wrap>
      <v-flex sm6 xs12>
        <ProjectHighlightsList :projects="projects" />
      </v-flex>
      <v-flex sm6 xs12>
        <RecentBlogPostList :blog-posts="blogPosts" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BioCard from '~/components/profile/BioCard.vue'
import ProjectHighlightsList from '~/components/profile/ProjectHighlightsList.vue'
import RecentBlogPostList from '~/components/blog/RecentBlogPostList.vue'
export default {
  components: {
    BioCard,
    ProjectHighlightsList,
    RecentBlogPostList
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
    },
    projects: function() {
      return this.$store.state.projects.list
    }
  },
  async fetch({ store }) {
    await store.dispatch('projects/fetchProjects')
    await store.dispatch('blog/fetchBlogPosts')
  }
}
</script>
