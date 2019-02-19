<template>
  <v-footer class="mt-2" height="auto">
    <v-layout
      wrap
      class="text-xs-center"
      justify-space-around
      align-center
    >
      <v-flex
        xs12
        md6
        class="text-md-right text-xs-center"
      >
        <div class="display-1 font-weight-bold">
          Made With
        </div>
      </v-flex>
      <v-flex
        v-for="tool in tools"
        :key="tool.logo"
        xs12
        sm6
        md2
      >
        <v-btn
          :href="tool.link"
          block
          flat   
        >
          <v-avatar>
            <v-img
              :src="tool.logo"
              max-height="35"
              contain
            />
            <span
              class="align-left font-weight-black"
            >
              {{ tool.name }}
            </span>
          </v-avatar>
        </v-btn>
      </v-flex>
      <v-flex
        xs12
        sm6
        md2
      >
        <v-btn
          :href="butterCMSreference.link"
          block
          flat   
        >
          <v-img
            :src="butterCMSreference.logo"
            max-height="35"
            contain
          />
        </v-btn>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: function() {
    return {
      tools: [
        {
          link: 'https://vuetifyjs.com/en/',
          logo: '/v.png',
          name: 'Vuetify'
        },
        {
          link: 'https://vuejs.org/',
          logo: '/Vue.png',
          name: 'Vue'
        }
      ],
      butterCMSreference: {
        link: 'https://buttercms.com/',
        logo: 'https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH'
      }
    }
  }
}
</script>
