<template>
  <v-layout>
    <div id="window_1" />
    <div id="window_divider" draggable />
    <div id="window_2" />
  </v-layout>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
#window_1, #window_2
    border: 1px red dotted
#window_1
    width: 20%
#window_2
    flex: 1 1 auto
#window_divider
    align-self: center
    height: 20%
    width: 5px
    background-color: black
    cursor: pointer
</style>
