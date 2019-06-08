<template>
  <v-app class="primary darken-1">
    <PageHeader />
    <v-content>
      <v-container fluid fill-height>
        <Sidebar>
          <template #content>
            <BlogPostListContainer />
          </template>
          <template #closed-content>
            <div class="closed-heading">
              <v-icon class="heading-icon">
                arrow_right_alt
              </v-icon>
              <h3 class="heading-text">
                More Blog Post
              </h3>
            </div>
          </template>
        </Sidebar>
        <nuxt />
      </v-container>
    </v-content>
    <PageFooter />
  </v-app>
</template>

  <script>
import PageHeader from '~/components/core/PageHeader.vue'
import PageFooter from '~/components/core/PageFooter.vue'
import Sidebar from '~/components/core/ToggableSideBar.vue'
import BlogPostListContainer from '~/components/blog/BlogPostListContainer.vue'
export default {
  components: {
    PageHeader,
    PageFooter,
    BlogPostListContainer,
    Sidebar
  }
}
</script>

<style lang="stylus" scoped>
.closed-heading
  display: flex
  flex: columns
  background-color: var(--v-secondary-base)
  writing-mode: vertical-lr
  text-orientation: upright
  cursor: pointer
  text-transform: uppercase
  text-align: center
.heading-text, .heading-icon
  font-size: 2rem
  font-weight: 900
  color: var(--v-primary-base)
.heading-icon
  padding-top: 2rem
  margin-bottom: auto
.heading-text
  margin-bottom: auto
</style>
