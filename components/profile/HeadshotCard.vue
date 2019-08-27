<template>
  <v-card>
    <v-layout column>
      <v-flex id="headshot-image" class="text-xs-center" py-3>
        <v-avatar size="160">
          <v-img src="/self_prof_bw.png" alt="Headshot of Carlos Jimenez" />
        </v-avatar>
      </v-flex>
      <v-flex id="headshot-body" class="text-xs-center" py-2>
        <h1 class="display-1">
          Carlos M. Jimenez
        </h1>
        <h2 class="subheading">
          Developer and Technical Support Technician
        </h2>
      </v-flex>
      <v-flex>
        <HeadshotSummary />
      </v-flex>
      <v-flex id="headshot-buttonbar">
        <HeadshotButtonBar :image-links="imageLinks" />
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import HeadshotButtonBar from '~/components/profile/HeadshotButtonBar.vue'
import HeadshotSummary from '~/components/profile/HeadshotSummary.vue'
export default {
  components: {
    HeadshotButtonBar,
    HeadshotSummary
  },
  data: function() {
    return {
      imageLinks: [
        {
          href: 'https://github.com/cmjimenez90',
          imgSrc: '/github_32.png',
          imgSrcAlternate: 'link to github'
        },
        {
          href: 'https://twitter.com/CodeDebugolo',
          imgSrc: '/Twitter_Social_Icon_Rounded_Square_Color.png',
          imgSrcAlternate: 'link to twitter'
        },
        {
          href: 'https://www.linkedin.com/in/carlos-jimenez-82094182',
          imgSrc: '/In-2C-34px-TM.png',
          imgSrcAlternate: 'link to LinkedIn'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
#headshot-image
    background-color: var(--v-secondary-base)
#headshot-body
    background-color: var(--v-secondary-base)
    color: var(--v-primary-base)
  h1
    font-weight: 500
#headshot-buttonbar
    background-color: var(--v-primary-base)
</style>
