import { mapMutations, mapGetters } from 'vuex'

export const blogFilter = {
  computed: {
    ...mapGetters({
      blogCategories: 'blog/blogCategories',
      blogTags: 'blog/blogTags'
    }),
    selectedBlogTags: {
      get: function() {
        return this.$store.getters['blog/selectedBlogTags']
      },
      set: function(value) {
        this.setSelectedTags(value)
      }
    },
    selectedBlogCategories: {
      get: function() {
        return this.$store.getters['blog/selectedBlogCategories']
      },
      set: function(value) {
        this.setSelectedCategories(value)
      }
    }
  },
  methods: {
    ...mapMutations({
      setSelectedTags: 'blog/setSelectedTags',
      setSelectedCategories: 'blog/setSelectedCategories',
      clearFilter: 'blog/clearFilter'
    })
  }
}
