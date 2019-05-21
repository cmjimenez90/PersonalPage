<template>
  <v-container fluid class="project-item">
    <v-layout column>
      <v-flex>
        <h3 class="project-title">
          {{ project.project_title }}
        </h3>
      </v-flex>
      <v-flex>
        <v-img :src="project.project_image" height="125" contain alt="reference picture of " />
      </v-flex>
      <v-flex>
        <p class="project-description">
          {{ project.project_description }}
        </p>
      </v-flex>
      <v-flex class="text-xs-center project-links" py-2>
        <ImageLinkButton
          v-if="project.project_vc_url !== ''"
          :href="project.project_vc_url"
          :img-src="project.project_vc_icon"
        />
        <ImageLinkButton 
          v-if="project.project_url !== ''"
          :href="project.project_url" 
          :img-src="project.project_url_icon"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import ImageLinkButton from '~/components/core/ImageLinkButton.vue'
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
    background-color : var(--v-primary-darken2)
    color: var(--v-secondary-lighten4)
</style>
