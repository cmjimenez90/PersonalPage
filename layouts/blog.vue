<template>
  <v-app class="primary darken-1">
    <PageHeader />
    <v-content>
      <v-container fluid fill-height>
        <v-layout fill-height>
          <BlogPostListContainer />
          <nuxt />
        </v-layout>
      </v-container>
    </v-content>
    <PageFooter />
  </v-app>
</template>

<script>
import PageHeader from '~/components/core/PageHeader.vue'
import PageFooter from '~/components/core/PageFooter.vue'
import BlogPostListContainer from '~/components/blog/BlogPostListContainer.vue'
export default {
  components: {
    PageHeader,
    PageFooter,
    BlogPostListContainer
  }
}
</script>
