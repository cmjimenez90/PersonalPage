<template>
  <v-card width="100%">
    <v-card-title class=" primary white--text">
      <v-layout column>
        <h3>{{ BlogPost.title }}</h3>
        <p>{{ formatedPublishedDate }}</p>
        <v-flex class="text-xs-right">
          <v-chip small class="secondary lighten-4 " selected>
            {{ BlogPost.categories[0].name }}
          </v-chip>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text>
      <v-img v-if=" BlogPost.featured_image" :src=" BlogPost.featured_image" height="100" :aspect-ratio="4/3" contain />
      <p>{{ BlogPost.summary }}</p>
      <ChipContainer :items="BlogPost.tags" heading="Tags:" />
    </v-card-text>
    <v-card-actions class="secondary lighten-4">
      <v-btn nuxt :to="/blog/+BlogPost.slug" flat>
        READ
      </v-btn>
    </v-card-actions>
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
  },
  computed: {
    formatedPublishedDate: function() {
      const unformattedDate = new Date(this.BlogPost.published)
      return unformattedDate.toDateString()
    }
  }
}
</script>

<style>
</style>
