<template>
  <section>
    <v-card width="100%">
      <v-card-title class=" primary white--text">
        <v-layout column>
          <div class="text-xs-right font-italic text-uppercase">
            {{ BlogPost.categories[0].name }}
          </div>
          <h3>{{ BlogPost.title }}</h3>
          <div class="blog-date">
            {{ formatedPublishedDate }}
          </div>
        </v-layout>
      </v-card-title>
      <v-card-text class="body-1">
        <v-responsive>
          <v-img v-if=" BlogPost.featured_image" :src=" BlogPost.featured_image" height="125px" contain />
        </v-responsive>
        <p class="pt-5">
          {{ BlogPost.summary }}
        </p>
        <ChipContainer :items="BlogPost.tags" heading="Tag:" />
      </v-card-text>
      <v-card-actions class="secondary lighten-4">
        <v-btn nuxt :to="/blog/+BlogPost.slug" flat>
          <span class="font-weight-bold">
            READ
          </span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </section>
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

<style lang="stylus" scoped>
.blog-date
  padding-left 10px
</style>
