<template>
  <v-footer fixed>
    <v-layout row wrap align-center justify-end>
      <v-flex>
        <div class="title">Developed Using: </div>
      </v-flex>
      <v-flex>
        <v-btn block flat :href=vueifityLink >
          <v-avatar size="25">
            <v-img contain src='/v.png'/>
          </v-avatar>
          <span>Vuetify</span>
        </v-btn>
      </v-flex>
      <v-flex>
        <v-btn block flat :href=vueLink >
          <v-avatar size="25">
            <v-img contain src='/vue.png'/>
          </v-avatar>
          <span>Vue</span>
        </v-btn>
      </v-flex>
      <v-flex>
        <v-btn block flat :href=butterCMSLink>
          <v-avatar size="130">
            <v-img :src=butterCMSLogo contain/>
          </v-avatar>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: function() {
    return {
      vueifityLink: 'https://vuetifyjs.com/en/',
      vueLink: 'https://vuejs.org/',
      butterCMSLogo: 'https://cdn.buttercms.com/JSSDbrHPSnGlLUcyHTn5',
      butterCMSLink: 'https://buttercms.com/'
    }
  }
}
</script>
