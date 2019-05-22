<template>
  <v-card class="blog-summary-card">
    <v-layout column>
      <v-flex>
        <v-layout column class="blog-summary-heading" pa-2>
          <v-flex class="blog-summary-category">
            <h4 class="text-xs-right">
              {{ BlogPost.categories[0].name }}
            </h4>
          </v-flex>
          <v-flex class="blog-summary-title">
            <h3>
              {{ BlogPost.title }}
            </h3>
          </v-flex>
          <v-flex class="blog-summary-date">
            <span>{{ formatedPublishedDate }}</span>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex class="blog-summary-image" my-2>
        <v-img v-if=" BlogPost.featured_image" :src=" BlogPost.featured_image" height="125px" contain />
      </v-flex>
      <v-flex>
        <p class="blog-summary-summary">
          {{ BlogPost.summary }}
        </p>
        <ChipContainer :items="BlogPost.tags" heading="Tag:" />
      </v-flex>
      <v-flex class="text-xs-right">
        <v-btn nuxt :to="/blog/+BlogPost.slug" class="blog-summary-button primary--text" color="accent">
          <span>
            READ
          </span>
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

<style lang="stylus" scoped>
.blog-summary-card
  background-color: var(--v-primary-base)
  color: var(--v-secondary-base)
.blog-summary-heading
  background-color: var(--v-secondary-base)
  color: var(--v-primary-base)
.blog-summary-summary
    margin: 20px 15px
    font-size: 1.1em 
    @media screen and (min-width: 600px) {
      font-size: 1.2em
    }
</style>
