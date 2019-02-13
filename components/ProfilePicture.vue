<template>
  <v-card max-width='450'>
      <v-layout justify-center>
        <v-card-title>
        <v-avatar size='125'>
          <v-img v-bind:src=profilePicturePath alt='self portrait'/>
        </v-avatar>
       </v-card-title>
      </v-layout>
      <v-card-text>
        <p class="text-xs-center">{{profileName}}</p>
      </v-card-text>
 </v-card>
</template>

<script>
export default {
  props: {
    profilePicturePath: String,
    profileName: String
  }
}
</script>
