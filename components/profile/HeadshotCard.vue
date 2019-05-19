<template>
  <v-card>
    <v-layout wrap>
      <v-flex id="headshot-image" xs12 class="text-xs-center" py-3>
        <v-avatar size="160">
          <v-img src="/self_prof_bw.jpg" alt="Headshot of Carlos Jimenez" />
        </v-avatar>
      </v-flex>
      <v-flex id="headshot-body" xs12 class="text-xs-center" py-2>
        <h1 class="display-1">
          Carlos M. Jimenez
        </h1>
        <h2 class="subheading">
          Developer, Technical Support Technician, Problem Solver
        </h2>
      </v-flex>
      <v-flex id="headshot-buttonbar">
        <HeadshotButtonBar :image-links="imageLinks" />
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import HeadshotButtonBar from '~/components/profile/HeadshotButtonBar.vue'
export default {
  components: {
    HeadshotButtonBar
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
    background-color: var(--v-primary-darken2)
#headshot-body
    color: var(--v-secondary-base)
#headshot-buttonbar
    background-color: var(--v-secondary-lighten4)
</style>
