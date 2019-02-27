import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.brown,
    accent: colors.blueGrey.lighten5,
    secondary: colors.blueGrey,
    info: colors.teal.lighten1,
    warning: colors.deepOrange.accent3,
    error: colors.red.accent4,
    success: colors.green
  }
})
