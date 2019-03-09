<template>
  <v-card height="100%">
    <v-layout column fill-height>
      <v-flex class="primary white--text">
        <v-chip small class="white--text" outline>
          {{ BlogPost.categories[0].name }}
        </v-chip>
        <h3>{{ BlogPost.title }}</h3>
        <p>{{ BlogPost.published }}</p>
      </v-flex>
      <v-flex>
        <v-img v-if=" BlogPost.featured_image" :src=" BlogPost.featured_image" height="100" :aspect-ratio="4/3" contain />
      </v-flex>
      <v-flex fill-height>
        <p>{{ BlogPost.summary }}</p>
      </v-flex>
      <v-flex><ChipContainer :items="BlogPost.tags" heading="Tags:" /></v-flex>
      <v-flex class="secondary lighten-4">
        <v-btn nuxt :to="/blog/+BlogPost.slug" flat>
          READ
        </v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import ChipContainer from '~/components/blog/ChipContainer.vue'
export default {
  components: {
    ChipContainer
  },
  props: {
    blogPost: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data: function() {
    return {
      BlogPost: this.blogPost
    }
  }
}
</script>

<style>
</style>
