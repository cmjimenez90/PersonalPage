<template>
  <v-card :href="project.project_vc_url">
    <v-layout class="project-item" column fill-height>
      <v-flex class="project-title" py-2 mb-2>
        <h3 class="text-xs-center">
          {{ project.project_title }}
        </h3>
      </v-flex>
      <v-flex class="project-image" mb-1>
        <v-img :src="project.project_image" height="125" contain alt="reference picture of " />
      </v-flex>
      <v-flex class="project-description" fill-height>
        <p>
          {{ project.project_description }}
        </p>
      </v-flex>
      <v-flex class="project-links">
        <v-layout justify-center>
          <ImageLinkButton v-if="project.project_url !== ''" :href="project.project_url" :img-src="project.project_url_icon" />
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
import ImageLinkButton from '~/components/core/button/ImageLinkButton.vue'
export default {
  components: {
    ImageLinkButton
  },
  props: {
    project: {
      type: Object,
      default: function() {
        return {
          project_title: 'MISSING TITLE',
          project_description: 'MISSING DESCRIPTION'
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.project-item
  background-color: var(--v-primary-base)
  color: var(--v-secondary-base)
.project-title
  font-size: 1.4rem 
.project-description
    margin: 20px 15px
    font-size: 1.2rem 
    @media screen and (min-width: 600px) {
      font-size: 1.3em
    }
</style>
