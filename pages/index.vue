<template>
  <v-container fluid>
    <v-layout row wrap justify-center>
      <BioCard />  
    </v-layout>
  </v-container>
</template>

<script>
import BioCard from '~/components/profile/BioCard.vue'
export default {
  components: {
    BioCard
  }
}
</script>
