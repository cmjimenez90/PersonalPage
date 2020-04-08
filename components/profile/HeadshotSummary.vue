<template>
  <v-layout class="summary-card">
    <v-flex ma-3>
      <p>A developer with a strong desire to take on any challenge. Carlos is currently employed as a Applications and Systems Developer for Rowan College South Jersey while also pursuing a degree in Computer Science. In the meantime, he continues to learn new technologies while creating different tools on the side; whether it is to solve a problem at work or just for fun!</p>
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
