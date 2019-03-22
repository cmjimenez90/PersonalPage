<template>
  <v-card width="100%">
    <v-layout column>
      <v-flex class="primary white--text">
        <v-chip small class="secondary lighten-4 caption">
          {{ BlogPost.categories[0].name }}
        </v-chip>
        <h3>{{ BlogPost.title }}</h3>
        <p>{{ formatedPublishedDate }}</p>
      </v-flex>
      <v-flex>
        <v-img v-if=" BlogPost.featured_image" :src=" BlogPost.featured_image" height="100" :aspect-ratio="4/3" contain />
      </v-flex>
      <v-flex>
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
