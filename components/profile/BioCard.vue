<template>
  <v-card>
    <v-layout wrap>
      <v-flex
        xs12
        sm5
        md4
        class="text-xs-center pt-3 primary lighten-1 white--text"
        align-center
        justify-center
      >
        <v-avatar class="pt-3" :size="avatarHeight">
          <v-img src="/self_prof_bw.jpg" />
        </v-avatar>
        <v-card-text>
          <p class="title">
            {{ name }}
          </p>
          <p class="body-2">
            {{ caption }}
          </p>
        </v-card-text>
      </v-flex>
      <v-flex xs12 sm6 md8>
        <v-container fill-height>
          <v-expansion-panel v-if="$vuetify.breakpoint.xs" v-model="descriptionPanel" popout class="secondary lighten-4">
            <v-expansion-panel-content>
              <div slot="header" class="text-xs-center font-weight-bold subheading text-truncate">
                <span v-if="descriptionPanel !== 0">
                  {{ description }}
                </span>
                <span v-else />
              </div>
              <p class="subheading">
                {{ description }}
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <p v-if="$vuetify.breakpoint.smAndUp" class="subheading">
            {{ description }}
          </p>
        </v-container>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    caption: {
      type: String,
      default: 'Caption Here'
    },
    name: {
      type: String,
      default: 'Name Here'
    },
    description: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel egestas leo, varius posuere arcu. Proin feugiat purus leo, suscipit iaculis sem cursus nec. Vivamus egestas leo nisl, sed sodales libero commodo eu. Duis congue sollicitudin elementum. Sed nisl orci, euismod et quam viverra, viverra finibus ex. Nulla vitae neque a dolor pharetra malesuada ac eget nulla. Quisque et neque sit amet lacus aliquam sodales vestibulum ut nisi. Etiam enim risus, vulputate eu congue eget, aliquam eu felis. Donec pellentesque vel mauris vitae rhoncus. Sed vestibulum leo a urna convallis imperdiet. Aenean rutrum magna eget magna vestibulum, ut pellentesque ex congue.'
    }
  },
  data: function() {
    return {
      descriptionPanel: [false]
    }
  },
  computed: {
    avatarHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '100'
        case 'sm':
          return '120'
        default:
          return '180'
      }
    }
  }
}
</script>
