<template>
  <v-layout class="summary-card">
    <v-flex ma-3>
      <p>A developer with a strong desire to take on any challenge. Carlos is currently employed as a Technical Support Technician for Rowan College at Gloucester County while also pursuing a degree in Computer Science. In the meantime, he continues to push himself by learning new technologies and creating different tools on the side; whether it is to solve a problem at work or just for fun!</p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.summary-card
    background-color: var(--v-primary-base)
    color: var(--v-secondary-base)
    font-size: 1.1em

    @media screen and (min-width: 600px) {
      font-size: 1.3em
    }

</style>
