<template>
  <div class="list-container">
    <v-toolbar class="container-heading">
      <v-toolbar-title>
        <h3>Blog</h3>
      </v-toolbar-title>
      <v-spacer />
      <BlogListSortButton @new-sort-by="currentSort = $event" />
    </v-toolbar>
    <ul>
      <BlogPostListItem v-for="(post,index) in sortedBlogPost" :key="index" :post="post" />
    </ul>
  </div>
</template>

<script>
import BlogPostListItem from '~/components/blog/BlogPostListItem.vue'
import BlogListSortButton from '~/components/blog/BlogListSortButton.vue'
export default {
  components: {
    BlogPostListItem,
    BlogListSortButton
  },
  props: {
    blogPosts: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: function() {
    return {
      currentSort: 'recent'
    }
  },
  computed: {
    sortedBlogPost: function() {
      let sortedPost = this.blogPosts.slice()
      switch (this.currentSort) {
        case 'recent':
          sortedPost = sortedPost
            .slice()
            .sort((current, next) => this.sortByMostRecent(current, next))
          break
        case 'title':
          sortedPost = sortedPost
            .slice()
            .sort((current, next) => this.sortByTitle(current, next))
          break
        case 'category':
          sortedPost = sortedPost
            .slice()
            .sort((current, next) => this.sortByCategory(current, next))
          break
      }
      return sortedPost
    }
  },
  methods: {
    sortByMostRecent(currentPost, nextPost) {
      const currentPublishDate = new Date(currentPost.published)
      const nextPublishDate = new Date(nextPost.published)
      if (currentPublishDate > nextPublishDate) {
        return -1
      }
      if (currentPublishDate < nextPublishDate) {
        return 1
      }
      return 0
    },
    sortByTitle(currentPost, nextPost) {
      function removeArticlesFromTitle(blogTitle) {
        const articles = ['the', 'a', 'an']
        const splitTitle = blogTitle.split(' ')
        if (articles.includes(splitTitle[0])) {
          return splitTitle.splice(1).join(' ')
        }
        return blogTitle
      }
      const currentPostTitle = removeArticlesFromTitle(currentPost.title)
      const nextPostTitle = removeArticlesFromTitle(nextPost.title)
      if (currentPostTitle > nextPostTitle) {
        return 1
      }
      if (currentPostTitle < nextPostTitle) {
        return -1
      }
      return 0
    },
    sortByCategory(currentPost, nextPost) {
      const currentPostCategory = currentPost.categories[0]
      const nextPostCategory = nextPost.categories[0]

      if (currentPostCategory.name > nextPostCategory.name) {
        return 1
      }
      if (currentPostCategory.name < nextPostCategory.name) {
        return -1
      }
      return 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-container 
  width: 100%
  height: 100%
  background-color: var(--v-primary-darken2)
  ul
    list-style: none
    margin: 0
    padding: 0
  li
    margin-bottom: .4rem
.container-heading
  background-color: var(--v-secondary-base)
  margin-bottom: 1rem
  color: var(--v-primary-base)
  h3, span
    text-transform: uppercase
    font-size: 2rem  
</style>
