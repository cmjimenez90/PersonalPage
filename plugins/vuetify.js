import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#FAF4E0',
    accent: colors.orange.darken3,
    secondary: colors.brown,
    info: colors.teal.lighten1,
    warning: colors.deepOrange.accent3,
    error: colors.red.accent4,
    success: colors.green
  },
  options: {
    customProperties: true
  }
})
