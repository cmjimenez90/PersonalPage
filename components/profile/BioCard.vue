<template>
  <v-card>
    <v-layout wrap>
      <v-flex
        xs12
        sm5
        md4
        class="text-xs-center pt-3 primary darken-2 white--text"
        align-center
        justify-center
      >
        <v-avatar class="pt-3" :size="avatarHeight">
          <v-img src="/self_prof_bw.jpg" alt="Headshot of Carlos Jimenez" />
        </v-avatar>
        <v-card-text>
          <p class="title">
            {{ name }}
          </p>
          <p class="body-2">
            {{ caption }}
          </p>
        </v-card-text>
        <v-card-actions class="justify-space-around secondary lighten-4">
          <v-btn fab flat href="https://github.com/cmjimenez90">
            <v-avatar tile>
              <v-img src="/github_32.png" contain alt="link to github" />
            </v-avatar>
          </v-btn>
          <v-btn fab flat href="https://twitter.com/CodeDebugolo">
            <v-avatar tile>
              <v-img src="/Twitter_Social_Icon_Rounded_Square_Color.png" contain alt="link to twitter" />
            </v-avatar>
          </v-btn>
          <v-btn fab flat href="https://www.linkedin.com/in/carlos-jimenez-82094182" alt="link to LinkedIn">
            <v-avatar tile>
              <v-img src="/In-2C-34px-TM.png" contain />
            </v-avatar>
          </v-btn>
        </v-card-actions>
      </v-flex>
      <v-flex xs12 sm6 md8>
        <v-container fill-height>
          <v-expansion-panel v-show="$vuetify.breakpoint.xs" v-model="descriptionPanel" popout class="secondary lighten-4">
            <v-expansion-panel-content>
              <div slot="header" class="text-xs-center subheading text-truncate ">
                <span v-if="descriptionPanel !== 0">
                  {{ description }}
                </span>
                <span v-else />
              </div>
              <p class="subheading text-xs-left px-3">
                {{ description }}
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <p v-show="$vuetify.breakpoint.smAndUp" class="subheading">
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
