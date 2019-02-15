<template>
  <v-container fluid>
    <v-layout row wrap justify-center>
      <Bio />  
    </v-layout>
  </v-container>
</template>

<script>
import Bio from '~/components/profile/Bio.vue'
export default {
  components: {
    Bio
  }
}
</script>
